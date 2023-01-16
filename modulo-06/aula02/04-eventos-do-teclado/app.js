const form = document.querySelector('.signup-form');
const p = document.querySelector('.feedback');

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username);

form.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.username.value;
  const validateUsername = testUsername(username);

  if(validateUsername){
    p.textContent = 'Nome de usuário válido!'
    p.style.color = 'green'
    return;
  }

  p.textContent = 'Nome de usuário inválido! O username deve conter entre 6 a 12 caracteres contendo somente letras.'
  p.style.color = 'crimson'
})

form.username.addEventListener('keyup', event => {
  const isAValidUsername = testUsername(event.target.value);

  if(isAValidUsername){
   form.username.setAttribute('class', 'success')
   return
  }

  form.username.setAttribute('class', 'error')
})