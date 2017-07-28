'use strict';

function average_to_letter(collection) {

  let result = [];

  collection.forEach(item => {
    if (item % 2 == 0) {
      let word = "";
      let number = item / 26;
      let num = item % 26;
      for (let i = 1; i < number; i++) {
        word += String.fromCharCode(97);
      }
      if (num !== 0)
        word += String.fromCharCode(num + 96);
      result.push(word)
    }
  })

  return result;
}

module.exports = average_to_letter;

