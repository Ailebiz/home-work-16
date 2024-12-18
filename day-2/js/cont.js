
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let searchbtn=document.getElementById('search-btn')


let todos = [];


function addTodo(task) {
    if (task.trim() === '') return; 
    todos.push(task);
    renderTodos();
    todoInput.value = ''; 
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    const taskToEdit = todos[index];
    todos.splice(index, 1); 
    renderTodos();
    todoInput.value = taskToEdit; 
    todoInput.focus(); 
}

searchbtn.addEventListener('click',function(event){
    event.preventDefault()
    let searchItem=document.getElementById("search-text").value.toLowerCase()

    let items=listBox.querySelectorAll('div')

    items.forEach(item=>{
       let pItem=item.querySelector('p').textContent.toLowerCase()

       // console.log("Pharagrav mani", pItem);
       if(!searchItem || searchItem == null){
           item.style.display = 'flex'
       } else if(pItem.includes(searchItem)){
           item.style.display = 'flex'
       }else{
           item.style.display= 'none'
       }
       searchItem.value = ''
    })
})
function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach((task, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.ondblclick = () => editTodo(index); 

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Өшіру';
        deleteBtn.onclick = () => deleteTodo(index);

        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    });
}

addBtn.addEventListener('click', () => addTodo(todoInput.value));
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo(todoInput.value);
    }
});
