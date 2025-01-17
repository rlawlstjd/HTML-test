//object1.js

let obj = {}; // 객체(인스턴스); 
obj = new Object(); // 생성자 

obj.title = "이것이자바다"; 
obj['price'] = 30000; 
// obj.title == obj['title']; 

console.log(obj)

let today = new Date(); 
console.log(today.getFullYear + '년도');


let numAry= [10,20,30]; 
console.log(numAry)

numAry.push(40)
numAry.unshift(5); 
numAry.splice(1,1 ,8) // 5, 10, 20, 30, 40 // splice(0,0) 0번째 0개를 삭제 , splice(0,0,0) 0번째 0개를 0으로 대체 

