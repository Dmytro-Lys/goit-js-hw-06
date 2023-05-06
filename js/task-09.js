const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  spColor: document.querySelector(".color")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = () => {
  const bgColor = getRandomHexColor();
  refs.body.style.backgroundColor = bgColor;
  refs.spColor.textContent = bgColor;
}

refs.btn.addEventListener("click", changeBgColor);
