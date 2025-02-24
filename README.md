# JS Unit Testing with Vitest with Coverage and UI

## JS Unit Testing Objects Using A Movie Database

[![tested with vitest](https://img.shields.io/badge/tested_with-vitest-99424f.svg)](https://vitest.dev/)


This project is written in [Node](https://nodejs.org/en/), and tested with [Vitest - Blazing Fast Unit Test Framework](https://vitestjs.io/).

---

## The Assignment

When npm runs vitest, some tests are failing as seen at the end of its output to the console.


# Instructions

## Install your dependencies

`npm install`

---

## Run tests on a single file

Start with the first file.

`npm run test:1`

For a quick start to this project `src/movie-creation.js` already has suggested solutions that pass.

**NOTE:** As you are editing, don't forget to save the file before you try running the test or it won't be able to see the changes.

After seeing test:1 pass, continue on to test:2.

---

If a test fails, vitest will identify it as failing and print one or more error messages, depending on the test expectations.

---

## Edit and test each file sequentially

One-by-one and in order, edit each JavaScript file and follow the instructions for each coding skill. You should run the test after each completed skill and see the pass count increase. When one file passes completely, you are ready for the next file.

--

## Running the Files to View Console Output

To see the output of the JavaScript files and observe the `console.log()` statements, you can run each file directly using Node.js. Make sure that the `SHOW_EXAMPLES` boolean in each file is set to `true` so that the example code executes.

- **Movie Creation:**
  Run `node src/movie-creation.js` to see how movie objects are created and pretty printed.

  prettyPrint output looks like:

```text
----------------------------------------
Title   : Inception
Year    : 2010
Director: Christopher Nolan
Genre   : Sci-Fi
Rating  : 8.8
Cast    : Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page
----------------------------------------
```

- **Movie Manipulation:**
  Run `node src/movie-manipulation.js` to view how movie objects are updated (e.g., changing ratings, modifying genres, adding cast members, etc.).

- **Movie Validation:**
  Run `node src/movie-validation.js` to observe how movie validation functions work and to see the list of movie properties along with their counts.

Running these files with Node.js will print the respective `console.log()` outputs to your terminal, allowing you to verify that each function is working as expected.

---

## Suggested Code and Additional Resources

Suggested code that passes the tests is available in the `documents` folder of this project. You can access these resources by opening the `index.html` file in your browser using Live Server.

---

## Continue writing and fixing code until all tests pass

When you feel the coding skills are completed, the following command will test all files in the repo that end in test.js

`npm test`

---

## Measuring Coverage

Coverage reports will be placed in the coverage folder. To view, open index.html using Liver Server.

---


## Completing the Assignment

Commit and push after all tests pass. GitHub will run the same tests and report pass/fail.

---
