
function addNumbers(x,y){
  let sum=x+y;
  return sum
}
function threenumbers(x,y,z){
  let after_add=addNumbers(x,y)
  let sum2=after_add+z
  return sum2
}

let a=5;
let b=10;
let c=20;

console.log(threenumbers( a,b,c))