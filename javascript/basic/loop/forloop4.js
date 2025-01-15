//forloop4.js
//Math.random() 을 사용해 0보단 크거나 같고 1보다는 작음
// 50부터 100사이의 값 

let scores = [];  
//10명의 학생 점수를 임의로 만들겠습니다. 

for (let i=0; i<9; i++){
  scores[i] = parseInt((Math.random()*51)+50);
}
console.log(scores); 

let sum = 0; 

for (let i=0; i<scores.length; i++){
  sum += scores[i]; 
}

let average = sum / scores.length; 
document.write(parseInt(average)); 

//max 
let a; 
let b;
let tmp; 
for (let i=0; i<scores.length; i++){
  if ((a = scores[i]) < (b = scores[i+1])){
    tmp = a; 
    a = b; 
    b = tmp; 
  }
}

document.write(sc)