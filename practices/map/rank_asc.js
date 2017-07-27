'use strict';
var rank_asc = function(collection){
  collection.sort((m,n)=> n-m);

  return collection;
};

module.exports = rank_asc;
