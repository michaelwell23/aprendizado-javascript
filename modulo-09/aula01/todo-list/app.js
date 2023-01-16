const formAddTodo = document.querySelector('.form-add-todo');
const inputSeachTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container');

// Add todo's
const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
    `;
    event.target.reset();
  }
};

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

// Remove todo's
const removeTodo = (clickedElement) => {
  const trashDataVaue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataVaue}"]`);

  if (trashDataVaue) {
    todo.remove();
  }
};

todosContainer.addEventListener('click', (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});

//filtra os inputs que deram e não deram match 
const filterTodos = (todos, inputValue, returnMatchTodos) =>
  todos.filter((todo) => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue);
    return returnMatchTodos ? matchedTodos : !matchedTodos;
  });

const manipulateClasses = (todos, classToAdd, classToRemove ) => {
  todos.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
}

//Ocultar os todos que não deram match ao pesquisar
const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todosToHide, 'hidden', 'd-flex')
};

// Exibe os todos que deram match ao pesquisar
const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'd-flex', 'hidden')
};

inputSeachTodo.addEventListener('input', (event) => {
  const todos = Array.from(todosContainer.children);
  const inputValue = event.target.value.trim().toLowerCase();

  hideTodos(todos, inputValue);
  showTodos(todos, inputValue);
});
