//! Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor:true,
  autoplay: {
    delay:2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//! Auto text JavaScript

var options = {
  strings: ['Web Developer ','Web Designer','Web Animator ','Freelancer'],
  typeSpeed: 50,
  backSpeed: 20,
  loop:true
  };

  var typed = new Typed('#auto-text', options);
  

//! Hamburger JavaScript
const hamburger = document.querySelector(".hamburger");
const navbar_lists = document.querySelector(".navbar-lists");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle('active');
  navbar_lists.classList.toggle('active');
})

//! Sticky Header 
window.addEventListener('scroll', function () {
  var header = this.document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 0)
  
})


//! Active Nav
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.navbar-lists li .anchors');

window.addEventListener('scroll', ()=> {
  let current = '';

  sections.forEach( section =>{
      console.log(pageYOffset);
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if(pageYOffset >= (sectionTop - sectionHeight / 2)){
        current = section.getAttribute('id');
      }
  })

  navli.forEach(a =>{
    a.classList.remove('active');
    if(a.classList.contains(current)){
      a.classList.add('active')
    }
  })
})
