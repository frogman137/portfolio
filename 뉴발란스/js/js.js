//메인페이지 슬라이드

let count = 0;
setInterval(() => {
    const slideBox = document.querySelector('.slide-container');
    if (count < 2) {
        count = count + 1;
        slideBox.style.transform = `translateX(-${count}00vw)`;
    } else if (count = 2) {
        count = 0;
        slideBox.style.transform = `translateX(-${count}00vw)`;
    }
}, 4000);
//모델슬라이드

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideBox = document.querySelector('.slides1');
const slideCnt = document.querySelectorAll('.model_slide_box');
let modelCount = 0;
let maxslide = slideCnt.length - 1;

console.log(modelCount);
nextBtn.addEventListener('click',()=>{
    if(modelCount < maxslide){
        modelCount = modelCount + 1;
        slideBox.style.top = `-${modelCount}00%`
        console.log(modelCount);
    }
});
prevBtn.addEventListener('click',()=>{
    if(modelCount == 2){
        modelCount = modelCount - 1
        slideBox.style.top = `-${modelCount}00%`;
    }else if(modelCount == 1){
        modelCount = modelCount - 1
        slideBox.style.top = `-${modelCount}00%`;
    }
});


const seeMenu = document.querySelector('.mo_menu_box');
const moMenuBtn = document.querySelector('.mo_menu_btn');
const moMenuCover = document.querySelector('.mo_menu_wrap');

moMenuBtn.addEventListener('click',()=>{
    seeMenu.classList.toggle('see_mo_menu');
    moMenuBtn.classList.toggle('change_btn');
    moMenuCover.classList.toggle('wraping');
});



const btbt = document.querySelector('.sebtn');
const seebt = document.querySelector('.search_bar');
btbt.addEventListener('click',()=>{
    seebt.classList.toggle('magic');
});
window.addEventListener('resize',()=>{
    if(document.body.offsetWidth < 999){
        seebt.classList.remove('magic');
    }
});





