const inputField = document.querySelector("#validation-input");
const inputLength = inputField.getAttribute("data-length");

const addValidation = () => inputField.value.trim().length == inputLength ? inputField.classList.add("valid") : inputField.classList.add("invalid");

const removeValidation = () => {
    if (inputField.classList.contains("valid"))  inputField.classList.remove("valid");
    if (inputField.classList.contains("invalid"))  inputField.classList.remove("invalid");
}

inputField.addEventListener("blur", addValidation);
inputField.addEventListener("focus", removeValidation);