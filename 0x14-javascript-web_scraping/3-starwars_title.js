#!/usr/bin/node
// A script that prints the title of a Star Wars movie where 
the episode number matches a given integer. //

const request = require('request');

// Get movie ID from command line argument
const url = process.argv[2];
// Send GET request to SWAPI
request(url, (err, response, body) => {
  if (err) console.error(err);
  const data = JSON.parse(body);
  let count = 0;
  for (let i = 0; i < data.results.length; i++) {
    const chars = data.results[i].characters;
    for (let k = 0; k < chars.length; k++) {
      if (chars[k].includes('18')) {
        count = count + 1;
      }
    }
  }
  console.log(count);
});
