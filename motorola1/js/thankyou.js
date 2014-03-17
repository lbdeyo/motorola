$(document).ready(function(){

    gotoTopNavState();


}

// Only run this on desktops or tablets
if (window.matchMedia("(min-width: 600px)").matches) {

    $(window).scroll(function() {

        if( $(window).scrollTop() + $(window).height() > $(document).height() - 80) {
            $('.navbar-fixed-bottom').addClass('on');
        }
        else if( $('.navbar-fixed-bottom').hasClass('on') && ( $(window).scrollTop() + $(window).height() < $(document).height() - 100) ){
            $('.navbar-fixed-bottom').removeClass('on');
        }

    });
}








$('.navLink').click(function(){


    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - 55)
            }, 1000);

        }

    }
    return false;
});



function getScrollY() {
    return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
}

function gotoBottomNavState(){
    console.log("go to bottom nav state");
    $("#topNavLogo").hide();
    $(".navBottomRow").show();
    $(".legal").show();

}

function gotoTopNavState(){
    console.log("go to top nav state");
    $("#topNavLogo").show();

}
});