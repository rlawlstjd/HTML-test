//ex 1 
//연습문제. 
let myfriends = []; 
myfriends.push({name:"홍길동", score: 70, kscore: 70, gender: 'Female'}); 
myfriends.push({name:"신현욱", score: 80, kscore: 60, gender: 'Female'}); 
myfriends.push({name:"김민식", score: 90, kscore: 70, gender: 'Male'});
myfriends.push({name:"석지욱", score: 95, kscore: 70, gender: 'Female'});




// filter: 여학생의 영어평균 미만 -> underAvgAry 저장. 
myfriends.filter(function(item, index, ary){
  let arr = [70, 80, 95];
  let sum = 0;  
  for(let i=0; i<arr.length; i++){
    sum += arr[i]; 
 } 
 
   let avgSum = sum / arr.length; 
   
   if (item.gender == 'Female'){
   if (item.score >= avgSum){
    console.log(item.name); 
   }
  }

  /*
  myFriends.forEach(fucntion(){
    if(item.gender=='femal}
  
  });
  */
})



