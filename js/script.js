const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggle-navbar');
const searchIcon = document.querySelector(".nav-icons .search");
const searchForm = document.getElementById("search-form");

toggleNav.onclick = () => {
    nav.classList.toggle('active');
    toggleNav.classList.toggle('fa-times');
}

window.onscroll = () => {
    nav.classList.remove('active');
    toggleNav.classList.remove('fa-times');
}

searchIcon.onclick = () => {
    searchForm.classList.add('active');
}

searchForm.querySelector('#close').onclick = () => {
    searchForm.classList.remove('active');
}
