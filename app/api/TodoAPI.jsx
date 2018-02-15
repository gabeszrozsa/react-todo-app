export function setTodos(todos) {
  if (Array.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
}

export function getTodos() {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];

  try {
    todos = JSON.parse(stringTodos);
  } catch (e) {

  }

  return Array.isArray(todos) ? todos : [];
}

export function filterTodos(todos, showCompleted, searchText) {
  let filteredTodos = todos;

  // NOTE: Filter by showCompleted
  filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted);

  // NOTE: Filter by searchText
  if (searchText) {
    filteredTodos = filteredTodos.filter((todo) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // NOTE: Sort todos with non-completed first
  filteredTodos.sort( (a, b) =>
    (!a.completed && b.completed) ? -1 : (a.completed && !b.completed) ? 1 : 0 );

  return filteredTodos;
}
