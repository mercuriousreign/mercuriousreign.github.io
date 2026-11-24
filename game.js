const game_win = document.getElementById('game')
const player = document.getElementById('player')
const sprite_img = document.getElementById('player_sprite')
player.style.position = 'absolute'
const player2 = document.getElementById('player2')
const console_msg = document.getElementById('consolemsg')
const scoring = document.getElementById('scoring')
const HP = document.getElementById('HP')
const gameover = document.getElementById('gameOvermsg')
const game_area = document.getElementById('gamespace')
const welcome_space = document.getElementById('welcomespace')
let mobs = []
let game_state = 'tutorial'

let time = 0
// game_win.style.width = '1000px'
// game_win.style.height = '1000px'
const maxX = game_win.clientWidth - player.offsetWidth
const maxY = game_win.clientHeight - player.offsetHeight
let x = 0
let y = 0
let score = 0
let speed = 20
let moving = false
let HealthPoints = 100
HP.textContent = HealthPoints
HP.style.width = (HealthPoints / 100) * 100 + '%'

player.style.left = x + 'px'
player.style.top = y + 'px'

if (game_state === 'tutorial') {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      start_game()
    }
  })
}

function start_game() {
  game_state = 'game'
  welcome_space.style.display = 'none'

  const mobbat_summon = setInterval(() => {
    let img_insert = document.createElement('img')
    let mob1 = document.createElement('div')
    mob1.style.position = 'absolute'
    img_insert.src = 'img/Stirge-fly.gif'
    mob1.appendChild(img_insert)
    const name = document.createElement('p')
    name.textContent = 'Stirge' + ' lvl' + 20
    mob1.appendChild(name)
    mob1.style.right = '0px'
    mob1.style.width = 'max-content'
    mob1.style.textAlign = 'center'

    mob1.classList.add('mobs')
    mob1.style.top = Math.floor(Math.random() * game_win.clientHeight) + 'px'
    game_win.appendChild(mob1)

    mob1.addEventListener('mouseover', () => {
      console.log('mouse over mob happening')

      score += 1
      scoring.textContent = score
      game_win.removeChild(mob1)
    })

    let pos_y = 0
    let mob_speed = Math.floor(Math.random() * 3) + 1
    let move_y = setInterval(() => {
      pos_y += mob_speed
      mob1.style.right = pos_y + 'px'
      if (pos_y > game_win.clientWidth) {
        mob1.remove()
        clearTimeout(move_y)
      }
    }, 16)
  }, 2000)

  const mobeye_summon = setInterval(() => {
    let img_insert = document.createElement('img')
    let mob1 = document.createElement('div')
    mob1.style.position = 'absolute'
    img_insert.src = 'img/Evil_eye-move.gif'
    mob1.appendChild(img_insert)
    const name = document.createElement('p')
    name.textContent = 'EvilEye' + ' lvl' + 29
    mob1.appendChild(name)
    mob1.style.right = '0px'
    mob1.style.width = 'max-content'
    mob1.style.textAlign = 'center'

    mob1.classList.add('mobs')
    mob1.style.top = Math.floor(Math.random() * game_win.clientHeight) + 'px'
    game_win.appendChild(mob1)
    let pos_y = 0
    let mob_speed = Math.floor(Math.random() * 3) + 1
    let move_y = setInterval(() => {
      pos_y += mob_speed
      mob1.style.right = pos_y + 'px'
      if (pos_y > game_win.clientWidth) {
        mob1.remove()
        clearTimeout(move_y)
      }
    }, 16)
    mob1.addEventListener('mouseover', () => {
      HealthPoints -= 10
      HP.textContent = HealthPoints
      HP.style.width = (HealthPoints / 100) * 100 + '%'

      game_win.removeChild(mob1)
      if (HealthPoints <= 0) {
        game_over()
      }
    })
  }, 3000)

  if (game_state === 'game') {
    //Keyboard events
    document.addEventListener('keydown', (event) => {
      if (!moving) {
        sprite_img.src = 'img/sprite-walk.gif'
        moving = true
      } else if (event.key === 'ArrowUp') {
        y -= speed
      } else if (event.key === 'ArrowDown') {
        y += speed
      } else if (event.key === 'ArrowLeft') {
        x -= speed
        player.style.transform = 'scaleX(1)'
      } else if (event.key === 'ArrowRight') {
        x += speed
        player.style.transform = 'scaleX(-1)'
      } else {
        return
      }

      event.preventDefault()
      x = Math.max(0, Math.min(maxX, x))
      y = Math.max(0, Math.min(maxY, y))

      player.style.left = x + 'px'
      player.style.top = y + 'px'

      let all_mobs = document.querySelectorAll('.mobs')
      all_mobs.forEach((mob) => {
        const mobX = parseInt(mob.style.right)
        const mobY = parseInt(mob.style.top)

        if (Math.abs(mobX - x) < 10 && Math.abs(mobY - y) < 10) {
          mob.remove()
          score += 1
          scoring.textContent = score
        }
      })
    })

    document.addEventListener('keyup', (event) => {
      sprite_img.src = 'img/sprite-stand.gif'
      moving = false
    })

    //Mouse events???
    document.addEventListener('mousemove', (event) => {
      player2.style.left = event.clientX + 'px'
      player2.style.top = event.clientY + 'px'
    })
  }
}

