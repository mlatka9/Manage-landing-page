const footerForm = document.querySelector('.footer__form');
footerForm.addEventListener('submit', processForm);

function processForm(event) {
    event.preventDefault();

    const input = footerForm.querySelector('.form__input');
    const messageBox = footerForm.querySelector('.form__message');
    const passedEmail = input.value;

    if (validateEmail(passedEmail)) {
        input.classList.remove('form__message--error');
        input.classList.remove('form__input--error');
        messageBox.classList.add('form__message--accept');
        messageBox.innerHTML = "Assigned for updates";
        console.log("Process form...");
    } else {
        input.classList.add('form__input--error');
        input.classList.remove('form__input--accept');
        messageBox.classList.remove('form__message--accept');
        messageBox.classList.add('form__message--error');
        messageBox.innerHTML = "Please insert a valid email";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const hamburger = document.querySelector('.hamburger');
const navMobileWrapper = document.querySelector('.navigation-mobile-wrapper');
const navMobile = document.querySelector('.navigation-mobile');

hamburger.addEventListener('click', handleHamburgerMenu);

function handleHamburgerMenu(event) {
    const hamburger = event.target.closest('.hamburger');
    if (!hamburger) return;

    if (hamburger.classList.contains('hamburger--open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    hamburger.classList.add('hamburger--open');
    navMobileWrapper.classList.add('navigation-mobile-wrapper--open');
    navMobile.classList.remove('navigation-mobile--hidden');
    navMobile.classList.add('navigation-mobile--open');
}

function closeMobileMenu() {
    hamburger.classList.remove('hamburger--open');
    navMobile.classList.remove('navigation-mobile--open');
    navMobile.classList.add('navigation-mobile--hidden');
    navMobileWrapper.classList.remove('navigation-mobile-wrapper--open');
}

navMobileWrapper.addEventListener('click', function(event){
    if(event.target !== this) return;
    closeMobileMenu();
});

