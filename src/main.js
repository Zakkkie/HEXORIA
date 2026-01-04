import { CONFIG } from "./config.js";
import { HexGrid } from "./world/grid.js";
import { Player } from "./entities/player.js";
import { revealWithNeighbors } from "./world/fog.js";
import { initInput } from "./core/input.js";
import { startGame } from "./core/game.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const grid = new HexGrid(CONFIG.MAP_RADIUS);
const player = new Player();

revealWithNeighbors(grid, player.q, player.r);
initInput(player, grid, () => {
  revealWithNeighbors(grid, player.q, player.r);
});

startGame(ctx, canvas, { grid, player }, CONFIG);