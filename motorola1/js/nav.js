$(document).ready(function(){
    onResize();
    $(window).resize(function(e){

        onResize();
    });



    function onResize() {
         if ($(window).width() < 766) {
            $("#socialIcons").css('margin-left', "0%");

        } else if  ($(window).width() > 990) {
            $("#socialIcons").css('margin-left', "00%");
        } else if ($(window).width() > 766 && $(window).width() < 990) {
            $("#socialIcons").css('margin-left', "0%");
        }

    }
});