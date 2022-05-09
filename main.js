/* selecionando pelo dom */

const menuButtons = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')
const menuItens = document.querySelectorAll('nav ul li')
const header = document.querySelector('#header')

/*Calbacks*/
function boxShadow() {
  if (window.scrollY > 130) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function handleMenu() {
  nav.classList.toggle('show')
}

/*adicionando eventos*/
window.addEventListener('scroll', boxShadow)

menuItens.forEach(e => {
  e.addEventListener('click', handleMenu)
})

menuButtons.forEach(e => {
  e.addEventListener('click', handleMenu)
})
