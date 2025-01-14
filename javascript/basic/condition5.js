//condition5.js
// 두 수 : 1 ~ 100 까지의 임의의 값을 생성. 
// 큰 수에서 작은수 빼고 그 결과값 출력 

let a = parseInt(Math.random()*100)+1; 
let b = parseInt(Math.random()*100)+1; 
let c = parseInt(Math.random()*100)+1; 
console.log(a); 
console.log(b); 
console.log(c); 

// 두 수 중에서 큰수에서 작은수 빼기 문제 
if (a > b) {
  if (a > c) {
    console.log(a);
  }  else {
    console.log(c);
  }
} else if (b > c){
  console.log(b);
} else {
  console.log(c);
}