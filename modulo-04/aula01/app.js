// CRIANDO UM OBJETO LITERAL
let user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPost: ['Brigaderão Gourmet', 'Coxinha de frango'],
  login: function() {
    console.log('Usuário logado');
  },
  logout: function(){
    console.log('Usuário deslogado');
  }
}

console.log(user); // exibe o array
console.log(user.name); // acessando um valor de uma propriedade
user.age = 32 // modificando o valor de uma propriedade

// moduficando um valor de propriedade de um objeto por meio de conchetes
console.log(user['name']) // acessando um valor de uma propriedade utilizando conchetes
user['name'] = 'José';  // modificando o valor a uma propriedade
console.log(user['name'])

console.log(typeof user);

// ADICIONANDO MÉTODOS A UM OBJETO
user.login();
const name = 'Michael'
name.toUpperCase()

