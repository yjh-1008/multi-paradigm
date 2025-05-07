// type Evaluatable<A, B> = [(...args: A[]) => B, ...A[]];
// function evaluation<A, B>(expr: Evaluatable<A, B>): B {
//   const [fn, ...args] = expr;
//   return fn(...args);
// }
// const add = (a: number, b: number) => a + b;
// const result = evaluation([add, 1, 2]);
// console.log(result); //3
var FxIterable = /** @class */ (function () {
    function FxIterable(iterable) {
        this.iterable = iterable;
    }
    //이터레이터 객체 반환
    FxIterable.prototype[Symbol.iterator] = function () {
        return this.iterable[Symbol.iterator]();
    };
    //filter 메서드 추가
    FxIterable.prototype.filter = function (fn) {
        return new FxIterable(filter(fn, this.iterable));
    };
    FxIterable.prototype.reject = function (fn) {
        return this.filter(function (a) { return !fn(a); });
    };
    return FxIterable;
}());
//JavaScript는 이 구조 분해 할당을 처리하기 위해 내부적으로 이터레이터를 사용.
var fx = new FxIterable([1, 2, 3]);
var iter = fx.filter(function (a) { return a % 2 === 0; });
console.log(iter);
