var recipes = {eggs: 3}

function updateObjectWithKeyAndValue(obj, key, value) {
  return object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'flour', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'vanilla', '1 tsp')

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
destructivelyDeleteFromObjectByKey(recipes, 'eggs')