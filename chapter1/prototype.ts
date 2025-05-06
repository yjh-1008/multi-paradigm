// function forEach(f: Function, iterable: Iterable<any>) {
//   for (const i of iterable) {
//     f(i);
//   }
// }

// function forEachOfWhile(f: Function, iterable: Iterable<any>) {
//   const iterator = iterable[Symbol.iterator]();
//   let result = iterator.next();
//   while (!result.done) {
//     f(result.value);
//     result = iterator.next();
//   }
// }

// function* map(f: Function, iterable: Iterable<any>) {
//   for (const i of iterable) {
//     yield f(i);
//   }
// }

function map(f: Function, iterable: Iterable<any>) {
  const iterator = iterable[Symbol.iterator]();

  return {
    next() {
      const { done, value } = iterator.next();
      return { value: done ? undefined : f(value), done };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

function filter(f: Function, iterable: Iterable<any>) {
  const iterator = iterable[Symbol.iterator]();

  return {
    next() {
      while (true) {
        const { done, value } = iterator.next();
        if (done) return { done, value };
        if (f(value)) return { value };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

console.log(filter((x: number) => x % 2, [1, 2, 3, 4, 5]));

// function take(limit: number, iterable: Iterable<any>) {}
