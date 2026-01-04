export function hexToPixel(q, r, size, cx, cy) {
  return {
    x: size * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r) + cx,
    y: size * (3 / 2 * r) + cy
  };
}
export const DIRECTIONS = [
  { q: 1, r: 0 }, { q: -1, r: 0 },
  { q: 0, r: 1 }, { q: 0, r: -1 },
  { q: 1, r: -1 }, { q: -1, r: 1 }
];