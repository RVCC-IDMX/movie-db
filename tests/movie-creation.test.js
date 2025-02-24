/**
 * @file movie-creation.test.js
 * @fileoverview Tests for the movie-creation module.
 * This file verifies that createMovieObject() correctly assigns default values and custom options,
 * generates a unique id, and that prettyPrint() returns a formatted string with expected values.
 * @module movie-creation.test
 */

import { describe, it, expect } from 'vitest';
import { createMovieObject, prettyPrint } from '../src/movie-creation.js';

describe('createMovieObject', () => {
  it('should return a movie object with minimal default values when no options are provided', () => {
    const movie = createMovieObject();

    // Check that the movie object is defined.
    expect(movie).toBeDefined();

    // Verify that default values are used: empty strings for text, 0 for numbers, and empty array for cast.
    expect(movie.title).toBe('');
    expect(movie.director).toBe('');
    expect(movie.year).toBe(0);
    expect(movie.genre).toBe('');
    expect(movie.rating).toBe(0);
    expect(Array.isArray(movie.cast)).toBe(true);
    expect(movie.cast.length).toBe(0);

    // Check that a unique id is generated (non-empty string).
    expect(typeof movie.id).toBe('string');
    expect(movie.id).not.toBe('');
  });

  it('should return a movie object with provided custom values', () => {
    const options = {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    };
    const movie = createMovieObject(options);

    // Verify that each property is set correctly.
    expect(movie.title).toBe(options.title);
    expect(movie.director).toBe(options.director);
    expect(movie.year).toBe(options.year);
    expect(movie.genre).toBe(options.genre);
    expect(movie.rating).toBe(options.rating);
    expect(movie.cast).toEqual(options.cast);

    // Verify that a unique id is generated.
    expect(typeof movie.id).toBe('string');
    expect(movie.id).not.toBe('');
  });
});

describe('prettyPrint', () => {
  it('should return a formatted string for a movie object with custom values', () => {
    const options = {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    };
    const movie = createMovieObject(options);
    const output = prettyPrint(movie);

    // Check that the output is a string.
    expect(typeof output).toBe('string');

    // Ensure the output contains the expected property labels and values.
    expect(output).toContain("Title   : Inception");
    expect(output).toContain("Year    : 2010");
    expect(output).toContain("Director: Christopher Nolan");
    expect(output).toContain("Genre   : Sci-Fi");
    expect(output).toContain("Rating  : 8.8");
    expect(output).toContain("Cast    : Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page");
  });

  it('should return fallback values in the formatted string when properties are missing', () => {
    // Create a movie using defaults (which are minimal empty values).
    const movie = createMovieObject();
    const output = prettyPrint(movie);

    // Since defaults are empty ('' or 0), prettyPrint should display "N/A" for text fields and numbers.
    expect(output).toContain("Title   : N/A");
    expect(output).toContain("Year    : N/A");
    expect(output).toContain("Director: N/A");
    expect(output).toContain("Genre   : N/A");
    expect(output).toContain("Rating  : N/A");
    expect(output).toContain("Cast    : N/A");
  });
});
