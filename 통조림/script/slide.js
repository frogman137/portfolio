let cnt = 0;
const slideBox = document.querySelector('.slide-box');
const slide = document.querySelectorAll('.slide');

setInterval(() => {
    if(cnt < slide.length - 1){
        cnt = cnt + 1;
        slideBox.style.transform = `translateX(-${cnt}00vw)`;
    }else if(cnt = slide.length - 1){
        cnt = 0;
        slideBox.style.transform = `translateX(-${cnt}00vw)`;
    }
}, 4000);


window.addEventListener('scroll',()=>{
    let nav = document.querySelector('.header>nav');
    let meme = document.querySelector('.meme');

    if(window.scrollY > 100){
        nav.style.backgroundColor = '#fff';
        nav.classList.add('nav_col');
        meme.classList.add('meme_col');
    }else if(window.scrollY < 100){
        nav.style.backgroundColor = '#ffffff00';
        meme.classList.remove('meme_col');
        nav.classList.remove('nav_col');
    }
});
