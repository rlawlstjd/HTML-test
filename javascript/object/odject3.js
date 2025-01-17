// forEach()

let numAry = [20,13,45,62,19]; 
let sum = 0; 
let max = 0; 
numAry.forEach(function(item, index, ary){
  if(item % 2 == 1){
    return true; 
  } else {
    return false; 
  }
}); 
console.log(numAry); 
//filter (function(item,index,ary){}) 조건을 만족하는 배열 생성 
let filterAry = numAry.filter(function(item, idx, ary){
    if(item % 2 == 1){
      return true; 
    } else {
      return false; 
    }
}); 
console.log(filterAry); 