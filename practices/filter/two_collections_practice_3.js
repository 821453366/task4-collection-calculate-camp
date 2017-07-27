'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];

  collection_a.forEach(item => {
    collection_b.forEach(data => {
      if (item % data ===0) {
        result.push(item);
      }
    })
  })

  return result;
}

module.exports = choose_divisible_integer;
