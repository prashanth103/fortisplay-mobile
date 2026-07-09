const fs = require('fs');

const files = [
  'src/app/(tabs)/sales.tsx',
  'src/app/(tabs)/wallet.tsx',
  'src/app/(tabs)/watch.tsx'
];

for (const f of files) {
  let text = fs.readFileSync(f, 'utf-8');
  
  // For each `const someVar: Array<...>` or `const someVar = [` that contains COLORS, we can change to `const getSomeVar = (COLORS: any) => [`
  
  // It's easier to just inject `import { COLORS } from '@/theme/colors';` at the top, BUT wait.
  // We want it to be dynamic! If we import COLORS from @/theme/colors, it will be evaluated once. Since the goal is dynamic theming, it's better to wrap in a function.
  // But wait, if they are outside the component, they won't update when COLORS changes unless they are inside the component.
  // We can just move them inside the component!
  
  // The component is always `export default function ...() {`
  const compMatch = text.match(/export default function\s+\w+\s*\([^)]*\)\s*\{/);
  if (compMatch) {
     const compIndex = compMatch.index;
     const compStr = compMatch[0];
     
     // Find the start of the data declarations. It's usually after imports.
     // In `wallet.tsx`, it's lines 10 to 170.
     // Let's just find `type MaterialIconName` or first `const ` after imports and move everything up to `export default function` INSIDE the function.
     
     // We can just find the end of imports: last `import ` line.
     const importMatches = [...text.matchAll(/^import .*$/gm)];
     const lastImport = importMatches[importMatches.length - 1];
     const endOfImports = lastImport.index + lastImport[0].length;
     
     const dataSection = text.slice(endOfImports, compIndex).trim();
     
     if (dataSection.length > 0) {
        text = text.slice(0, endOfImports) + '\n\n' + text.slice(compIndex).replace(compStr, compStr + '\n' + dataSection + '\n');
        fs.writeFileSync(f, text);
        console.log('Fixed ' + f);
     }
  }
}
