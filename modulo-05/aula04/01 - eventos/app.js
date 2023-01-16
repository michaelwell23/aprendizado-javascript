const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const li = document.createElement('li');

  li.textContent = 'Fazer Café';  
  ul.prepend(li) 
})


ul.addEventListener('click', (event) => {
  const clickedElement = event.target

  if(clickedElement.tagName === 'LI'){
    clickedElement.remove();
  }
})