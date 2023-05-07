const BASE_SIZE = 30;
let boxes = [];
const refs = {
  listBoxes: document.querySelector("#boxes"),
  createBoxesBtn: document.querySelector("[data-create]"),
  destroyBoxesBtn: document.querySelector("[data-destroy]"),
  controls: document.querySelector("#controls"),
  numberBoxes: controls.querySelector("input"),
}
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
    for (let i = 0; i < amount; i += 1){
      boxes.push(createBox( boxes.length * 10, getRandomHexColor()));
  };
    refs.listBoxes.innerHTML = "";
    refs.listBoxes.insertAdjacentHTML('beforeend', boxes.join(''))
}
const createDivs = () => {
  createBoxes(refs.numberBoxes.value);
}
const destroyBoxes = () => {
  refs.listBoxes.innerHTML = "";
  refs.numberBoxes.value = 1;
  boxes = [];
}

refs.createBoxesBtn.addEventListener("click", createDivs);
refs.destroyBoxesBtn.addEventListener("click", destroyBoxes);

