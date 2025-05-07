function fx<A>(iterable: Iterable<A>) {
  return new FxIterable(iterable);
}
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
function* map(f: Function, iterable: Iterable<any>) {
  for (const i of iterable) {
    yield f(i);
  }
}
/**
 * this → 현재 FxIterable 인스턴스

this.iterable → 우리가 생성자에서 받은 iterable 값 (Array, generator, etc.)

this.iterable[Symbol.iterator]() → 원래 iterable의 이터레이터를 꺼내옴

즉, FxIterable 인스턴스를 for..of로 순회하거나 ...로 풀면:

JS는 FxIterable[Symbol.iterator]()를 호출

이 메서드에서 this.iterable[Symbol.iterator]()를 호출

실제로 안에 있던 데이터 (Array, generator)의 이터레이터가 동작


 */
class FxIterable<A> {
  constructor(private iterable: Iterable<A>) {}
  //이터레이터 객체 반환
  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  //filter 메서드 추가
  filter(fn: (value: A) => boolean) {
    // console.log(this.iterable, "1", filter(fn, this.iterable).next());
    return fx(filter(fn, this));
  }
  reject(fn: (value: A) => boolean): FxIterable<A> {
    return new FxIterable(filter((a: A) => !fn(a), this.iterable));
  }

  toArray() {
    // console.log(this.iterable);
    return [...this.iterable];
  }

  // this가 뭐야?
  // this는 현재 객체를 참조하는 키워드
  // 현재 객체는 FxIterable 클래스의 인스턴스
  // 즉, this는 FxIterable 클래스의 인스턴스를 참조하는 키워드
  // 이 클래스의 인스턴스는 이터레이터 객체를 반환하는 [Symbol.iterator] 메서드를 가지고 있음
  // 이 메서드는 현재 객체를 반환하므로, this는 현재 객체를 참조하는 키워드
  to<R>(converter: (iterable: Iterable<A>) => R): R {
    return converter(this);
  }
  chain<B>(f: (iterable: this) => Iterable<B>): FxIterable<B> {
    return fx(f(this));
  }

  map<B>(f: (value: A) => B): FxIterable<B> {
    console.log(map(f, this.iterable));
    return fx(map(f, this.iterable));
  }
}

const sorted = fx([1, 2, 3])
  .filter((a) => a % 2 === 0)
  .to((iterable) => [...iterable]);

// .map((a) => a + 1);
// const [first, second] = ;
console.log(sorted);
// sorted.to((iterable) => [...iterable]);
//JavaScript는 이 구조 분해 할당을 처리하기 위해 내부적으로 이터레이터를 사용.
// const fx = new FxIterable([1, 2, 3]);

// const iter = fx.filter((a) => a % 2 === 0);
