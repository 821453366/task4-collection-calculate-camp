'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result =[];
  collection_a.forEach(item =>{
    collection_b.forEach(data=>{
      if(item === data){
        result.push(item)
      }
    })
  })
  return result;
}

module.exports = choose_common_elements;
