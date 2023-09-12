const header = `
<nav>
<ul>
    <li><a href="../index.html" class="logo"><img src="../images/logo.png" alt="#"></a></li>
</ul>
<ul class="meme">
    <li>
        <a href="./product.html">제품</a>
    </li>
    <li>
        <a href="./help.html">고객센터</a>
    </li>
    <li>
        <a href="./comes.html">오시는길</a>
    </li>
</ul>
</nav>
`

const footer = `
<div>
<div><a href="../index.html"><img src="../images/logo.png" alt="foot_logo"></a></div>
<div>Tell : 032-000-0000</div>
<div>adress : 서울특별시 금천구 벚꽃로 000</div>
</div>
<address>Copyright 2023 All pictures cannot be copied without permission</address>
`

document.querySelector('.header').innerHTML = header;
document.querySelector('.footer').innerHTML = footer;



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
