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

const minSum = arr => {
  let total = 0;
  arr.sort((a, b) => a - b);
  while (arr.length > 0) {
    total += arr[0] * arr[arr.length - 1];
    arr.shift();
    arr.pop();
  }
  return total;
};

//Convert a string to an array
// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const stringToArray = str => str.split(" ");

//Maximum_Gap_(Array_Series_#4)
// If you complete Array_Series You know by now how to manipulate array effectively ,

// If not you can take a look to get how things work :

// Minimize_Sum_Of_array

// Maximize_Product_Of_Array

// Well , It's time to expand our series for more :

// We are given an array [] of n integers,

// Find The maximum difference between the successive elements in its sorted form.
// Notes :

// 1- Vector size is at least 3 .

// 2- The Vector's numbers could be a mixture of positives and negatives also zeros .

// 3- Repeatition of numbers in the vector could occur .

// 4- The Maximum Gap is computed Regardless the sign.

// If any of the previous points (Notes) is not clear , pay attention to the Examples clarify everything .
// Input :: Output Examples ::

// 1- maxGap ({13,10,5,2,9}) //return (4)

// Explanation ::

// THe Maximum Gap after sorting the array is (4) , the difference between (9-5 = 4 ) .

// 2- maxGap ({-3,-27,-4,-2}) //return (23)

// Explanation ::

// The Maximum Gap after sorting the array is (23) , The difference between |-3-(-27)| = 23 , Note : Regardless the sign of negativity .

// 3- maxGap ({-7,-42,-809,-14,-12}) //return (767)

// Explanation ::

// The Maximum Gap after sorting the array is (767) , The difference between |-809-(-42)| = 767 , Note : Regardless the sign of negativity .

// 4- maxGap ({-54,37,0,64,640,0,-15}) //return (576)

// Explanation ::

// The Maximum Gap after sorting the array is (576) , The difference between (64-640) = 576 , Note : Regardless the sign of negativity .
// If you feel Enjoyed this Kata , Then How About (Monkey With) Numbers in this Series ::

// Balanced Number

// STRNOGN - Strong Number

// Disarium Number

// Jumping Number

// Special Number

// Automorphic_Number

// Hope you enjoy it .. Awaiting for crafting best Practice and Clever Codes ..

// ALL Translation are Welcomed (In Any Language )

// Enjoy Learning !!!

// Zizou

const maxGap = arr => {
  let max = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    let holder = arr[i + 1] - arr[i];
    if (holder > max) {
      max = holder;
    }
  }
  return max;
};

// Multiply Word in String
// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example
// modifyMultiply ("This is a string",3,5)

// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.
const modifyMultiply = (str, loc, num) => {
  let newWord = str.split(" ")[loc];
  let holder = [];
  holder.length = num;
  holder.fill(newWord);
  return holder.join("-");
};

//Check three and two
// Given an array with 5 string values "a", "b" or "c" (chars in Java), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

const checkThreeAndTwo = arr => {
  let countArray = [];
  let count = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      count++;
    } else {
      countArray.push(count + 1);
      count = 0;
    }
  }
  return countArray.includes(2) && countArray.includes(3);
};

//Student's final grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples:

// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100

// finalGrade(85, 5);    // 90

// finalGrade(55, 3);    // 75

// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0
// *Use Comparison and Logical Operators.

const finalGrade = (grade, projs) => {
  if (grade > 90 || projs > 10) {
    return 100;
  } else if (grade > 75 && projs >= 5) {
    return 90;
  } else if (grade > 50 && projs >= 2) {
    return 75;
  } else {
    return 0;
  }
};

//Form the minimum
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (= ignore duplicates).

// Note: Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Examples
// [1, 3, 1]  ==> 13

// [5, 7, 5, 9, 7]  ==> 579

// [1, 9, 3, 1, 7, 4, 6, 6, 7] ==> 134679
// ALL Translation are Welcomed (In Any Language )
// If you Enjoyed this Kata , Then How About Monkey With Numbers in this Series:

