const game_win = document.getElementById('game');
const player = document.getElementById('player');
const sprite_img = document.getElementById('player_sprite');
player.style.position = 'absolute';

let x = 0;
let y = 0;
let time = 0;
const maxX = game_win.clientWidth - player.offsetWidth;
const maxY = game_win.clientHeight - player.offsetHeight;

//Keyboard events
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

//Mouse events???

//Drag and Drop?

function updated() {
  time += 1;
  console.log(time);
}

updated();
// Challenge Requirements
// 1. Interactive Feature Design and implement at least one new interactive feature for your existing
// website. This could include a dynamic list, interactive gallery, quiz, registration
// form, min-game, or another feature of your choosing.
// 2. Event Handling Implement at least 2-3 different JavaScript event types appropriate to your
// chosen feature. Consider mouse, keyboard, form, focus, pointer, drag-and-drop,
// or browser events. Your chosen events should contribute meaningfully to the
// application’s functionality.
// 3. Dynamic DOM
// Manipulation
// Use JavaScript to dynamically create, modify, remove, or reposition HTML
// elements in response to user interactions.
// 4. Application State Use JavaScript variables, arrays, or objects to track information relevant to your
// feature. Apply conditional logic to determine how your application responds to
// user interactions and changes in state.
// 5. User Feedback Ensure your feature provides clear visual feedback when users interact with it.
// Where applicable, include input validation, error messages, selection indicators,
// or other feedback mechanisms not reliant on the console.
// 6. GitHub
// Deployment
// Commit and push your updated website files to GitHub. Verify that the latest
// version is accessible through your existing GitHub Pages URL.
