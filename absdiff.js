function difference(x,y){
  let sub=x-y;
  return sub
}

function absolute_difference(x,y){
  let after_sub=difference(x,y)
  if(after_sub<0){
    after_sub=after_sub*-1
  }
  return after_sub
}

let a=4;
let b=18;

console.log(absolute_difference(a,b))