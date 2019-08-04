// 프로토타입
// 생성자함수..
function Person(n,a){
    this.name = n;
    this.age = a;
}

Person.prototype.setOlder = function(){
    this.age += 1;
}
Person.prototype.getAge = function(){
    return this.age;
}

var gomu = new Person('고무곰',30);
var iu = new Person('아이유',25);

Person.prototype.age = 100;
gomu.__proto__.setOlder();
console.dir(gomu.__proto__.getAge());

gomu.setOlder();
console.dir(gomu.getAge());

// 프로토타입 체이닝

