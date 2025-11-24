// Système de langue
var currentLang = 'fr';

var translations = {
    fr: {
        about: 'À propos',
        projects: 'Projets',
        cv: 'CV',
        contact: 'Contact',
        hero_title: 'Étudiant en BUT2 Informatique',
        hero_desc: 'Passionné par le développement web et la création d\'expériences numériques, je recherche activement des opportunités pour mettre en pratique mes compétences.',
        hero_btn: 'Voir mes projets',
        about_title: 'À propos',
        about_text1: 'Actuellement en deuxième année de BUT Informatique, je me spécialise dans le développement web et la conception d\'interfaces. Mon parcours m\'a permis d\'acquérir des compétences solides en programmation et en gestion de projets.',
        about_text2: 'J\'ai une approche pragmatique du développement, en privilégiant des solutions efficaces et maintenables. Je suis particulièrement intéressé par les technologies modernes et les bonnes pratiques de développement.',
        projects_title: 'Projets',
        search_placeholder: '🔍 Rechercher un projet, une technologie...',
        no_results: 'Aucun projet trouvé pour cette recherche.',
        contact_title: 'Contact',
        contact_desc: 'Vous avez un projet en tête ? N\'hésitez pas à me contacter.',
        contact_btn: 'Me contacter'
    },
    en: {
        about: 'About',
        projects: 'Projects',
        cv: 'Resume',
        contact: 'Contact',
        hero_title: 'Computer Science Student (BUT2)',
        hero_desc: 'Passionate about web development and creating digital experiences, I am actively seeking opportunities to apply my skills.',
        hero_btn: 'View my projects',
        about_title: 'About',
        about_text1: 'Currently in my second year of BUT Computer Science, I specialize in web development and interface design. My journey has allowed me to acquire solid skills in programming and project management.',
        about_text2: 'I have a pragmatic approach to development, favoring efficient and maintainable solutions. I am particularly interested in modern technologies and best development practices.',
        projects_title: 'Projects',
        search_placeholder: '🔍 Search for a project, technology...',
        no_results: 'No projects found for this search.',
        contact_title: 'Contact',
        contact_desc: 'Have a project in mind? Feel free to contact me.',
        contact_btn: 'Contact me'
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
    if (navLinks[1]) navLinks[1].textContent = lang.projects;
    if (navLinks[2]) navLinks[2].textContent = lang.cv;
    if (navLinks[3]) navLinks[3].textContent = lang.contact;
    
    // Mettre à jour le hero
    var heroTitle = document.querySelector('.hero-content h2');
    var heroDesc = document.querySelector('.hero-content p');
    var heroBtn = document.querySelector('.hero-content .cta-button');
    if (heroTitle) heroTitle.textContent = lang.hero_title;
    if (heroDesc) heroDesc.textContent = lang.hero_desc;
    if (heroBtn) heroBtn.textContent = lang.hero_btn;
    
    // Mettre à jour les titres de section
    var aboutTitle = document.querySelector('#about .section-title');
    var projectsTitle = document.querySelector('#projects .section-title');
    var contactTitle = document.querySelector('#contact .section-title');
    if (aboutTitle) aboutTitle.textContent = lang.about_title;
    if (projectsTitle) projectsTitle.textContent = lang.projects_title;
    if (contactTitle) contactTitle.textContent = lang.contact_title;
    
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
        var title = project.getElementsByTagName('h3')[0].textContent.toLowerCase();
        var description = project.getElementsByTagName('p')[0].textContent.toLowerCase();
        var tags = project.getAttribute('data-tags') || '';
        var allText = title + ' ' + description + ' ' + tags;

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