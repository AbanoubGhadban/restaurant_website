const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggle-navbar');

toggleNav.onclick = () => {
    nav.classList.toggle('active');
    toggleNav.classList.toggle('fa-times');
}
