'use strict';
var calculate_median = function(collection){
  var result = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
  }

  if (collection.length % 2 !== 0) {
    return collection[parseInt((collection.length + 1) / 2)] - 1;
  } else {
    return collection[parseInt(collection.length / 2)];
  }
};
module.exports = calculate_median;
