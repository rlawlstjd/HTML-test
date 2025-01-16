//function3.js
/**
 * 매개변수 2개: 
 * 두 개의 값을 더한 다음에 평균을 구함. 
*/



function getAverage(num1 = 0, num2 = 0){ // =0 은 
  let sum = 0 , avg =0; 
   sum = num1 + num2; 
   avg = sum / 2;
   
   return avg; 
}

let avg1 = getAverage(10,30); 
let avg2 = getAverage(30,50); 
let result = getAverage(getAverage(10,30), getAverage(30, 50)); 
console.log(`평균: ${result}`);  