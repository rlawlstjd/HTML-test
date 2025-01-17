// eve2.js

let numAry = [{name:'조카', age:10}, {name:'큰조카', age:14}, {name:'삼촌', age:31},
   {name:'큰아빠', age:45}, {name:'', age:21}];
// forEach써서 각각 출력 
// 10보다 큰 값을 출력 
// 나이가 20 이상인 사람 
numAry.forEach(function(item, index, arr){ // foreach반환 x filter 반환 o 
   if (item.age > 20){  
  console.log(item.name)
  }  
});

let filtAry = numAry.filter(function(item, index, ary){
  if (item.name){
    return true; 
  }
  return false; 
  //if (item.name.indexOf('조카') != -1){ // 공백은 왜 false인가 
   // return true; 
 // }
});
console.log(filtAry); 
