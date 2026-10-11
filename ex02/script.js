function changeText() {
    const message = document.getElementById("message");
    message.textContent = "The text has been changed!";
}

function changeStyle() {
    const title = document.querySelector("#maintitle");
    title.textContent = "DOM Manipulation in Action!";
    title.style.color = "red";
    title.style.fontSize = "36px";
}

function activateBox() {
    const box = document.getElementById("box");
    box.classList.add("active");
}

const changeTextButton = document.getElementById("changeTextButton");
const changeStyleButton = document.getElementById("changeStyleButton");
const activateBoxButton = document.getElementById("activateBoxButton");

changeTextButton.addEventListener("click", changeText);
changeStyleButton.addEventListener("click", changeStyle);
activateBoxButton.addEventListener("click", activateBox);
