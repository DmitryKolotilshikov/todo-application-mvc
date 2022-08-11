export const $templates = () => {
    const container = $create('div', 'container');
    const input = $create('input', 'input-add');
    $attr(input, 'type', 'text');
    $attr(input, 'placeholder', 'add todo...');
    
    const btn = $create('button', 'btn-add', 'add todo');

    const inputSearch = $create('input', 'input-search');
    $attr(inputSearch, 'placeholder', 'find todo...');

    const wrapper = $create('div', 'todos-wrapper');

    container.append(input, btn, inputSearch, wrapper);

    const noTodos = $create('p', 'no-todo', 'no todos...');

    return {
        container,
        input,
        btn,
        inputSearch,
        wrapper,
        noTodos
    }
}

export const $todoTemplate = (todo) => {
    const section = $create('section', 'todo');
    const title = $create('h3', 'todo__title');
    const checkbox = $create('input', 'todo__checkbox');
    $attr(checkbox, 'type', 'checkbox');
    checkbox.checked = todo.checked;

    const btn = $create('button', 'todo__remove', '❌');

    title.textContent = todo.text;
    section.append(checkbox, title, btn);

    return { section, checkbox, btn };
}

export const $listen = (el, type, cb) => {
    el.addEventListener(type, cb);
}

export const $clearElements = (el) => el.innerHTML = '';

export const $create = (tag, cls, text = '') => {
    const el = document.createElement(tag);
    el.classList.add(cls);
    if (text) {
        el.textContent = text
    }
    return el;
}

export const $attr = (el, type, value) => {
    el.setAttribute(type, value);
}

export const $storage = (value) => {
   if (value) {
        localStorage.setItem('todo-app-mvc', JSON.stringify(value))
   } else {
        return JSON.parse(localStorage.getItem('todo-app-mvc'))
   }
}
