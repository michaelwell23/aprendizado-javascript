// FUNCTIONS DECLARATION
function nomeDaFuncao (){
  //bloco de execução da faunção
  console.log('Hellow, world');
}
nomeDaFuncao() // ivocação da função;

// FUNCTION EXPRESSION
const showMensseger = function(){
  console.log('Bankai!!!')
}
showMensseger();

// ARGUMENTOS, PARÂMETROS E DEFAULT PARAMETERS
const funcName = function(name = 'Gabriella', lasName = 'Albuquerque'){
  console.log(`Olá, ${name} ${lasName}!`)
}
funcName()

// RETORNO VALORES
const double = function(number){
  const doubleResult = number * 2
  return doubleResult;
}

const result = double(3);

const showResult = function(value){
  return `O resultado é: ${value}`
}
console.log(showResult(result))