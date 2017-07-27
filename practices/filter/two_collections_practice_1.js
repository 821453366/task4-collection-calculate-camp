'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result =[];

  collection_a.forEach(item =>{
    if(collection_b.indexOf(item) !== -1)
      result.push(item)
  })

  return result;
}

module.exports = choose_common_elements;
