let todos = [];

let idCounter = 1;

function addTodo(title) {
    const newTodo = { id: idCounter++, title: title };
    todos.push(newTodo);
    // console.log(todos);
    return newTodo;
}

addTodo('hello world');
addTodo('practice oops js');
addTodo('keep racticing to get the grip of coding as before');

function getTodos() {
    // console.log([...todos])
    return [...todos]
}

getTodos();


function updateTodo(id, newTitle) {
    const index = todos.findIndex(todo => todo.id === id);
    console.log(index);
    if (index === -1) return null;
    console.log(todos[index]);
    todos[index] = { ...todos[index], title: newTitle };
    return todos[index];
}

updateTodo(1, "always practice js and ts")
// getTodos();
console.log(getTodos())

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