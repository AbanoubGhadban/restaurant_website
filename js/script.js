const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggle-navbar');

toggleNav.onclick = () => {
    nav.classList.toggle('active');
    toggleNav.classList.toggle('fa-times');
}

window.onscroll = () => {
    nav.classList.remove('active');
    toggleNav.classList.remove('fa-times');
}

