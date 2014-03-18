var bottomAnchor, scrollMax = 2100;


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



$(document).ready(function(){

    //  $('body').scrollspy({ target: '.navbar-fixed-top' })
    onWindowResize();
    gotoTopNavState();
    $(window).resize(function(e){
        console.log('resize');
        onWindowResize();
    });

    $(window).scroll(function(){


//        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//            // you're at the bottom of the page
//            gotoBottomNavState();
//        } else {
            //  gotoTopNavState();
        }


    });


    $('.navLink').click(function(){

        //   $('.navLink').removeClass('active');

        //$(this).addClass('active');

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


    function onWindowResize(){
        $("body").css("background-color", "#d3d3d3");
        bottomAnchor = document.getElementById('pageBottom').offsetTop;
        $(".bothSocials").show();
        $(".mobileFooter").hide();
        var windowWidth = $(window).width();
        var containerWidth = $(".indexContainer").width();
        var cWidthString = containerWidth + "px";
        $("#vid").css("width", cWidthString);
        TweenMax.set($("#infographicButton"), {scaleX:0.8, scaleY:0.8} );
        TweenMax.set($("#downloadButton"), {scaleX:0.8, scaleY:0.8} );
        TweenMax.set($("#whitePaperButton"), {scaleX:0.8, scaleY:0.8} );
        $("#infographicButton").css("padding-left", "20px");
        $("#infographicButton").css("margin-left", "-55px");
        $("#downloadButton").css("padding-left", "0px");
        $("#downloadButton").css("margin-left", "0px");
        TweenMax.set($("#landingNotebook"), {scaleX: 1, scaleY:  1});
        $("#landingNotebook").css("padding", "0px");
        $("#landingNotebook").css("margin-left", "10px");
        $("#landingNotebook").css("margin-top", "25px");
        $("#landingNotebook").css("margin-bottom", "25px");

        $("#chatPhone").css("margin-left", '0px');


        $(".formTable").css("margin-left", "47px");
        $(".formTable").css("width", "468px");

        if (windowWidth  < 990)
        {
            $(".indexContainer").css("padding-top", "80px");

//            $("#socialIcons").css("margin-left", '0px');
            $("#chatPhone").css("margin-left", '-50px');
            $(".tallRow").css("height", "1200px");
            $(".vr").show();


        } else {
            $(".indexContainer").css("padding-top", "40px");

            $(".tallRow").css("height", "1500px");
            $(".vr").show();


        }

        if (windowWidth < 766){
            $("body").css("background-color", "#292929");
            $(".bothSocials").hide();
            $(".mobileFooter").show();
            TweenMax.set($("#infographicButton"), {scaleX:0.6, scaleY:0.6} );
            $("#infographicButton").css("padding-left", "0px");
            $("#infographicButton").css("margin-left", "-85px");

            TweenMax.set($("#downloadButton"), {scaleX:0.6, scaleY:0.6} );
            $("#downloadButton").css("padding-left", "0px");
            $("#downloadButton").css("margin-left", "-85px");
            TweenMax.set($("#whitePaperButton"), {scaleX:0.85, scaleY:0.85} );
            TweenMax.set($("#landingNotebook"), {scaleX: 0.6, scaleY:  0.6});
            $("#landingNotebook").css("padding", "0px");
            $("#landingNotebook").css("margin-left", "-80px");
            $("#landingNotebook").css("margin-top", "-80px");
            $("#landingNotebook").css("margin-bottom", "-80px");


            $("#chatPhone").css("margin-left", '-50px');
            $(".formTable").css("width", "300px");

            $(".formTable").css("margin-left", "5px");

            $(".indexContainer").css("padding-top", "50px");
            TweenMax.set($(".notebook"), {scaleX:0.8, scaleY:0.8} );
            $(".vr").hide();

        }

    }

    function getScrollY() {
        return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    function gotoBottomNavState(){
        console.log("go to bottom nav state");
        $("#topNavLogo").hide();
        $(".navBottomRow").show();
        $(".legal").show();
        //  $(".hrRow").show();

    }

    function gotoTopNavState(){
        console.log("go to top nav state");
        $("#topNavLogo").show();

    }
});