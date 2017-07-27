'use strict';

function choose_even(collection) {
  let result =[];

  collection.forEach((item)=>{
    if(item % 2 === 0){
      result.push(item);
    }
  });
  // for (var index in collection)
  //   if (collection[index] % 2 === 0) {
  //     result.push(collection[index]);
  //   }
  return result;
}

module.exports = choose_even;
