const menuToggel = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggel.addEventListener ('click', function() {
    nav.classList.toggle('slide');
});