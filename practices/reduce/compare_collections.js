'use strict';

function compare_collections(collection_a, collection_b) {
  let num =0;

  collection_a.forEach((item,index)=> {
    collection_b.forEach(( item_b, index_b) => {
      if (index === index_b && item === item_b)
        num++;
    })
  })
  if(num === collection_b.length){

    return true;
  }

  return false;
}

module.exports = compare_collections;


