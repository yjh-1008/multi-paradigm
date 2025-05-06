function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

function* yieldKeyword() {
  yield 1;
  yield* [2, 3];
  yield 4;
}

function* reverse<T>(arrayLike: ArrayLike<T>): IterableIterator<T> {
  let idx = arrayLike.length;
  while (idx > 0) {
    yield arrayLike[--idx];
  }
}

const it = yieldKeyword();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// const it = generator();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
