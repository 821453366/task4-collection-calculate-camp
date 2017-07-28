'use strict';

function calculate_elements_sum(collection) {

  return collection.reduce((value,item)=> value+item)
}

module.exports = calculate_elements_sum;

