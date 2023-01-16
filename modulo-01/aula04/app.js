// BOOLEANS E COMPARAÇÕES
console.log(true, false, 'true', 'false');

// MÉTODOS PODEM RETORNAR BOOLEANS
const nickName = 'michaelwell' 
const personagens =  ['Jugo', 'Sandira', 'Thunder']

console.log(nickName.includes('m'), personagens.includes('Fulgore')) // verifica se o valor passado no argumento esta contindo no array ou variável, retornando true ou false;

// OPERADORES DE COMPARAÇÃO
const age = 31;
const nome = 'wellington';

console.log(age == 31,'Operador de igualdade'); 
console.log(age == 35, 'Operador de igualdade');
console.log(age != 35, 'Operador de negação');
console.log(age > 31, 'Operador maior que');
console.log(age < 35, 'Operador menor que');
console.log(age >= 35, 'Operador maior ou igual que');
console.log(age <= 31, 'Operador menor ou igual que');
console.log('')
console.log(nome == 'michael');
console.log(nome == 'Michael');
console.log(nome > 'michael');
console.log(nome > 'Wellington');
console.log(nome > 'Michael');
console.log('')

// 'IGUAL A' E 'DIFERENTE DE'
console.log(age == '31'); 
console.log(age != '31'); 
console.log('')

// 'IGUAL A E DO MESMO TIPO' E 'DIFERENTE DE E DO MESMO TIPO'
console.log(age === '31');
console.log(age !== '31');
console.log('')

// COVERSÃO DE TIPOS
let score = '100'
score = Number(score);

console.log(score + 1);
console.log(typeof score);

const crazyConversion = Number('Maçã');
const convertedNumber = String(97);
const booleanConversion = Boolean(10);

console.log(crazyConversion);
console.log(convertedNumber);
console.log(booleanConversion)

/*
VALORE FALSY
 - false
 - 0
 - "", '', ``,
 - null
 - undefined
 -NaN

VALORE TRUTHY
- Qualquer valor que não seja falsy
*/ 