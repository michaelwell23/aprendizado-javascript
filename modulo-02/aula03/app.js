//operador lógico not (!)
let isUserLoggedIn = false;

if(!isUserLoggedIn){
  // console.log('Você precisa estar logado!')
}

// console.log(!true)
// console.log(!false)


// BREAK E CONTINUE
const scores = [50,25,0,30,100,20,10]

for(let i = 0; i < scores.length; i++){
if(scores[i] === 0){
  continue // pula uma interação e faz o fluxo do código continuar;
}

  // console.log(`Sua pontuação: ${scores[i]}`)

  if(scores[i] === 100){
    // console.log('Parabens você atingiu a pontuação máxima');

    break; // para a interação expecificada e para o fluxo do código;
  }
}

// SWITCH
const personagem = 'Homem-Aranha';

switch(personagem){
  case 'Homem de Ferro':
    console.log('Esse é o Homem de Ferro')
    break;
  case 'Hulk':
    console.log('Esse é o Hulk')
    break;
  case 'Capitão América':
    console.log('Esse é o Capitão América')
    break;
  case 'Viuva Negra':
    console.log('Esse é a Viuva Negra')
    break;
  case 'Homem-Aranha':  
    console.log('Esse é o Homem-Aranha')
    break;
  default:
    console.log('Herói inválido');
}