# Unhandled Exception: fs.readFileSync on Nonexistent File

This repository demonstrates an example of an unhandled exception in Node.js caused by attempting to read a file using `fs.readFileSync` when the file does not exist.  The `bug.js` file contains the problematic code.  The solution is provided in `bugSolution.js`, which uses error handling to prevent the application from crashing.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unhandled exception.
4. Run `node bugSolution.js` to see the corrected version.
