/*
  01
  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]
console.log('EXERCÍCIO 01:', months[0]);


/*
  02
  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/
const presentMoment = new Date();
console.log('EXERCÍCIO 02', presentMoment);


/*
  03
  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
console.log('EXERCÍCIO 03:', presentMoment.getFullYear())


/*
  04
  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
const pastMoment = new Date('August 23 1978 08:40:00')
console.log('EXERCÍCIO 04:', pastMoment);


/*
  05
  - Exiba, no console, a hora do objeto que você acabou de criar.
*/
console.log('EXERCÍCIO 05:', pastMoment.getHours());


/*
  06
  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/
const futureMoment = new Date('June 19 2030 13:50:56')
console.log('EXERCÍCIO 06:', futureMoment)

/*
  07
  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
const difference  = futureMoment.getTime() - pastMoment.getTime();
console.log('EXERCÍCIO 07:', Math.round(difference / 1000 / 60 / 60 / 24));

/*
  08
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
