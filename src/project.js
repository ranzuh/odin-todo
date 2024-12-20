export class Project {
    constructor(name) {
        this.name = name;
    }

    todos = [];

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(title) {
        const indexToRemove = this.todos.findIndex((todo) => todo.title === title);
        this.todos.splice(indexToRemove, 1);
    }

}