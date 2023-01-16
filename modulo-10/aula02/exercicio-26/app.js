/*
  01
  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
const dateFormat = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${String(day).length === 1 ? `0${day}` : day}/${String(month).length === 1 ? `0${month}` : month }/${year}`
}
console.log('EXERCÍCIO 01', dateFormat(new Date('July 03 2021')))


/*
  02
  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
const dateAndHour = (date) => {
  const weeks = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const months = ['janeiro', 'fevereiro', 'março','abril','maio', 'junho', 'julho','agosto', 'setembro','outubro', 'novembro', 'dezembro']

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const week = date.getDay();

  const hour = date.getHours();
  const minutes = date.getMinutes()

  return `0${hour}:${minutes} - ${weeks[week]}, ${day} de ${months[month]} de ${year}`
}

console.log('EXERCÍCIO 02:', dateAndHour(new Date('June 7 2020 03:07')))


/*
  03
  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/
const user = { id: 42, isVerified: true }
const { id, isVerified } = user;

console.log('EXERCÍCIO 03:', id, isVerified);


/*
  04
  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/
const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000'}

const {name: nameA } = robotA
const {name: nameB } = robotB

console.log('EXERCÍCIO 04:', nameA, nameB)


/*
  05
  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/
const a = 'a'
const b = 'b'
const c = 'c'

const alphabet = { a, b, c}
console.log('EXERCÍCIO 05:', alphabet )

/*
  06
  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange } = {}) => {

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({
    target,
    property,
    willChange,
  })
}
updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })


/*
  07
  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => `
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
`

const updateClock = () => {
  const present = new Date()
  const hours = dateFns.format(present, "HH")
  const minutes = dateFns.format(present,'mm')
  const seconds = dateFns.format(present,'ss')

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
