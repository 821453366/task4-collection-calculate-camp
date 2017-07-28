'use strict';

function average_to_letter(collection) {
  let sum = 0;

  collection.forEach(item => {
    sum += item;
  })
  let ave = Math.ceil(sum / collection.length);

  return String.fromCharCode(ave + 96);
}

module.exports = average_to_letter;

