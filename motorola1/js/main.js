var bottomAnchor, scrollMax = 2100;

$(document).ready(function(){

    $('body').scrollspy({ target: '.navbar-fixed-top' })
    onWindowResize();
    gotoTopNavState();
    $(window).resize(function(e){
        console.log('resize');
        onWindowResize();
    });

    $(window).scroll(function(){

//        bottomAnchor = document.getElementById('pageBottom').offsetTop;
//        scrollMax = bottomAnchor;
//        console.log("bottomAnchor: "+scrollMax);
//        var windowWidth = $(window).width();
//        if (windowWidth < 776)
//        {
//            scrollMax += 1000;
//            console.log ("increasing scrollmax");
//        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            gotoBottomNavState();
        } else {
            gotoTopNavState();
        }
//        console.log("scrollmax: "+scrollMax);
//        console.log(getScrollY());
//        if (getScrollY() > scrollMax )
//        {
//
//        } else {
//
//
//
//        }
        $(".navLink").css("color", "#00a0df");

    });


    function onWindowResize(){
        bottomAnchor = document.getElementById('pageBottom').offsetTop;
        console.log("bottomAnchor: "+bottomAnchor);
        var windowWidth = $(window).width();
        var containerWidth = $(".indexContainer").width();
        console.log(getScrollY());
        console.log("containerWidth: "+ containerWidth);
        var cWidthString = containerWidth + "px";
        $("#vid").css("width", cWidthString);
        TweenMax.set($("#infographicButton"), {scaleX:1, scaleY:1} );
        TweenMax.set($("#downloadButton"), {scaleX:1, scaleY:1} );
        TweenMax.set($("#whitePaperButton"), {scaleX:1, scaleY:1} );
//        $("#socialIcons").css("margin-left", '-50px');

//        TweenMax.set($("#socialIcons"), {scaleX: 1, scaleY:1});
//        TweenMax.set($(".chatCallDiv"), {scaleX:1, scaleY:1} );
//        $("#socialIcons").css("margin-left", '0px');
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
//            $("#infographicButton")
            TweenMax.set($("#infographicButton"), {scaleX:0.85, scaleY:0.85} );
            TweenMax.set($("#downloadButton"), {scaleX:0.85, scaleY:0.85} );
            TweenMax.set($("#whitePaperButton"), {scaleX:0.85, scaleY:0.85} );
//            TweenMax.set($(".chatCallDiv"), {scaleX:0.65, scaleY:0.65} );
//            $("#socialIcons").css("margin-left", '-50px');
            $("#chatPhone").css("margin-left", '-50px');
            $(".formTable").css("width", "300px");

            $(".formTable").css("margin-left", "5px");

            $(".indexContainer").css("padding-top", "50px");
            $(".vr").hide();

        }
//        console.log($("#socialIcons").css("margin-left"));

//        $("#index").css("overflow", "auto");
    }

    function getScrollY() {
        return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    function gotoBottomNavState(){
        $("#topNavLogo").hide();
        $(".navBottomRow").show();
        $(".hrRow").show();

    }

    function gotoTopNavState(){
        $("#topNavLogo").show();
        $(".navBottomRow").hide();
        $(".hrRow").hide();
    }
});