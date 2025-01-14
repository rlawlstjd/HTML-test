/* 278 시간 => 11일 몇시간입니다. 
  80345 분 => ?일 ?시간 ?분 입니다. 
*/  

let time = parseInt(prompt("시간을 입력하세요")); 

let days = time / 24; 
let hour1 = time % 24; 

console.log(`${parseInt(days)}일 ${parseInt(hour1)}시간 입니다. `);

let time1 = Number(prompt("분을 입력하세요")); 

let hour = time1 % 60 ; 
let days1 = time1 / 60 / 60 ; 
let minute = time % 60; 

console.log(`${parseInt(days1)}일 ${parseInt(hour)}시간 ${parseInt(minute)}분입니다.`)
