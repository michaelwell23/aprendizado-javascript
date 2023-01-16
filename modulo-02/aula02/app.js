// CONDICIONAL IF
const age = 70;

if (age > 75) {
  // console.log('Você é menor de 70')
}

const dragonBall = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];
if (dragonBall.length >= 3) {
  // console.log('O array contem os Guerreiros mais poderos da Terra');
}

// IF / ESLE | OPERADORES LÓGICOS
const password = 's2weerwea2jz';

if (password.length >= 12 && password.includes('1')) {
  console.log('senha muito forte');
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
  console.log('senha forte');
} else {
  console.log('A senha deve possui 8 ou mais caracteres!');
}

