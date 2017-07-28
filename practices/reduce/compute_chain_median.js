'use strict';

function compute_chain_median(collection) {
  let sum = 0;

  let result = collection.split("->").sort((a, b) => a - b);
  result.forEach((item, index) => {
    if (index + 1 === (result.length / 2) || index + 1 === (result.length / 2) + 1)
      sum += parseInt(item);
  })

  return sum / 2;
}

module.exports = compute_chain_median;
