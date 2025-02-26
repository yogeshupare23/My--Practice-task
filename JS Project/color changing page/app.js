const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','green','blue','yellow','pink','purple']

body.style.backgroundColor="#777"

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}