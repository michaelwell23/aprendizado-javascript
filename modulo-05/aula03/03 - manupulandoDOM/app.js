const ul = document.querySelector('ul');

// ul.remove();

const lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('click', (event) => {
    const clickedElement = event.target

    clickedElement.remove();
  }) 
})

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // ul.innerHTML += '<li>Zoar Palmerense</li>'

  const li = document.createElement('li');
  li.textContent = 'Fazer Café';

  // ul.append(li) adiciona a tag como um ultimo elemento
  ul.prepend(li) // adiciona a tag como a primeira no elemento. 
})