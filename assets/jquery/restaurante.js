$(document).ready(function(){

    //efecto menu

    $('header .menu a').each(function(index){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //efecto main

    if($(window).width()>800 ){
        $('header .textos').css({
            opacity:0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity:1,
            marginTop: '-52px'
        }, 1500);
    }

    //scroll menu

    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#menu').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(){
        
        $('html, body').animate({
            scrollTop: acercaDe + 450
        }, 500)
    })

    $('#btn-menu').on('click', function(){
        $('html, body').animate({
            scrollTop: menu + 450
        }, 500)
    })

    $('#btn-galeria').on('click', function(){
        $('html, body').animate({
            scrollTop: galeria + 450
        }, 500)
    })

    $('#btn-ubicacion').on('click', function(){
        $('html, body').animate({
            scrollTop: ubicacion + 450
        }, 500)
    })
})