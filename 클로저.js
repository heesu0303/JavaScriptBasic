const myFunc = function () {
    let a = 1; // 클로저 공간
    let b = 2;
    
    // 클로저 함수
    const myFunc2 = function () {
        let b = 5;
        let c = 6;
        
        a = a + b + c;
        console.log(a);
    }
    return myFunc2;
}

const innerFunc = myFunc();

innerFunc();

// myFunc 함수는 myFunc2 를 반환합니다.
// 이때 myFunc 함수는 return 키워드를 만나서 종료합니다. 그리고 안에 있는 프로퍼티들을 삭제합니다.