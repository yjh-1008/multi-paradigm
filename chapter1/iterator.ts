//done이 false인 경우와 value가 T 타입인 값을 나타냄, 반복자가 아직 완료되지 않았음을 의미
interface IteratorYieldResult<T> {
  done?: false;
  value: T;
}

//done이 true인 경우와 value가 undefined인 값을 나타냄, 반복자가 완료되었음을 의미
interface IteratorReturnResult {
  done: true;
  value: undefined;
}

//next 메서드를 가진 인터페이스로 IteratorYieldResult<T> 또는 IteratorReturnResult 타입을 반환
interface Iterator<T> {
  next(): IteratorYieldResult<T> | IteratorReturnResult;
}
