function* map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  for (const a of iterable) {
    yield f(a);
  }
}

const mapped = map((a) => parseInt(a), ["1", "2", "3"]);
