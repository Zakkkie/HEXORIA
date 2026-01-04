export function initInput(player, grid, onMove) {
  window.addEventListener("keydown", e => {
    const m = {
      ArrowUp:[0,-1], ArrowDown:[0,1],
      ArrowLeft:[-1,0], ArrowRight:[1,0]
    };
    if (!m[e.key]) return;
    const [dq, dr] = m[e.key];
    if (player.move(dq, dr, grid)) onMove();
  });
}