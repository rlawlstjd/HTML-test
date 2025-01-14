//condition4.js

const obj = {
  name: "홍길동", 
  age: 20, 
  showName: function(){ // 메소드 
    console.log(obj.name); 
  }
}

obj.showName();

// 1부터 10 사이의 임의수 출력 
let num1 = (parseInt(Math.random()*100)); // 0 <= x <1 값의 출력  


let sumEven = 10; // 짝수의 값은 sumEven에 합하기. 
let sumOdd = 20;  // 홀수의 값은 sumOdd에 합하기. 

if (num1 % 2 ){
  sumEven += num1
} else {
  sumOdd += num1 
}

console.log(sumEven); 
console.log(sumOdd); 