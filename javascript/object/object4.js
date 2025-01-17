//object4.js
//1일의 요일이 무엇인지 , 막날이 언제인지 . ( 달력만들기 필수 ! )
let month = 1; //2월 
let date = 0; // date 0 은 전월 마지막날 
let a = 'hello'; 
let b = 'hello'; 
console.log(a ==b); 

let today = new Date(); // date주소값이 다름 
let now = new Date();   // 주소값이 다름 ,, 담겨져 있는 위치의 . 
console.log(today.getTime == now.getTime); 
console.log(today == now); 
today.setMonth(month);  // 2월 = 3-1
today.setDate(date); // 날짜 변경 메소드 setDate(); 
//today = new Date(2024, 4, 3, 15, 30, 22); 

console.log(today, today.getDay(), today.getMonth()); // month는 -1 day도 -1

today = new Date(2000); 
// 2022년 5월 
console.log(today.getMilliseconds()); 
console.log(today); 