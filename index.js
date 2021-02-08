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
    })

});