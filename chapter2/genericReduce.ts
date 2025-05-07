function baseReduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterator: Iterator<A>
): Acc {
  while (true) {
    const { done, value } = iterator.next();
    if (done) break;
    acc = f(acc, value);
  }
  return acc;
}

function reduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterable?: Iterable<A>
): Acc {
  if (iterable === undefined) {
    const iterator = (acc as Iterable<A>)[Symbol.iterator]();
    const { done, value } = iterator.next();
    if (done) {
      return acc;
    }
    return baseReduce(f, f(acc, value), iterator);
  }
  return baseReduce(f, acc, iterable[Symbol.iterator]());
}
