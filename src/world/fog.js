import { DIRECTIONS } from "./hexMath.js";
export function revealWithNeighbors(grid, q, r) {
  const c = grid.get(q, r);
  if (c) c.revealed = true;
  for (const d of DIRECTIONS) {
    const n = grid.get(q + d.q, r + d.r);
    if (n) n.revealed = true;
  }
}