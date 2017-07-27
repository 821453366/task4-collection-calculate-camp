'use strict';
var rank_desc = function(collection){
  collection.sort((m,n)=> m-n);

  return collection;
};

module.exports = rank_desc;
