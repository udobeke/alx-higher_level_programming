#!/usr/bin/node

const request = require('request');

// Check if movie ID is provided as command line argument
if (process.argv.length < 3) {
  console.error('Error: Movie ID not provided');
  console.log('Usage: node script.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2]; // Get movie ID from command line argument
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`; // API URL for movie details

// Send GET request to fetch movie details
request.get(apiUrl, (err, response, body) => {
  if (err) {
    // Print error if request encounters an error
    console.error(err);
  } else {
    if (response.statusCode === 200) {
      const movie = JSON.parse(body); // Parse response body as JSON

      // Print movie title
      console.log(`Movie Title: ${movie.title}`);

      // Print character names
      console.log('Characters:');
      movie.characters.forEach(characterUrl => {
        // Send GET request to fetch character details
        request.get(characterUrl, (err, response, body) => {
          if (err) {
            // Print error if request encounters an error
            console.error(err);
          } else {
            if (response.statusCode === 200) {
              const character = JSON.parse(body); // Parse response body as JSON
              console.log(character.name); // Print character name
            } else {
              // Print error message if response has a non-200 status code
              console.error(`Failed to fetch character details: ${response.statusCode}`);
            }
          }
        });
      });
    } else {
      // Print error message if response has a non-200 status code
      console.error(`Failed to fetch movie details: ${response.statusCode}`);
    }
  }
});
