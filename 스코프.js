// 스코프 : 변수의 유효 범위
// 전역 스코프, 함수 스코프, 블록 스코프

let val = 1;

console.log(val);

function test() {
    let a = 1;
    let b = 2;
    return a + b;
}

// let a = 20;

console.log(test());


// 함수 안에 정의된 변수는 외부에서는 접근할 수 없다. but 함수 안에선 어디든 접근이 가능합니다.
// 스코프 체이닝!
const myFunc = function () {
    let a = 1;
    let b = 2;
    
    const myFunc2 = function () {
        let b = 5;
        let c = 6;
        
        a = a + b + c;
        console.log(a);
    }
    myFunc2();
}

myFunc();