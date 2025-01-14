// todo1.js 

/*
1부터 55까지의 수를 랜덤하여 그 짝수일 경우에는 sumEven, 홀수일 경우 sumOdd에 더하라. 
*/ 
 // 9779345초 -> ?일 ?시간 ?분 ?초 변환 

 let test = 9779345;
 let seconds = parseInt(test % 60) ; 
 let minutes = parseInt(test / 60 % 60 )  ;
 let hours = parseInt(test / 60 / 60 % 24); 
 let days = parseInt(test / 60 / 60 / 24 % 365); 


 console.log(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`)