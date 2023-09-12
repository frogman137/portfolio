const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const productCnt = document.querySelector('.pro_value');
const price = document.querySelector('.price_val').innerHTML;
const popPrice = document.querySelector('.pop_price');
let totalprice = document.querySelector('.total_price');
let cnt = 0;
productCnt.innerHTML = cnt;

function kkk(){
    const i = cnt * Number(price)
    totalprice.innerHTML = `${i.toLocaleString()}원`;
    popPrice.innerHTML = `총구매액 ${i.toLocaleString()} 원`
}


minusBtn.addEventListener('click', () => {
    if (cnt == 0) {
        alert('수량 0 개 이하로 선택 불가');
    } else {
        cnt = cnt - 1;
        productCnt.innerHTML = cnt;
    };
    kkk()
});
plusBtn.addEventListener('click', () => {
    cnt++;
    productCnt.innerHTML = cnt;
    kkk()
});


const colorPart = document.querySelectorAll('.color_part');
const proImg = document.querySelectorAll('.pro_img');

for(let i = 0; i < colorPart.length; i++){
    const colorPart = document.querySelectorAll('.color_part')[i];
    const proImg = document.querySelectorAll('.pro_img')[i];

    colorPart.addEventListener('click',()=>{
        $('.color_part').removeClass('pick')
        $('.pro_img').removeClass('see_img')
        proImg.classList.add('see_img');
        colorPart.classList.add('pick');
    });

}

const buy = document.querySelector('.buy');



buy.addEventListener('click', ()=>{
    if(cnt == 0){
        alert('수량을 선택하세여');
    }else{
        alert('결제완료');
        history.go(-1);
    
    }
});



const detailHead = document.querySelectorAll('.detail_head>div');
const detailBody = document.querySelectorAll('.detail_body>div');

for(let i = 0; i < detailHead.length; i++){
    detailHead[i].addEventListener('click',function(){
        $('.detail_body>div').removeClass('see_tail');
        $('.detail_head>div').removeClass('see_head');
        detailBody[i].classList.add('see_tail');
        detailHead[i].classList.add('see_head');
    })
}

function kobora(){
    alert('결제완료');
    history.go(-1);
}