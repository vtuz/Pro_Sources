
import './css/main.css';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Lazy]);

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: false,
    keyboard: true,
    loop: false,
    parallax: true,
    grabCursor: true,
    autoHeight: true,

    // Disable preloading of all images
    preloadImages: false,
    lazy: true
});