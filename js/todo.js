const todoBtn = document.querySelector('#todo-listbtn');
const todoWrap = document.querySelector('#todo');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

function showToDo(){
    todoWrap.classList.toggle('uptodo');
    todoBtn.classList.toggle('todobtnon');
}

todoBtn.addEventListener('click', showToDo);
//투두리스트 껐다 켰다 하는기능
// 투두리스트 기능
let toDosArray = [];

const TODOLIST = 'todo-list'

function savedList(){
    let stringToDos = JSON.stringify(toDosArray);
    localStorage.setItem(TODOLIST, stringToDos);
};

function delBtnToDo(event){
    const btnTarget = event.target.parentNode;
    btnTarget.remove();
    toDosArray = toDosArray.filter((toDo) => toDo.id !== parseInt(btnTarget.id));
    savedList();
};

function paintToDo(newTodoObj){
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const delBtn = document.createElement('button');
    delBtn.classList.add('xi-trash');
    delBtn.addEventListener('click', delBtnToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = ""; // submit 했을 때, input 내용 삭제
    const newToDosObj = {
        text: inputValue,
        id: Date.now(),
    };
    toDosArray.push(newToDosObj);
    paintToDo(newToDosObj);
    savedList();
};

todoForm.addEventListener('submit', handleToDoSubmit);

const getList = localStorage.getItem(TODOLIST);

if(getList){
    const parsedList = JSON.parse(getList);
    toDosArray = parsedList;
    parsedList.forEach(paintToDo);
}


