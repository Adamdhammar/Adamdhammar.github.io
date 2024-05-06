let splash = document.querySelector(".div-main-splash");
let logo = document.querySelector(".img-logo-splash-screen");
let DivMainFirstP1 = document.querySelector(".div-main-first-p1");
let Main = document.querySelector("Main");

if(splash) {
    document.addEventListener('DOMContentLoaded',
    function(event) {
        setTimeout(function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
        setTimeout(function(){
            logo.classList.add('animation')
        }, 1000);
        setTimeout(function(){
            splash.style.display = 'none'
        }, 4000);
        setTimeout(function(){            
            AOS.init({
                once: true
            });
        }, 4010);
    });
}













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
let PortfolioClicked = document.getElementById('Portfolio');
let AchievementClicked = document.getElementById('Achievement');
let ContactClicked = document.getElementById('Contact');

let AboutFooterClicked = document.getElementById('About-footer');
let PortfolioFooterClicked = document.getElementById('Portfolio-footer');
let AchievementFooterClicked = document.getElementById('Achievement-footer');
let ContactFooterClicked = document.getElementById('Contact-footer');

let PortfolioAboutClicked = document.getElementById('Portfolio-about');

AboutClicked.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

AboutFooterClicked.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

PortfolioClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 0.8;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

PortfolioFooterClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 0.8;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

PortfolioAboutClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 0.8;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

AchievementClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 3.5;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

AchievementFooterClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 3.5;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

ContactClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 7.7;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})

ContactFooterClicked.addEventListener('click', function() {
    const screenHeight = window.innerHeight;
    const targetPosition = screenHeight * 7.7;
    window.scrollTo({

        top: targetPosition,
        behavior: 'smooth'
    })
})



























let DivMainForm = document.querySelector(".div-main-form");
let DivMainContact = document.getElementById("div-main-contact-side");
let input = document.querySelector(".a-div-main-contact");
let CloseButton = document.querySelector(".button-close");

if(DivMainContact) {
    document.addEventListener('DOMContentLoaded',
    function(event) {
        DivMainForm.style.zIndex = -1,
        DivMainContact.style.marginLeft = '-500px',
        DivMainContact.style.backgroundColor = 'transparent'
    });
};  

input.addEventListener('click', function() {
    // DivMainForm.style.display = 'block',
    DivMainForm.style.zIndex = 20,
    DivMainContact.style.transition = '1s',
    DivMainContact.style.marginLeft = '0px',
    DivMainContact.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    if(DivMainContact.style.marginLeft = '0px') {
        CloseButton.addEventListener('click', function() {
        DivMainContact.style.transition = '1s',
        DivMainContact.style.marginLeft = '-500px',
        DivMainContact.style.backgroundColor = 'transparent'
        setTimeout(function(){
            DivMainForm.style.zIndex = -1
        }, 1000);
        });
    }
});



















let btnSubmit = document.querySelector('.submit');
let notification = document.querySelector('.div-main-notification');
let inputNama = document.getElementById("name");
let inputCity = document.getElementById("city");
let inputEmail = document.getElementById("email");
let textarea = document.getElementById("message");
// var modal = document.querySelector('.modal-container');

if(btnSubmit){
    document.addEventListener('DOMContentLoaded',
    function(event) {
        notification.style.bottom = '-200px'
    });

    btnSubmit.addEventListener('click', function(){
        // inputItem.value = "",
        // textarea.value = "",

        if(inputNama.value === '' || inputNama.value === ' ' || inputCity.value === '' || inputCity.value === ' ' || inputEmail.value === '' || inputEmail.value === ' ' || textarea.value === '' || textarea.value === ' ') {
            alert('Data tidak boleh kosong!');
        }
        else {
            setTimeout(function(){
                document.getElementById("name").value = '';
                document.getElementById("city").value = '';
                document.getElementById("email").value = '';
                document.getElementById("message").value = '';
            }, 100);
    
            notification.style.transition = '0.5s',
            notification.style.bottom = '100px'
            setTimeout(function(){
                notification.style.transition = '1s',
                notification.style.bottom = '-200px'
            }, 2000);
        }
    });
}