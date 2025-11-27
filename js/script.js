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
        modalImg.src = currentImg.src;
        modalImg.alt = currentImg.alt;
        
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
});
