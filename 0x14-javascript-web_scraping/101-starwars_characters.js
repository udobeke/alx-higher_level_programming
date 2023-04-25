#!/usr/bin/node
//a script that prints all characters of a Star Wars movie


const request = require('request');
if (process.argv.length < 3) {
  console.error('Error: Movie ID not provided');
  console.log('Usage: node script.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2]; // Get movie ID from command line argument
const apiUrl = `https://swapi.dev/api/films/${movieId}`; // API URL for movie details

request.get(apiUrl, (err, response, body) => {
  if (err) {
    // Print error if request encounters an error
    console.error(err);
  } else {
    if (response.statusCode === 200) {
      const movie = JSON.parse(body); // Parse response body as JSON

      
      console.log('Characters:');
      const characterPromises = movie.characters.map(characterUrl => {
        return new Promise((resolve, reject) => {
          request.get(characterUrl, (err, response, body) => {
            if (err) {
              reject(err);
            } else {
              if (response.statusCode === 200) {
                const character = JSON.parse(body); // Parse response body as JSON
                resolve(character.name); // Resolve Promise with character name
              } else {
                reject(`Failed to fetch character details for URL ${characterUrl}: ${response.statusCode}`);
              }
            }
          });
        });
      });

      Promise.all(characterPromises)
        .then(characterNames => {
          characterNames.forEach(characterName => {
            console.log(characterName); // Print character name
          });
        })
        .catch(err => {
          // Print error message if any Promise rejects
          console.error(err);
        });

    } else {
      // Print error message if response has a non-200 status code
      console.error(`Failed to fetch movie details: ${response.statusCode}`);
    }
  }
});
