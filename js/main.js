console.log("main ok");

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let imgAttiva = document.getElementById("img-attiva");
let imgTitle = document.getElementById("titolo-img-attiva");
let imgText = document.getElementById("paragrafo-img-attiva");
// prendo i bottoni avanti e indietro
const bttAvanti = document.getElementById("avanti");
const bttIndietro = document.getElementById("indietro");
// salvo l'indice dell'array che viene mostrato
let indexArray = 0;

//all'inizializzazione della pagina inserisco la prima immagine dell'array
imgAttiva.setAttribute("src", images[indexArray].image);
imgTitle.innerHTML = images[indexArray].title;
imgText.innerHTML = images[indexArray].text;

// aggiungo le azioni al click dell'evento:
// avanti
bttAvanti.addEventListener("click", () => {
  indexArray += 1;
  // condizione che controlla il ritorno all'oggetto iniziale
  if (indexArray >= images.length) {
    indexArray = 0;
  }
  imgAttiva.setAttribute("src", images[indexArray].image);
  imgTitle.innerHTML = images[indexArray].title;
  imgText.innerHTML = images[indexArray].text;

  console.log(indexArray);
});

// indietro
bttIndietro.addEventListener("click", () => {
  // condizione che controlla il ritorno all'oggetto iniziale
  indexArray -= 1;

  if (indexArray < 0) {
    indexArray = images.length - 1;
  }
  console.log(indexArray);
  imgAttiva.setAttribute("src", images[indexArray].image);
  imgTitle.innerHTML = images[indexArray].title;
  imgText.innerHTML = images[indexArray].text;
});
