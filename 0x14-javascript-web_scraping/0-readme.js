#!/usr/bin/node

const fs = require('fs');

// Get file path from command line argument
const filePath = process.argv[2];

// Read file content in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Print error object if error occurred during reading
    console.error(err);
    return;
  } 
    // Print file content
    console.log(data);
});
