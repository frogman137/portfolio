window.addEventListener('load',()=>{
const loginBtnOpen = document.querySelector('.logbtn');
const loginBtnClose = document.querySelector('.close_lolo');
const logWindow = document.querySelector('.log_page');
const getId = document.querySelector('.id_load');
const getPass = document.querySelector('.pass_load');
const yourId = document.querySelector('.your_id');
const logEnter = document.querySelector('.lolo');


loginBtnOpen.addEventListener('click',()=>{
    logWindow.classList.add('see_page');
});

loginBtnClose.addEventListener('click',()=>{
    logWindow.classList.remove('see_page');
    getId.value = "";
    getPass.value = "";
});


logEnter.addEventListener('click',()=>{
    if(getId.value !== "" && getPass.value == 1111){
        let idData = getId.value;
        localStorage.setItem('UserID', idData);
        alert(`환영합니다. ${idData} 님`);
        logWindow.classList.remove('see_page');
        yourId.innerHTML = `User Name : ${idData}`;
    }else{
        alert('아이디 또는 비밀번호를 입력하시오');
    }
});
});

