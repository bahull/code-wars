// 04/03/2018

// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?

const opposite = number => -number;

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221
const descendingOrder = n =>
  Number(
    ("" + n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
