import fs from 'fs';
import path from 'path';

// Get the argument passed from the command line
const argument = process.argv[2];

if (!argument) {
  console.error("Please provide an argument.");
  process.exit(1);
}

// Define the content of the script.js file
const content = `console.log(\`Working 🚀 ${argument}\`);\n`;

// Define the output path
const outputPath = path.join(process.cwd(), './src/script.js');

// Write the content to script.js
fs.writeFile(outputPath, content, (err) => {
  if (err) {
    console.error("Error writing the file:", err);
    process.exit(1);
  }
  console.log(`File created: ${outputPath}`);
});
