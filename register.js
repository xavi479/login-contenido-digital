// Obtener el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const emailParam = urlParams.get('email');

// Poner el correo en el campo de entrada si existe
if (emailParam) {
  const emailInput = document.querySelector('#emailInput');
  emailInput.value = decodeURIComponent(emailParam);
}
