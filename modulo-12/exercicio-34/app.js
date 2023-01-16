/*
  01
  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/
const stringReverse = (string) => {
  return string.split('').reverse().join('')
}

const stringReverse2 = (string) => {
  var newString = '';

  for(let i = string.length - 1; i >= 0; i--){
    newString += string[i]
  }

  return newString;
}

console.log('EXERCÍCIO 01: ', stringReverse('michael'), stringReverse2('wellington'))

/*
  02
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber = false

numbers.forEach(number => number === 15 ? foundNumber = true : foundNumber)
console.log('EXERCÍCIO 02: ',foundNumber)

/*
  03
  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
