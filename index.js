function convertObject(collection) {
  let newCollection = []
  return typeof(collection) === 'object' ? newCollection = Object.values(collection) : newCollection = [...collection]
}

function myEach(collection, callback) {
  const newCollection = convertObject(collection)
  for (let i =0; i < newCollection.length; i++) {
    callback(newCollection[i])
  }
  return collection
}

function myMap(collection, callback) {
  const newCollection = convertObject(collection)
  for (let i =0; i < newCollection.length; i++) {
    newCollection[i] = callback(newCollection[i])
  }
  return newCollection
}

function myReduce(collection, callback, acc) {
  const newCollection = convertObject(collection)
  
  if (!acc) {
    acc = newCollection[0]
  } else {
    newCollection.unshift(acc)
  }
  
  for (let i =0; i < newCollection.length - 1; i++) {
    acc = callback(acc, newCollection[i+1])
  }
  return acc
}

function myFind(collection, predicate) {
  const newCollection = convertObject(collection)
  for (let i =0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      return newCollection[i]
    }
  }
}

function myFilter(collection, predicate) {
  const newCollection = convertObject(collection)
  const filterArr = []
  for (let i =0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      filterArr.push(newCollection[i])
    }
  }
  return filterArr
}

function mySize(collection) {
  const newCollection = convertObject(collection)
  return newCollection.length
}

function myFirst(array, n=1) {
  let newArr =[]
  if (n === 1) {
    newArr = array[0]
  } else {
    for (let i = 0; i < n; i++) {
      newArr.push(array[i])
    }
  }
  return newArr
}

function myLast(array, n) {
  let newArr =[]
// return array[array.length -1]
  if (!n) {
    newArr = array[array.length - 1]
  } else {
    for (let i = array.length - n; i < array.length; i++) {
      // debugger
      newArr.push(array[i])
    }
  }
  return newArr
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}

function findCBGenerator(target) {
  return (function(currEl) { return target === currEl })
}