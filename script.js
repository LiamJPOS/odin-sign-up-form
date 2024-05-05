const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const passwordWarning = document.getElementById("password-warning");

confirmPasswordField.addEventListener('keyup', () => {
    const password1 = passwordField.value;
    const password2 = confirmPasswordField.value;

    if (password1 !== password2) {
        passwordWarning.style.display = "block";
        passwordField.style.border = "2px solid red"
        confirmPasswordField.style.border = "2px solid red"
    }
    else {
        passwordWarning.style.display = "none";
        passwordField.style.border = "1px solid black"
        confirmPasswordField.style.border = "1px solid black"
    }
})