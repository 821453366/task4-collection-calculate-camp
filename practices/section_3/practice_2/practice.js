function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(item=>{
    object_b.value.forEach(data => {
      if(item.key === data){
        item.count-=Math.floor((item.count)/3);
      }
    })
  })

  return collection_a;
}

module.exports = create_updated_collection;
