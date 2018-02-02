var recipes = {eggs: 3}

function updateObjectWithKeyAndValue(obj, key, value) {
  return object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'flour', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
}