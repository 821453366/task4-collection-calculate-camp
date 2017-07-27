'use strict';
var number_map_to_word = function(collection){
  let result =[];

  collection.forEach(item => {
    let word ="";
      word+=String.fromCharCode(item+96);
    result.push(word)
  })

  return result ;
};

module.exports = number_map_to_word;
