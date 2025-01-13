document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const emailParam = urlParams.get('email');

  if (emailParam) {
    const registerForm = document.querySelector('#registerForm');
    registerForm.style.display = 'block'; // Mostrar el formulario

    const emailInput = document.querySelector('#emailInput');
    if (emailInput) {
      emailInput.value = decodeURIComponent(emailParam);
    } else {
      console.error('No se encontró el campo de correo "emailInput".');
    }
  }
});
