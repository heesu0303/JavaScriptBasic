function makeClosure() {
    // 클로저 공간. 비공개 프로퍼티
    const val1 = 100;
    const val2 = 200;

    return {
        getVal1: function () { return val1 },
        getVal2: function () { return val2 },
    }
}
let result = makeClosure();
console.log(result.getVal1());
console.log(result.getVal2());

// class에서 private 사용해서 접근하는 방식 === 예전 문법에서는 클로저로 만들었다.
// 레거시 코드를 위해서 클로저를 알아두면 좋고 클래스에서 사용하는 private 접근과 동일하다.