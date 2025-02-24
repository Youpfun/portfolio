<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    @vite('resources/css/app.css')
    @vite('resources/css/carousel.css')

</head>
<body class="bg-gray-900 text-gray-100">
<header id="header" class="fixed top-0 left-0 w-full bg-gray-800 shadow-md py-4 -translate-y-full transition-transform duration-500 z-50">
    <div class="container mx-auto flex justify-between items-center px-6">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Portfolio de Tristan</h1>
        <nav>
            <ul class="flex space-x-6">
                <li><a href="#about" class="hover:text-purple-400 text-white">À propos</a></li>
                <li><a href="#projects" class="hover:text-purple-400 text-white">Projets</a></li>
                <li><a href="#contact" class="hover:text-purple-400 text-white">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<section id="about" class="h-screen flex flex-col justify-center items-center text-center">
    <h2 class="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-4xl font-semibold italic">Là où l’inspiration rencontre la technique.</h2>
    <h3 class="mt-2 text-gray-400">Développeur passionné spécialisé en frontend et backend.</h3>
</section>

<section id="projects" class="container mx-auto my-12 px-6 pt-8">
<h2 class="text-3xl font-bold text-center text-white p-9">Mes Projets</h2>
<div class="embla">
      <div class="embla__viewport">
        <div class="embla__container">
         <div class="embla__slide">
           <div class="embla__slide__number bg-cover bg-center bg-no-repeat" style="background-image: url('{{ asset('images/mock-up.jpg') }}');">
                <h3 class="mt-2 text-white text-5xl text-center drop-shadow-[2px_2px_2px_black]">Description du projet</h3>
           </div>
         </div>
          <div class="embla__slide">
            <div class="embla__slide__number">
            <h3 class="mt-2 text-gray-400 ">Description du projet.</h3>
          </div>
          </div>
          <div class="embla__slide">
            <div class="embla__slide__number">
            <h3 class="mt-2 text-gray-400">Description du projet.</h3>
            </div>
          </div>
          <div class="embla__slide">
            <div class="embla__slide__number">
            <h3 class="mt-2 text-gray-400">Description du projet.</h3>
            </div>
          </div>
          <div class="embla__slide">
            <div class="embla__slide__number">
            <h3 class="mt-2 text-gray-400">Description du projet.</h3>
            </div>
          </div>
        </div>
      </div>
        <div class="embla__buttons p-9">
          <button
            class="embla__button embla__button--prev"
            type="button"
            disabled="">
            <svg class="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              ></path>
            </svg></button>
          <button class="embla__button embla__button--next "
            type="button"
            disabled="">
            <svg class="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z">               </path>
            </svg>
          </button>
        </div>
    </div>
</section>

<section id="contact" class="container mx-auto my-12 px-6 text-center">
    <h2 class="text-3xl font-bold text-white">Contact</h2>
    <p class="mt-4 text-gray-400">Envoyez-moi un message pour collaborer !</p>
    <button id="contact-button" class="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-500">
        Me Contacter
    </button>
</section>

<footer class="py-16 text-center text-sm text-white">
    <p>© 2025 Tristan GASTALDY. Tous droits réservés.</p>
    <div class="mt-4 flex justify-center space-x-4">
        <!-- Bouton LinkedIn -->
        <a href="https://www.linkedin.com/in/tristan-gastaldy-8582a3335/" target="_blank" class="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300">
            <img src="/images/linkedin-logo.png" alt="LinkedIn" class="h-6 w-6">
        </a>

        <!-- Bouton GitHub -->
        <a href="https://github.com/YoupFun" target="_blank" class="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
            <img src="/images/github-logo.png" alt="GitHub" class="h-6 w-6">
        </a>
    </div>
</footer>

@vite('resources/js/welcome.js')
@vite('resources/js/carousel/carousel.js')
@vite('resources/js/carousel/EmblaCarouselArrowButtons.js')
@vite('resources/js/carousel/EmblaCarouselTweenScale.js')
</body>
</html>
