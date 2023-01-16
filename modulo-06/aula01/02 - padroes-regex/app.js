/*
  AULA PADRÕES REGEX E TESTANDO REGEX

    (/^javascript$/) match quando a palavra iniciar ou terminar com javascript;
    (/^[a-z]$/) match em uma unica string minúscula entre a e z;
    (/^[b-y]$/) match em uma única string minúscula entre b e y
    (/^[a-zA-Z]$/) match em qualquer letra entre a e z, maiúscula ou minuscula 
    (/^[a-zA-Z]{ 6,10 }$/) match em qualquer letra entre a e z, maiúscula ou minuscula em palavras com de 6 a 10 strings
    (/^[a-zA-Z0-9]{ 6,10 }$/) inclui numeros
    (/^.{6,10}$/)  match em qualquer caracter  
*/


const form = document.querySelector('.signup-form');
// const usernameInput = document.querySelector('#username');

form.addEventListener('submit', event => {
  event.preventDefault();

  // console.log(form.username.value);
  // console.log(usernameInput.value);
  console.log(event.target.username.value);
})

const username = '23michael';
const pattern = /^[a-z]{6,}$/
const isAMatch = pattern.test(username);

if(isAMatch){
  console.log('o teste da regex passou ;)')
} else {
  console.log('o teste não passou :( ')
}

const result = username.search(pattern)
console.log(result)