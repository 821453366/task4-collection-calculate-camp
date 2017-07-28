'use strict';

function hybrid_operation(collection) {
  let result =0;

  collection.forEach(item=> result+=item *3+2)

  return result;
}

module.exports = hybrid_operation;

