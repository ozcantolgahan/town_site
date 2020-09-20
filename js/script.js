$(document).ready(function(){
    $(window).scroll(startCountAnimation);
    function startCountAnimation(){
        if($(window).scrollTop()>1200){
            $(".count").each(function(){
                var currentElement=$(this);
                jQuery({Counter:0}).animate({Counter:currentElement.text()},{
                    duration:2000,
                    easing:"swing",
                    step:function(){
                        currentElement.text(parseInt(this.Counter+1));
                    }

                });
            });
            $(window).off("scroll",startCountAnimation);
        }
    }  

    startTheIconAnimation();
   function startTheIconAnimation(){
    $(".animationIcons").each(function(){
        $(this).find("img").animate({"top":"-10%"},{
            duration:700,
            easing:"swing"
        });
        $(this).find("img").animate({"top":"0%"},{
            duration:700,
            easing:"swing",
            complete:function(){
                startTheIconAnimation();
            }
        });
    });
   }






    $(".buttonAnimation").each(function(){
        $(this).mouseenter(function(){
            $(this).find("button").animate({"margin-top":"170px","opacity":"1"},{
                duration:1200,
                easing:"swing"
            });
        });
        $(this).mouseleave(function(){
            $(this).find("button").animate({"margin-top":"190px","opacity":"0"},{
                duration:1200,
                easing:"swing"
            });
        });
    });
});