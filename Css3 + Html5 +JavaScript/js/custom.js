$(function () {
    'use strict';

    var myHeader =  $('.header');

    var mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

        mySlider.each(function(){

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    
        });

    });  

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });



    mySlider.each(function(){

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });


    mySlider.bxSlider({

        pager : false

    });



    $('.links li a').click(function (){

        $('html, body').animate({

        scrollTop: $('#' + $(this).data('value')).offset().top 

        }, 1000);

    });

    //our Auto Slider

    (function autoSlider(){

        $('.slider .active').each(function(){

            if(!$(this).is(':last-child')){

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            }else{

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });

            }

        })

    }());


    //Trigger MixItUp

    $('#Container').mixItUp();

    //Adjust Shuffle Links

    $('.shuffle li').click(function(){

        $(this).addClass('selected').siblings().removeClass('selected');

    });


    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: "1px solid #1abc9c"
    });

}); 

