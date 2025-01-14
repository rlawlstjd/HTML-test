//condition2.js
// 입력받은 숫자 => 2의 배수인지 , 또는 3의 배수인지 구분
// 6 => 2와 3의 배수입니다. => 2의 배수입니다. 

let number = parseInt(prompt("숫자를 입력하세요")); 

if (number % 2 == 0 && number % 3 == 0){
  alert('6의 배수입니다.');
} else if (number % 2 == 0){
  alert('2의 배수입니다.');
} else if (number % 3 == 0){
  alert('3의 배수입니다.');
} else {
  alert('다시 입력해주세요.'); 
}