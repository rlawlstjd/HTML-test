/////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', init); 


function init() {
  console.log(document); 
  document.forms.myForm.addEventListener('submit', function(e){
      e.preventDefault(); //기본 기능 차단. 
      let mid = document.querySelector('input[name="member_id"]').value;  
      let mname = document.querySelector('input[name="member_id"]').value;
      let mpoint = document.querySelector('input[name')
      if(mid == null || mid.length < 5 || mid.length > 20){
        alert("id를 5자 이상 20자 이하로 생성해주세요."); 
        return; // 함수 종료 . 
      }
      console.log(e); 
      // <tr><td>admin</td>.....</tr> 
  });
}

function makeTr(mbr=()){

  let td = document.createElement('td'); 
  let btn = document.createElement('button'); 
  btn.style.backgroundColor = 'yelow'
  btn.innerHTML = '삭제'; 
  td.appendChild(btn); 
  true.appendChild(td); 
}