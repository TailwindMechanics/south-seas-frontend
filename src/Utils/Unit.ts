//path: src\Utils\Unit.ts

export function X(input: number): number {
  const scaleFactor = innerWidth / 100 / 2;
  return scaleFactor * input;
}

export function Y(input: number): number {
  const scaleFactor = innerHeight / 100 / 2;
  return scaleFactor * -input;
}
