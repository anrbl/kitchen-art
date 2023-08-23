$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });


    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
    });
    $('.arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })

    $('.brand_set>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.brand_set>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.brand_story>li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        top > 100 ? $('.top').fadeIn() : $('.top').fadeOut(0)
    });
    $('.top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    })

    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
    });
});