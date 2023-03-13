function getRandomHexColor() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.title = color;
    return color;
}

const bodyElem = document.querySelector("body");
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener("click", onClick);

function onClick(e) {
    bodyElem.style.backgroundColor = getRandomHexColor();
    color.textContent = bodyElem.style.backgroundColor;
}