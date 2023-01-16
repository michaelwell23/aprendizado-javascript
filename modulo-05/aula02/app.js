// ======= ADICIONANDO E MODIFICANDO =======
// const paragraph = document.querySelector('p');
// paragraph.innerText = 'Palmeiras não tem mundial'

const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((paragraph, index)=> {
//   paragraph.innerText += ` No texto ${index + 1}`
// })

const div = document.querySelector('.content')
// div.innerHTML += '<h2>Novo h2</h2>'

const favoriteAnimes = ['Naruto', 'Bleach', 'Dragon Ball', 'Akira', 'Baki' ]
// favoriteAnimes.forEach(animes => {
//   div.innerHTML += `<p>${animes}</p>`
// })


//  ======= OBTENDO E SETANDO ATRIBUTOS =======
const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://github.com/michaelwell23')
// link.innerText = 'Repositório'

const tagParagraph = document.querySelector('p');
// console.log(tagParagraph.getAttribute('class'));
// tagParagraph.setAttribute('class', 'success');
// tagParagraph.setAttribute('style', 'color: green;')


// ====== MODIFICANDO CSS =======
const title = document.querySelector('h1')
// title.setAttribute('style', 'margin: 50px') 
title.style.margin = '50px';
title.style.color = 'pink';
title.style.fontFamily = 'sans-serif'
title.style.margin = ''
