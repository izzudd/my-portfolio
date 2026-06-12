export const mapNumber = (x: number, a: number, b: number, c: number, d: number) => {
  x = x < a ? a : x;
  x = x > b ? b : x;
  return ((x - a) / (b - a)) * (d - c) + c;
};
