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










let splash = document.querySelector(".div-main-splash");
let logo = document.querySelector(".img-logo-splash-screen");
let DivMainFirstP1 = document.querySelector(".div-main-first-p1");
let Main = document.querySelector("Main");

if(splash) {
    document.addEventListener('DOMContentLoaded',
    function(event) {
        setTimeout(function(){
            logo.classList.add('animation')
        }, 1000);
        setTimeout(function(){
            splash.style.display = 'none'
        }, 4000);
        setTimeout(function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }),
            
            AOS.init({
                once: true
            });
        }, 4010);
    });
}

















