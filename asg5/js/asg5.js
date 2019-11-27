$(document).ready(function(){
    $("#button1").click(function(){
      $("#special").css("color", "green");
      $(".highlight").css("background-color", "yellow");
      $( ".box" ).each(function() {
        $( this ).css("color", "red" );
        $(this).css("background-color", "black");
        $(this).css("border-style", "dotted");
        $(this).css("border-color", "green");
        $(this).css("border-width", "medium medium medium 2px");
        alert($(this).html());
      });
    });
    $("#button2").click(function(){
        console.log("here");
        $("#img1").show();
    });
    $("#button3").click(function(){
        console.log("here2");
        $("#img1").hide();
    });
    $("#button4").click(function(){
        console.log("here2");
        $("#img1").fadeOut(2500);
    });

    $("#animate").click(function(){
        var pos = $("#moveBox").position();
        var heightBox = $("#moveBox").height();
        var widthBox = $("#moveBox").width();
        if(pos.left < 0){
            pos.left = 1800;
            heightBox = 40;
            widthBox = 50;
            console.log($("#moveBox").fadeTo("fast", 1));
        }
        $("#moveBox").css({left: pos.left-300});
        $("#moveBox").css({height: heightBox+30});
        $("#moveBox").css({width: widthBox+30});
        $("#moveBox").fadeTo("slow", 0.2);
    });

    $("input").change(function(){
        if($("#user").val() == ''){
            $("#user").on('focus', function(){
                $("#user").css("background-color", "yellow");
            });
            alert("The input fields can't be blank!");
        }
        else if($("#pw").val() == ''){
            $("#pw").on('focus', function(){
                $("#pw").css("background-color", "yellow");
            });
            alert("The input fields can't be blank!");
        }

        else{
            var htmlString = "Username:  "+ $("#user").val() + "   Password:  "+ $("#pw").val();
            $("#demo").text( htmlString );
        }
    });
    
});

