//spread operator, 펼침연산자.
// 배열을 특정배열에 넣는다거나 끼워넣어야 할때 쉽게 처리가 가능하다.

let pre = [100,200,"hello",null];
let newData = [0,1,2,3, ...pre,4];
console.log(newData);

// 배열을 그대로 전달하고 싶을 경우, apply를 활용할 경우 배열채로 전달할 수 있다.
// 배열을 합치거나 펼쳐진 상태로 새로운 함수의 패러미터의 함수로 사용할때 유용하게 사용할 수 있다.
function sum(a,b,c){
    return a+b+c;
}

let pre2 = [100,200,300];
console.log(sum.apply(null,pre2));
console.log(sum(...pre2));

// es6 from method
// arguments를 통해서 인자값을 보낼 수 있음( 가변적인 파라미터가 있는 경우에는 사용한다. 권장되는 패턴은 아님 )
// 배열.from(arguments) 를 통해서 arguments로부터 배열을 만들 수 있다.
// arguments는 가짜배열, 즉 진짜 배열이 아니기 때문에 배열내의 메소드를 사용하고 싶은 경우 변경해서 사용해야한다.
function addMark(){
    let newArray = Array.from(arguments);
    let newData = newArray.map((value) => {
        return value + "!";
    });
    console.log(newData);
}
addMark(1,2,3,4,5,6,7,8,9);
