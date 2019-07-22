const mainNav = document.getElementById('navbar');
const navToggle = document.getElementById('navbar-toggle');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});