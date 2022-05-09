const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
burger.addEventListener('click', function() {
    menu.classList.add('mobile-view');
});