// ADICIONANDO DADOS 
localStorage.setItem('name', 'Michael')
localStorage.setItem('age', '32')

//EXIBINDO DADOS 
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')

// MODIFICANDO DADOS
localStorage.setItem('name', 'Michael Wellington Lopes');
localStorage.setItem('age', 32)

// REMOVER DADOS 
localStorage.removeItem('name');
localStorage.clear();

// Trabalhando com dados 
const myArray =  [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
]

localStorage.setItem('myArray', JSON.stringify(myArray))
const JSONFromLocalStorage = localStorage.getItem('myArray');
const myConvertedArray = JSON.parse(JSONFromLocalStorage);