// Balanced Number

// STRNOGN - Strong Number

// Disarium Number

// Jumping Number

// Special Number

// Automorphic_Number

// Enjoy Learning !!!

// Zizou

const minValue = arr => {
  let min1 = 0;
  let min2 = 0;
  let holder = [];
  let noDupArray = arr.filter((curr, ind, arr) => arr.indexOf(curr) === ind);
  if (noDupArray.length < 2) {
    return noDupArray[0] || 0;
  } else if (noDupArray.length == 2) {
    let min1 = Math.min(...noDupArray);
    let min2 = Math.max(...noDupArray);
    return Number(String(min1) + String(min2));
  } else {
    while (noDupArray.length > 0) {
      let min2 = Math.min(...noDupArray);
      holder.push(min2);
      noDupArray.splice(noDupArray.indexOf(min2), 1);
    }
    return Number(holder.join(""));
  }
};

// Or
function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}

// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

const abbrevName = str => {
  let splitStr = str.split(" ");
  return `${splitStr[0][0]}.${splitStr[1][0].toUpperCase()}`;
};

// Move The Chains!
// This simple kata is based around the down system in American football. The team that is in possession of the ball (offense) has four downs (or you think of it as attempts, tries or plays) to gain ten yards. If the offense gains at least ten yards in those four downs or fewer, the team receives another set of four downs. This is also known as 'First down'. If the offense does not gain ten yards in those four downs, they give the ball to the other team. This is also known as 'Turnover on downs'.

// You will be given three integers. The down, the distance needed to gain a 'first down' and the yards gained on the play. The result will be one of three things:

// 'First down' meaning that the yards gained on the play exceed the distance needed to gain the new set of downs. Example: Down = 3, Distance = 5, Yards Gained = 15, Result = 'First down'

// 'Turnover on downs' meaning that the down is 4, and the yards gained on the play do NOT exceed the distance needed to gain the new set of downs. Example: Down = 4, Distance = 5, Yards Gained = 0, Result = 'Turnover on downs'

// The new down and distance. If the down is not 4, and the yard gained does NOT exceed the distance, then return the next down and new distance needed to gain a first down. Example: Down = 1, Distance = 10, Yards Gained = 5, Result = '2nd and 5'

// The distance can be greater than 10 and yards gained can be negative!

const chains = (down, distance, yardsGained) => {
  if (yardsGained - distance >= 0) return "First down";
  else if (down === 4 && yardsGained - distance < 0) return "Turnover on downs";
  else
    return (function(d, y) {
      const counter = {
        1: "2nd",
        2: "3rd",
        3: "4th"
      };
      return `${counter[d]} and ${distance - y}`;
    })(down, yardsGained);
};

// ReversedSequence
// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
  let fullArray = [];
  for (let i = n; i > 0; i--) {
    fullArray.push(i);
  }
  return fullArray;
};

// ===== PRINT HISTOGRAM ======
// Given an array of integers [2, 1, 2, 101, 4, 95, 3, 250, 4, 1, 2, 2, 7, 98, 123, 99, ...]
// Write a function (with linear run-time complexity) to print the following tabular output with ‘xxx' that resembles a histogram (your output should closely match the sample output below, including "99+" to capture the count for all numbers > 99):
// Num | count
//   1 | xx
//   2 | xxxx
//   3 | x
//   4 | xx
// ...
//  98 | x
//  99 | x
// 99+ | xxx

const exampleArray = [2, 1, 2, 101, 4, 95, 3, 250, 4, 1, 2, 2, 7, 98, 123, 99];

const createHistogram = arr => {
  let histoObject = {};
  let histoArray = [];
  for (let i = 1; i < 100; i++) {
    histoObject[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] >= 99 ? (histoObject[99] += 1) : (histoObject[arr[i]] += 1);
  }
  for (let key in histoObject) {
    histoArray.push(
      key.length === 1
        ? `    ${key}  | ${"x".repeat(histoObject[key])}`
        : `    ${key} | ${"x".repeat(histoObject[key])}`
    );
  }
  histoArray.unshift("Num | count");
  return histoArray;
};