async function getMobs() {
  start_game()
  console.log('clicked button I think')
  let rand = Math.floor(Math.random() * 300) + 100
  console.log('rand number is ', rand)

  try {
    const response = await fetch(
      `https://maplestory.io/api/GMS/270/mob?startPosition=${rand}&count=10`,
    )

    if (!response.ok) {
      //throw new Error(`Error:${response.status}`)
      console_msg.innerText =
        'received error at Initial getmobs + ${response.status}'
    }

    mobs = await response.json()

    if (mobs) {
      const mobrand_summon = setInterval(async () => {
        let mob1 = document.createElement('div')
        mob1.style.position = 'absolute'
        let mobimg = document.createElement('img')
        mob1.style.right = '0px'
        mob1.style.width = 'max-content'
        await getMob(mob1, mobimg)

        mob1.classList.add('mobs')
        mob1.style.top =
          Math.floor(Math.random() * game_win.clientHeight) + 'px'
        game_win.appendChild(mob1)

        mob1.addEventListener('mouseover', () => {
          console.log('mouse over mob happening')

          score += 1
          scoring.textContent = score
          game_win.removeChild(mob1)
        })

        let pos_y = 0
        let mob_speed = Math.floor(Math.random() * 3) + 1
        let move_y = setInterval(() => {
          pos_y += mob_speed
          mob1.style.right = pos_y + 'px'
          if (pos_y > game_win.clientWidth) {
            mob1.remove()
            clearTimeout(move_y)
          }
        }, 16)
      }, 2000)
    }
  } catch (error) {
    console_msg.innerText = 'received error at getmobs' + error
    console.log('recived error at getmobs', error)
  }
}

async function getMob(wrapper, obj) {
  let rand = mobs[Math.floor(Math.random() * mobs.length)]
  try {
    const response = await fetch(
      `https://maplestory.io/api/GMS/270/mob/${rand.id}/render/move`,
    )

    const blob = await response.blob()
    obj.src = URL.createObjectURL(blob)
    const name = document.createElement('p')
    name.textContent = rand.name + ' lvl' + rand.level
    wrapper.appendChild(obj)
    wrapper.appendChild(name)
  } catch (error) {
    console_msg.innerText = 'Error at getMob' + error
    console.log('Error', error)
  }
}

window.addEventListener('resize', () => {
  scoring.textContent = 'Did you resize the window? 🤔'
})

function game_over() {
  game_state = 'gameover'
  let endmsg = document.createElement('h1')
  endmsg.innerText = 'Game Over! the final score is ' + score
  let note = document.createElement('p')
  note.innerHTML = 'press enter to reload'
  welcome_space.replaceChildren()
  welcome_space.appendChild(endmsg)
  welcome_space.appendChild(note)
  welcome_space.style.display = 'flex'
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      location.reload
    }
  })
}
