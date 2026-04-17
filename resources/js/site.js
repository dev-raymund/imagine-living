import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import precognition from 'laravel-precognition-alpine';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist, precognition])
Alpine.start()

const initLogosSwipers = () => {
    document.querySelectorAll('.js-logos-swiper').forEach((el) => {
        if (el.swiper) return;

        new Swiper(el, {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 2200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            spaceBetween: 24,
            slidesPerView: 1.5,
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
            },
        });
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogosSwipers);
} else {
    initLogosSwipers();
}
