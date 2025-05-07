// function double(x: number): number;
// function double(a: string): string;
function double(a: number | string): number | string {
  if (typeof a === "number") {
    return a * 2;
  }
  return a + a;
}
const a = double(1);
const b = double("hello");
