#!/usr/bin/node

// a script that gets the contents of a webpage and stores it in a file

const request = require('request');
const fs = require('fs');
const filePath = process.argv[3];
const url = process.argv[2];

// Send GET request to fetch webpage content
request.get(url, (err, res, body) => {
  if (err) console.error(err);
  fs.writeFile(filePath, body, err => {
  if (err) console.error(err);
  });
});
