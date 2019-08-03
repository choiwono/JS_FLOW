// CLOSURE로 PRIVATE MEMBER 만들기
// 함수에서 private 변수와 동일(지역변수를 사용하는 방법)
// 1. 함수에서 지역변수 및 내부함수 등을 생성한다
// 2. 외부에서 노출시키고자 하는 멤버들로 구성된 객체를 return 한다.
// -> return한 객체에 포함되지 않은 멤버들은 private 하다.
// -> return한 객체에 포함된 멤버들은 public 하다. 

var createCar = function(f,p){
    var fuel = f;
    var power = p;
    var total = 0;
    return { 
        // return 할때의 정보만 기억하고 리턴된다. 즉 위의 지역변수의 정보는 포함되지 않는다.
        run: function(km){
            var wasteFuel = km / power;
            if(fuel < wasteFuel){
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            total += km;
        }
    }
};
var car = createCar(10,2);
car.run(30);

