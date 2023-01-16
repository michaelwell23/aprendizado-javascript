// =============== MAP =============== 
console.log('MÉTODO MAP')
const numbers = [1,2,3]
const doubleNumbers = numbers.map((item) => item * 2)
console.log(doubleNumbers, numbers);

const prices = [20,10,30,25,15,40,80,5];
const salePrices = prices.map(item => item / 2);
console.log(salePrices);

const products = [
  { name: 'Mouse sem fio', price: 30},
  { name: 'Pen Drive', price: 25},
  { name: 'Cartucho de Tinta', price: 50},
  { name: 'Suporte Ergonômico para Notebook', price: 23},
  { name: 'Repetidor de Sinal Wi-Fi', price: 44},
]

const saleProducts = products.map(product => {
  if(product.price >= 30){
    return { name: product.name, price: product.price / 2 }
  }

  return product;
})
console.log(saleProducts);

// =============== FILTER =============== 
console.log('MÉTODO FILTER')
const randomNumbers = [36, 99, 37, 63]
const greaterThan37 = randomNumbers.filter((item) => item > 37)
console.log(greaterThan37);

const users = [
  {name: 'Ada Lovelace', premium: true},
  {name: 'Grace Hopper', premium: false},
  {name: 'Alan Turing', premium: true},
  {name: 'Linus Torvalds', premium: false},
  {name: 'Margaret Hamilton', premium: true},
]

const userPremium = users.filter(user => user.premium)
console.log(userPremium);

// =============== REDUCE =============== 
const numbersArray = [1,2,3]

const sumResult = numbers.reduce((accumulator, item) => {
  return accumulator + item;
}, 0);

console.log(sumResult);

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Marcos Eduardo', score: 43 },
  { name: 'Carlos Barbosa', score: 234 },
  { name: 'Pedro Santos', score: 261 },
  { name: 'Lucas da Silva', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Marcos Eduardo', score: 137 },
  { name: 'Carlos Barbosa', score: 135 },
  { name: 'Pedro Santos', score: 359 },
  { name: 'Lucas da Silva', score: 133 },
]

const userScore = phaseScores.reduce((accumulator, phaseScore) => {
  if(phaseScore.name === 'Marcos Eduardo'){
    accumulator += phaseScore.score
  }

  return accumulator
},0)

console.log(userScore);