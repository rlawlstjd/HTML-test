//function2.js

/**
 * 함수이름: getMax; 
 * 매개변수: 배열 받기 (numAry)
 * 기능 -- 배열의 요소중에서 제일 큰 값을 콘솔에 출력. 
 */

let ary1 = [3, 15, 22, 7]; 
let ary2 = [23, 11, 45, 30]; 
let ary3 = []; 
for (let i=0; i < 5;  i++){
  ary3[i] = parseInt(Math.random() * 50); 
}

function getMax (arr = []){
  let min = arr[0];  
  for (let i=0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i]; 
    }
  }
  return min; 
  //console.log(min); 
}

document.write(getMax(ary1)); 
alert(getMax(ary2)); 
document.write(getMax(ary3)); 
