$(document).ready(function (){
    $("text1").hide();
    $("text2").hide();
    $("text3").hide();
    $(".toggle1,.toggle1a").click(function(){
        $("#text1").toggle();
        $(".toggle1").toggle();

    });
    $(".toggle2,.toggle2b").click(function(){
        $("#text2").toggle();
        $(".toggle2").toggle();

    });
    $(".toggle3,.toggle3c").click(function(){
        $("#text3").toggle();
        $(".toggle3").toggle();

    });

});
//portfolio
/*$(document).ready(function (){
    $("myportfolio").hover(
        function (){
            $(this)
            .find("project")
            .show();
        },
        function (){
            $(this)
            .find("project")
            .show();
        }

    );
});*/
    