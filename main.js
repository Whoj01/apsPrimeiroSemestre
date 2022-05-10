/* selecionando pelo dom */

const menuButtons = document.querySelectorAll(".toggle");
const nav = document.querySelector("nav");
const menuItens = document.querySelectorAll("nav ul li");
const header = document.querySelector("#header");
const arrowNext = document.querySelectorAll(".icon-next");
const carrousel = document.getElementById("carrousel");
const counter = document.getElementById("counter");
const arrowPrevious = document.querySelectorAll(".icon-previous");

const carrouselImages = [
  {
    title: "Projeto A",
    thumb:
      "https://media.gettyimages.com/photos/esports-team-competing-in-an-esports-tournament-picture-id1385174832?s=2048x2048",
  },
  {
    title: "Projeto B",
    thumb:
      "https://media.gettyimages.com/photos/rooster-gallus-domesticus-picture-id1387222695?s=2048x2048",
  },
  {
    title: "Projeto C",
    thumb:
      "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg",
  },
  {
    title: "Projeto D",
    thumb:
      "https://www.petz.com.br/blog/wp-content/uploads/2021/12/porque-cachorro-lambe-tudo-2-1280x720.jpg",
  },
  {
    title: "Projeto E",
    thumb:
      "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1",
  },
];

carrouselImages.forEach((project, i) => {
  const divImage = document.createElement("div");
  const divCounter = document.createElement("div");
  divImage.classList.add("carrousel-item");
  divCounter.classList.add("counter");
  if (i === 0) {
    divImage.classList.add("visible");
    divCounter.classList.add("active");
  }
  const img = document.createElement("img");
  img.classList.add("carrouselImage");
  img.src = project.thumb;

  divImage.appendChild(img);
  carrousel.appendChild(divImage);

  counter.appendChild(divCounter);
});

/* contador do carrousel */

let id = 1;

/*Calbacks*/
function handleCarrouselImageNext() {
  const carrouselItem = document.querySelectorAll(".carrousel-item");
  const counterItem = document.querySelectorAll(".counter");

  carrouselItem.forEach((e) => {
    e.classList.remove("visible");
  });
  counterItem.forEach((e) => {
    e.classList.remove("active");
  });

  if (id > carrouselItem.length - 1) id = 0;
  carrouselItem[id].classList.add("visible");
  counterItem[id].classList.add("active");
  id++;
}
/* --------------------------------------------------------------------NAO FUNCIONA :D
function handleCarrouselImagePrevious() {
  const carrouselItem = document.querySelectorAll(".carrousel-item");
  const counterItem = document.querySelectorAll(".counter");

  carrouselItem.forEach((e) => {
    e.classList.remove("visible");
  });
  counterItem.forEach((e) => {
    e.classList.remove("active");
  });

  if (id < 0) id = carrouselItem.length - 1;
  carrouselItem[id].classList.add("visible");
  counterItem[id].classList.add("active");
  id--;
  console.log(id);
}
*/

function boxShadow() {
  if (window.scrollY > 130) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

function handleMenu() {
  nav.classList.toggle("show");
}

/*adicionando eventos*/
window.addEventListener("scroll", boxShadow);

menuItens.forEach((e) => {
  e.addEventListener("click", handleMenu);
});

menuButtons.forEach((e) => {
  e.addEventListener("click", handleMenu);
});
