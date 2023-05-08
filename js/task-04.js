let counterValue = 0;
const refs = {
    counterVal: document.querySelector("#value"),
    btnCounterDecrement: document.querySelector('button[data-action="decrement"]'),
    btnCounterIncrement: document.querySelector('button[data-action="increment"]')
}
const counterValueDecrement = () =>  refs.counterVal.textContent = (counterValue -= 1);
const counterValueIncrement = () =>  refs.counterVal.textContent = (counterValue += 1);

refs.btnCounterDecrement.addEventListener("click", counterValueDecrement);
refs.btnCounterIncrement.addEventListener("click", counterValueIncrement);
