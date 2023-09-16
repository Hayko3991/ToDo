// selectors

const input = document.querySelector('.app form input[type=text]');
const submit = document.querySelector('.app form input[type=submit]');
const filter = document.querySelector('.app form .filter');
const todos = document.querySelector('.app .todos');

// event listeners

submit.addEventListener('click',submitHandelerFunc);
todos.addEventListener('click', todoClickHandelerFunc);
filter.addEventListener('click', filterHandelerFunc)



// functions
function submitHandelerFunc(evt){
    evt.preventDefault() 

    if(!input.value.trim()) return;
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const span1 = document.createElement('span');
    span1.classList.add('todo_text');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.classList.add('todo_buttons');
    span2.innerHTML = '<i class="fas fa-check"></i>';
    span2.innerHTML += '<i class="fas fa-trash"></i>';

    todo.appendChild(span1);
    todo.appendChild(span2);
    
    todos.appendChild(todo);
    input.value = '';
}

function todoClickHandelerFunc (evt){
    if(evt.target.classList[1] === 'fa-trash'){
        let todo = evt.target.parentElement.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })
         
    }
    if(evt.target.classList[1] === 'fa-check'){console.log(evt.target.parentElement);
        let todo = evt.target.parentElement.parentElement;
        todo.classList.toggle('done');
    }
}

function filterHandelerFunc(evt){
    console.log(evt.target.value);
    const todos = document.querySelectorAll('.todos .todo');
    if(evt.target.value === 'all'){
        todos.forEach(todo => {
           todo.style.display = 'flex';
           
        })

    }
    else if(evt.target.value === 'completed'){
        todos.forEach(todo => {
            if(todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none';
        })
    }
    else if (evt.target.value === 'uncompleted'){
            todos.forEach(todo => {
                if(!todo.classList.contains('done')) todo.style.display = 'flex';
                else todo.style.display = 'none';
            })
    
}
}