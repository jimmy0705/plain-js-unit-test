let todos = [];
let idCounter = 1;

function addTodo(title) {
  const newTodo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  return newTodo;
}

function getTodos() {
  return [...todos]; // Return a shallow copy
}

function updateTodo(id, updates) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;

  todos[index] = { ...todos[index], ...updates };
  return todos[index];
}

function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}

function clearTodos() {
  todos = [];
  idCounter = 1;
}

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  clearTodos
};
