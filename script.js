const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
const logo = document.querySelector('.logo');
const x = document.querySelector('.x');
const links = document.querySelectorAll('nav ul li');

for (let i = 0; i < links.length; i += 1) {
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

project1 = {
  title: 'tonic',
  subTitleElementOne: 'conopy',
  subTitleElementTwo: 'back end dev',
  subTitleElementThree: '2015', 
  description: 'a daily selection of privately personalized reads; no accounts or sign-ups required.',
  img: 'graphics/snapshoot-portfolio-1.svg',
  imgAlt: 'tonic project preview',
  technologies: ['html', 'css', 'javascript'],
  links: ['#', '#']
}

document.querySelector('.card-1 h3').textContent = project1.title;
document.querySelector('.subTitleElementOne').textContent = project1.subTitleElementOne;
document.querySelector('.subTitleElementTwo').textContent = project1.subTitleElementTwo;
document.querySelector('.subTitleElementThree').textContent = project1.subTitleElementThree;
document.querySelector('.card-1 p').textContent = project1.description;
document.querySelector('.card-1 ul li:nth-child(1)').textContent = project1.technologies[0];
document.querySelector('.card-1 ul li:nth-child(2)').textContent = project1.technologies[1];
document.querySelector('.card-1 ul li:nth-child(3)').textContent = project1.technologies[2];
