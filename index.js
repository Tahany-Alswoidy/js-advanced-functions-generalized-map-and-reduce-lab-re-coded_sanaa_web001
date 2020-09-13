// Add your functions here
function map(sourceArray,myfunction){
  return sourceArray.map(a=>myfunction(a));
}
function reduce(sourceArray,myfunction){
  return sourceArray.reduce(a=>myfunction(a,memo));
}