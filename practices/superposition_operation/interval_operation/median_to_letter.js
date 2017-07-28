'use strict';

function median_to_letter(collection) {
  let sum = 0;
  let result = "";
  let word = "";

  collection.sort((a, b) => a - b).forEach((item, index) => {
    if (collection.length % 2 == 0) {
      if (index + 1 === (collection.length / 2) || index + 1 === (collection.length / 2) + 1)
        sum += Math.ceil(parseInt(item) / 2);
    } else {
      if (index + 1 === Math.ceil(collection.length / 2)) {
        sum += parseInt(item);
      }
    }
  })
  let number = sum / 26;
  let num = sum % 26;
  for (let i = 1; i < number; i++) {
    word += String.fromCharCode(97);
  }
  if (num !== 0)
    word += String.fromCharCode(num + 96);
  result+=word

  return result;

}

module.exports = median_to_letter;
