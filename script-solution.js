// --------------------------------------------------------------
//
// 1. -- Task
//
// Write a function that takes an input string and returns it uppercased.
//
// -- Arguments
//
// * input: a String of random words (lorem ipsum)
//
// --------------------------------------------------------------


function upperCaser(input) {
  input = input.toUpperCase();
  return input;
}

module.exports = upperCaser;




// --------------------------------------------------------------
//
// 2. -- Task
//
// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
//
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.
//
// -- Arguments
//
//   * operation: A Function, takes no arguments, returns no useful value.
//   * num: the number of times to call `operation`
//
// -- Resources
//
//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
//
// --------------------------------------------------------------


function repeat(operation, num) {
  var count = 0;

  function operation () {
    return true;
  }

  while (count < num) {
    count++;
  }

  return num;
}

module.exports = repeat;




// --------------------------------------------------------------
//
// 3. -- Task
//
// Convert the following code from a for-loop to Array#map:
//
//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
//
//     module.exports = doubleAll
//
// -- Arguments
//
//   * numbers: An Array of 0 to 20 Integers between 0 and 9
//
// -- Conditions
//
//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unnecessary functions e.g. helpers.
//
// -- Resources
//
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// --------------------------------------------------------------

function doubleAll(numbers) {
  function pushNum (number) {
    return number * 2;
  }
  return numbers = numbers.map(pushNum);
}

module.exports = doubleAll;
