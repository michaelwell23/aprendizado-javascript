// ARRAYS
let heroes = ['Batman', 'Catwoman', 'Iron Man']; //array de strings

heroes[2] = 'Spider-Man' // atribuindo um valor para um elemento do array por meio do index

// console.log(heroes);   exibe no console todos os elemento do array
// console.log(heroes[0]);  exibe no console o elemento de acordo com o seu index
// console.log(heroes[3-2]);  exibe no console o elemento do index 1, pois 3 - 2 = 1;

const ages = [31, 39, 25, 40]; // arrya de numeros 
// console.log(ages[2]); exibe no console o elemento de acordo com o seu index

const randomArray =  ['Parker', 'Diana', 19, 18]; // Arrya misto
// console.log(randomArray); exibe no console todos os elemento do array

// Metodos de Array
const qtdArray = heroes.length; //exibe a quantidade de elementos no arrya
const joinHeros = heroes.join();  // retorna uma string com todos elementos separados por virgula ou pelo elemento passado nos parenteses. 
const indexOf25 = ages.indexOf(25) // verifica se o item passado no argumento contem no array, e retorna a posição desse elemento, caso o elemento não esteja no array seu retorno será -1
const moreHeroes = heroes.concat('Superman', 'Wolverine'); // adiciona ao array os elementos passados por argumento.
const pushToHeroes = heroes.push('Cyclops', 'Hulk');  //adiciona itens no array e retorna a quantiade de elementos nesse array. Esse elemento altera os valores originais. 
const popHeroes = heroes.pop();

// NULL E UNDEFINED
let emptines = null;
console.log(emptines, emptines + 3, `o valor é ${emptines}`);

