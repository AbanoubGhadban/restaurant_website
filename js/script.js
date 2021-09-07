const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggle-navbar');
const searchIcon = document.querySelector(".nav-icons .search");
const searchForm = document.getElementById("search-form");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

toggleNav.onclick = () => {
    nav.classList.toggle('active');
    toggleNav.classList.toggle('fa-times');
}

window.onscroll = () => {
    nav.classList.remove('active');
    toggleNav.classList.remove('fa-times');

    sections.forEach(sec =>{

        const top = window.scrollY;
        const height = sec.offsetHeight;
        const offset = sec.offsetTop - 150;
        const id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
          });
          document.querySelector('header .navbar a[href*='+id+']')?.classList.add('active');
        };
      });
}

searchIcon.onclick = () => {
    searchForm.classList.add('active');
}

searchForm.querySelector('#close').onclick = () => {
    searchForm.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
