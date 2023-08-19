// Acceder al elemento form
var form = document.getElementById("form");

// Acceder al elemento submit
var submit = document.getElementById("submit");

// Acceder a los elementos input
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

// Acceder a los elementos span
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");

// Crear una función para validar el nombre
function validateName() {
    // Obtener el valor del nombre
    var nameValue = name.value;
    // Crear una expresión regular para el nombre
    var nameRegex = /^[a-zA-Z ]+$/;
    // Comprobar si el nombre cumple con la expresión regular
    if (nameRegex.test(nameValue)) {
        // Si cumple, ocultar el mensaje de error y devolver true
        nameError.textContent = "";
        return true;
    } else {
        // Si no cumple, mostrar el mensaje de error y devolver false
        nameError.textContent = "El nombre solo puede contener letras y espacios";
        return false;
    }
}

// Crear una función para validar el email
function validateEmail() {
    // Obtener el valor del email
    var emailValue = email.value;
    // Crear una expresión regular para el email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Comprobar si el email cumple con la expresión regular
    if (emailRegex.test(emailValue)) {
        // Si cumple, ocultar el mensaje de error y devolver true
        emailError.textContent = "";
        return true;
    } else {
        // Si no cumple, mostrar el mensaje de error y devolver false
        emailError.textContent = "El email debe tener un formato válido";
        return false;
    }
}

// Crear una función para validar la contraseña
function validatePassword() {
     // Obtener el valor de la contraseña
     var passwordValue = password.value;
     // Crear una expresión regular para la contraseña
     var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     // Comprobar si la contraseña cumple con la expresión regular
     if (passwordRegex.test(passwordValue)) {
         // Si cumple, ocultar el mensaje de error y devolver true
         password
     }
}