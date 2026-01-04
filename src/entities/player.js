export class Player {
  constructor() { this.q = 0; this.r = 0; }
  move(dq, dr, grid) {
    const nq = this.q + dq, nr = this.r + dr;
    if (grid.has(nq, nr)) {
      this.q = nq; this.r = nr; return true;
    }
    return false;
  }
}