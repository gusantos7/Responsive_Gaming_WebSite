let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.media',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'rigth'});