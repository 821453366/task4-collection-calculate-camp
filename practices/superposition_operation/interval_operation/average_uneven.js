'use strict';

function average_uneven(collection) {
  let result = 0;
  let num=0;

  collection.forEach(item => {
    if (item % 2 != 0) {
      num++;
      result += item
    }
  })
  return result/num;
}

module.exports = average_uneven;
