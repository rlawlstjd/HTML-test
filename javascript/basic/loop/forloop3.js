// forloop3.js
let score1 = 90; 
let sum = 0; 

let numAry = [10, 20, 30, 40, 50]; // 배열 만들어짐 
numAry[4] = 50 ; 
numAry[5] = 60 ; 
numAry[6] = 70 ; 
numAry[7] = 80 ; 

//6번째 위치값을 7번째로 이동. 
//7번째 위치값을 6번째로 이동. 
let pos = 1
let tmp = numAry[pos + 1];
numAry[pos + 1] = numAry[pos]; 
numAry[pos] = tmp; 

document.write(numAry[6]); 
document.write(numAry[7]); 

 