'use strict';

function choose_even(collection) {
  let result =[];

  // collection.forEach((item)=>{
  //   if(collection[item] % 2 === 0){
  //     result.push(collection[item]);
  //   }
  // });
  for (var index in collection)
    if (collection[index] % 2 === 0) {
      result.push(collection[index]);
    }
  return result;
}

module.exports = choose_even;