createHistogram(exampleArray);

// ===== PAIRS OF 10 ======
// Given array of integers [1, 6, 3, 2, 5, 5, 7, 8, 4, 8, 2, 5, 9, 9, 1, ...]
// Write a function to print out all pairs that sum to 10 with average/best O(n) or linear run-time complexity.
// Sample output: (1,9), (1,9), (6,4), (3,7), (2,8), (2,8), (5,5), (5,5), (5,5), (8,2), (8,2), (9,1), (9,1)
// Can print the pairs in any order, as long as numbers inside the pair respect the same order in which they appear in the original array. And it is acceptable to print each pair in a separate line.

const testArray = [1, 6, 3, 2, 5, 5, 7, 8, 4, 8, 2, 5, 9, 9, 1];

const pairFinder = arr => {
  let resultsArray = [];
  let count = 1;
  let currentCount = 1;
  let secCount = 0;
  while (secCount < arr.length) {
    if (count === arr.length - 1) {
      if (arr[count] + arr[secCount] === 10 && secCount < count) {
        resultsArray.push(`(${arr[secCount]}, ${arr[count]})`);
      }
      count = secCount;
      secCount++;
    }
    if (arr[count] + arr[secCount] === 10 && secCount < count) {
      resultsArray.push(`(${arr[secCount]}, ${arr[count]})`);
    }
    count++;
  }
  return resultsArray;
};

pairFinder(testArray);

// ===== STRINGS ======
// Write a function that takes an input string (no duplicate character) and prints out various strings as illustrated by the following sample outputs:
// - input “ab” should print “”, “a”, “b”, “ab"
// - input “abc” should print “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc"
// - input “abcd” should print “”, “a”, “b”, “c”, “d”, “ab”, “ac”, “ad”, “bc”, “bd”, “cd”, “abc”, “abd”, “acd”, “bcd”, “abcd"
// The function can return/print the substrings in any order (no duplicates). And it is acceptable to print each string in a separate line.

let testString = "abcd";

const stringSplitter = str => {
  let resultsArray = [""];
  let count = 0;
  let currentCount = 0;
  let secCount = 0;
  let moveUp = 2;
  let splitString = [...str];
  while (count < splitString.length) {
    if (count === secCount) {
      resultsArray.push(splitString[count]);
    } else {
      resultsArray.push(
        splitString[secCount] + splitString[count],
        splitString[secCount] + splitString.slice(count).join(""),
        splitString[secCount] +
          splitString.slice(count, splitString.length - 1).join(""),
        splitString.slice(secCount, moveUp).join("") +
          splitString.slice(count + 2).join("")
      );
      moveUp++;
    }
    if (count === splitString.length - 1) {
      currentCount++;
      secCount = currentCount;
      count = secCount - 1;
    }
    count++;
  }
  return new Set(resultsArray);
};

stringSplitter(testString);

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
const even_or_odd = num => (num % 2 === 0 ? "Even" : "Odd");

// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.
const getCount = str => {
  let count = 0;
  str = str.toUpperCase();
  let vowels = { A: true, E: true, I: true, O: true, U: true };
  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]] === true) {
      count++;
    }
  }
  return count;
};

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function() {
  return this.slice()
    .split("")
    .map(
      curr =>
        curr.toUpperCase() === curr ? curr.toLowerCase() : curr.toUpperCase()
    )
    .join("");
};

//   In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// (There are other ways that codes are created, but this Kata will only use the four rules listed above)

// Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

// Additional considertations:

// The four-letter codes in the returned array should be in UPPER CASE.
// If a common name has a hyphen/dash, it should be considered a space.
// Example
// If the input array is: ["Black-Capped Chickadee", "Common Tern"]

// The return array would be: ["BCCH", "COTE"]

