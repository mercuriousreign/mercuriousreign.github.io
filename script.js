let contentbody = document.querySelector('body');
const tggl = document.getElementById('toggle');

function light_toggle() {
  console.log('button registering');
  contentbody.classList.toggle('lightmode');
}

tggl.addEventListener('click', light_toggle);
