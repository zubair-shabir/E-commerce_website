$(document).ready(function(){

    // banner owl carosel
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1
    });
    
    // topsale owl Carousel

    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // ISOtope filter

     var $grid= $(".grid").isotope({
         itemSelector:'.grid-item',
         layoutMode:'fitRows'
     });

    //  filter tem on button click

    $(".button-group").on("click","button",function(){
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    })

    // New Phones OWl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // blogs Owl Carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            
        }
    });

    // product qty section
    let $qty_up=$(".qty .qty-up");
    let $qty_down=$(".qty .qty-down");
    // let $input= $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input= $(`.qty_input[data-id='${$(this).data("id")}`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i,oldval){
                return ++oldval;
            })
        }
    });

    // click on qty down button
    $qty_down.click(function(e){
        let $input= $(`.qty_input[data-id='${$(this).data("id")}`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i,oldval){
                return --oldval;
            })
        }
    });

});