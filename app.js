const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

form.addEventListener("input", validateForm);
form.addEventListener("submit", submitForm);

country.addEventListener("change", () => {
    state.disabled = false;
    state.innerHTML = `<option value="">Select</option>
                       <option value="TS">Telangana</option>`;
});

state.addEventListener("change", () => {
    city.disabled = false;
    city.innerHTML = `<option value="">Select</option>
                      <option value="HYD">Hyderabad</option>`;
});

password.addEventListener("input", () => {
    const strength = document.getElementById("passwordStrength");
    if (password.value.length >= 8 && /\d/.test(password.value)) {
        strength.innerText = "Strong Password";
        strength.style.color = "green";
    } else {
        strength.innerText = "Weak Password";
        strength.style.color = "red";
    }
});

function validateForm() {
    let valid = true;

    if (!firstName.value.trim()) {
        showError("firstName", "Required");
        valid = false;
    } else clearError("firstName");

    if (!lastName.value.trim()) {
        showError("lastName", "Required");
        valid = false;
    } else clearError("lastName");

    if (!email.value.includes("@")) {
        showError("email", "Invalid Email");
        valid = false;
    } else clearError("email");

    if (!/^\d{10}$/.test(phone.value)) {
        showError("phone", "Invalid Phone");
        valid = false;
    } else clearError("phone");

    if (confirmPassword.value !== password.value) {
        showError("confirmPassword", "Passwords do not match");
        valid = false;
    } else clearError("confirmPassword");

    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById("genderError").innerText = "Required";
        valid = false;
    } else document.getElementById("genderError").innerText = "";

    if (!terms.checked) {
        document.getElementById("termsError").innerText = "Accept terms";
        valid = false;
    } else document.getElementById("termsError").innerText = "";

    submitBtn.disabled = !valid;
}

function showError(id, msg) {
    document.getElementById(id + "Error").innerText = msg;
}

function clearError(id) {
    document.getElementById(id + "Error").innerText = "";
}

function submitForm(e) {
    e.preventDefault();
    validateForm();
    if (submitBtn.disabled) return;
    alert("Registration Successful!");
    form.reset();
    submitBtn.disabled = true;
}
