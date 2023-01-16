// UNINDO OBJETOS E ARRAYS
const arr = [1, 2, 3, 4];
const arr2 = [4, 5, 6];

// Unindo Arrays
const newArray = arr.concat(arr2);
const newArray2 = [0, ...arr, 3.5, ...arr2, 7];

console.log(newArray);

// Unindo Objetos
const obj1 = { prop1: 1, prop2: 2 };
const obj2 = { prop3: 3, prop4: 4 };

const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };

console.log(obj3, obj4);

// CASO DE USO EM USO EM STRINGS E FUNÇÕES
const str = 'abc';
console.log([...str]);

const getReversedString = (string) => [...string].reverse().join('');
console.log(getReversedString('123'));

// Usando spread em Funções
const numbers = [7, 3, 5, 3.1, 9];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
