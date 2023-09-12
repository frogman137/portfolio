const head = `
<nav class="nana">
<div class="left">
    <ul>
        <li class="logo"><a href="../index.html"><img src="../images/logo.png" alt="#"></a></li>
        <li><a href="./women.html">WOMEN</a></li>
        <li><a href="./women.html">MEN</a></li>
        <li><a href="./women.html">KIDS</a></li>
        <li><a href="./women.html">ETC</a></li>
    </ul>
</div>
<div class="right">
    <ul>
        <li><a href="#" class="sebtn">검색</a></li>
        <li><a href="./login.html">로그인</a></li>
        <li><a href="#">장바구니</a></li>
    </ul>
</div>
</nav>


<nav class="mo_menu">
<a href="#"><img src="../images/logo.png" alt="#"></a>
<div class="mo_menu_btn">
    <div></div>
    <div></div>
    <div></div>
</div>
<div class="mo_menu_wrap">
    <div class="mo_menu_box">
        <div class="mo_menu_list">
            <a href="./women.html">WOMEN</a>
            <a href="./women.html">MEN</a>
            <a href="./women.html">KIDS</a>
            <a href="./women.html">ETC</a>
        </div>
        <div class="mo_menu_util">
            <a href="./login.html">로그인</a>
            <a href="#">장바구니</a>
        </div>
    </div>
</div>
</nav>

<div class="search_bar">
<div class="fir_bar">
    <input type="text" placeholder="검색어를 입력해주세요...">
    <div class="search_btn">검색</div>
</div>
<div class="new_list">
    <h3>실시간 검색어</h3>
    <ul>
        <li><a href="./subpage/women.html"><b>1.</b>스탠다드핏 반팔티</a></li>
        <li><a href="./subpage/women.html"><b>2.</b>MR530TC</a></li>
        <li><a href="./subpage/women.html"><b>3.</b>반팔 아노락</a></li>
        <li><a href="./subpage/women.html"><b>4.</b>Core 맨투맨</a></li>
        <li><a href="./subpage/women.html"><b>5.</b>Relentless</a></li>
    </ul>
</div>
</div>
`;

const foot = `
<ul>
<li>
    <h4>FIND A STORE</h4>
    <p>매장찾기</p>
</li>
<li>
    <h4>TEAM WEAR</h4>
    <p>팀 / 단체복 구매</p>
</li>
<li>
    <h4>LOGIN</h4>
    <p>로그인</p>
</li>
<li>
    <h4>DOWN APP</h4>
    <p>App 다운로드</p>
</li>
</ul>
<a href="../index.html" class="bot_logo"><img src="../images/logo.png" alt="#"></a>
<div class="address">
    <p>뉴발란스코리아 대표: OOO</p>|
    <p>주소 : 서울시 송파구 올림픽로 OOOOOO</p>|
    <p>사업자등록번호 : 000-00-00000</p>|
    <p>전화번호 : 000-0000-0000</p>|
    <p>FAX : 000-000-0000</p>
</div>
<p>ⓒNew Balance Korea, LLC. All Rights Reserved</p>
`

window.addEventListener('load', () => {
    document.querySelector('.header').innerHTML = head;
    document.querySelector('.footer').innerHTML = foot;


    const seeMenu = document.querySelector('.mo_menu_box');
    const moMenuBtn = document.querySelector('.mo_menu_btn');
    const moMenuCover = document.querySelector('.mo_menu_wrap');

    moMenuBtn.addEventListener('click', () => {
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
    
});


