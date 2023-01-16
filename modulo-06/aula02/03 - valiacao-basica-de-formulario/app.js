const form = document.querySelector('.signup-form');
const p = document.querySelector('.feedback');

form.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.username.value;
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const validateUsername = usernameRegex.test(username);

  if(validateUsername){
    p.textContent = 'Nome de usuário válido!'
    p.style.color = 'green'
    return;
  }

  p.textContent = 'Nome de usuário inválido! O username deve conter entre 6 a 12 caracteres contendo somente letras.'
  p.style.color = 'crimson'

})