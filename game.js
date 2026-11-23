const game_win = document.getElementById('game')
const player = document.getElementById('player')
const sprite_img = document.getElementById('player_sprite')
player.style.position = 'absolute'
const player2 = document.getElementById('player2')

const scoring = document.getElementById('scoring')
const HP = document.getElementById('HP')
const gameover = document.getElementById('gameOvermsg')
const game_area = document.getElementById('gamespace')
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

if ((game_state = 'tutorial')) {
  getMobs()
  document.addEventListener('keydown', (event) => {
    let welcomespace = document.getElementById('welcomespace')

    if (event.key === 'Enter') {
      game_state = 'game'

      welcomespace.style.display = 'none'
    }
  })
}

if ((game_state = 'game')) {
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
    player2.style.left = event.clientX
    player2.style.top = event.clientY
  })

  const mobbat_summon = setInterval(() => {
    let mob1 = document.createElement('img')
    mob1.style.position = 'absolute'
    mob1.src = 'img/Stirge-fly.gif'
    // mob1.style.backgroundColor = 'red'
    // mob1.style.width = '72px'
    // mob1.style.height = '72px'
    mob1.classList.add('mobs')
    mob1.style.top = Math.floor(Math.random() * game_win.clientHeight) + 'px'
    game_win.appendChild(mob1)

    mob1.addEventListener('mouseover', () => {
      // mob1.remove(self)
      console.log('mouse over mob happening')
      // HealthPoints -= 10
      // HP.textContent = HealthPoints
      // HP.style.width = (HealthPoints / 100) * 100 + '%'
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
    // setTimeout(() => {
    //   // game_win.replaceChildren(mob1)
    //   //game_win.replaceChildren(mob1)
    //   game_win.removeChild(mob1)
    //   clearTimeout(move_y)
    // }, 5000)
  }, 2000)

  const mobrand_summon = setInterval(() => {
    let mob1 = document.createElement('img')

    mob1.style.position = 'absolute'
    getMob(mob1)
    //mob1.src = 'img/Stirge-fly.gif'
    // mob1.style.backgroundColor = 'red'
    // mob1.style.width = '72px'
    // mob1.style.height = '72px'
    mob1.classList.add('mobs')
    mob1.style.top = Math.floor(Math.random() * game_win.clientHeight) + 'px'
    game_win.appendChild(mob1)

    mob1.addEventListener('mouseover', () => {
      // mob1.remove(self)
      console.log('mouse over mob happening')
      // HealthPoints -= 10
      // HP.textContent = HealthPoints
      // HP.style.width = (HealthPoints / 100) * 100 + '%'
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
    // setTimeout(() => {
    //   // game_win.replaceChildren(mob1)
    //   //game_win.replaceChildren(mob1)
    //   game_win.removeChild(mob1)
    //   clearTimeout(move_y)
    // }, 5000)
  }, 2000)

  const mobeye_summon = setInterval(() => {
    let mob1 = document.createElement('img')
    mob1.style.position = 'absolute'
    mob1.src = 'img/Evil_eye-move.gif'

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
      // mob1.remove(self)

      HealthPoints -= 10
      HP.textContent = HealthPoints
      HP.style.width = (HealthPoints / 100) * 100 + '%'

      game_win.removeChild(mob1)
      if (HealthPoints <= 0) {
        game_state = 'game_over'
        game_win.replaceChildren(gameover)
        document.getElementById('endmsg').innerText =
          'Game Over! the final score is ' + score
        welcomespace.style.display = 'flex'
      }
    })
  }, 3000)
}

//
//2400374
//let randurl = ` ${https://maplestory.io/api/GMS/270/mob/{rand}/render/move}`

async function getMobs() {
  let rand = Math.floor(Math.random() * 300) + 100
  console.log('rand number is ', rand)
  try {
    const response = await fetch(
      `https://maplestory.io/api/GMS/270/mob?startPosition=${rand}&count=10`,
    )

    if (!response.ok) {
      throw new Error(`Error:${response.status}`)
    }

    mobs = await response.json()

    // fetch(`https://maplestory.io/api/GMS/270/mob?startPosition=20&count=10`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('thejosns', json)
    //     mobs = json
    //     console.log('themobs')
    //   })
  } catch (error) {
    console.log('recivederror at getmobs', error)
  }
}

async function getMob(obj) {
  let rand = mobs[Math.floor(Math.random() * mobs.length)]
  try {
    //let rand = Math.floor(Math.random() * 1110100) + 100000
    //let rand = Math.floor(Math.random() * 1110100) + 100000

    const response = await fetch(
      `https://maplestory.io/api/GMS/270/mob/${rand.id}/render/move`,
    )

    const blob = await response.blob()
    obj.src = URL.createObjectURL(blob)
    const name = document.createElement('h3')
    name.textContent = rand.name + ' level ' + rand.level
    obj.appendChild(name)

    // fetch(`https://maplestory.io/api/GMS/270/mob/${rand.id}/render/move`)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     obj.src = URL.createObjectURL(blob)
    //   })
  } catch (error) {
    console.log('Error', error)
  }
}

window.addEventListener('resize', () => {
  scoring.textContent = 'Did you resize the window? 🤔'
})
