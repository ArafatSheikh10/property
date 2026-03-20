jQuery(document).ready(function() {

    "use strict";







     /* ============
    Animatios
     ==============*/
     AOS.init({
        once: true,
     });







    /* ============
    Moving Button
     ==============*/

     const tilt = $('.moving-button').tilt({
        maxTilt: 45,        
        perspective: 1000,  
        scale: 1.1,         
        speed: 500,         
    });
    
    tilt.on('change', function(e, transforms){
    });








    /* ============
    Counter UP
     ==============*/

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });









    /* ============
    Reiews Carousel
     ==============*/

    $('.client-reviews__wraper').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
        }
    });











    /* ============
    Client Logos Carousel
     ==============*/

    $('.brand-logo__carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        slideTransition: 'linear',
        responsive:{
            0:{
                items:3
            },
            575:{
                items:4
            },
            992:{
                items:6
            },
            1400:{
                items:10
            },
        }
    });







    /* ============
    Team Card Carousel
     ==============*/

    $('.team-card__carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            768:{
                items:3
            },
            1040:{
                items:4
            }
        }
    });










    /* ============
    Accordion Icon Change
    ==============*/

    const accordionButtons = document.querySelectorAll('.faq-wraper .accordion-button');

    accordionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
        accordionButtons.forEach(b => {
        const icon = b.querySelector('i');
        if (icon) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-xmark');
    }
    });

    const icon = btn.querySelector('i');
    if (!icon) return;
    setTimeout(() => {
        if (!btn.classList.contains('collapsed')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-minus');
        }
    }, 200);
    });
    });








    /* ============
    Blog Card Carousel
     ==============*/

     $('.blog-wraper').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            992:{
                items:3
            }
        }
    });




    /* ============
    Copyright Text
    ==============*/
    document.getElementById("year").innerHTML = new Date().getFullYear();



});