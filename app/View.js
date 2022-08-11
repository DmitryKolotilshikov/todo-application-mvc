import { $clearElements, $listen, $templates, $todoTemplate } from './utils.js';

export class View {
    #root = document.getElementById('root');
    #elements = $templates();

    constructor() {
        this.#root.append(this.el.container);
    }

    get el() {
        return this.#elements;
    }

    set bindRemoveTodo(cb) {
        this.removeTodo = cb;
    }

    set bindChangeTodo(cb) {
        this.changeTodo = cb;
    }

    renderTodos(todos) {
        $clearElements(this.el.wrapper);

        if (todos.length) {
            todos.forEach(todo => {
                const _todo = $todoTemplate(todo);
                $listen(_todo.btn, 'click', () => this.removeTodo(todo));
                $listen(_todo.checkbox, 'change', () => this.changeTodo(todo));
    
                this.el.wrapper.append(_todo.section);
            });
        } else {
            this.el.wrapper.append(this.el.noTodos);
        }
    }
}