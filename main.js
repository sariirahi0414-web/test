'use strict';
{
     setTimeout(function () {
          const loading = document.getElementById('loading');
          loading.classList.add('loaded');
          const conteiner = document.querySelector('.container');
          conteiner.classList.add('open');
     }, 1000)
}
document.addEventListener('DOMContentLoaded', function () {
     const hamburger = document.querySelector('.c-hamburger');
     const headNav = document.querySelector('.p-header__nav');


     if (!hamburger) {
          return false;
     }

     hamburger.addEventListener('click', () => {
          if (hamburger.classList.contains("is-active")) {
               hamburger.classList.remove('is-active');
               headNav.classList.remove('is-active')
          } else {
               hamburger.classList.add('is-active');
               headNav.classList.add('is-active')
          }

     });

     headNav.addEventListener('click', () => {
          hamburger.classList.remove('is-active');
          headNav.classList.remove('is-active')
     });
});

$(function () {
     $(".slider").slick({
          arrows: false,
          autoplay: true,
          adaptiveHeight: true,
          centerMode: true,
          centerPadding: "15%",
          dots: true,
     });
});