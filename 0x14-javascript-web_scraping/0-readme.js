#!/usr/bin/node
/* script to read files */

const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) console.error(err);
    return;
    // Print file content
    console.log(data);
});
