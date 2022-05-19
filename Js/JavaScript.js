$(document).ready(function() {
    // text
    $('.text').animate({
        marginTop: '-150px',
        top: '300px',
        opacity: '1'
    });

    // logo
    $('main img').animate({
        opacity: '0.3'
    });

    // Skills
    $(document).scroll(function(){
        console.log(window.screenY);
        if(window.scrollY > 1200) {
            $('.hr1').css('width', '80%');
            $('.hr2').css('width', '90%');
            $('.hr3').css('width', '70%');
            $('.hr4').css('width', '75%');
            $('.hr5').css('width', '85%');
        }
    });

    $('.fa-bars').click(function(){
        $('.nav').toggleClass('visible');
    });
});