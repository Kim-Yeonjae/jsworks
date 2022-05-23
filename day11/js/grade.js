/* 학점 계산 프로그램 
90-100: a
80-90: b
70-80: c
60-70: d
60점 미만: f
로 계산*/


//입력(변수 선언 및 값 저장)

var score = 85;
var grade = ""; //문자형 변수 초기화

//연산(if 조건문) 및 출력
if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else{
    grade = "F";
}
document.write("학점은 <span class='access'>" + 
            grade +"</span>입니다")
