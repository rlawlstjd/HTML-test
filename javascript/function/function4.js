//function4.js
// 이벤트 - 이벤트 핸들러. 
let item = document.querySelector('button'); 
console.log(item); 
  // querySelector() = 함수  

item.addEventListener('click', function(){
  alert('마우스가 클릭됨'); 

});

item.addEventListener('mouseover' , function() { // 익명함수 ... 
  item.style.backgroundColor = 'yellow'; 
});

document.querySelector('button').addEventListener('mouseout', function(){
  document.querySelector('button').style.backgroundColor ='';
});



