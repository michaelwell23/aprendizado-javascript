// OBJETOS EM ARRAYS

let user = {
  name: 'Michael',
  age: 31,
  email: 'michaellopes@gmail.com',
  city: 'Salto',
  blogPost: [
    {title: 'Conceitos importantes antes de estudar programação', likes: 300000},
    {title: 'Hábitos de extudo', likes: 500000}
  ],
  login(){
    console.log('Usuário logado!')
  },
  logout() {
    console.log('Usuário desconectado!')
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguites posts :`)

    this.blogPost.forEach(post => {
      console.log(`Post: ${post.title}, Likes: ${post.likes}`)
    }); 
  }
}
// user.logBlogPosts();

// O OBJETOS MATH
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)) // converte um numero decimal para um numero inteiro.
console.log(Math.floor(area)) // converte um numero decimal para um numero inteiro. (arrendoda para baixo)
console.log(Math.ceil(area)) // converte um numero decimal para um numero inteiro. (arrendoda para cima)
console.log(Math.trunc(area)) // remove a parte decimal de um numero, retornando um numero inteiro.

// números aleátorios

const randomNumber =  Math.random();
console.log(randomNumber);

console.log(Math.round(randomNumber * 100));

// TIPOS DE REFERENCIAS E TIPOS PRIMITIVOS
let scoreOne = 50
let scoreTwo =  scoreOne

console.log(` score: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100;
console.log(` score: ${scoreOne} | scoreTwo: ${scoreTwo}`)


// VALORES DE REFERENCIA
let userOne = { name: 'Michael' , age: 32}
let userTwo = userOne;

console.log(userOne, userTwo)
userOne.age = 33;
console.log(userOne, userTwo)

