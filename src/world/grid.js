export class HexGrid {
  constructor(radius) {
    this.cells = new Map();
    for (let q = -radius; q <= radius; q++) {
      for (let r = -radius; r <= radius; r++) {
        if (Math.abs(q + r) <= radius) {
          this.cells.set(`${q},${r}`, { q, r, revealed: false });
        }
      }
    }
  }
  get(q, r) { return this.cells.get(`${q},${r}`); }
  has(q, r) { return this.cells.has(`${q},${r}`); }
  all() { return this.cells.values(); }
}