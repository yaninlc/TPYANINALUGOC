emailjs.init("ELUsZqPC9dkPZL456");

function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
    // Página de Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (password === "12345") {
                alert("Inicio de sesión correcto.");
                emailjs.send("service_3ohri4t", "template_5d7axvs", {
                    username: username
                });
                navigateTo("page2.html");
            } else {
                alert("Contraseña incorrecta.");
            }
        });
    }

    // Página Principal
    const askNameButton = document.getElementById('askNameButton');
    if (askNameButton) {
        askNameButton.addEventListener('click', () => {
            const userName = prompt("Por favor, ingrese su nombre:");
            if (userName) {
                document.getElementById('user-name-display').innerText = `¡Bienvenido, ${userName}!`;
            }
        });
    }

    // Formulario de Datos Personales
    const personalDataForm = document.getElementById('personalDataForm');
    if (personalDataForm) {
        personalDataForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                age: document.getElementById('age').value,
                address: document.getElementById('address').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                city: document.getElementById('city').value,
                country: document.getElementById('country').value,
            };

            emailjs.send("service_mpp6kyh", "template_8jhw1hr", formData)
                .then(() => alert("Datos enviados con éxito."))
                .catch(() => alert("Error al enviar datos."));
        });
    }

    // Formulario de Mensaje
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const messageData = {
                senderName: document.getElementById('senderName').value,
                senderLastName: document.getElementById('senderLastName').value,
                senderPhone: document.getElementById('senderPhone').value,
                senderEmail: document.getElementById('senderEmail').value,
                messageContent: document.getElementById('messageContent').value,
            };

            emailjs.send("service_mpp6kyh", "template_8jhw1hr", messageData)
                .then(() => alert("Mensaje enviado con éxito."))
                .catch(() => alert("Error al enviar el mensaje."));
        });
    }
});
