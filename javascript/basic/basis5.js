
for (let i = 1;  i<=9; i++){
  document.write(`<div class="dan"> <h3> ${i}단 </h3>`); 
  for (let j = 1; j<=9; j++){
    document.write(`${j} X ${i} =  ${i *j} <br> `); 
  }
  document.write(`</div>`); 

  if (i === 5){
    break;
  }
}