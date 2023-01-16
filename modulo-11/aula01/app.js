/** 
 * Uma operação assíncrona é um código que inicia um processo agora
 * e finaliza esse processo posteriormente.
 
 * O javaScript por padrão é single thread, ele é uma linguagem de fio único que executa
 * as instruções de maneira sequencial, de formar síncrona. A natureza síncrona determina que 
 * as instruções de código seja executadas de forma sequencial, tendo uma requisição de um 
 * banco de dados como uma dessas instruções, pode fazer com que as outras instruções sejam
 * bloqueadas até a finalização da requisição, esse processo é chamdo de "Blocking code". Esse processo 
 * pode ser um problema quando se possui muitas requisições em um código com muitas instruções, é para 
 * resolver esse problema que existe o código assíncrono. 
   
*/

console.log(1)
console.log(2)

setTimeout(() => {
  console.log('Função de callback executada')
}, 2000);

console.log(3)
console.log(4)