$(document).ready( function()
{
    var bMove = false;
    var startX = 0;
    var scrollLeft = 0;
    var slider = document.querySelector(".contents");

    slider.addEventListener("mousedown", function(e){
        bMove = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", function(){
        bMove = false;
    });

    slider.addEventListener("mouseup", function(){
        bMove = false;
    });

    slider.addEventListener("mousemove", function(e){
        if( bMove )
        {
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        }
    });
} );