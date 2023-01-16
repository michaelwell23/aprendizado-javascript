class User {
  constructor(name,email) {
    this.name = name
    this.email = email
    this.points = 0
  }

  login () {
    `${this.name} logou na aplicação.`
    return this; 
  }

  logout () {
    return  `${this.name} deslogou da aplicação`
  }

  addPoit () {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto' }`
  }
}

const user = new User('Michael', 'michael@dev.com.br')
const user2 = new User('Paulo Henrique', 'ph@dev.com.br')

user.login().addPoit()
console.log(user)

// HERANÇA
class Mammal {
  constructor(species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge(){
    this.age++
  }
}

class Lion extends Mammal {
  constructor(species, name, age, manEater){
    super(species, name, age) 
    this.manEater = manEater
  }
  eatZebras (animals) {
    return animals.filter(animal => animal.species !== 'zebra');
  }
}

const marty = new Mammal('zebra', 'Marty', 4);
const pompeu = new Mammal('gnu', 'Pompeu', 5);
const angus = new Mammal('cavalo', 'Angus', 3);
const mufasa = new Lion('leão', 'Mufasa', 6, false);

const animals = [marty, pompeu, angus]
 
console.log(mufasa);