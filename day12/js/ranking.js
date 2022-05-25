  //순위에 따른 메달 정하기
  let ranking = 3;

switch(ranking){ //ranking = 1
    case 1:
        document.write("금메달<br>")
        break;
    case 2:
        document.write("은메달<br>")
        break;
    case 3:
        document.write("동메달<br>")
        break;
    default:
        document.write("메달 없음<br>")
        break;
}   

  /* 초기값 변수 
    switch(조건식 or 값){
        case 조건 1:
            조건 1이 true이면 실행
            break;
        case 조건 2: 
            조건 2가 true이면 실행
            break;
        default:모든 조건이 false이면 실행
            break; }  */