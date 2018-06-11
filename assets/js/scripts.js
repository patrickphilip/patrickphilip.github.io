$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        slideTransition: 'ease',
        autoplay: true,
        loop: true,
    });

    if($('.kids-belt').length) {
        kidsBelt();
    }
  });

function kidsBelt() {
    $('.kid').click(function () {
        $('.kids-belt').css('left', '-100%');
        $('.profile--wrapper').show();
        $(".profile--wrapper .profile")
            .eq($(".kid")
            .index(this))
            .show()
            .css('display','flex');
    });

    $('.return').click(function () {
        $('.kids-belt').css('left', '0%');
        $('.profile--wrapper').hide(800);
        $('.profile--wrapper .profile').hide();
    })
}