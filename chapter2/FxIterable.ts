function forEach<A>(f: (a: A) => void, iterable: Iterable<A>): void {
  for (const a of iterable) {
    f(a);
  }
}

// class FxIterable<A> {
//   private iterable: Iterable<A>;

//   constructor(iterable: Iterable<A>) {
//     this.iterable = iterable;
//   }

//   map<B>(f: (a: A) => B, iterable: Iterable<A>): FxIterable<B> {
//     return new FxIterable(map((a) => f(a), this.iterable));
//   }

//   filter(f: (a: A) => boolean, iterable: Iterable<A>): FxIterable<A> {
//     return new FxIterable(filter((a) => f(a), this.iterable));
//   }

//   reduce<Acc>(f: (acc: Acc, a: A) => Acc, acc: Acc): Acc {
//     return reduce(f, acc, this.iterable);
//   }

//   forEach(f: (a: A) => void): void {
//     return this.forEach(f, this.iterable);
//   }
// }
