$(document).ready(function () {
    // Services
    $(document).scroll(function () {
        if (window.scrollY > 500) {
            $('#ser > div > div.grid > div:nth-child(1) > i').addClass('animate__animated animate__bounce');
            $('#ser > div > div.grid > div:nth-child(2) > i').addClass('animate__animated animate__bounce');
            $('#ser > div > div.grid > div:nth-child(3) > i').addClass('animate__animated animate__bounce');
            $('#ser > div > div.grid > div:nth-child(4) > i').addClass('animate__animated animate__bounce');
            $('#ser > div > div.grid > div:nth-child(5) > i').addClass('animate__animated animate__bounce');
            $('#ser > div > div.grid > div:nth-child(6) > i').addClass('animate__animated animate__bounce');
        }
    });

    // btn
    $('#con > div > div.holder > div:nth-child(2) > form > input.sub').click(function () {
        $('#con > div > div.holder > div:nth-child(2) > form > input.sub').addClass('animate__animated animate__pulse');
    });

    // Skills
    $(document).scroll(function () {
        if (window.scrollY > 1200) {
            $('.hr1').css('width', '80%');
            $('.hr2').css('width', '90%');
            $('.hr3').css('width', '70%');
            $('.hr4').css('width', '75%');
            $('.hr5').css('width', '85%');
        }
    });

    $('.fa-bars').click(function () {
        $('.nav').toggleClass('visible');
    });

    $('main button').click(function () {
        window.scrollTo({
            top: 2150,
        });
    });

    // Swipper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});