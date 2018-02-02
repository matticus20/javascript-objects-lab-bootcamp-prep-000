var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, obj, { [key]: value })
}

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