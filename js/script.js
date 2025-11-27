// Système de langue
var currentLang = 'fr';

var translations = {
    fr: {
        about: 'À propos',
        skills: 'Compétences',
        experiences: 'Expériences',
        projects: 'Projets',
        cv: 'CV',
        contact: 'Contact',
        hero_title: 'Étudiant en BUT2 Informatique',
        hero_desc: 'Passionné par le développement web et la création d\'expériences numériques, je recherche activement des opportunités pour mettre en pratique mes compétences.',
        hero_btn: 'Voir mes projets',
        about_title: 'À propos',
        about_text1: 'Actuellement en deuxième année de BUT Informatique, je me spécialise dans le développement web et la conception d\'interfaces. Mon parcours m\'a permis d\'acquérir des compétences solides en programmation et en gestion de projets.',
        about_text2: 'J\'ai une approche pragmatique du développement, en privilégiant des solutions efficaces et maintenables. Je suis particulièrement intéressé par les technologies modernes et les bonnes pratiques de développement.',
        skills_title: 'Compétences Techniques',
        experiences_title: 'Expériences Professionnelles',
        projects_title: 'Projets',
        search_placeholder: '🔍 Rechercher un projet, une technologie...',
        no_results: 'Aucun projet trouvé pour cette recherche.',
        contact_title: 'Contact',
        contact_desc: 'Vous avez un projet en tête ? N\'hésitez pas à me contacter.',
        contact_btn: 'Me contacter',
        view_photos: '📸 Voir les photos',
        references_title: 'Références'
    },
    en: {
        about: 'About',
        skills: 'Skills',
        experiences: 'Experiences',
        projects: 'Projects',
        cv: 'Resume',
        contact: 'Contact',
        hero_title: 'Computer Science Student (BUT2)',
        hero_desc: 'Passionate about web development and creating digital experiences, I am actively seeking opportunities to apply my skills.',
        hero_btn: 'View my projects',
        about_title: 'About',
        about_text1: 'Currently in my second year of BUT Computer Science, I specialize in web development and interface design. My journey has allowed me to acquire solid skills in programming and project management.',
        about_text2: 'I have a pragmatic approach to development, favoring efficient and maintainable solutions. I am particularly interested in modern technologies and best development practices.',
        skills_title: 'Technical Skills',
        experiences_title: 'Professional Experiences',
        projects_title: 'Projects',
        search_placeholder: '🔍 Search for a project, technology...',
        no_results: 'No projects found for this search.',
        contact_title: 'Contact',
        contact_desc: 'Have a project in mind? Feel free to contact me.',
        contact_btn: 'Contact me',
        view_photos: '📸 View photos',
        references_title: 'References'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

function updateLanguage() {
    var lang = translations[currentLang];
    var langButton = document.getElementById('langToggle');
    
    // Mettre à jour le bouton de langue
    langButton.textContent = currentLang === 'fr' ? 'FR' : 'EN';
    
    // Mettre à jour les liens de navigation
    var navLinks = document.querySelectorAll('.nav-link-text');
    if (navLinks[0]) navLinks[0].textContent = lang.about;
    if (navLinks[1]) navLinks[1].textContent = lang.skills;
    if (navLinks[2]) navLinks[2].textContent = lang.experiences;
    if (navLinks[3]) navLinks[3].textContent = lang.projects;
    if (navLinks[4]) navLinks[4].textContent = lang.cv;
    if (navLinks[5]) navLinks[5].textContent = lang.contact;
    
    // Mettre à jour le hero
    var heroTitle = document.querySelector('.hero-content h2');
    var heroDesc = document.querySelector('.hero-content p');
    var heroBtn = document.querySelector('.hero-content .cta-button');
    if (heroTitle) heroTitle.textContent = lang.hero_title;
    if (heroDesc) heroDesc.textContent = lang.hero_desc;
    if (heroBtn) heroBtn.textContent = lang.hero_btn;
    
    // Mettre à jour les titres de section
    var aboutTitle = document.querySelector('#about .section-title');
    var skillsTitle = document.querySelector('#skills .section-title');
    var experiencesTitle = document.querySelector('#experiences .section-title');
    var projectsTitle = document.querySelector('#projects .section-title');
    var contactTitle = document.querySelector('#contact .section-title');
    var referencesTitle = document.querySelector('#references .section-title');
    if (aboutTitle) aboutTitle.textContent = lang.about_title;
    if (skillsTitle) skillsTitle.textContent = lang.skills_title;
    if (experiencesTitle) experiencesTitle.textContent = lang.experiences_title;
    if (projectsTitle) projectsTitle.textContent = lang.projects_title;
    if (contactTitle) contactTitle.textContent = lang.contact_title;
    if (referencesTitle) referencesTitle.textContent = lang.references_title;
    
    // Mettre à jour la section À propos
    var aboutTexts = document.querySelectorAll('.about-text p');
    if (aboutTexts[0]) aboutTexts[0].textContent = lang.about_text1;
    if (aboutTexts[1]) aboutTexts[1].textContent = lang.about_text2;
    
    // Mettre à jour la barre de recherche
    var searchBox = document.getElementById('searchInput');
    if (searchBox) searchBox.placeholder = lang.search_placeholder;
    
    // Mettre à jour le message "aucun résultat"
    var noResults = document.querySelector('#noResults p');
    if (noResults) noResults.textContent = lang.no_results;
    
    // Mettre à jour la section contact
    var contactDesc = document.querySelector('.contact-content p');
    var contactBtn = document.querySelector('.contact-content .cta-button');
    if (contactDesc) contactDesc.textContent = lang.contact_desc;
    if (contactBtn) contactBtn.textContent = lang.contact_btn;
    
    // Mettre à jour les projets avec data-fr et data-en
    var elementsWithLang = document.querySelectorAll('[data-fr][data-en]');
    for (var i = 0; i < elementsWithLang.length; i++) {
        var element = elementsWithLang[i];
        if (currentLang === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    }
    
    // Mettre à jour les placeholders des inputs
    var inputsWithPlaceholder = document.querySelectorAll('[data-fr-placeholder][data-en-placeholder]');
    for (var j = 0; j < inputsWithPlaceholder.length; j++) {
        var input = inputsWithPlaceholder[j];
        if (currentLang === 'fr') {
            input.placeholder = input.getAttribute('data-fr-placeholder');
        } else {
            input.placeholder = input.getAttribute('data-en-placeholder');
        }
    }
    
    // Sauvegarder la langue
    localStorage.setItem('lang', currentLang);
}

// Ouvrir/fermer le menu mobile
function toggleMenu() {
    var menu = document.getElementById('navMenu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

// Fermer le menu quand on clique sur un lien
function closeMenu() {
    var menu = document.getElementById('navMenu');
    menu.classList.remove('active');
}

// Rechercher dans les projets
function searchProjects() {
    var input = document.getElementById('searchInput');
    var searchText = input.value.toLowerCase();
    var projects = document.getElementsByClassName('project-card');
    var noResults = document.getElementById('noResults');
    var visibleCount = 0;

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.querySelector('h3') ? project.querySelector('h3').textContent.toLowerCase() : '';
        
        // Récupérer TOUTES les descriptions (pas seulement la première)
        var descriptions = project.querySelectorAll('p');
        var allDescriptions = '';
        for (var j = 0; j < descriptions.length; j++) {
            allDescriptions += ' ' + descriptions[j].textContent.toLowerCase();
        }
        
        // Récupérer tous les tags
        var tagElements = project.querySelectorAll('.tag');
        var allTags = '';
        for (var k = 0; k < tagElements.length; k++) {
            allTags += ' ' + tagElements[k].textContent.toLowerCase();
        }
        
        var tags = project.getAttribute('data-tags') || '';
        var allText = title + ' ' + allDescriptions + ' ' + allTags + ' ' + tags;

        if (searchText === '' || allText.indexOf(searchText) > -1) {
            project.style.display = 'block';
            visibleCount++;
        } else {
            project.style.display = 'none';
        }
    }

    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

// Défilement fluide vers une section
function scrollToSection(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    
    // Vérifier si c'est un lien externe
    if (targetId.indexOf('.html') > -1) {
        window.location.href = targetId;
        return;
    }
    
    var targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
}

// Afficher les éléments quand on scroll
function showOnScroll() {
    var elements = document.getElementsByClassName('fade-in');
    
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect();
        
        if (position.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    }
}

// Ajouter ombre à la navbar quand on scroll
function updateNavbar() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
}

// Mettre en surbrillance le lien actif dans le menu
function highlightActiveLink() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var currentSection = '';

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    }

    for (var j = 0; j < navLinks.length; j++) {
        var link = navLinks[j];
        link.style.color = 'var(--text-secondary)';
        
        if (link.getAttribute('href') === '#' + currentSection) {
            link.style.color = 'var(--accent)';
        }
    }
}

// Effet parallax sur le hero
function parallaxEffect() {
    var hero = document.getElementById('hero');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (hero) {
        hero.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    }
}

// Tout regrouper au scroll
function onScroll() {
    showOnScroll();
    updateNavbar();
    highlightActiveLink();
    parallaxEffect();
}

// Initialiser quand la page est chargée
window.onload = function() {
    // Charger la langue sauvegardée
    var savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    // Menu mobile
    var menuButton = document.getElementById('menuToggle');
    menuButton.onclick = toggleMenu;

    // Liens du menu
    var menuLinks = document.querySelectorAll('#navMenu a');
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].onclick = scrollToSection;
    }

    // Tous les liens avec #
    var allLinks = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < allLinks.length; j++) {
        allLinks[j].onclick = scrollToSection;
    }

    // Recherche
    var searchInput = document.getElementById('searchInput');
    searchInput.oninput = searchProjects;

    // Scroll
    window.onscroll = onScroll;
    
    // Appeler une fois au chargement
    onScroll();
};
// Variables globales pour la galerie
var currentGallery = [];
var currentImageIndex = 0;

