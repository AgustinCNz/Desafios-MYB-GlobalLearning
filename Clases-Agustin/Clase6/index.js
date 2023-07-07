function validateForm(event) {
    event.preventDefault();

    /* Función para mostrar mensajes de error */
    function showError(message) {
        const errorElement = document.getElementById("error-message");
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
    

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const birthdate = document.getElementById("birthdate").value;
    const newsletterCheckbox = document.getElementById("newsletter-checkbox").checked;
    const termsCheckbox = document.getElementById("terms-checkbox").checked;

    /* Validación de campos */
    if (!firstName || !lastName || !username || !password || !confirmPassword || !birthdate) {
        showError("Por favor verifique sus datos ingresados");
        return;
    }

    /* Verificación de contraseña y confirmación */
    if (password !== confirmPassword) {
        showError("Las contraseñas no coinciden.");
        return;
    }

    const myRegExp = new RegExp(/^[A-Za-z\s]+$/)
    /* Validación de caracteres permitidos en campos de texto */
    if (myRegExp.test(firstName) || !myRegExp.test(lastName) || !myRegExp.test(username)) {
        showError("Solo se permiten letras y espacios en los campos de texto.");
        return;
    }
    
    const myRegExp2 = new RegExp(/\d/)
    const myRegExp3 = new RegExp(/[a-zA-Z]/)
    /* Validación de contraseña con letras y números */
    if (!myRegExp2.test(password) || !myRegExp3.test(password)) {
        showError("La contraseña debe contener letras y números.");
        return;
    }

    /* Validación de edad */
    const currentDate = new Date();
    const birthdateDate = new Date(birthdate);
    const age = currentDate.getFullYear() - birthdateDate.getFullYear();
    const birthdateDay = birthdateDate.getDate();

    if (age < 18 || (age === 18 && currentDate < birthdateDate)) {
        showError("Debes ser mayor de edad.");
        return;
    }

    /* Validación de checkbox de boletín y términos */
    if (!newsletterCheckbox || !termsCheckbox) {
        showError("Por favor acepte los términos y condiciones.");
        return;
    }

    

    /* Inicializar el selector de fecha */
    flatpickr("#birthdate", {
        dateFormat: "d-m-Y"
    });
}

document.getElementById("registration-form").addEventListener("submit", validateForm);
