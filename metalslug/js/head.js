const header1 = document.querySelector('.h1h1');
const footer1 = document.querySelector('.h2h2');

const inject = `
<nav>
<a href="../index.html" class="logo"><img src="../img/logo01.svg" alt="#"></a>
<ul class="menu">
  <li><a href="./company.html">SNK 소개</a></li>
  <li><a href="./games.html">SNK 게임</a></li>
  <li><a href="app.html">고객센터</a></li>
</ul>
<div class="sns">
  <a href="#"><i class="ri-youtube-line"></i></a>
  <a href="#"><i class="ri-twitter-line"></i></a>
  <a href="#"><i class="ri-facebook-box-fill"></i></a>
</div>
</nav>
`

const inject1 = `      <ul>
<li>기업정보</li>
<li>게임정보</li>
<li>라이선스 사업</li>
<li>사이트맵</li>
<li>이용약관</li>
</ul>
<img src="../img/logo01.svg" alt="footLogo">
<p>© SNK CORPORATION ALL RIGHTS RESERVED.</p>`

window.addEventListener('load',()=>{

    header1.innerHTML = inject;
    footer1.innerHTML = inject1;
})