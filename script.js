let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

$(document).ready(function(){
    $('.owl-carousel:not(".games")').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                item: 2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 22,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                item: 1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});



const gallery = new Viewer(document.getElementById('images'), {
    inline: false,
    viewed() {
        // gallery.zoomTo(0.5);
    },
});
