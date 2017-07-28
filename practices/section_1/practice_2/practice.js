function collect_same_elements(collection_a, collection_b) {
  var result = [];

  collection_a.forEach(item => {
    collection_b[0].forEach(data => {
      if (item === data) {
        result.push(item)
      }
    })
  })

  return result;
}

module.exports = collect_same_elements;
