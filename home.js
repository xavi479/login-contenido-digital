/*const btnData = document.querySelector('#btnData');
const email = document.querySelector('#email');
const emailInput = document.querySelector('#emailInput');


btnData.addEventListener('click', () => {
  if (email.value.trim() !== '') {
    console.log(`Correo creado para: ${email.value}`);
    window.location.href = `register.html?email=${encodeURIComponent(email.value)}`;
  } email.placeholder = 'Email is required';
  email.focus();
}
);

emailInput.addEventListener(  'keyup', (event) => { 
  if (event.key === 'Enter') {
    btnData.click();
  }
});*/

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
  window.location.href = `register.html?email=${encodeURIComponent(emailValue)}`;
});

// Evento para eliminar el estado de error al escribir
email.addEventListener('input', () => {
  email.classList.remove('error');
  email.placeholder = 'Ingresa tu correo electrónico';
});

// Evento para detectar Enter en el campo emailInput
emailInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnData.click();
  }
});






