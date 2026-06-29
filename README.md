# Testing Practice

A collection of pure JavaScript functions built using Test-Driven Development (TDD) as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) curriculum.

## Functions

- **capitalize** — takes a string and returns it with the first character capitalized
- **reverseString** — takes a string and returns it reversed
- **calculator** — an object containing `add`, `subtract`, `multiply`, and `divide` methods, each taking two numbers
- **caesarCipher** — takes a string and a shift factor, returning each letter shifted forward in the alphabet with wrapping, case preservation, and punctuation handling
- **analyzeArray** — takes an array of numbers and returns an object containing `average`, `min`, `max`, and `length`

## Tech Stack

- JavaScript (ES Modules)
- [Jest](https://jestjs.io/) — test runner
- [Babel](https://babeljs.io/) — transforms ESM syntax for Jest compatibility

## Running the Tests

Clone the repo and install dependencies:

```bash
git clone <https://github.com/rudyravelindev/testing-practice>
cd testing-practice
npm install
```

Run the full test suite:

```bash
npm test
```

You should see all 5 test suites and 10 tests passing.

## What I Learned

- Writing tests _before_ implementation (red-green TDD cycle)
- Using Jest matchers like `toBe` for primitives and `toEqual` for objects
- Breaking complex functions like `caesarCipher` into smaller helper functions
- Setting up Jest with Babel for ES Module support

## Acknowledgments

Built as part of [The Odin Project](https://www.theodinproject.com) JavaScript curriculum.
