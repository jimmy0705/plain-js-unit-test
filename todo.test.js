const {
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    clearTodos
} = require('./todo');

describe("To-Do Manager", () => {
    beforeEach(() => {
        clearTodos();
    });

    test("should add a new todo", () => {
        const todo = addTodo("Learn Jest");
        expect(todo).toHaveProperty("id", 1);
        expect(todo).toHaveProperty("title", "Learn Jest");
    });

    test("should return all todos", () => {
        addTodo("Task 1");
        addTodo("Task 2");
        const todos = getTodos();
        expect(todos.length).toBe(2);
        expect(todos[1].title).toBe("Task 2");
    });

    test("should update a todo", () => {
        const todo = addTodo("Original Task");
        const updated = updateTodo(todo.id, { title: "Updated Task", completed: true });
        expect(updated.title).toBe("Updated Task");
        expect(updated.completed).toBe(true);
    });

    test("should return null when updating non-existent todo", () => {
        const result = updateTodo(999, { title: "Does not exist" });
        expect(result).toBeNull();
    });

    test("should delete a todo", () => {
        const todo = addTodo("To Delete");
        const success = deleteTodo(todo.id);
        expect(success).toBe(true);
        expect(getTodos().length).toBe(0);
    });

    test("should return false when deleting non-existent todo", () => {
        const success = deleteTodo(999);
        expect(success).toBe(false);
    });

    test("should isolate data between tests", () => {
        const todos = getTodos();
        expect(todos.length).toBe(0);
    });
});
