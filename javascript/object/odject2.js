//object2.js
//concat (배열 요소를 합칠 때 사용)

let numAry1 = [10, 20];
let numary2 = [30, 40]; 
let resultAry = numAry1.concat(numary2); 
console.log(resultAry.join('-').split('-')); // join 문자값으로 바꿔줌 .    
// 문자열을 배열로 바꿔주는 split
// 뒤에 추가 push 앞에는unshift 중간에 splice

let result = resultAry.join('-').split('-'); 
result.push('60'); // unshift
console.log(result.pop()); // shift; 
//pull peek push pop  
console.log(result, result.indexOf('200'));  // 20 이라고 하는 값이 있는지  -1 == 없다 . 
console.clear(); // 로그를 지워줌. 

result = ["홍길동", "김민수", "허성식", "박창식"];

if (result.indexOf("김민수") != -1){
  console.log("찾는 이름이 존재합니다."); 
} else {
  console.log("찾는 이름이 없습니다."); 
}

console.log(result.at(1)); // result[1] ?

result.sort().reverse(); // 정렬 . 
console.log(result); 

let result1 = result.join(','); 
console.log(result1)

