export function wait(number: number) {
  return new Promise((res) => setTimeout(res, number));
}
