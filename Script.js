let prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
    let currentScrollPos = window.pageYOffset;
        if (prevScrollpos <= 150) {
            $('.header').removeClass('hide');
        }
        else if (prevScrollpos > currentScrollPos) {
            $('.header').removeClass('hide');
        } else {
            $('.header').addClass('hide');
        }
    prevScrollpos = currentScrollPos;
});







window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});




let AboutClicked = document.getElementById('About');

AboutClicked.addEventListener('click', function() {
    // event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})








AOS.init({
    once: true
});