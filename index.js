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

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array:

// C#/Java: new int[] {} / new int[0];
// C++: std::vector<int>();
// JavaScript/CoffeeScript/TypeScript/PHP/Haskell: [];
// Rust: Vec::<i32>::new();
// ATTENTION!
// The passed array should NOT be changed. Read more here.

// For example:

// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].

const countPositivesSumNegatives = input => {
  if (!input || !input.length) return [];
  let positives = input.filter(curr => curr > 0).length;
  let negatives = input.reduce((sum, curr) => (curr <= 0 ? sum + curr : 0), 0);
  return [positives, negatives];
};

// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

const spam = num => "hue".repeat(num);

// Stringy strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
const stringy = size => {
  let str = [];
  for (let i = 1; i <= size; i++) {
    if (i % 2 !== 0) {
      str.push(1);
    } else {
      str.push(0);
    }
  }
  return str.join("");
};

//or
const stringy = size => {
  let str = "";
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str.join("");
};

//The Deca Tree
// In the Deca Forest, grow the Deca Trees.

// On each Deca Tree, a trunk has 10 branches.

// On each branch, there are 10 twigs.

// On each twig, there are 10 leaves.

// Unfortunately, the Deca Forest is becoming wildly overgrown and is endangering the local wildlife. You must add methods to the tree object so that the woodcutter can remove parts of a tree as follows, where n is a positive integer:

// chopTrunk(n) will remove n trunks
// chopBranch(n) will remove n branches
// chopTwig(n) will remove n twigs
// chopLeaf(n) will remove n leaves

// Make sure that when you remove any part of the tree, you also remove all the smaller parts attached to it. e.g. if you remove a twig you must also remove 10 leaves from the tree object. The woodcutter's aim is to trim back this forest, so he will try to remove as much of the tree as possible each time he chops.

// Conversely, when you remove a smaller part, you do not need to remove the larger parts it is attached to - for example you could pick off all the leaves from a tree and the number of twigs, branches and trunks would be unaffected.

// The tree cannot have a negative number of trunks, branches, leaves or twigs. That would be highly unnatural.

// You must also add a method 'describe' that allows the Deca Forest tourguides to describe each tree. It should describe the tree in the following format:

// "This tree has a trunks, b branches, c twigs and d leaves."

// (where a, b, c and d are integer values)

// Your methods will be tested for trees with varying numbers of trunks and for removing random numbers of leaves, twigs, branches and trunks. The test will use only positive integers for these values.

// For more information on JS objects, take a look here

function tree(trunks) {
  this.trunks = trunks;
  this.branches = trunks * 10;
  this.twigs = trunks * 100;
  this.leaves = trunks * 1000;

  this.chopTrunk = n => {
    this.trunks -= n;
    this.branches -= n * 10;
    this.twigs -= n * 100;
    this.leaves -= n * 1000;
    this.trunks >= 0 ? this.trunks : (this.trunks = 0);
    this.branches >= 0 ? this.branches : (this.branches = 0);
    this.twigs >= 0 ? this.twigs : (this.twigs = 0);
    this.leaves >= 0 ? this.leaves : (this.leaves = 0);
  };

  this.chopBranch = n => {
    this.branches -= n;
    this.twigs -= n * 10;
    this.leaves -= n * 100;

    this.branches >= 0 ? this.branches : (this.branches = 0);
    this.twigs >= 0 ? this.twigs : (this.twigs = 0);
    this.leaves >= 0 ? this.leaves : (this.leaves = 0);
  };
  this.chopTwig = n => {
    this.twigs -= n;
    this.leaves -= n * 10;
    this.twigs >= 0 ? this.twigs : (this.twigs = 0);
    this.leaves >= 0 ? this.leaves : (this.leaves = 0);
  };
  this.chopLeaf = n => {
    this.leaves -= n;
    this.leaves >= 0 ? this.leaves : (this.leaves = 0);
  };
  this.describe = () =>
    `This tree has ${this.trunks} trunks, ${this.branches} branches, ${
      this.twigs
    } twigs and ${this.leaves} leaves.`;
}

//Minimize _sum_Of_array_(Array_Series_#1)
// We are given an array of even size.

// Our task is to find the minimum sum which is obtained from summing each Two integers product .
// Input :: Output Examples ::

// minSum({5,4,2,3}) // return 22

// Explanation ::
// 5*2 +3*4 = 22

// minSum({12,6,10,26,3,24}) // return 342

// Explanation ::
// 26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) // return 74

// Explanation ::
// 9*0 + 8*2 +7*4 +6*5 = 74
// Hope you enjoy it .. Awaiting for crafting best Practice and Clever Codes ..

// If you feel Enjoyed this Kata , Then How About (Monkey With) Numbers in this Series ::

// Balanced Number

// STRNOGN - Strong Number

// Disarium Number

// Jumping Number

// Special Number

// Enjoy Learning !!!

// Wish you all the Best .. Regards