const birdCode = arr => {
  let resultsArray = [];
  arr.map(curr => {
    let splitCurr = curr.split(/[ -]+/);
    if (splitCurr.length === 1) {
      resultsArray.push(splitCurr[0].substring(0, 4).toUpperCase());
    } else if (splitCurr.length === 2) {
      resultsArray.push(
        splitCurr[0].substring(0, 2).toUpperCase() +
          splitCurr[1].substring(0, 2).toUpperCase()
      );
    } else if (splitCurr.length === 3) {
      resultsArray.push(
        splitCurr[0].substring(0, 1).toUpperCase() +
          splitCurr[1].substring(0, 1).toUpperCase() +
          splitCurr[2].substring(0, 2).toUpperCase()
      );
    } else if (splitCurr.length === 4) {
      resultsArray.push(
        splitCurr[0].substring(0, 1).toUpperCase() +
          splitCurr[1].substring(0, 1).toUpperCase() +
          splitCurr[2].substring(0, 1).toUpperCase() +
          splitCurr[3].substring(0, 1).toUpperCase()
      );
    }
  });
  return resultsArray;
};

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(time) {
  if (time === 0) return "now";

  let years = Math.floor(time / 31536000);
  let days = Math.floor((time - years * 31536000) / 86400);
  let hours = Math.floor((time - (years * 31536000 + days * 86400)) / 3600);
  let minutes = Math.floor(
    (time - (years * 31536000 + days * 86400 + hours * 3600)) / 60
  );
  let seconds =
    time - (years * 31536000 + days * 86400 + hours * 3600 + minutes * 60);

  let resultExecution = {
    year: years,
    day: days,
    hour: hours,
    minute: minutes,
    second: seconds
  };
  let resultsArray = [];
  for (prop in resultExecution) {
    if (resultExecution[prop] == false) {
      if (resultExecution[prop] > 1) {
        resultsArray.push(`${resultExecution[prop]} ${prop}s`);
      } else {
        resultsArray.push(`${resultExecution[prop]} ${prop}`);
      }
    }
  }
  if (resultsArray.length === 5) {
    return `${resultsArray[0]}, ${resultsArray[1]}, ${resultsArray[2]}, ${
      resultsArray[3]
    } and ${resultsArray[4]}`;
  } else if (resultsArray.length === 4) {
    return `${resultsArray[0]}, ${resultsArray[1]}, ${resultsArray[2]} and ${
      resultsArray[3]
    }`;
  } else if (resultsArray.length === 3) {
    return `${resultsArray[0]}, ${resultsArray[1]} and ${resultsArray[2]}`;
  } else if (resultsArray.length === 2) {
    return `${resultsArray[0]} and ${resultsArray[1]}`;
  } else {
    return `${resultsArray[0]}`;
  }
}

formatDuration(316);

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

const validate = password =>
  /(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[.; ])(?=.{6,}))/.test(password);

// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);

var wireCode = (function() {
  for (let prop in global) {
    if (prop.substr(0, 4) === "boom") {
      return global[prop];
    }
  }
})(global);

Bomb.CutTheWire(wireCode);


// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
  let replace5 = string.replace(/5/g, "S")
  let replace0 = replace5.replace(/0/g, "O")
  let replace1 = replace0.replace(/1/g, "I")
  return replace1
  }

//   Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

const hello = name => `Hello, ${name ? name.split("")[0].toUpperCase() + name.split("").slice(1).join("").toLowerCase() : "World"}!`

// Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:

// Your code needs to be as short as possible, in fact not longer than 28 characters
// Because you are scared and stressed you have forgotten how to use the standard reverse() method
// #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]

// #Output: [[],'c','b','a',3,2,1]

weirdReverse=a=>a.sort(I=>1)

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be strings, and normal letters.

// For Haskell, more specifically, body has the type of String and tail has the type of Char.

const correctTail = (bod, tail) => bod.substr(bod.length - 1) === tail