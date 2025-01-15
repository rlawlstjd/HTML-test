let n = 10 ; 
let sum = 0 ; 

for (let i = 1; i <= n; i++){
  if ( i % 2 ===1){
    console.log(i); 
    continue
     
  }
  sum += i;

}

console.log(sum)