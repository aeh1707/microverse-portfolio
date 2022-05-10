const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
const logo = document.querySelector('.logo');
const x = document.querySelector('.x');
const links = document.querySelectorAll('nav ul li');

for (let i = 0; i < links.length; i += 1 ) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('mobile-view');
    burger.classList.remove('burger-none');
    logo.classList.remove('logo-none');
    x.classList.remove('x-appear');
  });
}

burger.addEventListener('click', () => {
  menu.classList.add('mobile-view');
  burger.classList.add('burger-none');
  logo.classList.add('logo-none');
  x.classList.add('x-appear');
});

x.addEventListener('click', () => {
  menu.classList.remove('mobile-view');
  burger.classList.remove('burger-none');
  logo.classList.remove('logo-none');
  x.classList.remove('x-appear');
});