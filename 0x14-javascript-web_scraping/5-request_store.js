#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Get URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send GET request to fetch webpage content
request.get(url, (err, response, body) => {
  if (err) {
    // Print error if request encounters an error
    console.error(err);
  } else {
    if (response.statusCode === 200) {
      // Write response body to file
      fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
          // Print error if file writing encounters an error
          console.error(err);
        } else {
          // Print success message
          console.log(`Webpage content has been saved to ${filePath}`);
        }
      });
    } else {
      // Print error message if response has a non-200 status code
      console.error(`Failed to fetch webpage content: ${response.statusCode}`);
    }
  }
});

