const fs = require('fs');

const files = [
  'src/app/(tabs)/sales.tsx',
  'src/app/(tabs)/wallet.tsx',
  'src/app/(tabs)/watch.tsx'
];

for (const f of files) {
  let text = fs.readFileSync(f, 'utf-8');
  
  // Find "    const COLORS = useThemeColors();\n      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);"
  // and remove it, then insert it right after the component declaration block.
  
  const colorsDecl = text.match(/(\s*const COLORS = useThemeColors\(\);\s*const styles = React\.useMemo\(\(\) => createStyles\(COLORS\), \[COLORS\]\);)/);
  
  if (colorsDecl) {
     text = text.replace(colorsDecl[0], '');
     
     const compMatch = text.match(/export default function\s+\w+\s*\([^)]*\)\s*\{/);
     if (compMatch) {
       text = text.replace(compMatch[0], compMatch[0] + colorsDecl[0]);
       fs.writeFileSync(f, text);
       console.log('Fixed order in ' + f);
     }
  }
}
