/*놀이공원 입장료 계산 프로그램
  취학전 아동 - 1000
  초등학생 - 2000
  중.고등학생 - 2500
  일반인 -3000
  으로 구분(나이)
*/

//입력
var age = 21;
var charge = 0;


//연산 및 출력
if(age < 8){
    document.write("취학전 아동입니다.<br>")
    charge = 1000;
}
else if(age >=8 && age < 14){
    document.write("초등학생입니다.<br>")
    charge = 2000;
}
else if(age >=14 && age<20){
    document.write("중, 고등학생입니다.<br>")
    charge = 2500;
}
else{
    document.write("일반인입니다.<br>")
    charge = 3000;
}
document.write("입장료는<span class='access'>"
        + charge + "</span>원입니다.")




