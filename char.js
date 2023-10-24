
let str="g";
let lower_case="abcdefghijklmnopqrstuvwxyz"
let upper_case="ABCDEFGHIJKLMNOPQRTWXYZ"
for(i=0;i<lower_case.length;i++){
  if (lower_case[i]==str){
    str=upper_case[i]
  }
}
console.log(str)