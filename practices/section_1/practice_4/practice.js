function collect_same_elements(collection_a, object_b) {
  var collection_same = [];

  for (var i = 0; i < collection_a.length; i++) {
    if (isExistcollection_aIncludeobject_b((collection_a[i]).key, object_b.value)) {
      collection_same.push((collection_a[i]).key);
    }
  }

  return collection_same;
}

function isExistcollection_aIncludeobject_b(collection_a, object_b) {
  for (var index in object_b) {
    if (object_b[index] === collection_a)

      return true;
  }

  return false;
}

module.exports = collect_same_elements;