// Ouvrir la galerie d'un projet
function openGallery(galleryId) {
    var gallery = document.getElementById('gallery-' + galleryId);
    if (gallery) {
        var images = gallery.querySelectorAll('.project-screenshot');
        if (images.length > 0) {
            currentGallery = Array.from(images);
            currentImageIndex = 0;
            openImageModal(currentGallery[0]);
        }
    }
}

// Modal pour les images de projets avec navigation
function openImageModal(img) {
    // Créer le modal s'il n'existe pas
    var modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        
        var closeBtn = document.createElement('button');
        closeBtn.className = 'image-modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = closeImageModal;
        
        var prevBtn = document.createElement('button');
        prevBtn.className = 'image-modal-nav image-modal-prev';
        prevBtn.innerHTML = '❮';
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            showPreviousImage();
        };
        
        var nextBtn = document.createElement('button');
        nextBtn.className = 'image-modal-nav image-modal-next';
        nextBtn.innerHTML = '❯';
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            showNextImage();
        };
        
        var modalImg = document.createElement('img');
        modalImg.id = 'modalImage';
        
        var counter = document.createElement('div');
        counter.id = 'imageCounter';
        counter.className = 'image-counter';
        
        modal.appendChild(closeBtn);
        modal.appendChild(prevBtn);
        modal.appendChild(nextBtn);
        modal.appendChild(modalImg);
        modal.appendChild(counter);
        document.body.appendChild(modal);
        
        // Fermer en cliquant sur le fond
        modal.onclick = function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        };
    }
    
    // Si c'est un élément image, construire la galerie
    if (img.tagName === 'IMG') {
        var galleryName = img.getAttribute('data-gallery');
        if (galleryName) {
            var allImages = document.querySelectorAll('[data-gallery="' + galleryName + '"]');
            currentGallery = Array.from(allImages);
            currentImageIndex = currentGallery.indexOf(img);
        }
    }
    
    // Afficher l'image
    updateModalImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalImage() {
    var modalImg = document.getElementById('modalImage');
    var counter = document.getElementById('imageCounter');
    var prevBtn = document.querySelector('.image-modal-prev');
    var nextBtn = document.querySelector('.image-modal-next');
    
    if (currentGallery.length > 0) {
        var currentImg = currentGallery[currentImageIndex];
        // Gérer les deux formats : objet HTML img ou objet {src, alt}
        modalImg.src = currentImg.src || currentImg;
        modalImg.alt = currentImg.alt || '';
        
        // Mettre à jour le compteur
        if (counter) {
            counter.textContent = (currentImageIndex + 1) + ' / ' + currentGallery.length;
        }
        
        // Afficher/masquer les boutons de navigation
        if (prevBtn && nextBtn) {
            prevBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
            nextBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
        }
    }
}

