'use strict';

function collect_max_number(collection) {

  return collection.reduce((sum,value)=>Math.max(sum,value))
}

module.exports = collect_max_number;
