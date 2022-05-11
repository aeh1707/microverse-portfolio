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
  subTitleElementOne: 'back end dev',
  subTitleElementOne: '2015', 
  description: 'a daily selection of privately personalized reads; no accounts or sign-ups required.',
  img: 'graphics/snapshoot-portfolio-1.svg',
  imgAlt: 'tonic project preview',
  technologies: ['html', 'css', 'javascript'],
  links: ['#', '#']
}

const portfolioSection = document.querySelector('#portfolio')
const cardOneArticle = document.createElement('article');
cardOneArticle.classList.add('card');
cardOneArticle.classList.add('card-1');
portfolioSection.appendChild(cardOneArticle);
const cardOneDiv = document.createElement('div');
cardOneDiv.classList.add('card-container');
cardOneArticle.appendChild(cardOneDiv);
const cardOneimg = document.createElement('img');
cardOneimg.src = project1.img;
cardOneimg.alt = project1.alt;



const cardOne = document.createElement('h3');
cardOne.textContent = project2.name;