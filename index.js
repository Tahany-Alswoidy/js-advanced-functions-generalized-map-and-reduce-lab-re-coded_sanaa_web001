// Add your functions here
function map(sourceArray,myfunction){
  return sourceArray.map(a=>myfunction(a));
}
function reduce(sourceArray,total,totalwithstart,alltrue,anytrue,starting){
  if(starting){return }
  return sourceArray.reduce(a=>myfunction(a,memo));
}