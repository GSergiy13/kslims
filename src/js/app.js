import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import toggleClassContent from './modules/toggleClassContent.js';
import modal from './modules/modal.js';
import mobailMenu from './modules/mobailMenu.js';
import acorrdionBox from './modules/acorrdion.js';


window.addEventListener('DOMContentLoaded', function() {

  const loader = document.querySelector('.loader');

  window.onload =() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000)
  };

    const swiper = new Swiper('.swiper', {
        modules: [ Navigation, Pagination, Autoplay ],
      freeMode: true,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        direction: 'horizontal',
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
              
            },
            780: {
                slidesPerView: 2,
            }
        }
      });

      const swiper_business = new Swiper('.swiper-business', {
        modules: [ Navigation, Pagination, Autoplay ],
      freeMode: true,
        spaceBetween: 20,
        loop: true,
        
        slidesPerView: 1.2,
        autoHeight: true,
        direction: 'horizontal',
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });


      const swiperR = new Swiper('.result-slider', {
        modules: [ Navigation, Pagination, Autoplay ],
        spaceBetween: 20,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        autoHeight: true,
        direction: 'horizontal',
      
            
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          pagination: {
            el: '.swiper-pagination',
          },
      });


      const swiper_logo = new Swiper('.swiper-logo', {
        modules: [ Navigation, Pagination, Autoplay ],
        spaceBetween: 20,
        loop: true,
        slidesPerView: 7,
        autoHeight: true,
        direction: 'horizontal',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
            
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          pagination: {
            el: '.swiper-pagination',
          },

          breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            780: {
                slidesPerView: 7,
            }
        }
      });

      if(window.innerWidth < 568) {

      // const slider_card = new Swiper('.slider-card', {
      //   modules: [ Navigation, Pagination ],
      //   freeMode: true,
      //   spaceBetween: 20,
      //   loop: true,
      //   autoHeight: true,
      //   direction: 'horizontal',
      
      
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   },
      // });



      // const experiences_mobail = new Swiper('.experiences-mobail', {
      //   modules: [ Navigation, Pagination ],
      //   freeMode: true,
      //   spaceBetween: 20,
      //   loop: true,
      //   autoHeight: true,
      //   direction: 'horizontal',
      
      
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   },
      // });

      
        toggleClassContent('.footer-drop', 'next');
        acorrdionBox('.those-group__top');
      }

      acorrdionBox('.faq-box__visibility');
      acorrdionBox('.triger-list');
      
      modal('.btn-modal', '.modal__close', '.video_modal');
      modal('.btn-modal_pakets_1', '.modal__close', '.modal_pakets_1');
      modal('.btn-modal_pakets_2', '.modal__close', '.modal_pakets_2');
      modal('.btn-modal_pakets_3', '.modal__close', '.modal_pakets_3');
      mobailMenu();


      history.replaceState({}, document.title, window.location.href.split('#')[0]);
});