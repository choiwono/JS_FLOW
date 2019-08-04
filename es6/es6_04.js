// 간단히 객체 생성하는 방법..
function getObj(){
    const name = "crong";
    const getName = function(){
        return name;
    }
    const setName = function(newname){
        name = newname;
    }
    const printName = function(){
        console.log(name);
    }
    /*return {
        getName : getName,
        setName : setName
    }*/
    // 위의 형태를 아래로 생략가능
    return { getName, setName }
}

var obj = getObj();
console.log(obj.getName());

//Destructuring 문법, 디스트럭팅
// 배열값을 바로 받을수도 있고, 매개변수면 다 사용가능
// 매개변수 및 배열 등 많은 곳에서 활용이 가능하다.

let data = ["crong","honux","jk","jinny"];
let [jisu,,jung] = data;
console.log(jisu,jung);

