const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const patchList = document.querySelector('.patch_list');
const patchListCnt = document.querySelectorAll('.patch_list>div').length;
const meme = document.querySelector('.media_list');
const melist = document.querySelectorAll('.media_list>div');
let vivi = document.querySelector('.view_video>div');

var now = 1;

next.addEventListener('click',()=>{
    if(now < patchListCnt){
    patchList.style.transform = `translateX(-${now}00vw)`
    now += 1;
    }else if(now = patchListCnt){
        now = 0;
        patchList.style.transform = `translateX(0vw)`
        now = 1;
    }
});


prev.addEventListener('click',()=>{
if(now = now){
    now = now - 1;
    patchList.style.transform = `translateX(-${now}00vw)`;
}
});



const videoList = {
    1: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/46izmEnUK-Q?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    2: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FiL-xnp6_i4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    3: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dNRLCCNAz24?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    4: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/46izmEnUK-Q?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    5: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FiL-xnp6_i4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    6: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dNRLCCNAz24?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

}
meme.addEventListener('click',()=>{
    vivi.classList.add('view_video123');
    document.querySelector('.view_video>p').style.display = 'block';
    for(let i = 1; i < 6; i++){
        vivi.innerHTML = videoList[i];
    }
});
document.querySelector('.view_video>p').addEventListener('click', ()=>{
    document.querySelector('.view_video>p').style.display = 'none'
    vivi.classList.remove('view_video123');
    vivi.innerHTML = "";
});




window.addEventListener('load',()=>{
    const moMenu = document.querySelector('.mo_bnt');
const moSlide = document.querySelector('.mo_slide');
moMenu.addEventListener('click', () => {
    moSlide.classList.toggle('control_mo_menu');
});
});
