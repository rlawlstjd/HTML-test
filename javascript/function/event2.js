

let item = document.querySelector('button.plus'); 
item.addEventListener('mouseover', function(){
  item.style.backgroundColor = 'yellow'; 
});

let item1 = document.querySelector('button.plus'); 
item1.addEventListener('mouseout', function(){
  item1.style.backgroundColor = ""; 
});

//----------------------------------------------------------

let item2 = document.querySelector('button.plus'); 
item2.addEventListener('click', function(){
  let n1 = document.querySelector('#num1').valueAsNumber; 
  let n2 = document.querySelector('#num2').valueAsNumber; 
  let result = document.querySelector('#result').value = n1 + n2; 
});


let item3 = document.querySelector('button.minus'); 
item3.addEventListener('click', function(){
   let a =  document.querySelector('#num1').valueAsNumber; 
   let b =  document.querySelector('#num2').valueAsNumber; 
   let c = document.querySelector('#result').value = a - b; 
});

let item4 = document.querySelector('button.clear'); 
item4.addEventListener('click', function(){
  document.querySelector('#num1').value = ""; 
  document.querySelector('#num2').value = ""; 
  document.querySelector('#result').value = ""; 
});