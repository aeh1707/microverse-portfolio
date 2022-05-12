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

const project3 = {
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

document.querySelector('.card-3 h3').textContent = project3.title;
document.querySelector('.card-3 .subTitleElementOne').textContent = project3.subTitleElementOne;
document.querySelector('.card-3 .subTitleElementTwo').textContent = project3.subTitleElementTwo;
document.querySelector('.card-3 .subTitleElementThree').textContent = project3.subTitleElementThree;
document.querySelector('.card-3 img').src = project3.imgSrc;
document.querySelector('.card-3 img').alt = project3.imgAlt;
document.querySelector('.card-3 p').textContent = project3.description;
[document.querySelector('.card-3 ul li:nth-child(1)').textContent] = project3.technologies;
[, document.querySelector('.card-3 ul li:nth-child(2)').textContent] = project3.technologies;
[,, document.querySelector('.card-3 ul li:nth-child(3)').textContent] = project3.technologies;

document.querySelector('.card-3.popup h3').textContent = project3.title;
document.querySelector('.card-3.popup .subTitleElementOne').textContent = project3.subTitleElementOne;
document.querySelector('.card-3.popup .subTitleElementTwo').textContent = project3.subTitleElementTwo;
document.querySelector('.card-3.popup .subTitleElementThree').textContent = project3.subTitleElementThree;
document.querySelector('.card-3.popup h4 + img').src = project3.imgSrc;
document.querySelector('.card-3.popup h4 + img').alt = project3.imgAlt;
document.querySelector('.card-3.popup p').textContent = project3.description;
[document.querySelector('.card-3.popup ul li:nth-child(1)').textContent] = project3.technologies;
[, document.querySelector('.card-3.popup ul li:nth-child(2)').textContent] = project3.technologies;
[,, document.querySelector('.card-3.popup ul li:nth-child(3)').textContent] = project3.technologies;

const seeProjectThree = document.querySelector('.card-3 button');
const popupThree = document.querySelector('.popup.card-3');
const xPopThree = document.querySelector('.xPopThree');

seeProjectThree.addEventListener('click', () => {
  popupThree.classList.add('show');
  mainContent.classList.add('blur');
  document.documentElement.scrollTop = 0;
});

xPopThree.addEventListener('click', () => {
  popupThree.classList.remove('show');
  mainContent.classList.remove('blur');
});

const project4 = {
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

document.querySelector('.card-4 h3').textContent = project4.title;
document.querySelector('.card-4 .subTitleElementOne').textContent = project4.subTitleElementOne;
document.querySelector('.card-4 .subTitleElementTwo').textContent = project4.subTitleElementTwo;
document.querySelector('.card-4 .subTitleElementThree').textContent = project4.subTitleElementThree;
document.querySelector('.card-4 img').src = project4.imgSrc;
document.querySelector('.card-4 img').alt = project4.imgAlt;
document.querySelector('.card-4 p').textContent = project4.description;
[document.querySelector('.card-4 ul li:nth-child(1)').textContent] = project4.technologies;
[, document.querySelector('.card-4 ul li:nth-child(2)').textContent] = project4.technologies;
[,, document.querySelector('.card-4 ul li:nth-child(3)').textContent] = project4.technologies;

document.querySelector('.card-4.popup h3').textContent = project4.title;
document.querySelector('.card-4.popup .subTitleElementOne').textContent = project4.subTitleElementOne;
document.querySelector('.card-4.popup .subTitleElementTwo').textContent = project4.subTitleElementTwo;
document.querySelector('.card-4.popup .subTitleElementThree').textContent = project4.subTitleElementThree;
document.querySelector('.card-4.popup h4 + img').src = project4.imgSrc;
document.querySelector('.card-4.popup h4 + img').alt = project4.imgAlt;
document.querySelector('.card-4.popup p').textContent = project4.description;
[document.querySelector('.card-4.popup ul li:nth-child(1)').textContent] = project4.technologies;
[, document.querySelector('.card-4.popup ul li:nth-child(2)').textContent] = project4.technologies;
[,, document.querySelector('.card-4.popup ul li:nth-child(3)').textContent] = project4.technologies;

const seeProjectFour = document.querySelector('.card-4 button');
const popupFour = document.querySelector('.popup.card-4');
const xPopFour = document.querySelector('.xPopFour');

seeProjectFour.addEventListener('click', () => {
  popupFour.classList.add('show');
  mainContent.classList.add('blur');
  document.documentElement.scrollTop = 0;
});

xPopFour.addEventListener('click', () => {
  popupFour.classList.remove('show');
  mainContent.classList.remove('blur');
});