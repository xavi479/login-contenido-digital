const btnData = document.querySelector('#btnData');
const email = document.querySelector('#email');
const emailInput = document.querySelector('#emailInput');

// Función para validar el formato del correo electrónico
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Evento para el botón btnData
btnData.addEventListener('click', () => {
  const emailValue = email.value.trim();
  console.log(`Email ingresado: ${emailValue}`); // Depuración

  // Verificar si el campo está vacío
  if (emailValue === '') {
    email.placeholder = '¡El correo es obligatorio!';
    email.classList.add('error'); // Añadir clase para resaltar el campo
    email.focus();
    return;
  }

  // Verificar si el correo tiene un formato válido
  if (!isValidEmail(emailValue)) {
    alert('Por favor, ingresa un correo válido.'); // Mostrar un mensaje al usuario
    email.classList.add('error'); // Resaltar el campo
    email.focus();
    return;
  }

  // Redirigir a la página de registro si todo es válido
  console.log('Redirigiendo a register.html...');
  window.location.href = `register.html?email=${encodeURIComponent(emailValue)}`;
});

// Evento para eliminar el estado de error al escribir
email.addEventListener('input', () => {
  email.classList.remove('error');
  email.placeholder = 'Ingresa tu correo electrónico';
});

// Evento para detectar Enter en el campo emailInput
email.addEventListener('keyup', (event) => {
  console.log("Tecla presionada:", event.key);
  if (event.key === 'Enter') {
    btnData.click();
    console.log('Detectado Enter');
  }
});






