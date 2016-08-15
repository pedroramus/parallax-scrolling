$(document).ready(function(){
    // the meaning of this is:
    // anytime we scroll, we gonna run parallax function below
    // that's why using bind function
    $(window).bind('scroll', function(event) {
        parallax();
    })
});

function parallax() {
    var scrollPosition = $(window).scrollTop();
    $('#grid').css('top', (0 - (scrollPosition*0.2)) + 'px');
}