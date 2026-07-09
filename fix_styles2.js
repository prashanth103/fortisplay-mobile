const { Project } = require('ts-morph');
const fs = require('fs');

const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");
project.addSourceFilesAtPaths("src/**/*.ts");

const files = project.getSourceFiles();
let count = 0;

for (const file of files) {
  let text = file.getFullText();
  let modified = false;

  if (text.includes('__styles.')) {
    text = text.replace(/__styles\./g, 'styles.');
    modified = true;
  }
  
  if (text.includes('__createStyles')) {
    text = text.replace(/__createStyles/g, 'createStyles');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file.getFilePath(), text);
    count++;
    console.log(`Fixed formatting in ${file.getFilePath()}`);
  }
}
console.log(`Total files fixed again: ${count}`);
