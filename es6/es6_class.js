// 실제 클래스가 생긴건 아님.. 클래스처럼 사용할 수 있음.
// es6 class

class Health {
    constructor(name,lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth(){
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health("crong");
console.log(toString.call(Health));

// object assign 메서드
// 클래스 모듈을 만드는 방법

