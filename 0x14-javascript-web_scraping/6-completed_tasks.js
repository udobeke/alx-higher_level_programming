#!/usr/bin/node

const request = require('request');

// API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Send GET request to fetch todos data
request.get(apiUrl, (err, response, body) => {
  if (err) {
    // Print error if request encounters an error
    console.error(err);
  } else {
    if (response.statusCode === 200) {
      const todos = JSON.parse(body); // Parse response body as JSON
      const completedTasks = {}; // Object to store completed tasks count by user ID

      // Loop through todos and count completed tasks by user ID
      todos.forEach(todo => {
        if (todo.completed) {
          if (!completedTasks[todo.userId]) {
            completedTasks[todo.userId] = 1;
          } else {
            completedTasks[todo.userId]++;
          }
        }
      });

      // Print completed tasks count by user ID
      console.log('Completed tasks by user ID:');
      for (const userId in completedTasks) {
        console.log(`User ID: ${userId}, Completed tasks: ${completedTasks[userId]}`);
      }
    } else {
      // Print error message if response has a non-200 status code
      console.error(`Failed to fetch todos data: ${response.statusCode}`);
    }
  }
});

