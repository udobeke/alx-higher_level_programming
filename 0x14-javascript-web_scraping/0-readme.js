#!/usr/bin/node
/* script to read files */

const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
  console.error(err);
  } else {
    return;
    console.log(data);
});
