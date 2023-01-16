// ARROW FUNCTION
const double = number => number * 2;
console.log(double(23));

// FUNÇÕES VS MÉTODOS
const sayHi = () => 'Olá'

const greet = sayHi()
console.log(greet);

// métodos
const sayInUpperCase = greet.toUpperCase()
console.log(sayInUpperCase)

// FOREACH E CALLBACKS
const myFunc = callback => {
  const value = 77
  callback(value);
}
myFunc(number => {
  console.log(number);
})

const socialNetWork = ['facebook','instagram', 'twitter', 'youtube'];
const logArrayInfo = socialNetWork.forEach((socialNetWork, index, value) => {
  console.log(index, socialNetWork, value)
})


// UTILIZANDO CALLBACKS
const ul = document.querySelector('[data-js="ul"]');
let HTMLTemplate = ''

socialNetWork.forEach((socialNetWork) => {
  HTMLTemplate += `<li style="color: crimson;">${socialNetWork}</li>`
})


ul.innerHTML = HTMLTemplate