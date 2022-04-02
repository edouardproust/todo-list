class TodoList {

    constructor () {
        this.alert = document.querySelector('.alert');
        this.emptyText = document.querySelector('.empty-text');
        // vars for event listeners
        this.addTodoBtn = document.querySelector('.input-btn');
        this.todos = []; // array of TodoItem objects
        this.filter = document.querySelector('.todo-select');
        // methods 
        this.getLocalStorageElements();
        // Event listeners
        this.addTodoBtn.addEventListener('click', e => {
            this.submitTodo(e);
        });
        this.filter.addEventListener('change', e => {
            this.filterTodos(e);
        });
        this.todos.forEach(todo => {
            todo.htmlContainer.addEventListener('click', function(e) {
                todo.checkOrDelete(e);
            });
        });
    }

    submitTodo(e) {
        e.preventDefault();
        let todo = document.querySelector('.input');
        let value = todo.value;
        if(value === '') {
            // show alert
            alert.innerText = 'Todo can\'t be empty!';
        } else {
            // hide alert
            alert.innerText = '';
            // Add todo item
            let todoItem = new TodoItem(this, value);
            todoItem.create();
            todoItem.addToLocalStorage();
            todo.value = ''; // Reset input field
            // add event listener
            todoItem.htmlContainer.addEventListener('click', e => {
                todoItem.checkOrDelete(e);
            });
        }
    }

    filterTodos(e) {
        this.todos.forEach(function(todo){
            let todoHtml = todo.htmlContainer;
            let classList = todo.htmlContainer.classList;
            if(classList !== undefined) {
                switch(e.target.value) {
                    case 'all':
                        todoHtml.style.display = 'flex';
                        break;
                    case 'completed':
                        if(classList.contains('completed')) {
                            todoHtml.style.display = 'flex';
                        } else {
                            todoHtml.style.display = 'none';
                        }
                        break;
                    case 'uncompleted':
                        if(!classList.contains('completed')) {
                            todoHtml.style.display = 'flex';
                        } else {
                            todoHtml.style.display = 'none';
                        }
                        break;
                }
            }
        });
    }

    getLocalStorageElements() {
        let localTodos = JSON.parse(localStorage.getItem('todos'));
        if(localTodos) {
            localTodos.forEach(todoContent => {
                let todoItem = new TodoItem(this, todoContent);
                todoItem.create();
            });
        }
    }

}
