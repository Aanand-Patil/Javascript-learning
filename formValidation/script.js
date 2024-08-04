let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let massageError = document.getElementById("massage-error");
let submitError = document.getElementById("submit-error");
function validateName() {
    let name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false

    }
    nameError.innerHTML = '<i class ="fas fa-check-circle"></i>';
    return true;

}