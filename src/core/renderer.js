import { hexToPixel } from "../world/hexMath.js";
export function render(ctx, canvas, grid, player, config) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const cx = canvas.width/2, cy = canvas.height/2;
  for (const cell of grid.all()) {
    const {x,y} = hexToPixel(cell.q, cell.r, config.HEX_SIZE, cx, cy);
    drawHex(ctx, x, y, config.HEX_SIZE,
      cell.revealed ? config.COLORS.visible : config.COLORS.hidden,
      config.COLORS.border);
  }
  const p = hexToPixel(player.q, player.r, config.HEX_SIZE, cx, cy);
  ctx.beginPath();
  ctx.arc(p.x, p.y, config.HEX_SIZE/2, 0, Math.PI*2);
  ctx.fillStyle = config.COLORS.player;
  ctx.fill();
}
function drawHex(ctx,x,y,s,f,st){
  ctx.beginPath();
  for(let i=0;i<6;i++){
    const a=Math.PI/180*(60*i-30);
    const px=x+s*Math.cos(a), py=y+s*Math.sin(a);
    i?ctx.lineTo(px,py):ctx.moveTo(px,py);
  }
  ctx.closePath();
  ctx.fillStyle=f; ctx.fill();
  ctx.strokeStyle=st; ctx.stroke();
}