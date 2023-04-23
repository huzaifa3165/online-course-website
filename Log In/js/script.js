var myNav = document.querySelector('nav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        // console.log('hi')
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};