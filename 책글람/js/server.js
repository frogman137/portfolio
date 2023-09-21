   //rest키값
   window.addEventListener('load', () => {
    $('#query').val("사람")
    rerole();
    const submit = document.querySelector('.seasea');
    const hashList = document.querySelectorAll('.hash');


    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.kaka').innerHTML = "";
        //재호출
        rerole();
        //검색결과가 없을시
        if(document.querySelector('.kaka').innerHTML !== ""){
            rerole();
        }else{
            document.querySelector('.kaka').innerHTML = "";
         
            $('#query').val("");
            rerole();
        }
    });
        for(let i = 0; i < hashList.length; i++){
        hashList[i].addEventListener('click',()=>{
            document.querySelector('.kaka').innerHTML = "";
            $('#query').val(hashList[i].innerHTML);
            rerole();
        });
    };



    function rerole() {
        $.ajax({
            //호출 기본틀
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $('#query').val() },
            headers: { Authorization: `KakaoAK 3b8f54d543dbe10dd2380c735c932eae` },
        
        })
            //호출 성공시
            .done(function (books) {
                let cocomi = books.documents;
                console.log(cocomi)
                for (let i = 0; i < cocomi.length; i++) {
                    $(".kaka").append(`
                <li>
                    <img src="${cocomi[i].thumbnail}" alt="${cocomi[i].title}" class="cover_img"/>
                    <h4 class="title">${cocomi[i].title}</h4>
                    <p class="price">정상가 : ${cocomi[i].price}원</p>
                    <p class="price1">할인가 : ${cocomi[i].sale_price}원</p>
                    <p class="content">${cocomi[i].contents.slice(0, 80)}...</p>
                    <a href=${cocomi[i].url} target="_blank" class="daum">DAUM 검색</a>
                </li>
            `);
                };

                
            });
            
    }


});


