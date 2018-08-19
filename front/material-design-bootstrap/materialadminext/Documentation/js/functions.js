$(document).ready(function() {
    if($('.lightbox')[0]) {
        $('.lightbox').lightGallery();
    }


    $('body').on('click', '.dropdown-menu--animations > li > a', function (e) {
        var animationName = $(this).text();
        var tabPane = $(this).attr('href');

        e.preventDefault();

        $('.dropdown-menu--animations > li').removeClass('active');
        $(this).parent().addClass('active');
        $('.btn--animation').find('span').html(animationName);
        $('.tab-pane--animation-names').removeClass('active');
        $(tabPane).addClass('active');
    });


    $('body').on('click', '.tab-pane--animation-names > span', function(){
        var animation = $(this).text();
        var animateImg = $('.img-animation').find('img');
        if (animation === "hinge") {
            animationDuration = 2100;
        }
        else {
            animationDuration = 1200;
        }

        animateImg.removeAttr('class');
        animateImg.addClass('animated '+animation);

        setTimeout(function(){
            animateImg.removeClass(animation);
        }, animationDuration);
    });


    $('body').on('click', '.sidebar__links > li > ul > a', function (e) {

    });
});