function showPreviousImage() {
    if (currentGallery.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
        updateModalImage();
    }
}

function showNextImage() {
    if (currentGallery.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
        updateModalImage();
    }
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Fermer le modal avec la touche Échap et naviguer avec les flèches
document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('imageModal');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
    
    // Fermer la modale de projet avec Échap
    var projectModal = document.getElementById('projectModal');
    if (projectModal && projectModal.style.display === 'block' && e.key === 'Escape') {
        closeProjectModal();
    }
});

// Données détaillées des projets
const projectsData = {
    'portfolio': {
        title: { fr: 'Portfolio Personnel', en: 'Personal Portfolio' },
        date: { fr: 'Septembre 2024', en: 'September 2024' },
        context: { fr: 'Projet personnel', en: 'Personal project' },
        description: { 
            fr: 'Conception et développement complet de mon portfolio en ligne depuis zéro, avec une attention particulière portée au design moderne et à l\'expérience utilisateur. Ce projet démontre mes compétences en développement web front-end et ma capacité à créer des interfaces utilisateur intuitives et esthétiques.', 
            en: 'Complete design and development of my online portfolio from scratch, with particular attention to modern design and user experience. This project demonstrates my front-end web development skills and ability to create intuitive and aesthetic user interfaces.' 
        },
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'FormSubmit'],
        features: {
            fr: [
                '🌐 Site bilingue français/anglais avec changement dynamique',
                '📱 Design responsive adapté à tous les écrans',
                '✉️ Système de contact fonctionnel via FormSubmit',
                '🎨 Animations fluides et modernes',
                '📄 Intégration de CV avec visualiseur PDF',
                '🚛 Animation SVG de camion qui suit le scroll',
                '🔍 Système de recherche de projets',
                '🎯 Navigation intuitive et expérience utilisateur optimisée'
            ],
            en: [
                '🌐 Bilingual French/English site with dynamic switching',
                '📱 Responsive design adapted to all screens',
                '✉️ Functional contact system via FormSubmit',
                '🎨 Smooth and modern animations',
                '📄 CV integration with PDF viewer',
                '🚛 SVG truck animation that follows scroll',
                '🔍 Project search system',
                '🎯 Intuitive navigation and optimized user experience'
            ]
        },
        images: [],
        link: null
    },
    'fire-hosting': {
        title: { fr: 'Fire-Hosting', en: 'Fire-Hosting' },
        date: { fr: 'Juillet - Août 2024', en: 'July - August 2024' },
        context: { fr: 'Projet professionnel pour entreprise de gaming', en: 'Professional project for gaming company' },
        description: { 
            fr: 'Développement d\'une plateforme d\'hébergement de serveurs de jeux complète, avec système de gestion backend sophistiqué. Interface moderne et intuitive permettant aux joueurs de louer et gérer leurs serveurs de jeux facilement. Intégration de systèmes de paiement sécurisés et tableau de bord d\'administration complet.', 
            en: 'Development of a complete game server hosting platform with sophisticated backend management system. Modern and intuitive interface allowing players to rent and manage their game servers easily. Integration of secure payment systems and complete administration dashboard.' 
        },
        tags: ['HTML', 'CSS', 'JavaScript', 'Backend', 'Paiement en ligne', 'Administration'],
        features: {
            fr: [
                '🎮 Hébergement multi-jeux (Minecraft, Garry\'s Mod, etc.)',
                '💳 Système de paiement sécurisé intégré',
                '📊 Tableau de bord client personnalisé',
                '⚙️ Configuration de serveur en temps réel',
                '🔧 Panel d\'administration complet',
                '📈 Statistiques et monitoring en direct',
                '💬 Système de support client intégré',
                '🔐 Gestion des accès et permissions'
            ],
            en: [
                '🎮 Multi-game hosting (Minecraft, Garry\'s Mod, etc.)',
                '💳 Integrated secure payment system',
                '📊 Personalized client dashboard',
                '⚙️ Real-time server configuration',
                '🔧 Complete administration panel',
                '📈 Live statistics and monitoring',
                '💬 Integrated customer support system',
                '🔐 Access and permissions management'
            ]
        },
        images: ['images/fire-hosting/mock-up.jpg'],
        link: null
    },
    'aixnride': {
        title: { fr: 'Aixnride', en: 'Aixnride' },
        date: { fr: 'Juin - Août 2024', en: 'June - August 2024' },
        context: { fr: 'Projet professionnel pour entreprise de transport', en: 'Professional project for transportation company' },
        description: { 
            fr: 'Création d\'un site web complet pour une entreprise de sport sur l\'eau (wakeboard, wakesurf, ski-nautique). Design élégant et professionnel mettant en valeur la flotte de véhicules haut de gamme. Système de contact directement intégré sur le site web. Focus sur l\'expérience utilisateur et la facilité de réservation.', 
            en: 'Creation of a complete website for a water sports (wakeboard, wakesurf, water-skiing) company. Elegant and professional design highlighting the fleet of high-end vehicles. Contact system directly integrated on the website. Focus on user experience and ease of booking.' 
        },
        tags: ['HTML', 'CSS', 'JavaScript', 'Design', 'Réservation', 'Responsive'],
        features: {
            fr: [
                '🚗 Présentation détaillée des activités disponibles',
                '📅 Système de réservation en ligne',
                '📱 Design mobile-first responsive',
                '🖼️ Galerie photo professionnelle',
                '📍 Intégration de cartes interactives',
                '📧 Formulaires de contact et devis'
            ],
            en: [
                '🚗 Detailed activities presentation',
                '📅 Online booking system',
                '📱 Mobile-first responsive design',
                '🖼️ Professional photo gallery',
                '📍 Interactive maps integration',
                '📧 Contact and quote forms'
            ]
        },
        images: ['images/aixnride/aix1.png', 'images/aixnride/aix2.png', 'images/aixnride/aix3.png', 'images/aixnride/aix4.png', 'images/aixnride/aix5.png'],
        link: null
    },
    'osteopathe': {
        title: { fr: 'Site Ostéopathe Chambéry', en: 'Chambéry Osteopath Website' },
        date: { fr: 'Mai - Juin 2024', en: 'May - June 2024' },
        context: { fr: 'Projet professionnel médical', en: 'Professional medical project' },
        description: { 
            fr: 'Développement d\'un site web professionnel pour un cabinet d\'ostéopathie à Chambéry. Design épuré et rassurant, adapté au secteur médical. Système de prise de rendez-vous en ligne, présentation des services, informations pratiques. Respect des normes RGPD et accessibilité web.', 
            en: 'Development of a professional website for an osteopathy practice in Chambéry. Clean and reassuring design, adapted to the medical sector. Online appointment system, services presentation, practical information. GDPR compliance and web accessibility.' 
        },
        tags: ['HTML', 'CSS', 'JavaScript', 'Médical', 'Rendez-vous', 'RGPD'],
        features: {
            fr: [
                '🏥 Présentation des services médicaux',
                '📅 Système de prise de rendez-vous',
                '👨‍⚕️ Profil détaillé du praticien',
                '📍 Localisation et accès au cabinet',
                '💬 Informations sur les consultations',
                '📱 Interface mobile optimisée',
                '🔒 Conformité RGPD',
                '♿ Accessibilité web respectée'
            ],
            en: [
                '🏥 Medical services presentation',
                '📅 Appointment booking system',
                '👨‍⚕️ Detailed practitioner profile',
                '📍 Practice location and access',
                '💬 Consultation information',
                '📱 Optimized mobile interface',
                '🔒 GDPR compliance',
                '♿ Web accessibility respected'
            ]
        },
        images: ['images/osteopathe-chambery/osteo1.png', 'images/osteopathe-chambery/osteo2.png', 'images/osteopathe-chambery/osteo3.png'],
        link: null
    },
    'jeu2d': {
        title: { fr: 'Jeu 2D POO', en: '2D OOP Game' },
        date: { fr: 'Mars - Avril 2024', en: 'March - April 2024' },
        context: { fr: 'Projet universitaire', en: 'University project' },
        description: { 
            fr: 'Développement d\'un jeu 2D en JavaScript vanilla en utilisant les principes de la Programmation Orientée Objet. Système de collision avancé, gestion des animations, physique simplifiée. Architecture MVC, code modulaire et réutilisable. Démonstration des compétences en algorithmie et structures de données.', 
            en: 'Development of a 2D game in vanilla JavaScript using Object-Oriented Programming principles. Advanced collision system, animation management, simplified physics. MVC architecture, modular and reusable code. Demonstration of algorithm and data structure skills.' 
        },
        tags: ['JavaScript', 'POO', 'Canvas', 'Animations', 'MVC'],
        features: {
            fr: [
                '🎮 Gameplay interactif et dynamique',
                '💥 Système de collision précis',
                '🎨 Animations fluides et réactives',
                '🏗️ Architecture MVC bien structurée',
                '📦 Classes réutilisables',
                '⚡ Optimisation des performances',
                '🎯 Gestion des événements clavier',
                '🔄 Boucle de jeu optimisée'
            ],
            en: [
                '🎮 Interactive and dynamic gameplay',
                '💥 Precise collision system',
                '🎨 Smooth and reactive animations',
                '🏗️ Well-structured MVC architecture',
                '📦 Reusable classes',
                '⚡ Performance optimization',
                '🎯 Keyboard event management',
                '🔄 Optimized game loop'
            ]
        },
        images: [],
        link: null
    },
    'sibilia': {
        title: { fr: 'Sibilia Patrimoine', en: 'Sibilia Heritage' },
        date: { fr: 'Janvier - Mars 2024', en: 'January - March 2024' },
        context: { fr: 'Projet universitaire de groupe', en: 'University group project' },
        description: { 
            fr: 'Application web complète de gestion patrimoniale développée avec ASP.NET et C#. Système CRUD complet, gestion des utilisateurs avec authentification, rapports et statistiques. Utilisation d\'Entity Framework, architecture en couches, bonnes pratiques de développement. Base de données SQL Server avec relations complexes.', 
            en: 'Complete web application for heritage management developed with ASP.NET and C#. Complete CRUD system, user management with authentication, reports and statistics. Use of Entity Framework, layered architecture, development best practices. SQL Server database with complex relationships.' 
        },
        tags: ['ASP.NET', 'C#', 'SQL Server', 'Entity Framework', 'MVC', 'Authentication'],
        features: {
            fr: [
                '📊 Gestion complète des biens patrimoniaux',
                '👥 Système d\'authentification sécurisé',
                '📈 Génération de rapports et statistiques',
                '🔍 Recherche et filtrage avancés',
                '💾 Base de données relationnelle complexe',
                '🏗️ Architecture en couches (DAL, BLL, UI)',
                '📝 CRUD complet pour toutes les entités',
                '🎨 Interface utilisateur moderne et intuitive'
            ],
            en: [
                '📊 Complete heritage asset management',
                '👥 Secure authentication system',
                '📈 Report and statistics generation',
                '🔍 Advanced search and filtering',
                '💾 Complex relational database',
                '🏗️ Layered architecture (DAL, BLL, UI)',
                '📝 Complete CRUD for all entities',
                '🎨 Modern and intuitive user interface'
            ]
        },
        images: ['images/sibilia/page-client.jpg', 'images/sibilia/page-commande.jpg', 'images/sibilia/page-connexion.jpg', 'images/sibilia/page-creation-commande-filtrer.jpg', 'images/sibilia/page-creation-commande.jpg', 'images/sibilia/page-gestion-plats-manager.jpg', 'images/sibilia/page-gestion-plats.jpg'],
        link: null
    },
    'clubmed': {
        title: { fr: 'Club Med (En cours)', en: 'Club Med (In Progress)' },
        date: { fr: 'Octobre 2024 - En cours', en: 'October 2024 - Ongoing' },
        context: { fr: 'Projet universitaire en cours', en: 'Ongoing university project' },
        description: { 
            fr: 'Recréation complète du site web Club Med depuis zéro dans le cadre d\'un projet universitaire. Reproduction fidèle du design et des fonctionnalités principales. Système de recherche de destinations, présentation des villages, gestion des réservations. Focus sur la complexité technique et l\'attention aux détails. Travail en cours de développement avec objectif de reproduire l\'expérience utilisateur complète.', 
            en: 'Complete recreation of the Club Med website from scratch as part of a university project. Faithful reproduction of design and main functionalities. Destination search system, village presentation, booking management. Focus on technical complexity and attention to detail. Work in progress with goal of reproducing the complete user experience.' 
        },
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'Design complexe', 'En cours'],
        features: {
            fr: [
                '🏖️ Présentation des destinations et villages',
                '🔍 Système de recherche avancé',
                '📅 Interface de réservation',
                '🎨 Reproduction fidèle du design Club Med',
                '📱 Responsive design multi-appareils',
                '🖼️ Galeries photos et vidéos',
                '🌐 Navigation complexe et intuitive',
                '⚙️ Fonctionnalités interactives avancées'
            ],
            en: [
                '🏖️ Destinations and villages presentation',
                '🔍 Advanced search system',
                '📅 Booking interface',
                '🎨 Faithful reproduction of Club Med design',
                '📱 Multi-device responsive design',
                '🖼️ Photo and video galleries',
                '🌐 Complex and intuitive navigation',
                '⚙️ Advanced interactive features'
            ]
        },
        images: [],
        link: null
    }
};

