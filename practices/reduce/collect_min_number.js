'use strict';

function collect_min_number(collection) {

  return collection.reduce((sum,value)=>Math.min(sum,value))
}

module.exports = collect_min_number;

