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
                    USERNAME: username
                }).then(() => {
                    alert("Notificación de inicio de sesión enviada.");
                    navigateTo("page2.html");
                }).catch((error) => {
                    console.error("Error al enviar notificación:", error);
                    alert("Hubo un problema al enviar la notificación.");
                });
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
                FIRST_NAME: document.getElementById('firstName').value,
                LAST_NAME: document.getElementById('lastName').value,
                AGE: document.getElementById('age').value,
                ADDRESS: document.getElementById('address').value,
                PHONE: document.getElementById('phone').value,
                EMAIL: document.getElementById('email').value,
                CITY: document.getElementById('city').value,
                COUNTRY: document.getElementById('country').value,
            };

            emailjs.send("service_mpp6kyh", "template_8jhw1hr", formData)
                .then(() => {
                    alert("Datos enviados con éxito.");
                    personalDataForm.reset(); // Limpia el formulario después del envío
                })
                .catch((error) => {
                    console.error("Error al enviar datos:", error);
                    alert("Hubo un error al enviar los datos.");
                });
        });
    }

    // Formulario de Mensaje
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const messageData = {
                SENDER_NAME: document.getElementById('senderName').value,
                SENDER_LAST_NAME: document.getElementById('senderLastName').value,
                SENDER_PHONE: document.getElementById('senderPhone').value,
                SENDER_EMAIL: document.getElementById('senderEmail').value,
                MESSAGE_CONTENT: document.getElementById('messageContent').value,
            };

            emailjs.send("service_mpp6kyh", "template_8jhw1hr", messageData)
                .then(() => {
                    alert("Mensaje enviado con éxito.");
                    messageForm.reset(); // Limpia el formulario después del envío
                })
                .catch((error) => {
                    console.error("Error al enviar mensaje:", error);
                    alert("Hubo un error al enviar el mensaje.");
                });
        });
    }
});

