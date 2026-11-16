const game_win = document.getElementById('game');
const player = document.getElementById('player');
const sprite_img = document.getElementById('player_sprite');
player.style.position = 'absolute';

let x = 0;
let y = 0;

const maxX = game_win.clientWidth - player.offsetWidth;
const maxY = game_win.clientHeight - player.offsetHeight;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    y -= 10;
  }
  if (event.key === 'ArrowDown') {
    y += 10;
  }
  if (event.key === 'ArrowLeft') {
    x -= 10;
    player.style.transform = 'scaleX(1)';
  }
  if (event.key === 'ArrowRight') {
    x += 10;
    player.style.transform = 'scaleX(-1)';
  }

  x = Math.max(0, Math.min(maxX, x));
  y = y;
  sprite_img.src = 'img/sprite-walk.gif';
  player.style.left = x + 'px';
  player.style.top = y + 'px';
});

document.addEventListener('keyup', (event) => {
  sprite_img.src = 'img/sprite-stand.gif';
});
