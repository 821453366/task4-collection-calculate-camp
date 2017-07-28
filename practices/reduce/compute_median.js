'use strict';

function compute_median(collection) {
  let sum=0;
  collection.sort((a, b) => a - b).forEach((item, index)=>{
    if(collection.length %2 ==0){
      if (index + 1 === (collection.length / 2) || index + 1 === (collection.length / 2) + 1)
        sum += parseInt(item)/2;
    }else{
      if(index+1 === Math.ceil(collection.length/2)){
        sum += parseInt(item);
      }
    }
  })
  return sum
}

module.exports = compute_median;


