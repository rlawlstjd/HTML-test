// condition1.js 
// 조건문(if)

let firstNumber = 5; 
// firssNumber 값이 홀수이면 '홀수'입니다. % 나머지 연산자를 사용함
//  .. 값이 짝수이면 '짝수' 입니다. 

if (++firstNumber % 2 == 0 ){
  console.log('짝수입니다.'); 
} 
if (firstNumber % 3 == 0) {
  console.log(firstNumber + '은 3의 배수입니다.');
} else {
  console.log(firstNumber + '은 2 또는 3의 배수가 아닙니다.'); 
}