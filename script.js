import data from './mob.json' with { type: 'json' }
//1. External JavaScript
let contentbody = document.querySelector('body')
let lightbtn = document.getElementById('lightbtn')
let offbtn = document.getElementById('offmode')
let factplace = document.getElementById('randomfact')
let gibberplace = document.getElementById(random_gibber)
let welcomespace = document.getElementById('welcomespace')

let datamob = import('./mob.json')

//2. Light / Dark Mode Toggle
function light_toggle() {
  console.log('button registering')
  contentbody.classList.toggle('lightmode')
  offbtn.classList.toggle('hide')
}

//3. Random Fact Generator
function random_fact() {
  let facts = [
    'Freezes when asked to talk about herself',
    'MBTI scale is INFP',
    'Favourite console is GameboyAdvance',
    'Likes the color teal',
    'Does not like wearing socks for in place of using heater',
  ]
  let number = Math.floor(Math.random() * facts.length)
  factplace.textContent = ` ${facts[number]}`
}

function random_gibber() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
      gibberplace.textContent = json.body
    })
}

// fetch(`https://maplestory.io/api/GMS/270/mob/startPosition=20`)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json)
//     let objs = json
//   })

// async function getMob(obj) {
//   try {
//     let rand = Math.floor(Math.random() * 1110100) + 100000
//     //let rand = Math.floor(Math.random() * 1110100) + 100000
//     //`https://maplestory.io/api/GMS/270/mob/${rand}/render/move`

//     fetch(`https://maplestory.io/api/GMS/270/mob/`)
//       .then((response) => response.blob())
//       .then((blob) => {
//         obj.src = URL.createObjectURL(blob)
//       })
//   } catch (error) {
//     console.log('Error', error)
//   }
// }

//4 Personalized Greetings

function greeting() {
  let nameplace = document.getElementById('nametext')
  let welcome = document.getElementById('msg')

  let greeting = document.getElementById('greeting')

  if (nameplace.value != '') {
    welcome.classList.toggle('hide')
    welcomespace.classList.toggle('hide')
    // greeting.textContent = `Welcome to the website ${nameplace.value}!!`
    alert(`Welcome to the website ${nameplace.value}`)
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //     greeting.textContent += json.body

    //   })
  } else {
    alert('Invalid name')
    nameplace.value = ''
  }
}

//5. DOM Manipulation & Events (Done )

/* 
Challenge Requirements
1. External JavaScript
Create a script.js file and link it to your HTML page using the <script> element. Use the defer attribute to ensure your HTML elements are available when
JavaScript executes.
2. Light / Dark Mode Toggle
Create a button that switches your website between light and dark themes. Use
JavaScript to add, remove, or toggle CSS classes that modify the website’s
appearance. The user must be able to switch between both themes repeatedly,
not just once.
3. Random Fact Generator
Create an array containing at least five interesting, unusual, or completely
unnecessary facts about yourself. Add a button that randomly selects and
displays one fact using JavaScript. The displayed information should update
without refreshing the webpage.
4. Personalized Greeting
Create a text input that allows visitors to enter their name. Use JavaScript to
retrieve the entered value and display a personalized greeting on the webpage.
Include basic validation to prevent empty submissions.
5. DOM Manipulation & Events
Demonstrate appropriate use of DOM selection and manipulation methods such
as getElementById, querySelector, textContent, classList.
7. GitHub Deployment
Commit and push your updated website files to GitHub. Verify that the latest
version is accessible through your existing GitHub Pages URL. 
*/
