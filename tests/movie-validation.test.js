/**
 * @file movie-validation.test.js
 * @fileoverview Tests for the movie-validation module.
 * These tests verify that movie object validation and property access functions work correctly.
 * @module movie-validation.test
 */

// movie-validation.test.js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  hasPropertyOfType,
  getMovieTitle,
  getMovieYear,
  isMovieClassic,
  getMovieKeys,
  getMoviePropertiesCount
} from '../src/movie-validation.js';

describe('movie-validation module', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => { });
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  describe('hasPropertyOfType', () => {
    it('returns true when the property exists and is of the expected type', () => {
      const obj = { title: "Toy Story", year: 1995 };
      expect(hasPropertyOfType(obj, 'title', 'string')).toBe(true);
      expect(hasPropertyOfType(obj, 'year', 'number')).toBe(true);
    });

    it('returns false when the property is missing or is not of the expected type', () => {
      const obj = { title: "Toy Story", year: "1995" };
      expect(hasPropertyOfType(obj, 'year', 'number')).toBe(false);
    });
  });

  describe('getMovieTitle', () => {
    it('returns the movie title if valid', () => {
      const movie = { title: "Toy Story" };
      expect(getMovieTitle(movie)).toBe("Toy Story");
    });

    it('returns an empty string and logs an error if title is missing or invalid', () => {
      expect(getMovieTitle({})).toBe("");
      expect(console.log).toHaveBeenCalledWith("getMovieTitle: Invalid movie object or title missing.");
    });
  });

  describe('getMovieYear', () => {
    it('returns the movie year if valid', () => {
      const movie = { year: 1995 };
      expect(getMovieYear(movie)).toBe(1995);
    });

    it('returns 0 and logs an error if year is missing or invalid', () => {
      expect(getMovieYear({})).toBe(0);
      expect(console.log).toHaveBeenCalledWith("getMovieYear: Invalid movie object or year missing.");
    });
  });

  describe('isMovieClassic', () => {
    it('returns true if the movie was released before 2000', () => {
      const movie = { year: 1995 };
      expect(isMovieClassic(movie)).toBe(true);
    });

    it('returns false if the movie was released in or after 2000', () => {
      const movie = { year: 2005 };
      expect(isMovieClassic(movie)).toBe(false);
    });

    it('returns false and logs an error if the movie is invalid or year is missing', () => {
      expect(isMovieClassic({})).toBe(false);
      expect(console.log).toHaveBeenCalledWith("isMovieClassic: Movie object invalid or missing year.");
    });
  });

  describe('getMovieKeys', () => {
    it('returns an array of keys if the input is a valid object', () => {
      const movie = { title: "Toy Story", director: "John Lasseter" };
      const keys = getMovieKeys(movie);
      expect(keys).toContain("title");
      expect(keys).toContain("director");
    });

    it('returns an empty array and logs an error if the input is not a valid object', () => {
      expect(getMovieKeys(null)).toEqual([]);
      expect(console.log).toHaveBeenCalledWith("getMovieKeys: Provided input is not a valid object.");
    });
  });

  describe('getMoviePropertiesCount', () => {
    it('returns the correct number of properties for a valid object', () => {
      const movie = { title: "Toy Story", year: 1995, director: "John Lasseter" };
      expect(getMoviePropertiesCount(movie)).toBe(3);
    });

    it('returns 0 and logs an error if the input is not a valid object', () => {
      expect(getMoviePropertiesCount("not an object")).toBe(0);
      expect(console.log).toHaveBeenCalledWith("getMoviePropertiesCount: Provided input is not a valid object.");
    });
  });
});
