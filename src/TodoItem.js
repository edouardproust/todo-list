class TodoItem {

    constructor(todoList, todoInput) {
        this.htmlContainer;
        this.todoList = todoList;
        this.todoInput = todoInput;
    }

    create() {
        // create DIV
        const todo = document.createElement('div');
        this.htmlContainer = todo;
        todo.classList.add('todo-container');
        // create LI
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = this.todoInput;
        todo.appendChild(todoItem);
        // create CHECK button
        const checkBtn = document.createElement('button');
        checkBtn.classList.add('check-btn');
        checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        todo.appendChild(checkBtn);
        // create DELETE button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        todo.appendChild(deleteBtn);
        // Display created Item
        const allTodos = document.querySelector('.todos-list');
        allTodos.appendChild(todo);
        // add item to todoList object
        this.todoList.todos.push(this);
        // remove 'list is empty' text
        allTodos.childNodes.forEach(function(node) {
            if(node.classList !== undefined && node.classList.contains('empty-text')) {
               node.remove();
            }
        });
    }

    addToLocalStorage() {
        let localArr;
        if(window.localStorage.length == 0) {
            localArr = [];
            localArr.push(this.todoInput);
        } else {
            localArr = JSON.parse(localStorage.getItem('todos'));
            localArr.push(this.todoInput);
        }
        localStorage.setItem('todos', JSON.stringify(localArr));
    }

    removeFromLocalStorage() {
        const localArr = JSON.parse(localStorage.getItem('todos'));
        localArr.splice(localArr.indexOf(this.todoInput), 1);
        localStorage.setItem('todos', JSON.stringify(localArr));
    }

    checkOrDelete(e) {
        let todoBtnClass = e.target.classList[0];
        let todoItem = e.target.parentElement;
        let todoContent = todoItem.childNodes[0].innerText;
        if (todoBtnClass !== undefined) {
            if (todoBtnClass === "check-btn") {
                todoItem.classList.toggle('completed');
            } else if (todoBtnClass === "delete-btn") {
                todoItem.classList.add('fall');
                todoItem.addEventListener('transitionend', function() {
                    todoItem.remove();
                });
                this.removeFromLocalStorage(todoContent);
            }
        }
    }

}