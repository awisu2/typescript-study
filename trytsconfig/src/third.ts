// error: noImplicitAny = true. not set type to argument
// export function str(str): string {
export function str(str: string): string {
  // error: noImplicitReturns = true. need return all pattern
  // if (str) {
  //   return str
  // }
  return str
}
