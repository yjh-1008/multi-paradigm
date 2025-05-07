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

class FxIterable<A> {
  constructor(private iterable: Iterable<A>) {}
  //이터레이터 객체 반환
  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  //filter 메서드 추가
  filter(fn: (value: A) => boolean) {
    return new FxIterable(filter(fn, this.iterable));
  }
  reject(fn: (value: A) => boolean): FxIterable<A> {
    return new FxIterable(filter((a: A) => !fn(a), this.iterable));
  }

  toArray() {
    return [...this];
  }

  // this가 뭐야?
  // this는 현재 객체를 참조하는 키워드
  // 현재 객체는 FxIterable 클래스의 인스턴스
  // 즉, this는 FxIterable 클래스의 인스턴스를 참조하는 키워드
  // 이 클래스의 인스턴스는 이터레이터 객체를 반환하는 [Symbol.iterator] 메서드를 가지고 있음
  // 이 메서드는 현재 객체를 반환하므로, this는 현재 객체를 참조하는 키워드
  to<R>(converter: (iterable: this) => R): R {
    return converter(this);
  }
  chain<B>(f: (iterable: this) => Iterable<B>): FxIterable<B> {
    return fx(f(this));
  }
}
//JavaScript는 이 구조 분해 할당을 처리하기 위해 내부적으로 이터레이터를 사용.
const fx = new FxIterable([1, 2, 3]);

const iter = fx.filter((a) => a % 2 === 0);

console.log(iter);
