// this는 크게 5가지로 나눈다 

// 전역공간 window, global 
// 전역공간에서 호출하면 window, global 객체가 나온다.

// 함수내부
// 함수내부에서 호출시 default가 window 객체이다. 다만 값은 바뀔수 있다.

// 메소드 호출시 ex) b:function(){ .. 구현 }
// 메소드 호출하는 ex) a.b()라고 호출시 .b까지가 this라고 보면 된다. 
// 즉 함수는 (전역객체의) 메소드다! 라고 말할 수 있다.

// callback
// 생성자함수
// 기본적으로 함수의 this와 같습니다.
// 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따릅니다.
// 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따릅니다.

// 생성자 함수
// 인스턴스를 뜻한다.

var a = 10;
var obj = {
    a: 20,
    b: function(){
        var self = this;
        console.log(this.a);

        function c() {
            console.log(this.a);
            console.log(self.a);
        }
        c();
    }
}
obj.b();

var a = function a(x,y,z){
    console.log(this,x,y,z);
}

var b = {
    c : 'eee'
};

a.call(b,1,2,3);

a.apply(b,[1,2,3]);

// bind 컬백함수를 통해서 this를 전달할 수 있다. 중요!!
var c = a.bind(b);
c(1,2,3);

var d = a.bind(b,1,2);
d(3);

// 생성자 함수
function Person(n,a){
    this.name = n;
    this.age = a;
}
var gomuGom = new Person('고무곰',30);
console.log(gomuGom);
