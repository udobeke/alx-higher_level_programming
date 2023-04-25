#!/usr/bin/node

const request = require('request');

// Get API URL from command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Send GET request to SWAPI to fetch movies
request.get(apiUrl, (err, response, body) => {
  if (err) {
    // Print error if request encounters an error
    console.error(err);
  } else {
    if (response.statusCode === 200) {
      // Parse response body as JSON
      const movies = JSON.parse(body).results;
      // Filter movies that contain Wedge Antilles
      const moviesWithWedge = movies.filter(movie =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );
      // Print number of movies with Wedge Antilles
      console.log(`Number of movies with Wedge Antilles: ${moviesWithWedge.length}`);
  }
});
