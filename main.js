/* selecionando pelo dom */

const menuButtons = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')
const menuItens = document.querySelectorAll('nav ul li')
const header = document.querySelector('#header')
const arrowNext = document.querySelectorAll('.icon-next')
const carrouselItem = document.querySelectorAll('.carrousel-item')
const arrowPrevious = document.querySelectorAll('.icon-previous')

/* contador do carrousel */

let id = 1

/*Calbacks*/
function handleCarrouselImageNext() {
  console.log(id)
  carrouselItem.forEach(e => {
    e.classList.remove('visible')
  })

  if (id > carrouselItem.length - 1) {
    id = 0
    carrouselItem[id].classList.add('visible')
    id++
    console.log(id)
  } else {
    id++
    carrouselItem[id].classList.add('visible')
  }
  /*
  carrouselItem[id].classList.remove('visible')
  
  carrouselItem[id].classList.add('visible')
  console.log(id)*/
}

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
