//Model for new task
class Task {
    constructor(task) {
        this.task = task;
    }
}

class displayList {
    static displayToDoList() {
    const toDoList = [];

    toDoList.forEach((todo)=> displayList.addTastToList(todo));
    };
//Add new tast to prepared ul list - function
    static addTastToList(todo) {

        const ulList = document.querySelector('ul');
        const statbtn = document.createElement('button');
        statbtn.className = `status`;
        statbtn.setAttribute('data-status', false);
        statbtn.innerHTML = '<i class="fas fa-check"></i>';
        const removebtn = document.createElement('button');
        removebtn.className = `remove`;
        removebtn.innerHTML = '<i class="fas fa-times"></i>';
        removebtn.setAttribute('data-remove', false);

        const newTask = document.createElement('li');
        newTask.textContent = todo.task;

        const div = document.createElement('div');
        div.className = 'element';
        div.appendChild(statbtn);
        div.appendChild(newTask);
        div.appendChild(removebtn);

        ulList.appendChild(div);
    }

// Input is cleared after adding new task
    static clear() {

        document.querySelector('input').value = '';
    }
// Check task as done or undone
    static status(item) {
        if(item.classList.contains('fa-check')) {
            item.parentElement.classList.toggle('status-active');
        }
    }
//Remove task from list
    static remove(item) {
        if(item.classList.contains('fa-times')) {
            item.parentElement.parentElement.remove();
        }
    }
//Show proper message when you make something with task
    static alert(message, addClassName) {
        const divAlert = document.createElement('div');
        divAlert.className = `newAlert ${addClassName}`;
        divAlert.textContent = message;
        const parent = document.querySelector('form');
        parent.appendChild(divAlert);
        setTimeout(() => document.querySelector('.newAlert').remove(), 1000);
    }
    
}


//Add task in DOM
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const taskValue = document.querySelector('input').value;

    if(taskValue === '') return displayList.alert('Podaj zadanie.','alert');
    
    const newTask = new Task(taskValue);
    displayList.alert('Dodano zadanie','done');

    displayList.addTastToList(newTask);
    displayList.clear(newTask);

});

//Status task and remove task in DOM
document.querySelector('ul').addEventListener('click', (e) => {
    displayList.status(e.target);
    displayList.remove(e.target);
});
