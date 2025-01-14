//basic1.js
/*
  변수 선언 : 이름, 연락처, 주소 선언. 
*/

let myName1= "김진성"; 
let myObj1 = {contact: "000-0000-0000", address: "대구광역시 달성군"};
myName1 = "홍길동"; 
const bloodType = "0";  // const: 변하지 않는 값들을 선언할 때 . 
//booldType = "A"; 
const PI = 3.14 // 프로그램 전체에서 변하지 않는 값으로 선언. 
let largeNumber = 99999999999999999999999999999999999999999999n;

console.log(typeof PI); //변수 자료형을 출력 
console.log(largeNumber); 
console.log(bloodType);
console.log("나의 이름은 " + myName1 + "입니다");
console.log(myObj1);
console.log(`나의 주소는  ${myObj1.address}`); 
 
console.log(`반지금 5인 원의 넓이는 ${5 * 5 * PI}`);

let myInfo = {  // 객체 유형 
  name: "홍길동", 
  age: 20
}; 
console.log(typeof myInfo);

let specialType = null; 
let scores = [10, 20, 30] //배열
console.log(typeof specialType);

