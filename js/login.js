const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginBtn = document.querySelector('#login-form button');

function btnHandle(event){
    const inputValue = loginInput.value;
    localStorage.setItem('username', inputValue);
};

loginBtn.addEventListener('click', btnHandle);