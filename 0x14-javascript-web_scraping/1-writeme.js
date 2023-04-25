#!/usr/bin/node

const fs = require('fs');

// Get file path and string to write from command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write string to file in utf-8
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    // Print error object if error occurred during writing
    console.error(err);
  } else {
    console.log(`Successfully wrote to file: ${filePath}`);
  }
});
