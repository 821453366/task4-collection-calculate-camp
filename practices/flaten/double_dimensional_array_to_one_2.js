'use strict';

function double_to_one(collection) {
  let collection_Array = Array.prototype.concat.apply([],collection)
  return Array.from(new Set(collection_Array))
1}

module.exports = double_to_one;
