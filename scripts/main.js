const images = [
  {
    src: './images/1.jpg',
    text: 'Este es el texto de la imagen donde aparece la luna llena y el cielo purpura.',
    title: 'Luna llena',
  },
  {
    src: './images/2.jpg',
    text: 'Este es el texto de la imagen donde aparece el volcan con nuves sobre el.',
    title: 'Volcan',
  },
  {
    src: './images/3.jpg',
    text: 'Este es el texto de la imagen donde aparece arena color gris.',
    title: 'Arena',
  },
  {
    src: './images/4.jpg',
    text: 'Este es el texto de la imagen donde aparece nuves sobre el inmenso mar.',
    title: 'Nuves',
  },
  {
    src: './images/5.jpg',
    text: 'Este es el texto de la imagen donde aparece arboles demasiados altos como para tocar con la punta de los dedos de las manos.',
    title: 'Bosque',
  },
  {
    src: './images/6.jpg',
    text: 'Este es el texto de la imagen donde aparece hermosas rocas rojas, con una imagen en forma de animal.',
    title: 'Cañones',
  },
]

const image = document.querySelector('.image')
const text = document.querySelector('.text')
const title = document.querySelector('.title')
const leftButton = document.querySelector('.left-button')
const rightButton = document.querySelector('.right-button')

image.src = images[0].src
text.innerHTML = images[0].text
title.innerHTML = images[0].title

let currentIndex = 0

rightButton.addEventListener('click', function () {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1

  updateElements(currentIndex)
})

leftButton.addEventListener('click', function () {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1

  updateElements(currentIndex)
})

function updateElements(index) {
  const data = images[index]

  title.innerHTML = data.title
  image.src = data.src
  text.innerHTML = data.text
}
