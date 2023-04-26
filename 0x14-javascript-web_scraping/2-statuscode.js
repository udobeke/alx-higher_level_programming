#!/usr/bin/node
/* A script that display the status code of a GET request */

const request = require('request');

// Get URL from command line argument
const url = process.argv[2];

// Send GET request to the URL
request(url, (err, res, body) => {
  if (err) {
    // Print error if request encounters an error
    console.log(err);
  } else {
    // Print status code
    console.log(`code: ${res.statusCode}`);
  }
});
