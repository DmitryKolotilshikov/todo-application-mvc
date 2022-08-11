import { $listen } from './utils.js';

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.update();
        $listen(this.view.el.btn, 'click', this.addTodo.bind(this));
        $listen(this.view.el.inputSearch, 'input', this.searchValue.bind(this));

        this.view.bindRemoveTodo = this.removeTodo.bind(this);
        this.view.bindChangeTodo = this.changeTodo.bind(this);
    }

    addTodo() {
        let input = this.view.el.input;

        if (input.value.trim()) {
            this.model.setTodoValue(input.value);

            input.value = '';
            this.view.el.inputSearch.value = '';

            input.focus();
            this.update();
        }
    }

    removeTodo(todo) {
        this.model.removeTodo(todo);
        this.update();
    }

    changeTodo(todo) {
        this.model.changeTodo(todo);
        this.update();
    }

    searchValue() {
        let input = this.view.el.inputSearch;

        if (input.value.trim()) {
            this.model.searchTodo(input.value);
            this.updateWithSearch();
        } else {
            this.update();
        }
    }

    updateWithSearch() {
        this.view.renderTodos(this.model.getSearchTodos);
    }

    update() {
        this.view.renderTodos(this.model.getTodos);
    }
}