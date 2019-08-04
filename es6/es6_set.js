// 중복없이 유일한 값을 저장한다. 순서는 보장하지 않는다.
// 이미 존재하는지 체크할 때 유용하다.
let mySet = new Set();
//console.log(toString.call(mySet));

mySet.add("wono");
mySet.add("theOther");
mySet.add("wono");
mySet.add("sumin")
console.log(mySet.has("wono"));

mySet.delete("sumin");

mySet.forEach(function(v){
    console.log(v);
})

// weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 더이상 참조하고 있는 값이 없을 경우 가비지컬렉팅이 대상이 된다. 주기적으로 모니터링하고 있다.
// 메모리를 더욱 효율적으로 사용이 가능하다

let arr = [1,2,3,4];
let ws = new WeakSet();

ws.add(arr);
ws.add(function(){});

console.log(ws);
