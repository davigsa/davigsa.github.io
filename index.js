window.scrollBy({
    top: 100, 
    left: 0, 
    behavior: 'smooth'
  });

const text = document.querySelector('.text-trade');
const about = document.querySelector('.about-me');
const skills = document.querySelector('.skills');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');

purple.addEventListener('click', event => {
    about.style.display = 'none'
    skills.style.display = 'block';
});

green.addEventListener('click', event => {
  about.style.display = 'block'
  skills.style.display = 'none';
});

		