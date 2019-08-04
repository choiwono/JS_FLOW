// 이벤트 버블링, 불변배열( immutable array )
// const는 값을 재할당할 수 없다. 상수로 사용한다.

function home(){
    const homename = 'my house';
    //homename = "your house";
    console.log(homename);
}
home();

function home2(){
    const list = ["apple","orange","watermelon"];
    list.push("bannaa");
    console.dir(list);
}
home2();

// const는 불변을 의미하는게 아니다. const 같은 경우는 값을 재할당 하는 경우만 방지한다.
// 값을 추가하거나 변경은 가능하다 ( 재할당만 불가능 )
// 불변 array를 만들 수 있다. immutable.js를 통해서 다양한 불변 array를 만들 수 있다.

let str = "hello world ! ^^ ~~";
let matchStr = "hello";

// 문자열의 접두어, 끝나는 문자열를 비교할수 있는 메소드

// 문자열.startsWith("비교할 문자열"); return true or false
// 문자열.endsWith("비교할 문자열"); return true or false
// 문자열.include("문자열"); 문자열이 포함되있는지 확인이 가능하다.
console.log(str.startsWith(matchStr));

// 반복문의 종류 for문, for in, forEach, for of
// for in은 array에서는 사용하지 않는편이 좋다. 이유는 본인이 가지고 있지 않는 상위 함수가 찍힐수도 있다.
// 배열에서는 for in을 사용하면 안된다!! 의도하지 않는 값이 나올 수 있다.