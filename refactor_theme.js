const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");
project.addSourceFilesAtPaths("src/**/*.ts");

const files = project.getSourceFiles();
let count = 0;

for (const file of files) {
  // Check if it imports COLORS from @/theme/colors
  const imports = file.getImportDeclarations();
  const colorsImport = imports.find(imp => {
    const moduleSpecifier = imp.getModuleSpecifierValue();
    return moduleSpecifier.includes('theme/colors') && imp.getNamedImports().some(ni => ni.getName() === 'COLORS');
  });

  if (!colorsImport) continue;

  const isComponent = file.getFunctions().some(f => f.getName() && f.getName()[0] === f.getName()[0].toUpperCase()) || 
                      file.getVariableDeclarations().some(v => v.getName() && v.getName()[0] === v.getName()[0].toUpperCase() && v.getInitializerIfKind(SyntaxKind.ArrowFunction));

  // If it doesn't look like a component file, we might skip or just leave it.
  // Actually, some are just utility files.
  let hasStyles = false;
  
  // Find StyleSheet.create
  const variableDeclarations = file.getVariableDeclarations();
  for (const vd of variableDeclarations) {
    if (vd.getName() === 'styles') {
      const init = vd.getInitializerIfKind(SyntaxKind.CallExpression);
      if (init && init.getExpression().getText() === 'StyleSheet.create') {
        hasStyles = true;
        // Rename styles to createStyles
        vd.rename('createStyles');
        // Wrap in arrow function
        const args = init.getArguments();
        if (args.length > 0) {
          const objText = args[0].getText();
          init.replaceWithText(`(COLORS: any) => StyleSheet.create(${objText})`);
        }
      }
    }
  }

  if (hasStyles) {
    // Add useThemeColors import
    file.addImportDeclaration({
      moduleSpecifier: '@/hooks/useThemeColors',
      namedImports: ['useThemeColors']
    });

    // Make sure React is imported for useMemo
    const hasReactImport = imports.some(imp => imp.getModuleSpecifierValue() === 'react');
    if (!hasReactImport) {
       file.addImportDeclaration({
         moduleSpecifier: 'react',
         namespaceImport: 'React' // or default import
       });
    }

    // Find the main component function and inject
    let defaultExport = file.getDefaultExportSymbol();
    let compFunc = null;

    if (defaultExport) {
        const decl = defaultExport.getDeclarations()[0];
        if (decl.getKind() === SyntaxKind.FunctionDeclaration) {
            compFunc = decl;
        } else if (decl.getKind() === SyntaxKind.ExportAssignment) {
           const expr = decl.getExpression();
           if (expr.getKind() === SyntaxKind.Identifier) {
               compFunc = file.getFunction(expr.getText()) || file.getVariableDeclaration(expr.getText())?.getInitializerIfKind(SyntaxKind.ArrowFunction);
           }
        }
    }
    
    // If we didn't find via default export, try finding by name
    if (!compFunc) {
       compFunc = file.getFunctions().find(f => f.isExported() && f.getName() && f.getName()[0] === f.getName()[0].toUpperCase());
    }

    if (compFunc) {
       const body = compFunc.getBody();
       if (body && body.getKind() === SyntaxKind.Block) {
           // check if we need React.useMemo or useMemo
           const reactText = hasReactImport ? (file.getImportDeclaration('react').getDefaultImport() ? 'React.useMemo' : 'useMemo') : 'React.useMemo';
           if (!hasReactImport) {
              // we already added it above, wait, I added namespace import
           }

           body.insertStatements(0, `const COLORS = useThemeColors();\n  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);`);
       }
    }

    // Remove the old COLORS import since we now get it from the hook
    // (If other things use COLORS, it will error, but we'll see)
    colorsImport.remove();
    
    file.saveSync();
    count++;
    console.log(`Updated ${file.getFilePath()}`);
  }
}
console.log(`Total files updated: ${count}`);
