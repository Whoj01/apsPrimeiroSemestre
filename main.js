/* selecionando pelo dom */

const menuButtons = document.querySelectorAll('.toggle')
const nav = document.querySelector('nav')
const menuItens = document.querySelectorAll('nav ul li')
const header = document.querySelector('#header')
const arrowNext = document.querySelectorAll('.icon-next')

const arrowPrevious = document.querySelectorAll('.icon-previous')
const carrouselInformation = document.getElementById('carrouselText')
const divButton = document.querySelector('#button')

const projectLink = document.querySelector('.button a')
const projectInformation = document.querySelector('.projectInformation')

/* Elementos do carrousel*/

const carrouselImages = [
  {
    title: 'GreenEletron',
    thumb: 'images/GreenLixo.jpg',
    information:
      'GreenEletron é uma empresa sem fins lucrativos que disponibiliza Pontos de Entrega Voluntárias(PEV) em Sorocaba, localizados principalmente em centros de compras e varejos. Através dos PEVs, a GreenEletron faz a coleta e logística da devolução dos equipamentos eletrônicos aos seus fabricantes para reutilização da matéria-prima.',
    link: 'https://greeneletron.org.br/blog/mora-em-sorocaba-saiba-onde-descartar-seus-eletroeletronicos-sem-uso/'
  },
  {
    title: 'Tampets',
    thumb: 'images/projeto-tampets.jpg',
    information:
      'O projeto TamPets tem como objetivo coletar tampinhas e vendê-las a fim de arrecadar fundo monetário para auxiliar abrigos, protetores independentes e tutores em condições financeiras limitadas.',
    link: 'https://www.projetotampetsorocaba.com/'
  },
  {
    title: 'MetaReciclagem',
    thumb: 'images/meteReciclagem.jpg',
    information:
      'MetaReciclagem é um projeto de sorocaba aonde o objetivo é reaproveitar o máximo de componentes eletrônicos de um computador para montar uma nova máquina, depois essas máquinas são distruibuidas em entidades assistenciais cadastradas no Fundo Social de Solidariedade em ações sociais. ',
    link: 'http://metareciclagemdesorocaba.blogspot.com/?m=1'
  },
  {
    title: 'ESAMC',
    thumb: 'images/esamac.png',
    information:
      'O Parque Tecnológico de Sorocaba em conjunto com a ESAMC buscam promover o desenvolvimento sustentável em empresas através do projeto Cidade Sustentável.',
    link: 'https://parquetecsorocaba.com.br/'
  }
]

/*CRIANDO O CARROUSEL*/
let id = 0

carrouselImages.forEach((project, i) => {
  /*criando os elementos da imagem, o contador, a descrição do projeto e o botao para o site do projeto*/
  const divImage = document.createElement('div')
  const divCounter = document.createElement('div')

  divImage.classList.add('carrousel-item')
  divCounter.classList.add('counter')
  /*se o indice for 0 o primerio item ja começa visivel*/
  if (i === 0) {
    divImage.classList.add('visible')
    divCounter.classList.add('active')

    projectLink.href = carrouselImages[id].link
    projectInformation.innerHTML = carrouselImages[id].information
  }
  /*adicionando e criando a img do carrousel*/
  const img = document.createElement('img')
  img.classList.add('carrouselImage')
  img.src = project.thumb
  /*adicionando e criando o titulo do projeto do carrousel*/
  const projectName = document.createElement('p')

  projectName.classList.add('project')

  projectName.innerHTML = project.title

  /*adicionando e criando a descrição da descrição do projeto do carrousel*/

  divImage.appendChild(projectName)
  divImage.appendChild(img)

  carrousel.appendChild(divImage)

  counter.appendChild(divCounter)
})

/* contador do carrousel */

/*Calbacks*/
function handleCarrouselImageNext() {
  id++
  const carrouselItem = document.querySelectorAll('.carrousel-item')
  const counterItem = document.querySelectorAll('.counter')
  const informationItem = document.querySelectorAll('.projectInformation')

  carrouselItem.forEach(e => {
    e.classList.remove('visible')
  })
  counterItem.forEach(e => {
    e.classList.remove('active')
  })

  if (id > carrouselItem.length - 1) id = 0
  /*Mostrando os itens */
  carrouselItem[id].classList.add('visible')
  counterItem[id].classList.add('active')
  projectLink.href = carrouselImages[id].link
  projectInformation.innerHTML = carrouselImages[id].information
}

function handleCarrouselImagePrevious() {
  id--

  const carrouselItem = document.querySelectorAll('.carrousel-item')
  const counterItem = document.querySelectorAll('.counter')
  const informationItem = document.querySelectorAll('.projectInformation')
  const projectLink = document.querySelector('.button a')
  const projectInformation = document.querySelector('.projectInformation')

  carrouselItem.forEach(e => {
    e.classList.remove('visible')
  })
  counterItem.forEach(e => {
    e.classList.remove('active')
  })

  if (id <= -1) id = carrouselItem.length - 1
  carrouselItem[id].classList.add('visible')
  counterItem[id].classList.add('active')

  projectLink.href = carrouselImages[id].link
  projectInformation.innerHTML = carrouselImages[id].information
}

function backToTopButton() {
  const backToTop = document.querySelector('.back-to-top')
  if (window.scrollY > 700) {
    backToTop.classList.add('onScreen')
  } else {
    backToTop.classList.remove('onScreen')
  }
}

function boxShadow() {
  if (window.scrollY > 130) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function handleMenuLinks() {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
}

function handleMenu() {
  nav.classList.toggle('show')
}

/*adicionando eventos*/
window.addEventListener('scroll', () => {
  backToTopButton()
  boxShadow()
})

menuItens.forEach(e => {
  e.addEventListener('click', handleMenuLinks)
})

menuButtons.forEach(e => {
  e.addEventListener('click', handleMenu)
})
