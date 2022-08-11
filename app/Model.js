import { $storage } from "./utils.js";

export class Model {
    #todos = $storage() || [];

    constructor() {
        this.searchTodos = '';
    }

    setTodoValue(text) {
        const newTodo = { id: Date.now(), checked: false, text };
        this.#todos.push(newTodo);

        $storage(this.#todos);
    }

    removeTodo(todo) {
        this.#todos = this.#todos.filter(el => el.id !== todo.id);

        $storage(this.#todos);
    }

    changeTodo(todo) {
        const idx = this.#todos.findIndex(el => el.id === todo.id);
        this.#todos[idx] = { ...this.#todos[idx], checked: !todo.checked };

        $storage(this.#todos);
    }

    searchTodo(value) {
        this.searchTodos = this.#todos.filter(el => el.text.toLowerCase().includes(value.toLowerCase()));
    }

    get getSearchTodos() {
        return this.searchTodos;
    }

    get getTodos() {
        return this.#todos;
    }
}