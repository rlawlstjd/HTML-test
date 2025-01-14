// condition3.js
/*
  두개의 숫자를 입력 . 
  2개 짝수 -> "모두 짝수"

  1개 짝수 -> "하나는 짝수 "
  0개면 -> 짝수는 없습니다.
*/

let a = parseInt(prompt("숫자를 입력하세요")); 
let b = parseInt(prompt("숫자를 입력하세요")); 

/*if (a % 2 == 0 ){
  if (b % 2 == 0){
    alert("모두 짝수입니다.");
  } else{
    alert("하나만 짝수 입니다.");
  }
} else{
  alert("짝수는 없습니다."); 
}*/


if ( a % 2 == 0 && b % 2 ==0 ){
  alert("모두 짝수입니다."); 
} else if (a % 2 == 0 || b % 2 ==0){
  alert("하나만 짝수입니다."); 
} else {
  alert("짝수는 없습니다."); 
}