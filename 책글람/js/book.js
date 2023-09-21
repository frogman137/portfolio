function setThumbnail(event) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
        //document.querySelector("div#image_container").innerHTML ="";
      document.querySelector("div#image_container").appendChild(img);
    };

    reader.readAsDataURL(event.target.files[0]);
  }


window.addEventListener('load',()=>{
    //이미지초기화
  document.querySelector('.reset_img').addEventListener('click',()=>{
    if (!confirm("이미지를 초기화 하시겠습니까?")) {
        return
    } else {
        document.querySelector("div#image_container").innerHTML ="";
    }
  })

  //폼전송
  document.querySelector('.private').addEventListener('submit',(e)=>{
    e.preventDefault();
    const val1 = document.querySelector('.val1');
    const val2 = document.querySelector('.val2');
    const val3 = document.querySelector('.val3');
    if(val1.value == "" || (val2.value == "" || val2.value == Number) || val3.value == ""){
        alert('빈곳을 확인해주세요');
    }else if(confirm('제품을 등록하시겠습니까?')){
        alert('등록완료')
        document.querySelector("div#image_container").innerHTML ="";
        val1.value = "";
        val2.value = "";
        val3.value = "";
    }else{
        return;
    }
  });
})

