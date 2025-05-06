function naturals(end = Infinity) {
  let n = 1;
  return {
    next() {
      return n <= end
        ? { value: n++, done: false }
        : { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      console.log(this, "aa");
      return this;
    },
  };
}

const naturalIterator = naturals();

console.log(naturalIterator[Symbol.iterator]());
// console.log(naturalIterator.next());
// console.log(naturalIterator.next());
// console.log(naturalIterator.next());
// console.log(naturalIterator.next());
// console.log(naturalIterator.next());

//Iterator: {done, value}객체를 반환하는 next() 메서드를 가진 객체
//Iterable: 이터레이터를 반환하는 [Symbol.iterator]() 메서드를 가진 객체
//IterableIterator: 이터레이션이면서 이터러블한 값
//이터레이션 프로토콜: 이터러블한 값을 생성하는 객체를 만들기 위한 규칙