// Fonction pour ouvrir la modale de détails du projet
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    const currentLang = document.documentElement.lang;
    const project = projectsData[projectId];
    
    if (!project) return;
    
    let featuresHtml = '<ul style="list-style: none; padding: 0;">';
    project.features[currentLang].forEach(feature => {
        featuresHtml += `<li style="margin: 0.5rem 0; color: var(--text-secondary);">${feature}</li>`;
    });
    featuresHtml += '</ul>';
    
    let galleryHtml = '';
    if (project.images && project.images.length > 0) {
        galleryHtml = '<div class="modal-project-gallery">';
        project.images.forEach((img, index) => {
            galleryHtml += `<img src="${img}" alt="${project.title[currentLang]}" onclick="openProjectImageModal('${projectId}', ${index})">`;
        });
        galleryHtml += '</div>';
    }
    
    let tagsHtml = '<div class="modal-project-tags">';
    project.tags.forEach(tag => {
        tagsHtml += `<span class="skill-badge" style="margin: 0;">${tag}</span>`;
    });
    tagsHtml += '</div>';
    
    modalBody.innerHTML = `
        <div class="modal-project-header">
            <h2>${project.title[currentLang]}</h2>
            <p class="modal-project-date">${project.date[currentLang]}</p>
            <p class="modal-project-context">${project.context[currentLang]}</p>
        </div>
        
        <div class="modal-project-description">
            ${project.description[currentLang]}
        </div>
        
        ${tagsHtml}
        
        <h3 style="color: var(--text-primary); margin: 2rem 0 1rem 0;">
            ${currentLang === 'fr' ? 'Fonctionnalités principales :' : 'Main features:'}
        </h3>
        ${featuresHtml}
        
        ${galleryHtml}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modale de projet
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fonction pour ouvrir l'image modal depuis la galerie du projet
function openProjectImageModal(projectId, imageIndex) {
    const project = projectsData[projectId];
    if (!project || !project.images || project.images.length === 0) return;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (!modal || !modalImg) {
        console.error('Image modal elements not found');
        return;
    }
    
    // Créer un tableau temporaire d'images pour la galerie
    currentGallery = project.images.map(src => {
        const img = new Image();
        img.src = src;
        img.alt = project.title[document.documentElement.lang];
        return { src: src, alt: img.alt };
    });
    
    currentImageIndex = imageIndex;
    
    // Afficher l'image
    modalImg.src = currentGallery[currentImageIndex].src;
    modalImg.alt = currentGallery[currentImageIndex].alt;
    
    // Mettre à jour le compteur
    const counter = document.getElementById('imageCounter');
    if (counter) {
        counter.textContent = (currentImageIndex + 1) + ' / ' + currentGallery.length;
    }
    
    // Afficher/masquer les boutons de navigation
    const prevBtn = document.querySelector('.image-modal-prev');
    const nextBtn = document.querySelector('.image-modal-next');
    if (prevBtn && nextBtn) {
        prevBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
        nextBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fermer si clic en dehors de la modale
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Gérer le bouton de fermeture
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.project-modal-close');
    if (closeBtn) {
        closeBtn.onclick = closeProjectModal;
    }
});
