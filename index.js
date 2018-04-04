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

//   You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  let wholeNum = Math.sqrt(sq);
  if (wholeNum % 1 !== 0) return -1;
  return (wholeNum += 1) * wholeNum;
}
//Sort Numbers
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
const solution = nums =>
  nums !== null && nums !== undefined && nums.length > 0
    ? nums.sort((a, b) => a - b)
    : [];
