var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'vanilla', '1 tsp')

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
destructivelyDeleteFromObjectByKey(recipes, 'eggs')