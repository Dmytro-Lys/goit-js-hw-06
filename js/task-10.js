const BASE_SIZE = 30;

const refs = {
  listBoxes: document.querySelector("#boxes"),
  createBoxesBtn: document.querySelector("[data-create]"),
  destroyBoxesBtn: document.querySelector("[data-destroy]"),
  numberBoxes: document.querySelector("#controls").querySelector("input"),
}
// default value 
refs.numberBoxes.value = 1;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = (size, bgColor) => {
  return `<div style="background-color: ${bgColor}; 
  width: ${BASE_SIZE + size}px; 
  height: ${BASE_SIZE + size}px">
  </div>`
}

const createBoxes = (amount) => {
  const emptyArray = " ".repeat(amount).split("");
  const boxes = emptyArray.map((item, index) => createBox(index * 10, getRandomHexColor()));
  refs.listBoxes.insertAdjacentHTML('beforeend', boxes.join(''));
}

const destroyBoxes = () => refs.listBoxes.innerHTML = "";

refs.createBoxesBtn.addEventListener("click", () => createBoxes(refs.numberBoxes.value));
refs.destroyBoxesBtn.addEventListener("click", destroyBoxes);

