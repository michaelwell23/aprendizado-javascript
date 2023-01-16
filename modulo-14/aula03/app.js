// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

function Student(name, email) {
  this.name = name;
  this.email = email;

  this.login = function () {
    return `${this.name} fez login`;
  };
}

const marcosVenancio = new Student(
  'Marcos Venancio',
  'marcosVenancio@email.com.br'
);
const gabriellaVasconcelos = new Student(
  'Gabriella Vasconcelos',
  'gabriellaVasc@email.com.br'
);

// console.log(marcosVenancio, gabriellaVasconcelos)

// PROTOTYPE
function Student2(name, email) {
  this.name = name;
  this.email = email;
}

Student2.prototype.login = function login() {
  return `${this.name} fez login`;
};

Student2.prototype.comment = function comment() {
  return `${this.name} comentou`;
};

Student2.formatToDatabase = function formatToDatabase(aString) {
  return aString.toUpperCase().replaceAll(' ', '_');
};

const gabrielFilho = new Student2('Gabriel Filho', 'gabrielf@email.com.br');
// const brunoLopes = new Student2('Bruno Lopes', 'brunolopes@email.com.br');

// console.log(gabrielFilho.comment(), brunoLopes.comment());
// console.log(gabrielFilho.login === brunoLopes.login);
// console.log(gabrielFilho, brunoLopes);
// console.log(Student2.formatToDatabase('string para o banco de dados'));
// console.log(Student2.formatToDatabase.name);
// console.log(Student2.prototype.comment.name);
// console.log(Student2.prototype.login.name);


// HERANÇA PROTOTIPAL
function TeacherAssistant (name, email){
  Student2.call(this, name, email)
  this.scheduledWeekPosts = this.scheduledWeekPosts
}

TeacherAssistant.prototype = Object.create(Student2.prototype)

TeacherAssistant.prototype.givBadge = function givBadge ({ name }){
  return `${this.name} deu uma medlha para ${name}`
}

const arthurSousa =  new TeacherAssistant('Arthur Sousa', 'arthurSousa@email.com.br')
console.log(gabrielFilho, arthurSousa)
console.log(arthurSousa.givBadge(gabrielFilho))
console.log(arthurSousa.login())
console.log(arthurSousa.login === gabrielFilho.login)

// FACTORY FUNCTION E COMPOSIÇÃO DE OBJETOS
class User {
#counter = 0

  constructor(name, email){
    this.name = name;
    this.email = email
  }

  incrementCounter (){
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0;

  return {
    name,
    email,
    incrementCounter: () => ++counter
  }
}

const user = new User( 'Michael Lopes', 'michael@email.com')
const user2 = createUser('Michael Well', 'michaelwell@email.com')

console.log(user, user2)
console.log(user.incrementCounter())
console.log(user.incrementCounter())
console.log(user2.incrementCounter())
console.log(user2.incrementCounter())


class a {
  first(){
    return 1
  }

  socond(){
    return 'nãooooo!'
  }
}

class b extends a {
  third(){
    return 3
  }
}

const obj = new b()

const a2 = {
   first(){
    return 1
   }
}

const b2 = {
  second () {
    return 'nãooo!'
  }
}

const c2 = {
  third () {
    return 3
  }
}

const obj2 = {
  ...a2,
  ...c2,
}

console.log(obj)
console.log(obj2)