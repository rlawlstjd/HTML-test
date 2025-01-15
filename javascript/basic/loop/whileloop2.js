// whileloop2.js

// 입력한 값중에서 제일 큰 값을 출력


let num = 0 ; 
let max = 0; 
let arr = []; 
while (true){
  str = prompt("숫자를 입력해주세요"); 
  arr[num++] = str
  if(str == 'stop'){
    break; 
  } else {
    if ( max < str){
      max = parseInt(str); 
    }
  } 
  
  console.log(max); 
  console.log(arr); 
}





/*let num = 0;
let max = 0;  
while (true){
 let points = []; 
  points[num] = prompt("숫자를 입력해주세요"); 
  if (points[num] == "stop"){
    break;
  }
}*/