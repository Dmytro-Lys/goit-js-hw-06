const loginForm = document.querySelector(".login-form");

const submitForm = (e) => {
    e.preventDefault();
    const {email , password} = e.currentTarget.elements;
    if (email.value === "" || password.value === "")  return alert("Please fill in all the fields!");
    console.log({email: email.value, password: password.value });
    e.currentTarget.reset();
}

loginForm.addEventListener("submit", submitForm);
