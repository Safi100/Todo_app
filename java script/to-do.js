const form = document.querySelector('.create_to-do');
const input = document.querySelector('.to-do_input');
const to_do_container = document.querySelector('.list-container');
const create_button = document.querySelector('.create_button');
const count = document.querySelector('.counter');
var counter = 0;

const filtering = {
    all : document.querySelectorAll('.btn_all'),
    active : document.querySelectorAll('.btn_active'),
    completed : document.querySelectorAll('.btn_completed')
}

const clearCompleted = document.querySelector('.clear-complete_btn');
filtering.all.forEach(x=>{x.addEventListener('click', filter_all);});
filtering.active.forEach(x=>{x.addEventListener('click', filter_active);});
filtering.completed.forEach(x=>{x.addEventListener('click', filter_completed);});

// press enter on input  OR  click on circle
form.addEventListener('submit',CreateToDo);
create_button.addEventListener('click',CreateToDo);

function CreateToDo(event){
    event.preventDefault();
    input.value = input.value ? input.value.trimStart() : '';
    if(input.value=='' || input.value==' '){
        return;
    }else{
        var newToDo = document.createElement('div');
        var left = document.createElement('div');
        var newCheck_status = document.createElement('div');
        var newRemove = document.createElement('img');
        var sign = document.createElement('img');
        var newText_container = document.createElement('div');
    
        newText_container.textContent = input.value;
        sign.src="images/icon-check.svg"; 
        newRemove.src="images/icon-cross.svg";
        
        newToDo.classList.add('to-do');
        left.classList.add('left');
        sign.classList.add('sign');
        newText_container.classList.add('text-container');
        newCheck_status.classList.add('check_status');
        newRemove.classList.add('remove');
        
        newCheck_status.appendChild(sign);
        left.appendChild(newCheck_status);
        newToDo.appendChild(left);
        newToDo.appendChild(newText_container);
        newToDo.appendChild(newRemove);
        to_do_container.appendChild(newToDo);
        input.value="";
        counter = counter + 1;
        count.textContent = counter;
    }
    

    newRemove.addEventListener('click', remove);
    newCheck_status.addEventListener('click', check_completed);
    clearCompleted.addEventListener('click' , clear_Completed);

    function check_completed(){
        newToDo.classList.toggle('completed');
    }

    function remove(){
        newToDo.remove();
        counter = counter - 1;
        count.textContent = counter;
    }
}

function clear_Completed(){
    const all_todos = document.querySelectorAll('.to-do');
    all_todos.forEach(to_do =>{
        if(to_do.classList.contains('completed')){
            to_do.remove();
            counter = counter - 1;
            count.textContent = counter;
        }
    })
}

function filter_all(){
    const all_todos = document.querySelectorAll('.to-do');
    filtering.completed.forEach(x=>{x.classList.remove('filter_activated');})
    filtering.all.forEach(x=>{x.classList.add('filter_activated');})
    filtering.active.forEach(x=>{x.classList.remove('filter_activated');})
    all_todos.forEach(to_do =>{
            to_do.classList.remove('hide');
    });
}

function filter_active(){
    const all_todos = document.querySelectorAll('.to-do');
    filtering.completed.forEach(x=>{x.classList.remove('filter_activated');})
    filtering.all.forEach(x=>{x.classList.remove('filter_activated');})
    filtering.active.forEach(x=>{x.classList.add('filter_activated');})

    all_todos.forEach(to_do =>{
        if(to_do.classList.contains('completed')){
            to_do.classList.add('hide');
        }else{
            to_do.classList.remove('hide');
        }
    });
}

function filter_completed(){
    const all_todos = document.querySelectorAll('.to-do');
    filtering.completed.forEach(x=>{x.classList.add('filter_activated');})
    filtering.all.forEach(x=>{x.classList.remove('filter_activated');})
    filtering.active.forEach(x=>{x.classList.remove('filter_activated');})
    all_todos.forEach(to_do =>{
        if(!to_do.classList.contains('completed')){
            to_do.classList.add('hide');
        }else{
            to_do.classList.remove('hide');
        }
    });
}
