import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css',
                'resources/css/carousel.css', 
                'resources/js/app.js', 
                'resources/js/welcome.js',
                'resources/js/carousel/carousel.js',
                'resources/js/carousel/EmblaCarouselArrowButtons.js',
                'resources/js/carousel/EmblaCarouselTweenScale.js'],
            refresh: true,
        }),
    ],
});
