// event.js 



let item = document.querySelector('button.plus'); 
item.addEventListener('click', function(){ //valueAsNumber = 숫자를 입력하기 위해서 쓸 것.  
  let n1 = document.querySelector('#num1').valueAsNumber; 
  let n2 = document.querySelector('#num2').valueAsNumber; 
  let result = document.querySelector('#result')['value'] = n1 + n2; 
  console.log(n1+n2); 
});

let item1 = document.querySelector('button.minus'); 
item1.addEventListener('click', function(){
  let n3 = document.querySelector('#num1').valueAsNumber;
  let n4 = document.querySelector('#num2').valueAsNumber;
  let result = document.querySelector('#result').value = n3 - n4; 
});

let item2 = document.querySelector('button.clear'); 
item2.addEventListener('click', function(){
  document.querySelector('#num1').value = document.querySelector('.clear').value; 
  document.querySelector('#num2').value  = document.querySelector('.clear').value;
  document.querySelector('#result').value = document.querySelector('.clear').value;
});
