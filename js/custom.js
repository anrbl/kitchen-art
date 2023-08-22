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
    });

    $('.brand_set>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.brand_set>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.brand_story>li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.review_slide').slick({
        arrows: false
    });
});