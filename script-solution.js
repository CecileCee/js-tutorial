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




// --------------------------------------------------------------
//
// 4. -- Task
//
// Use Array#filter to write a function called getShortMessages.
//
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
//
// The function should return an array containing the messages themselves, without their containing object.
//
// ## Arguments
//
//   * messages: an Array of 10 to 100 random objects that look something like this:
//
//     {
//       message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//     }
//
// ## Conditions
//
//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.
//
// ## Hint
//
//   * Try chaining some Array methods!
//
// ## Example
//
//     [ 'Tempor quis esse consequat sunt ea eiusmod.',
//       'Id culpa ad proident ad nulla laborum incididunt.',
//       'Ullamco in ea et ad anim anim ullamco est.',
//       'Est ut irure irure nisi.' ]
//
// ## Resources
//
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//
//
// --------------------------------------------------------------

function getShortMessages(messages) {
  // sélectionner les messages les plus courts
  var shortmsgs = [],
      index = 0,
      msgsaved = '';

  function isolateMsg(message) {
    msgsaved = messages[index].message;   // isoler le message;
    index +=1;                            // incrémenter l'index pour se déplacer
    if (msgsaved.length <= 50) {          // condition :
      return shortmsgs.push(msgsaved);    // push seulement les phrases de -5O caractères
    }
  }

  messages.map(isolateMsg);               // fonction map car interdiction boucle for
  return shortmsgs;                       // return du tableau contenant les phrases de -50 caractères
}

module.exports = getShortMessages;
