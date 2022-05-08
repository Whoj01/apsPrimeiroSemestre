/* selecionando pelo dom */

const menuButtons = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')
const menuItens = document.querySelectorAll('nav ul li')

function handleMenu(e) {
  nav.classList.toggle('show')
}

menuItens.forEach(e => {
  e.addEventListener('click', handleMenu)
})

menuButtons.forEach(e => {
  e.addEventListener('click', handleMenu)
})
