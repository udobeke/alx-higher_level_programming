#!/usr/bin/node
/ *a script that prints the title of a Star Wars movie where 
the episode number matches a given integer. */

const request = require('request');

// Get movie ID from command line argument
const movieId = process.argv[2];

// Build URL with movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send GET request to SWAPI
request.get(url, (err, response, body) => {
  if (err) console.error(err);
    if (response.statusCode === 200) {
      // Parse response body as JSON
      const movie = JSON.parse(body);
      // Print movie title
      console.log(movie.title);
});
