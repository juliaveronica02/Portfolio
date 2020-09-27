$(document).ready(function (){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // toggle menu event.
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
    })
    // owl-carousel.
    $('owl-carousel').owlCarousel();
})