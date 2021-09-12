$(document).ready(function(){
    $(".imgtoggle01").click(function(){
        $(".imgtoggle01").hide();
        $(".imgtoggle1").show();
    });
    $(".imgtoggle1").click(function(){
        $(".imgtoggle1").hide();
        $(".imgtoggle01").show();
    });

    $(".imgtoggle02").click(function(){
        $(".imgtoggle02").hide();
        $(".imgtoggle2").show();
    });
    $(".imgtoggle2").click(function(){
        $(".imgtoggle2").hide();
        $(".imgtoggle02").show();
    });

    $(".imgtoggle03").click(function(){
        $(".imgtoggle03").hide();
        $(".imgtoggle3").show();
    });
    $(".imgtoggle3").click(function(){
        $(".imgtoggle3").hide();
        $(".imgtoggle03").show();
    });

    //poup on submission
     $(document).ready(function () {
        document.getElementById("form").addEventListener("submit", popUp);
        function popUp() {
             alert("Thanks for the feedback.");
         }
     });
    
});