/**
 * @file movie-manipulation.test.js
 * @fileoverview Tests for the movie-manipulation module.
 * These tests verify that movie object properties are correctly manipulated,
 * including genre validation, adding cast members, and handling invalid inputs.
 * @module movie-manipulation.test
 */

import { describe, it, expect } from 'vitest';
import { setMovieRating, addMovieGenre, removeDirectorProperty, addCastMember, getAllowedGenres } from '../src/movie-manipulation.js';

describe('setMovieRating', function () {
  it('should update the movie rating when provided valid input', function () {
    const movie = { rating: 8.3 };
    const updated = setMovieRating(movie, 9.0);
    expect(updated.rating).toBe(9.0);
  });

  it('should not update rating if invalid input is provided', function () {
    const movie = { rating: 8.3 };
    const updated = setMovieRating(movie, "9.0");
    expect(updated.rating).toBe(8.3);
  });

  it('should handle null movie input', function () {
    const updated = setMovieRating(null, 9.0);
    expect(updated).toBeNull();
  });
});

describe('addMovieGenre', function () {
  it('should update the genre if allowed', function () {
    const movie = { genre: "Animation" };
    const updated = addMovieGenre(movie, "Family");
    expect(updated.genre).toBe("Family");
  });

  it('should not update the genre if it is not in allowed genres', function () {
    const movie = { genre: "Animation" };
    const updated = addMovieGenre(movie, "Horror");
    expect(updated.genre).toBe("Animation");
  });

  it('should handle invalid movie object', function () {
    const updated = addMovieGenre(null, "Family");
    expect(updated).toBeNull();
  });
});

describe('removeDirectorProperty', function () {
  it('should remove the director property if it exists', function () {
    const movie = { director: "John Lasseter" };
    const updated = removeDirectorProperty(movie);
    expect(updated).not.toHaveProperty("director");
  });

  it('should do nothing if director property does not exist', function () {
    const movie = {};
    const updated = removeDirectorProperty(movie);
    expect(updated).not.toHaveProperty("director");
  });

  it('should handle invalid movie object', function () {
    const updated = removeDirectorProperty(null);
    expect(updated).toBeNull();
  });
});

describe('addCastMember', function () {
  it('should add a new cast member when provided valid input', function () {
    const movie = { cast: ["Tom Hanks"] };
    const updated = addCastMember(movie, "Tim Allen");
    expect(updated.cast).toContain("Tim Allen");
    expect(updated.cast.length).toBe(2);
  });

  it('should not add a cast member if the cast property is missing or not an array', function () {
    const movie = {}; // no cast property
    const updated = addCastMember(movie, "Tim Allen");
    expect(updated.cast).toBeUndefined();
  });

  it('should handle invalid newMember input', function () {
    const movie = { cast: ["Tom Hanks"] };
    const updated = addCastMember(movie, 123);
    expect(updated.cast.length).toBe(1);
  });
});

describe('getAllowedGenres', function () {
  it('should return the list of allowed genres', function () {
    const genres = getAllowedGenres();
    expect(genres).toContain("Animation");
    expect(genres).toContain("Family");
    expect(genres).toContain("Action");
  });
});
