//  =============================== // ESCOLO //  ===============================
/*
  ESCOPO SÃO BLOCOS DE VISIBILIDADE DE UMA VARIÁVEL.DEPENDENDO DE ONDE A VARIÁVEL É DECLARADA ELA 
  PODE SER VISTA OU NÃO EM DETERMINADAS PARTES DO SEU CÓDIGO.  

*/

function myFunc(){
  let favoriteCollor = 'Preto';
  const age = 32;
  const myName = 'Michael Wellington';
  console.log(myName, age, favoriteCollor);
}

function myFunc2(){
  let favoriteCollor = 'Azul';
  const age = 33;
  const myName = 'Gabriela Medeiros';
  console.log(myName, age, favoriteCollor);
}
// myFunc() // retorna as variávies do escopo da função myFunc
// myFunc2() // retorna as variávies do escopo da função myFunc2

const dog = 'Pitbull';

function dogWatch(){
  const dog = 'Pastor-alemão';
  console.log(dog);
}
// dogWatch()  // exibe a variável de escolo local dentro da função dogWatch;
// console.log(dog) // exibe o valor da variável de escopo global da constanten dog;

if (true){
  var manga = 'solo leveling'
}

// console.log(manga) // var possui regra diferente de let e const quando se trata de escopo de bloco. 

/*  
ESCOPO LÉXICO: é o que permite uma função, buscar uma variável declarada
no escopo acima dela. Ou seja uma função B buscar uma variável que esteja 
declarada no mesmo bloco dentro de uma função A.
*/
 
const external = () => {
  const anime = 'One Punch Man'

  const internal = () => {
    console.log(`${anime.toUpperCase()} é de longe o melhor anime.`)
  }
  internal()
}
// console.log(external())

/**
 =============================== // MDN //  ===============================

 O MDN conhecido como Mozilla Developer Networt é um site de documentação JavaScript 
 utilizado para o desenvolvimento de pradrões e projetos. Nele podemos tirar as nossas duvidas 
 sobre diversas funcionalidade que envolve a linguagem JavaScript, também HTML e CSS;

 https://developer.mozilla.org/pt-BR/

*/

/**
 =============================== // INTERAGINDO COM O BROWSER //  ===============================
Com a interação podemos
  * adicionar conteúdos
  * Modificar estilos CSS
  * Reagir a eventos
  * Criar interações 
*/

/**
 =============================== // O QUE 'DOM' //  ===============================
  O document objetc model é criado pelo browser, para que seja possível a interação com o documentos HTML,
utilizando JavaScript. Essa interação nos permite adicionar ou remover conteúdos. 
*/

/**
 =============================== // QUERY SELECTOR //  ===============================
*/

//Seleciona um único elemento 
const paragraph = document.querySelector('p')
const paragraphError = document.querySelector('.error')
const divError = document.querySelector('div.error') 
const h1 = document.querySelector('body > h1') 

//Seleciona multiplos elementos
const paragraphs = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')

console.log(errors)