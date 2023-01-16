// Variáveis e escopo de bloco

let age = 31 // variável de escopo global. Pode ser acessada em qualquer lugar d código. 

if (true) {
  // age = 41 alterando o valor do escopo global
  let name = 'Michael' // escopo local;
  let age = 41 // podemos criar uma variável com mesmo nome dentro de outro escopo; 
  // console.log(`Dentro do 1º bloco de código , ${age} ${name}`);
}

if(true) {
  let age = 51;
  // console.log(`dentro do 2º bloco de código: ${age}`);

  var test = 'oi' //ignora o conceito de escopo de bloco;
}

// console.log(`Fora do bloco do código ${age} ${test}`)

// A PALAVRA-CHAVE THIS
// this é um objeto de contexto. Ele representa o contexto no qual o código está sendo executado. 

let user = {
  name: 'Michael',
  age: 31,
  email: 'michaellopes@gmail.com',
  city: 'Salto',
  blogPost: ['Conceitos importantes antes de estudar programação', 'Hábitos de estudo'],
  login(){
    console.log('Usuário logado!')
  },
  logout() {
    console.log('Usuário desconectado!')
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguites posts :`)

    this.blogPost.forEach(post => {
      console.log(post)
    }); 
  }
}

user.logBlogPosts()

