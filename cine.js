
function toggleRegisterForm() {
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.querySelector('.formulary');
  
  if (registerForm.style.display === 'none') {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  } else {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
}

function register(event) {
  event.preventDefault();
  let username = document.querySelector('#registerForm input[name="username"]').value;
  let password = document.querySelector('#registerForm input[name="password"]').value;
  let email = document.querySelector('#registerForm input[name="email"]').value;

  // Aquí puedes agregar la lógica para registrar al usuario
  alert('Registration successful');
  
  // Ocultar el formulario de registro y mostrar el formulario de login
  toggleRegisterForm();
}

document.querySelector('#registerForm form').addEventListener('submit', register);