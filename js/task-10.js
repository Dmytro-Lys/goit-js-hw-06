const BASE_SIZE = 30;
let boxes = [];
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
  let emptyArray = " ".repeat(amount).split("");
  emptyArray = emptyArray.map((item, index) => createBox((boxes.length + index) * 10, getRandomHexColor()));
  boxes = boxes.concat(emptyArray);
  refs.listBoxes.insertAdjacentHTML('beforeend', emptyArray.join(''));
}

const destroyBoxes = () => {
  refs.listBoxes.innerHTML = "";
  boxes = []
};

refs.createBoxesBtn.addEventListener("click", () => createBoxes(refs.numberBoxes.value));
refs.destroyBoxesBtn.addEventListener("click", destroyBoxes);

