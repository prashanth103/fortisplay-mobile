const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");
project.addSourceFilesAtPaths("src/**/*.ts");

const files = project.getSourceFiles();
let count = 0;

for (const file of files) {
  let modified = false;
  
  // Find "const createStyles = (COLORS: any) => ..."
  const vds = file.getVariableDeclarations();
  const createStylesDecl = vds.find(vd => vd.getName() === 'createStyles');
  
  if (createStylesDecl) {
    // Let's rename it to something else temporarily, say __createStyles
    createStylesDecl.rename('__createStyles');
    
    // Now all references are __createStyles.
    // Wait, the injected line is: `const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);`
    // It would have been renamed to __createStyles(COLORS).
    // We want to rename ALL references of __createStyles EXCEPT the one in useMemo and the declaration to `styles`.
    
    // Wait, if I rename __createStyles back to `styles`, it renames everything to `styles` again! Including the declaration!
    // I shouldn't use .rename().
    
    // The easiest fix: Use regex to replace `createStyles.` with `styles.` in the file text.
    let text = file.getFullText();
    if (text.includes('createStyles.')) {
        text = text.replace(/createStyles\./g, 'styles.');
        file.replaceWithText(text);
        file.saveSync();
        count++;
        console.log(`Fixed references in ${file.getFilePath()}`);
        continue;
    }
  }
}
console.log(`Total files fixed: ${count}`);
