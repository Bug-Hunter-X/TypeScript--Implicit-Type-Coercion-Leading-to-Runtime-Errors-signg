# TypeScript Implicit Type Coercion Bug

This repository demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that are not caught during compilation.  The `add` function is designed to take two numbers, but due to TypeScript's leniency, it allows a string to be passed, resulting in unexpected behavior.

## Bug

The `bug.ts` file contains the buggy code.  A type error should ideally be thrown at compile time, but it's not. The '+' operator performs string concatenation instead of numerical addition, causing an incorrect result.

## Solution

The `bugSolution.ts` file demonstrates a fix.  By explicitly specifying the types, and using stricter type checking, we prevent this type of runtime error. The compiler will now correctly identify and report the type mismatch.

## How to Reproduce

1. Clone this repository.
2. Compile and run the code in `bug.ts` (using `tsc bug.ts && node bug.js`). Observe the runtime error.
3. Compile and run the code in `bugSolution.ts` (using `tsc bugSolution.ts && node bugSolution.js`). Observe that the compiler now correctly flags the error.
