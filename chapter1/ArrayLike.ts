/*
interface ArrayLike<T> {
  readonly length: number;
  readonly: [n:number]:T;
}
*/
//ArrayLike : 0부터 시작하는 number 키와 length 속성을 가진 타입.
class ArrayLikeIterator<T> implements Iterator<T> {
  private index = 0;
  constructor(private arrayLike: ArrayLike<T>) {}

  next(): IteratorResult<T> {
    if (this.index < this.arrayLike.length) {
      return {
        value: this.arrayLike[this.index++],
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  }
}

//지연 평가를 활용한 reverse 함수
// 사전에 모든 값을 뒤집지 않고 필요한 값만 하나씩 반환
function reverse<T>(arrayLike: ArrayLike<T>): Iterator<T> {
  let idx = arrayLike.length;
  return {
    next() {
      if (idx === 0) {
        return {
          value: undefined,
          done: true,
        };
      } else {
        return {
          value: arrayLike[--idx],
          done: false,
        };
      }
    },
  };
}

function map<T, U>(
  transform: (value: T) => U,
  iterator: Iterator<T>
): Iterator<U> {
  return {
    next(): IteratorResult<U> {
      const { value, done } = iterator.next();
      return done ? { value, done } : { value: transform(value), done };
    },
  };
}

const array = [1, 2, 3];
const iterator = map((value: number) => value * 2, reverse(array));

const arrayLike: ArrayLike<number> = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

const iterator: Iterator<number> = new ArrayLikeIterator(arrayLike);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
