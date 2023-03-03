const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
]

const image = document.querySelector('.image')
const leftButton = document.querySelector('.left-button')
const rightButton = document.querySelector('.right-button')

let currentIndex = 0

rightButton.addEventListener('click', function () {
  if (currentIndex === images.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }

  image.src = images[currentIndex]
})
