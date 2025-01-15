//forloop2.js 
//1부터 10까지 짝수값



for (let i=2; i <=9; i++){
  document.write(`<div class="dan"> <h1>${i}단</h1>`);
  for (let j=1; j<=9; j++){
    document.write(`${i} X ${j} = ${i * j} <br>`);
  }
  document.write(`</div class="dan">`)
}

