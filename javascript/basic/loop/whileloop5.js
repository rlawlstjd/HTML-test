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
//  이름, 주소, 전화번호의 정보를 가진 세명의 멤버 (member 1, 2, 3)를 멤버베열에 ( members[] ) 집어 넣어서 for문으로 member1,2,3의 
// 이름 주소 전화번호를 출력하시오 