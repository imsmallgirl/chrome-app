const logoutBtn = document.querySelector('.logout-btn');
const helloText = document.querySelector('#hello_text');

const username = localStorage.getItem('username');

helloText.innerText = `안녕하세요 ${username}님`;

function logoutBtnhandle(){
    localStorage.removeItem('username');
};

logoutBtn.addEventListener('click', logoutBtnhandle);