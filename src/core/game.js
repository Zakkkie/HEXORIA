import { render } from "./renderer.js";
export function startGame(ctx, canvas, state, config) {
  function loop() {
    render(ctx, canvas, state.grid, state.player, config);
    requestAnimationFrame(loop);
  }
  loop();
}