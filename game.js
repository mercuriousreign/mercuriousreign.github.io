const game_win = document.getElementById('game')
const player = document.getElementById('player')
const sprite_img = document.getElementById('player_sprite')
player.style.position = 'absolute'
const player2 = document.getElementById('player2')
const player3 = document.getElementById('player3')
const scoring = document.getElementById('scoring')
const HP = document.getElementById('HP')

let time = 0
const maxX = game_win.clientWidth - player.offsetWidth
const maxY = game_win.clientHeight - player.offsetHeight
let x = game_win.clientWidth / 2
let y = game_win.clientHeight / 2
let score = 0
let moving = false

//Keyboard events
document.addEventListener('keydown', (event) => {
  if (!moving) {
    sprite_img.src = 'img/sprite-walk.gif'
    moving = true
  }

  if (event.key === 'ArrowUp') {
    y -= 10
  }
  if (event.key === 'ArrowDown') {
    y += 10
  }
  if (event.key === 'ArrowLeft') {
    x -= 10
    player.style.transform = 'scaleX(1)'
  }
  if (event.key === 'ArrowRight') {
    x += 10
    player.style.transform = 'scaleX(-1)'
  }

  x = Math.max(0, Math.min(maxX, x))
  y = y

  player.style.left = x + 'px'
  player.style.top = y + 'px'
})

document.addEventListener('keyup', (event) => {
  sprite_img.src = 'img/sprite-stand.gif'
  moving = false
})

//Mouse events???
document.addEventListener('mousemove', (event) => {
  player2.style.left = event.clientX
  player2.style.top = event.clientY
})
//drag and drop
player3.addEventListener('mousedown', (event) => {
  console.log('drag is happening')
  player3.style.left = event.clientX
  player3.style.top = event.clientY
})

player3.addEventListener('mouseover', (event) => {
  console.log('mouse over is happening')
  // score += 1
  // scoring.textContent = score
  // player3.style.left = event.clientX;
  // player3.style.top = event.clientY;
})

// document.addEventListener('visibilitychange', (event) => {
//   console.log('page is showing');
//   player3.style.left += 10;
// });

// const mobs = setInterval(() => {
//   console.log('interval is showing');
//   time += 1;
//   player3.style.left = time + 'px';
// });

const mobbat_summon = setInterval(() => {
  let mob1 = document.createElement('img')
  mob1.style.position = 'absolute'
  mob1.src = 'img/Stirge-fly.gif'
  // mob1.style.backgroundColor = 'red'
  // mob1.style.width = '72px'
  // mob1.style.height = '72px'
  mob1.classList.add('mobs')
  mob1.style.top = Math.floor(Math.random() * game_win.clientHeight)
  game_win.appendChild(mob1)

  mob1.addEventListener('mouseover', () => {
    // mob1.remove(self)
    console.log('mouse over mob happening')
    score += 1
    scoring.textContent = score
    game_win.removeChild(mob1)
  })

  setTimeout(() => {
    // game_win.replaceChildren(mob1)
    //game_win.replaceChildren(mob1)
    game_win.removeChild(mob1)
  }, 3000)
}, 2000)

const mobeye_summon = setInterval(() => {
  let mob1 = document.createElement('img')
  mob1.style.position = 'absolute'
  mob1.src = 'img/Evil_eye-move.gif'
  // mob1.style.backgroundColor = 'red'
  // mob1.style.width = '72px'
  // mob1.style.height = '72px'
  mob1.classList.add('mobs')
  mob1.style.top = Math.floor(Math.random() * game_win.clientHeight)
  game_win.appendChild(mob1)

  mob1.addEventListener('mouseover', () => {
    // mob1.remove(self)
    console.log('mouse over mob happening')
    score += 1
    scoring.textContent = score
    game_win.removeChild(mob1)
  })

  setTimeout(() => {
    // game_win.replaceChildren(mob1)
    //game_win.replaceChildren(mob1)
    game_win.removeChild(mob1)
  }, 3000)
}, 2000)

let mob_x = 0
const mobs_move = setInterval(() => {
  m = document.querySelectorAll('.mobs')
  mob_x += 1
  m.forEach((x) => {
    x.style.right = mob_x + 'px'
  })
}, 16)

// let m = document.querySelectorAll('mobs')
// m.forEach((x) => {
//   mob_x = 0
//   setInterval(() => {
//     mob_x += 1
//     x.style.left = mob_x + 'px'
//     console.log('its happening')
//   })
// })

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
