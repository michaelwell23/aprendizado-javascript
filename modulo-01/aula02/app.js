// STRINGS
console.log('Hello, World');
const email = 'michael23.wellington@gmail.com';
console.log(email);

//concatenação  de Strings
const firstName = 'Michael';
const lastName = 'Wellington';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres
console.log(fullName[0]);

//comprimento de uma string
console.log(fullName.length); //length

//método de string
console.log(fullName.toUpperCase());
const result = fullName.toLowerCase();
console.log(result);

const index = email.indexOf('@');
console.log(index);

const lastIndexOfA = email.lastIndexOf('a');
console.log('as', lastIndexOfA);

const emailSlice = email.slice(0, 7);
console.log(emailSlice);

const emailReplace = email.replace('l', 'j');
console.log(emailReplace);

// NUMBERS
// inteiros e decimais
const radius = 10;
const pi = 3.14;

// operadores aritméticos
const remider = 5 % 2;
console.log(remider);

const area = pi * radius ** 2;
console.log(area);

// ordem de operações

/*
  1º - parênteses
  2º - expoentes ou raízes
  3º - multiplicação e divisão
  4º - adição e subtração
*/

const crazyOperation = 5 * (10 - 3) ** 2;
console.log(crazyOperation);

// operações de incremento e decremento
let postLikes = 10;

postLikes = postLikes + 1;

postLikes++;
postLikes--;

console.log(postLikes);

// operadores addition, subtraction, multiplication e divisation
postLikes += 10;
postLikes -= 5;
postLikes *= 3;
postLikes /= 2;

// NAN - Not a Number
console.log(7 / 'oi');

// Concatenação de string com número

const likesMessage = 'O post tem ' + postLikes + ' likes';
console.log(likesMessage);
