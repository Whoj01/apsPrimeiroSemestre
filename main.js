/* selecionando pelo dom */

const menuButtons = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')
const menuItens = document.querySelectorAll('nav ul li')
const header = document.querySelector('#header')
const arrowNext = document.querySelectorAll('.icon-next')
const carrousel = document.getElementById('carrousel')
const counter = document.getElementById('counter')
const arrowPrevious = document.querySelectorAll('.icon-previous')
const carrouselInformation = document.getElementById('carrouselText')

/* Elementos do carrousel*/

const carrouselImages = [
  {
    title: 'Projeto A',
    thumb:
      'https://media.gettyimages.com/photos/esports-team-competing-in-an-esports-tournament-picture-id1385174832?s=2048x2048',
    information:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt rem atque optio nisi fugiat, quaerat voluptatum ab porro obcaecati sed adipisci doloribus?'
  },
  {
    title: 'Projeto B',
    thumb:
      'https://media.gettyimages.com/photos/rooster-gallus-domesticus-picture-id1387222695?s=2048x2048',
    information:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt rem atque optio nisi fugiat, quaerat voluptatum ab porro obcaecati sed adipisci doloribus?'
  },
  {
    title: 'Projeto C',
    thumb:
      'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg',
    information:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt rem atque optio nisi fugiat, quaerat voluptatum ab porro obcaecati sed adipisci doloribus?'
  },
  {
    title: 'Projeto D',
    thumb:
      'https://www.petz.com.br/blog/wp-content/uploads/2021/12/porque-cachorro-lambe-tudo-2-1280x720.jpg',
    information:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt rem atque optio nisi fugiat, quaerat voluptatum ab porro obcaecati sed adipisci doloribus?'
  },
  {
    title: 'Projeto E',
    thumb:
      'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1',
    information:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt rem atque optio nisi fugiat, quaerat voluptatum ab porro obcaecati sed adipisci dolorib'
  }
]

/*CRIANDO O CARROUSEL*/

carrouselImages.forEach((project, i) => {
  const divImage = document.createElement('div')
  const divCounter = document.createElement('div')
  const projectInformation = document.createElement('p')

  divImage.classList.add('carrousel-item')
  divCounter.classList.add('counter')
  if (i === 0) {
    divImage.classList.add('visible')
    divCounter.classList.add('active')
    projectInformation.classList.add('show')
  }

  const img = document.createElement('img')
  img.classList.add('carrouselImage')
  img.src = project.thumb

  const projectName = document.createElement('p')
  projectName.classList.add('project')
  projectName.innerHTML = project.title

  projectInformation.classList.add('projectInformation')
  projectInformation.classList.add('text')

  projectInformation.innerHTML = project.information

  divImage.appendChild(projectName)
  divImage.appendChild(img)

  carrousel.appendChild(divImage)

  carrouselInformation.appendChild(projectInformation)

  counter.appendChild(divCounter)
})

/* contador do carrousel */

let id = 0

/*Calbacks*/
function handleCarrouselImageNext() {
  id++
  const carrouselItem = document.querySelectorAll('.carrousel-item')
  const counterItem = document.querySelectorAll('.counter')
  const informationItem = document.querySelectorAll('.projectInformation')

  informationItem.forEach(e => {
    e.classList.remove('show')
  })

  carrouselItem.forEach(e => {
    e.classList.remove('visible')
  })
  counterItem.forEach(e => {
    e.classList.remove('active')
  })

  if (id > carrouselItem.length - 1) id = 0
  carrouselItem[id].classList.add('visible')
  counterItem[id].classList.add('active')
  informationItem[id].classList.add('show')
}

function handleCarrouselImagePrevious() {
  id--
  const carrouselItem = document.querySelectorAll('.carrousel-item')
  const counterItem = document.querySelectorAll('.counter')
  const informationItem = document.querySelectorAll('.projectInformation')

  informationItem.forEach(e => {
    e.classList.remove('show')
  })

  carrouselItem.forEach(e => {
    e.classList.remove('visible')
  })
  counterItem.forEach(e => {
    e.classList.remove('active')
  })

  if (id <= -1) id = 4
  carrouselItem[id].classList.add('visible')
  counterItem[id].classList.add('active')
  informationItem[id].classList.add('show')
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
