// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// ABOVE - Starter CODE - DO NOT MODIFY ABOVE THIS LINE
// ----------------------------------------------------

// Add your functions below:


/* 
* 1. 

* Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

* To find out if a credit card number is valid or not, use the Luhn algorithm (https://en.wikipedia.org/wiki/Luhn_algorithm#Description). Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:
* 1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
* 2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
* 3. Sum up all the digits in the credit card number.
* 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
* Here’s a visual that outlines the steps (https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%202.svg?_gl=1*abaq3u*_gcl_aw*R0NMLjE3MjExMTU5MDEuQ2p3S0NBand0TmkwQmhBMUVpd0FXWmFBTkhjSnBIQnJBZEd1dGVPUG5laFpwaVdjaXhUcmJYSXkwS3VXTTE0RVV6Y2RodnhrbmwtaHZSb0N1X0lRQXZEX0J3RQ..*_gcl_au*MTU4MDYwOTc5MC4xNzIwNjA0ODU4*_ga*MTc4MTczMjIzMC4xNzIxMTE1MTc5*_ga_3LRZM6TM9L*MTcyNzk0OTc1Ni4xNTEuMS4xNzI3OTUxMzAxLjYwLjAuMA..). Check your function using both the provided valid and invalid numbers.
*/

// TEST ARRAY which is VALID:
// console.log('\nORIGINAL ARRAY (Not to be MUTATED):\n', valid3);

const validateCred = arr => {
  // NEW ARRAY to do calculations on, as the original array CANNOT BE MUTATED 
  let arrayToCalculateOn = arr.slice();

  // Will need the LAST DIGIT of the array later on in calculations & it should also to be removed arrayToCalculateOn:
  let lastDigit = arrayToCalculateOn.pop();
  // FOR TESTING:
  // console.log('\nThe LAST DIGIT of the COPY ARRAY, saved for later use:\n', lastDigit);

  // 1 of 4 = Create a reversed array - FIRST HALF of ARRAY `arrayToCalculateOn` to do calculations on
  let reversedFirstHalf = [];
  for (let i = arrayToCalculateOn.length - 1; i >= 0; i -= 2) {
    // If num multiplied by 2 is greater than 9, then take multiplied number and subtract 9
    if (arrayToCalculateOn[i] * 2 > 9) {
      reversedFirstHalf.push(arrayToCalculateOn[i] * 2 - 9);
    // Else, just multiply by 2 
    } else {
      reversedFirstHalf.push(arrayToCalculateOn[i] * 2);
    }
  }
  
  // 2 of 4 = Create a reversed array - SECOND HALF of ARRAY `arrayToCalculateOn` with NO calculations needed
  let reversedSecondHalf = [];
  for (let i = arrayToCalculateOn.length - 2; i >= 0; i -= 2) {
    reversedSecondHalf.push(arrayToCalculateOn[i]);
  }

  // 3 of 4 = Create ONE array, SUM the values and ADD `lastDigit`
  // 3.1 - Create one array
  let mergedArray = reversedFirstHalf.concat(reversedSecondHalf);
  // 3.2 - ADD all the numbers in the array and then ADD to that the `lastDigit` to the RESULT 
  const finalResult = mergedArray.reduce((accumulator, currentValue) => accumulator + currentValue) + lastDigit;

  // FOR TESTING:
  // console.log('\nNEW ARRAY to do calculations on:\n', arrayToCalculateOn);
  // console.log('\n1ST HALF of the FUTURE RESULT ARRAY with calculations on:\n', reversedFirstHalf);
  // console.log('\n2ND HALF of the FUTURE RESULT ARRAY with NO calculations:\n', reversedSecondHalf);
  // console.log('\nMERGED ARRAY, ready, BUT BEFORE summing elements:\n', mergedArray);
  // console.log('\nALL elements SUMMED, then LAST DIGIT ADDED:\n', finalResult);
  // console.log('\n');

  // 4 of 4 = Return TRUE if valid or FALSE if invalid
  return finalResult % 10 === 0 ? true : false;
};
// console.log(validateCred(valid3));


/* 
* 2. 

* Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
*/

const findInvalidCards = nestedArrays => {
  // If the batch is passed into this function, it will us .filter() as a higher-order function
  // and use .validateCred() as a callback function to filter out and return invalid cards:
  let invalidCardNumbers = nestedArrays.filter(element => validateCred(element) === false);
  return invalidCardNumbers;
};

console.log(findInvalidCards(batch));