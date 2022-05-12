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

const project1 = {
  title: 'tonic',
  subTitleElementOne: 'conopy',
  subTitleElementTwo: 'back end dev',
  subTitleElementThree: '2015',
  description: 'a daily selection of privately personalized reads; no accounts or sign-ups required.',
  imgSrc: 'graphics/snapshoot-portfolio-1.svg',
  imgAlt: 'tonic project preview',
  technologies: ['html', 'css', 'javascript'],
  links: ['#', '#'],
};

document.querySelector('.card-1 h3').textContent = project1.title;
document.querySelector('.card-1 .subTitleElementOne').textContent = project1.subTitleElementOne;
document.querySelector('.card-1 .subTitleElementTwo').textContent = project1.subTitleElementTwo;
document.querySelector('.card-1 .subTitleElementThree').textContent = project1.subTitleElementThree;
document.querySelector('.card-1 img').src = project1.imgSrc;
document.querySelector('.card-1 img').alt = project1.imgAlt;
document.querySelector('.card-1 p').textContent = project1.description;
[document.querySelector('.card-1 ul li:nth-child(1)').textContent] = project1.technologies;
[, document.querySelector('.card-1 ul li:nth-child(2)').textContent] = project1.technologies;
[,, document.querySelector('.card-1 ul li:nth-child(3)').textContent] = project1.technologies;

document.querySelector('.card-1.popup h3').textContent = project1.title;
document.querySelector('.card-1.popup .subTitleElementOne').textContent = project1.subTitleElementOne;
document.querySelector('.card-1.popup .subTitleElementTwo').textContent = project1.subTitleElementTwo;
document.querySelector('.card-1.popup .subTitleElementThree').textContent = project1.subTitleElementThree;
document.querySelector('.card-1.popup h4 + img').src = project1.imgSrc;
document.querySelector('.card-1.popup h4 + img').alt = project1.imgAlt;
document.querySelector('.card-1.popup p').textContent = project1.description;
[document.querySelector('.card-1.popup ul li:nth-child(1)').textContent] = project1.technologies;
[, document.querySelector('.card-1.popup ul li:nth-child(2)').textContent] = project1.technologies;
[,, document.querySelector('.card-1.popup ul li:nth-child(3)').textContent] = project1.technologies;

const seeProjectOne = document.querySelector('.card-1 button');
const popupOne = document.querySelector('.popup.card-1');
const mainContent = document.querySelector('.main-content');
const xPopOne = document.querySelector('.xPopOne');

seeProjectOne.addEventListener('click', () => {
  popupOne.classList.add('show');
  mainContent.classList.add('blur');
  document.documentElement.scrollTop = 0;
});

xPopOne.addEventListener('click', () => {
  popupOne.classList.remove('show');
  mainContent.classList.remove('blur');
});

const project2 = {
  title: 'tonic',
  subTitleElementOne: 'conopy',
  subTitleElementTwo: 'back end dev',
  subTitleElementThree: '2015',
  description: 'a daily selection of privately personalized reads; no accounts or sign-ups required.',
  imgSrc: 'graphics/snapshoot-portfolio-1.svg',
  imgAlt: 'tonic project preview',
  technologies: ['html', 'css', 'javascript'],
  links: ['#', '#'],
};

document.querySelector('.card-2 h3').textContent = project2.title;
document.querySelector('.card-2 .subTitleElementOne').textContent = project2.subTitleElementOne;
document.querySelector('.card-2 .subTitleElementTwo').textContent = project2.subTitleElementTwo;
document.querySelector('.card-2 .subTitleElementThree').textContent = project2.subTitleElementThree;
document.querySelector('.card-2 img').src = project2.imgSrc;
document.querySelector('.card-2 img').alt = project2.imgAlt;
document.querySelector('.card-2 p').textContent = project2.description;
[document.querySelector('.card-2 ul li:nth-child(1)').textContent] = project2.technologies;
[, document.querySelector('.card-2 ul li:nth-child(2)').textContent] = project2.technologies;
[,, document.querySelector('.card-2 ul li:nth-child(3)').textContent] = project2.technologies;

document.querySelector('.card-2.popup h3').textContent = project2.title;
document.querySelector('.card-2.popup .subTitleElementOne').textContent = project2.subTitleElementOne;
document.querySelector('.card-2.popup .subTitleElementTwo').textContent = project2.subTitleElementTwo;
document.querySelector('.card-2.popup .subTitleElementThree').textContent = project2.subTitleElementThree;
document.querySelector('.card-2.popup h4 + img').src = project2.imgSrc;
document.querySelector('.card-2.popup h4 + img').alt = project2.imgAlt;
document.querySelector('.card-2.popup p').textContent = project2.description;
[document.querySelector('.card-2.popup ul li:nth-child(1)').textContent] = project2.technologies;
[, document.querySelector('.card-2.popup ul li:nth-child(2)').textContent] = project2.technologies;
[,, document.querySelector('.card-2.popup ul li:nth-child(3)').textContent] = project2.technologies;

const seeProjectTwo = document.querySelector('.card-2 button');
const popupTwo = document.querySelector('.popup.card-2');
const xPopTwo = document.querySelector('.xPopTwo');

seeProjectTwo.addEventListener('click', () => {
  popupTwo.classList.add('show');
  mainContent.classList.add('blur');
  document.documentElement.scrollTop = 0;
});

xPopTwo.addEventListener('click', () => {
  popupTwo.classList.remove('show');
  mainContent.classList.remove('blur');
});
