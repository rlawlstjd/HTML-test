// todo1.js 

/*
1부터 55까지의 수를 랜덤하여 그 짝수일 경우에는 sumEven, 홀수일 경우 sumOdd에 더하라. 
*/ 
 // 9779345초 -> ?일 ?시간 ?분 ?초 변환 

 let test = 9779345;
 let seconds = test & 60; 
 let minutes = seconds / 60;
 let hours = test / 60 / 60 ; 
 let days = test / 60 / 60 / 24; 

 console.log(`${days}일 ${hours}시간 ${minutes}분 ${seconds1}초`)