//모바일 메뉴
const moMenu = document.getElementsByClassName('mo_bnt')[0];
const moSlide = document.getElementsByClassName('mo_slide')[0];
moMenu.addEventListener('click', function(){

    moSlide.classList.toggle('control_mo_menu');

});

//슬라이드 시작
const nextBnt = document.querySelector('.next');
const prevBnt = document.querySelector('.prev');
const slideImg = document.querySelectorAll('.slide-container')[0];
const slideText = document.querySelectorAll('.slide-container')[1];
let nowSlide = 4;
nextBnt.addEventListener('click',()=>{
    if(nowSlide < 28){
    slideImg.style.transform = `translateX(-${nowSlide}00px)`;
    slideText.style.transform = `translateX(-${nowSlide}00px)`;
    nowSlide = nowSlide + 4;
    }else if(nowSlide = 28){
        nowSlide = 0;
        slideImg.style.transform = `translateX(${nowSlide}00px)`;
        slideText.style.transform = `translateX(${nowSlide}00px)`;
        nowSlide = nowSlide + 4;
    }
});

prevBnt.addEventListener('click',()=>{
    if(nowSlide = nowSlide){
        nowSlide = nowSlide - 4;
        slideImg.style.transform = `translateX(-${nowSlide}00px)`;
        slideText.style.transform = `translateX(-${nowSlide}00px)`;
    }
});
//슬라이드 끝

//스크롤
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
      document.body.classList.remove('fade');
    });
  });
// window.addEventListener('scroll',()=>{
// const nav = document.querySelector('nav');
// const moNav = document.querySelector('.mo_menu');
//     if(scrollY > 70){
//         nav.classList.add('control_nav');
//         moNav.classList.add('control_nav');

//     }else if(screenY < 70){
//         nav.classList.remove('control_nav');
//         moNav.classList.remove('control_nav');
//     }
// });

