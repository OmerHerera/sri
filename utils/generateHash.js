import fs from 'fs/promises';  // Use promises for easier async/await handling
import crypto from 'crypto';
import process from 'process';

// Get the filename from command line arguments
const filename = process.argv[2];

if (!filename) {
  console.error("Usage: node generateHash.mjs FILENAME.js");
  process.exit(1);
}

// Function to read the file and generate the hash
async function generateHash() {
  try {
    // Read the file content
    const data = await fs.readFile(filename);

    // Create a SHA384 hash and generate the base64 encoded string
    const hash = crypto.createHash('sha384');
    hash.update(data);
    const base64Hash = hash.digest('base64');

    console.log(`sha384-${base64Hash}`);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }
}

// Run the hash generation
generateHash();
