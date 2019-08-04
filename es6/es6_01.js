/* 가장 개선된 자바스크립트, 생산성, 불필요한 반복적인 코드를 줄일수있다.
 해외에서 표준처럼 사용중이다

es6를 지원하지 않는 경우는 babel을 통해서 translate를 통해서 익스플로러 지원이 가능
ES2015 == ES6

ES6의 호환성에 대해서

크롬, 엣지, 사파리, ios에 대한 지원률은 굉장히 높은편
babel을 통해서 변환할 경우 문제없이 서비스가 가능하다.

IE9 까지는 지원률이 높은편입니다.

 */

var name = "global var";

function home(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
    //    console.log(i);
    }
    //    console.log(i);
    if(true){
        let myif = "myif";
    }
    console.log(myif);
}
home();

// let 사용법, 블록 단위로 사용이 가능
// 현재코드에서는 블록바깥에서 호출할 경우 에러발생( var으로 선언된 변수는 블록스코프 체인으로 인해서 현재 자신의
// 블록범위에서 변수를 찾지 못하면 지역변수 -> 전역변수순으로 변수를 찾는다 )