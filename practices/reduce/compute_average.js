'use strict';

function compute_average(collection) {
 let sum = collection.reduce((value,item)=> value+item);

 return sum/collection.length;
}

module.exports = compute_average;

