/**
 * @file movie-manipulation.js
 * @fileoverview Demonstrates movie object property manipulation.
 * Provides functions for updating the movie rating, updating the movie genre (with allowed genres validation),
 * removing the director property, and adding a new cast member.
 * @module movie-manipulation
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 */

// Toggle examples on or off.
const SHOW_EXAMPLES = false;

const allowedGenres = ["Animation", "Family", "Action", "Comedy", "Drama", "Sci-Fi"];

/**
 * Updates the movie rating if the provided input is valid.
 * @param {object} movie - The movie object. Expected to be a non-null object.
 * @param {number} rating - The new rating value. Expected to be a number.
 * @returns {object} - The updated movie object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
 */
export function setMovieRating(movie, rating) {

  // implement code here
  // Use dot notation to update the rating.

}

/**
 * Updates the movie genre only if the new genre is in the allowed list.
 * @param {object} movie - The movie object. Expected to be a non-null object.
 * @param {string} genre - The new genre to set. Expected to be a string.
 * @returns {object} - The updated movie object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
 */
export function addMovieGenre(movie, genre) {

  // implement code here
  // Validate the new genre against the allowedGenres array.

}

/**
 * Removes the director property from the movie object.
 * @param {object} movie - The movie object. Expected to be a non-null object.
 * @returns {object} - The updated movie object without the director property.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 */
export function removeDirectorProperty(movie) {

  // implement code here
  // Use the delete operator to remove the property.

}

/**
 * Adds a new member to the movie's cast array.
 * @param {object} movie - The movie object. Expected to be a non-null object with a cast array.
 * @param {string} newMember - The new cast member to add. Expected to be a string.
 * @returns {object} - The updated movie object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */
export function addCastMember(movie, newMember) {
  // implement code here
}

/**
 * Returns a copy of the allowed genres array.
 * This function provides controlled access to the allowed genres.
 * @returns {Array} - An array of allowed genres.
 */
export function getAllowedGenres() {
  // implement code here
  // Return a copy so external code can't modify the private array.
}

// --------------------
// Example Code Section
// --------------------
if (SHOW_EXAMPLES) {
  let movie = {
    id: 1,
    title: "Toy Story",
    director: "John Lasseter",
    year: 1995,
    genre: "Animation",
    rating: 8.3,
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"]
  };

  console.log("Original Movie Object:", movie);
  // Explanation: Displays the initial state of the movie object.

  movie = setMovieRating(movie, 9.1);
  console.log("After Updating Rating:", movie);
  // Explanation: Shows the updated movie object with the new rating.

  movie = addMovieGenre(movie, "Family");
  console.log("After Adding/Updating Genre:", movie);
  // Explanation: Shows the movie object after updating the genre.

  movie = removeDirectorProperty(movie);
  console.log("After Removing Director Property:", movie);
  // Explanation: Shows the movie object after removing the director property.

  movie = addCastMember(movie, "Joan Cusack");
  console.log("After Adding a New Cast Member:", movie);
  // Explanation: Shows the movie object after adding a new cast member to the cast array.

  console.log("Allowed Genres:", getAllowedGenres());
  // Explanation: Displays the allowed genres list.

  // Example of handling unexpected types:
  let invalidMovie = null;
  setMovieRating(invalidMovie, 8.5); // Should log an error message.
  addMovieGenre({}, 123);            // Should log an error message.
}
