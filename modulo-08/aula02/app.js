// ORDENANDO STRINGS
const names = ['Lucas', 'Amanda', 'José']
names.sort();
console.log(names)

// ORDENANDO NÚMEROS 
const scores = [10, 50,20, 5, 35, 70, 45]
scores.sort((socre2, score1) => socre2 - score1);
console.log(scores);

// ORDENANDO OBJETOS
const theBigFamily = [
  {name: 'Shikamaru', score: 20},
  {name: 'Kankuro', score: 10},
  {name: 'Sasuke', score: 50},
  {name: 'Rock Lee', score: 30},
  {name: 'Naruto', score: 70},
]

theBigFamily.sort((item1, item2) => item2.score - item1.score)
console.log(theBigFamily)

// ======== ENCADEIAMENTO DE MÉTODO ========

const books = [
  {name: 'Código Limpo', price: 30 },
  {name: 'Node.js Pro', price: 5},
  {name: 'JavaScript in Action', price: 10},
  {name: 'Lógica de programação', price: 50},
  {name: 'Programador pragmático', price: 40},
]

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({name, price}) => `O preço do livro "${name}" caiu para ${price}`)
console.log(booksOnSale);