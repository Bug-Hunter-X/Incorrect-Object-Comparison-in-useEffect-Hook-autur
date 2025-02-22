# Incorrect Object Comparison in useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  Directly comparing objects with `!==` checks for reference equality, not value equality. This can lead to infinite loops or unexpected re-renders.

## The Problem
The `bug.js` file shows an example where a component attempts to compare two objects using `!==`.  If the objects have different references (even if their values are the same), the `useEffect` hook will trigger unnecessarily, potentially leading to infinite re-renders and errors.

## The Solution
The `bugSolution.js` file provides a corrected version that uses `JSON.stringify` to compare objects based on their values.  Alternatively, a deep comparison library like Lodash's `isEqual` could be used for more robust object comparisons.

## How to run
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies (if any).
4. Run the application (method depends on your React setup).

This example highlights the importance of proper object comparison within React's lifecycle methods.