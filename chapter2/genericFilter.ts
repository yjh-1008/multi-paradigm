function* filter<A>(
  f: (a: A) => boolean,
  iterable: Iterable<A>
): IterableIterator<A> {
  for (const a of iterable) {
    if (f(a)) {
      yield a;
    }
  }
}
