import Swiper from 'swiper';
import 'swiper/css/bundle';

const categoriesLeftArrow = document.getElementById('categoriesLeftArrow');
const categoriesRightArrow = document.getElementById('categoriesRightArrow');
const categoriesDots = document.querySelectorAll('.categories-dot');

let categoriesSwiper;

categoriesSwiper = new Swiper('.categories-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.categories-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateCategoriesArrows(this);
      updateCategoriesDots(this.realIndex);
    },
  },
});

function updateCategoriesArrows(swiper) {
  categoriesLeftArrow.disabled = swiper.isBeginning;
  categoriesRightArrow.disabled = swiper.isEnd;
}

categoriesLeftArrow.addEventListener('click', () => {
  categoriesSwiper.slidePrev();
});

categoriesRightArrow.addEventListener('click', () => {
  categoriesSwiper.slideNext();
});

function updateCategoriesDots(index) {
  categoriesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

categoriesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    categoriesSwiper.slideTo(index);
  });
});
