import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

window.addEventListener('DOMContentLoaded', function () {


  const preloader = document.querySelector('.preloader');

  window.onload = () => {
    setTimeout(() => {
      preloader.classList.add('preloader--hide')
    }, 1000)
  }

  const listItems = document.querySelectorAll('.menu-list__item-link');

  const burger = document.querySelector('.burger'),
    navigarion = document.querySelector('.navigarion'),
    close = document.querySelector('.navigarion__close');

  burger.addEventListener('click', function () {
    navigarion.classList.add('active');
    burger.classList.add('active');
  });

  listItems.forEach(list => {
    list.addEventListener('click', function () {
      navigarion.classList.remove('active');
    });
  })

  close.addEventListener('click', function () {
    navigarion.classList.remove('active');
    burger.classList.remove('active');
  });


  try {
    function MoreInfoShow() {
      const container = document.body;
      const moreInfoElements = document.querySelectorAll('.more-info');
      let activeMoreInfo = null;

      container.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('registration-singIn') || target.classList.contains('registration-singUp')) {
          if (activeMoreInfo) {
            activeMoreInfo.classList.remove('active');
          }

          target.nextElementSibling.classList.add('active');
          activeMoreInfo = target.nextElementSibling;
        } else if (target.classList.contains('btn-more-drop') || target.classList.contains('btn-advantages-more') || target.classList.contains('hint-button')) {
          target.nextElementSibling.classList.add('active');

          if (activeMoreInfo !== target.nextElementSibling) {
            setTimeout(() => {
              target.nextElementSibling.classList.remove('active');
            }, 5000);
          }
        } else if (!target.classList.contains('more-info')) {
          moreInfoElements.forEach((elem) => {
            elem.classList.remove('active');
          });
          activeMoreInfo = null;
        }
      });
    }

    MoreInfoShow();



  } catch (e) {
    console.log(e);
  }



  try {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      slidesPerView: 3,
      autoHeight: true,
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },


      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },

    });


    function dropBoxAutoHeight(elemsArr) {
      const triger = document.querySelectorAll(elemsArr);

      triger.forEach(elem => {
        elem.addEventListener('click', function () {
          elem.classList.toggle("active");
          let panel = elem.nextElementSibling;


          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        })
      })
    }
    dropBoxAutoHeight('.faq-box__head');


    function dropBoxAutoHeightSee(elemsArr) {
      const triger = document.querySelectorAll(elemsArr);

      triger.forEach(elem => {
        elem.addEventListener('click', function () {
          elem.classList.toggle("active");
          let panel = elem.previousElementSibling;


          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = null;

            elem.textContent = 'See All';
          } else {
            panel.style.maxHeight = (panel.scrollHeight + 20) + "px";
            panel.style.paddingBottom = '15px';

            elem.textContent = 'Close';
          }
        })
      })
    }
    dropBoxAutoHeightSee('.dropShow');

  } catch (e) {
    console.log(e);
  }

  try {
    const massegStatus = document.querySelector('.masseg-status');

    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault(); // Зупиняємо стандартну дію відправки форми

      let form = this; // Використовуємо "this" для посилання на поточну форму

      let formData = new FormData(form); // Створюємо об'єкт FormData для збору даних з форми

      let xhr = new XMLHttpRequest(); // Створюємо новий об'єкт XMLHttpRequest

      xhr.open("POST", "mail.php", true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);

            if (response.status === "success") {
              massegStatus.textContent = 'Thank you for your message!';
              massegStatus.classList.add('active');

              form.reset();

              setTimeout(() => {
                massegStatus.classList.remove('active');
              }, 3000)
            } else {
              // Неуспішна відправка
              massegStatus.textContent = 'Thank you for your message!';
              massegStatus.classList.add('active');


              setTimeout(() => {
                massegStatus.classList.remove('Error while sending, please try again');
              }, 3000)
            }
          } else {
            // Виникла помилка під час запиту
            alert("Something went wrong");
          }
        }
      };

      xhr.send(formData); // Надсилаємо дані форми на сервер
    });


  } catch (e) { console.log(e); }



  try {
    const tabs = document.querySelectorAll('.brand-card .tab'),
      contents = document.querySelectorAll('.brand-card .content'),
      baners = document.querySelectorAll('.brand-card .baners__picture');

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', function () {
        showBrendCard(i);
      });
    });

    showBrendCard(0);

    function showBrendCard(index) {
      tabs.forEach(content => {
        content.classList.remove('active');
      })

      contents.forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
      })

      baners.forEach(content => {
        content.classList.remove('active')
        content.classList.add('hidden');
      })

      contents[index].classList.add('active');
      contents[index].classList.remove('hidden');

      tabs[index].classList.add('active');

      baners[index].classList.add('active');
      baners[index].classList.remove('hidden');
    }
  } catch (e) {
    console.log(e);
  }
});