function collect_same_elements(collection_a, object_b) {
  var result = [];

  collection_a.forEach(item => {
    object_b.value.forEach(data => {
      if (item === data) {
        result.push(item)
      }
    })
  })

  return result;
}

module.exports = collect_same_elements;
