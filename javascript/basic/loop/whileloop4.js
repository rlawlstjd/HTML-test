// whileloop4.js
let members = []; 

let member1 = {
  member_id: "user01", 
  member_name: "홍길동", 
  point: 80
};

let member2 = {
  member_id: "user02", 
  member_name: "신현욱", 
  point: 90
}; 

let member3 = {
  member_id: "user03", 
  member_name: "김민식", 
  point: 85
}
let max = members[0];  
let maxId = ""; 
members = [member1, member2, member3]; 



while(true){
  let searchName = prompt("찾을 친구 이름 입력:"); 
  if(searchName == 'stop'){
    bkrea; 
  }
  let notExists = true;  //존재 여부를 담아놓기. 
  for (let i =0 ; i < members.length; i++){
    if (members[i].member_name == searchName){
      console.log(`${searchName}의 포인트는 ${members[i].point}`); 
      exist = true; 
      break; 
    }
    extist = false; 
  }
  if (! extist){
    alert("찾는 친구이름이 없습니다."); 
  }
} // end of program
console.log(`end of program`); 