const header = (
  `        <nav>
    <a href="../index.html" class="logo"><img src="../img/logo.png" alt="LOGO" /></a>
    <div class="menu">
        <div><a href="./news.html">NEWS</a></div>
        <div><a href="./about.html">ABOUT</a></div>
        <div><a href="./shop.html">SHOP</a></div>
        <div><a href="https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki">WIKI</a></div>
        <div><a href="./support.html">SUPPORT</a></div>
    </div>
    <div class="util">
    <div class="logbtn">LOGIN</div>
    <div class="your_id">Your not login.</div>
    </div>
</nav>


<div class="log_page">
<div>
<h4 class="lightfont">Tarkov Login</h4>
<input type="text" placeholder="ID" class="id_load"/>
<input type="text" placeholder="초기비번 1111 입니다" class="pass_load"/>
<div class="lolo">Login</div>
<div class="close_lolo">close</div>
</div>
</div>


<div class="mo_menu">
  <a href="../index.html" class="mo_logo"><img src="../img/logo_re.png" alt="mo_menu"></a>
  <div class="mo_bnt">
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  <div class="mo_slide">
  <div class="mo_list">
  <div><a href="./news.html">NEWS</a></div>
  <div><a href="./about.html">ABOUT</a></div>
  <div><a href="./shop.html">SHOP</a></div>
  <div><a href="https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki">WIKI</a></div>
  <div><a href="./support.html">SUPPORT</a></div>
  </div>
  <div class="mo_util">
  <div class="logbtn1">LOGIN</div>
  <div class="your_id1">Your not login.</div>
  </div>
</div>
</div>
`)
const footer = (`        <footer>
<a href="../index.html"><img src="../img/logo_re.png" alt="#" /></a>
  <address>© 2015-2023 BATTLESTATE GAMES LIMITED. ALL RIGHTS RESERVED.</address>
</footer>`)

window.addEventListener('load', () => {
  document.querySelector('.header').innerHTML = header
  document.querySelector('.footer').innerHTML = footer
});