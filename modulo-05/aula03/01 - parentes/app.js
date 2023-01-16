// ================================= PARENTS =================================
const article = document.querySelector('article');

//OBTENDO OS ELEMENTOS FILHOS DE UM TAG HTML
Array.from(article.children).forEach(element => {
//   element.classList.add('article-element');
}) 

// OBTENDO ELEMENTO PAI POR MEIO DE UMA TAG FILHO
const title =  document.querySelector('h2');
// console.log(title.parentElement); exibe o elemento pai
// console.log(title.nextElementSibling); // exibe o próximo elemento irmão
// console.log(title.previousElementSibling); // exibe o elemento irmão anterior

