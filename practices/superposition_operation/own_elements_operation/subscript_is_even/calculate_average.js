'use strict';
var calculate_average = function (collection) {
  let result = 0;
  let num = 0;

  collection.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
      num++;
      result += item;
    }
  })

  return result/num;
};
module.exports = calculate_average;
