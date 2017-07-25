'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];

  collection_b.forEach ((item)=> {
    collection_a.forEach((index)=>{
      if(item === index){
        result.push(index)
      }
    })
  })

  return result;
}

module.exports = get_intersection;
