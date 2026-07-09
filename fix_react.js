const { Project } = require('ts-morph');
const fs = require('fs');

const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");
project.addSourceFilesAtPaths("src/**/*.ts");

const files = project.getSourceFiles();

for (const file of files) {
  const text = file.getFullText();
  if (text.includes('React.useMemo') && !text.includes('import React') && !text.includes('import * as React')) {
    file.addImportDeclaration({
      defaultImport: 'React',
      moduleSpecifier: 'react'
    });
    file.saveSync();
    console.log(`Added React import to ${file.getFilePath()}`);
  }
}
