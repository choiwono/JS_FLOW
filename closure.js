// CLOSURE란?
// 선언 당시의 환경에 대한 정보를 담는 객체(구성환경)
// 함수내부에서 생성된 데이터와 그 유효범위로 인해 발생하는 특수한 현상 / 상태입니다.
// 바나나라고 선언될 당시, 바나나에 대한 정보를 담고 있는 객체라고 볼 수 있다.

// 장점
// 접근권한제어
// 지역변수보호
// 데이터 보존 및 활용

function a(){
    var _x = 1;
    return {
        get x() { return _x; },
        set x(v) { _x = v; }
    }
}
var c = a();
console.log(c.x);

c.x = 10;
console.log(c.x);

function setName(name){
    return function(){
        return name;
    }
}

var sayMyName = setName('고무곰');
sayMyName();

function setCounter(){
    var count = 0;
    return function(){
        return ++count;
    }
}
var count = setCounter();
console.log(count());
