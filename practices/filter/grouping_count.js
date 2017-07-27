'use strict';

function grouping_count(collection) {
  let result_Array = {};

  let result = Array.from(new Set(collection));
  result.forEach(item => {
    let num = 0;
    collection.forEach(data => {
      if (data == item) {
        num++;
      }
    })
    result_Array[item] = num;
  })

  return result_Array;
}

module.exports = grouping_count;
