const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (e) =>  output.textContent = !e.currentTarget.value ? "Anonymous" : e.currentTarget.value);