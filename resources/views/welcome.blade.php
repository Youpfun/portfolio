<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-gray-100">
    <header class="bg-gray-800 shadow-md py-4">
        <div class="container mx-auto flex justify-between items-center px-6">
            <h1 class="text-2xl font-bold text-white">Portfolio de Tristan</h1>
            <nav>
                <ul class="flex space-x-6">
                    <li><a href="#about" class="hover:text-blue-400">À propos</a></li>
                    <li><a href="#projects" class="hover:text-blue-400">Projets</a></li>
                    <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="about" class="container mx-auto my-12 px-6 text-center">
        <h2 class="text-3xl font-bold text-white">À propos de moi</h2>
        <p class="mt-4 text-gray-400 text-xl font-semibold italic">Là où l’inspiration rencontre la technique.</p>
        <p class="mt-2 text-gray-400">Développeur passionné spécialisé en frontend et backend.</p>
    </section>

    <section id="projects" class="container mx-auto my-12 px-6">
        <h2 class="text-3xl font-bold text-center text-white">Mes Projets</h2>
        <div class="grid md:grid-cols-3 gap-6 mt-6">
            <div class="bg-gray-800 p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-semibold text-white">Projet 1</h3>
                <p class="mt-2 text-gray-400">Description du projet.</p>
            </div>
            <div class="bg-gray-800 p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-semibold text-white">Projet 2</h3>
                <p class="mt-2 text-gray-400">Description du projet.</p>
            </div>
            <div class="bg-gray-800 p-6 shadow-md rounded-lg">
                <h3 class="text-xl font-semibold text-white">Projet 3</h3>
                <p class="mt-2 text-gray-400">Description du projet.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="container mx-auto my-12 px-6 text-center">
        <h2 class="text-3xl font-bold text-white">Contact</h2>
        <p class="mt-4 text-gray-400">Envoyez-moi un message pour collaborer !</p>
        <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Me Contacter</button>
    </section>
    <footer class="py-16 text-center text-sm text-black">
                        © 2025 Tristan GASTALDY. Tous droits réservés.
    </footer>
</body>
</html>
