// Système de langue
var currentLang = 'fr';

var translations = {
    fr: {
        about: 'À propos',
        projects: 'Projets',
        cv: 'CV',
        contact: 'Contact',
        cvPageTitle: 'Mon CV',
        downloadText: 'Télécharger le CV',
        openText: 'Ouvrir dans un nouvel onglet',
        formationTitle: 'Formation',
        skillsTitle: 'Compétences techniques',
        languagesTitle: 'Langues',
        formation: [
            'BUT Informatique (en cours)',
            'IUT de Chambéry',
            '2ème année'
        ],
        skills: [
            'Développement web',
            'Programmation orientée objet',
            'Bases de données'
        ],
        languages: [
            'Français (langue maternelle)',
            'Anglais (niveau intermédiaire)'
        ]
    },
    en: {
        about: 'About',
        projects: 'Projects',
        cv: 'Resume',
        contact: 'Contact',
        cvPageTitle: 'My Resume',
        downloadText: 'Download Resume',
        openText: 'Open in New Tab',
        formationTitle: 'Education',
        skillsTitle: 'Technical Skills',
        languagesTitle: 'Languages',
        formation: [
            'Computer Science Degree (ongoing)',
            'IUT of Chambéry',
            '2nd year'
        ],
        skills: [
            'Web development',
            'Object-oriented programming',
            'Databases'
        ],
        languages: [
            'French (native)',
            'English (intermediate level)'
        ]
    }
};

function downloadCV() {
    var cvFile = currentLang === 'fr' ? 'cv-tristan-gastaldy-fr.pdf' : 'cv-tristan-gastaldy-en.pdf';
    
    // Créer un lien de téléchargement simple
    var link = document.createElement('a');
    link.href = './' + cvFile;
    link.download = cvFile;
    link.target = '_blank';
    
    // Ajouter au body et cliquer
    document.body.appendChild(link);
    link.click();
    
    // Nettoyer
    setTimeout(function() {
        document.body.removeChild(link);
    }, 100);
}

function openInNewTab() {
    var cvFile = currentLang === 'fr' ? './cv-tristan-gastaldy-fr.pdf' : './cv-tristan-gastaldy-en.pdf';
    window.open(cvFile, '_blank');
}

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
    
    // Mettre à jour le titre de la page CV
    var pageTitle = document.querySelector('#cv-page .section-title');
    if (pageTitle) pageTitle.textContent = lang.cvPageTitle;
    
    // Mettre à jour les boutons
    var downloadText = document.getElementById('downloadText');
    var openText = document.getElementById('openText');
    
    if (downloadText) downloadText.textContent = lang.downloadText;
    if (openText) openText.textContent = lang.openText;
    
    // Mettre à jour les titres des cartes
    var formationTitle = document.getElementById('formationTitle');
    var skillsTitle = document.getElementById('skillsTitle');
    var languagesTitle = document.getElementById('languagesTitle');
    
    if (formationTitle) formationTitle.textContent = lang.formationTitle;
    if (skillsTitle) skillsTitle.textContent = lang.skillsTitle;
    if (languagesTitle) languagesTitle.textContent = lang.languagesTitle;
    
    // Mettre à jour les listes
    updateList('formationList', lang.formation);
    updateList('skillsList', lang.skills);
    updateList('languagesList', lang.languages);
    
    // Mettre à jour l'iframe avec le bon PDF
    var cvFrame = document.getElementById('cvFrame');
    var cvFile = currentLang === 'fr' ? './cv-tristan-gastaldy-fr.pdf' : './cv-tristan-gastaldy-en.pdf';
    if (cvFrame) {
        cvFrame.src = cvFile;
    }
    
    // Sauvegarder la langue
    localStorage.setItem('lang', currentLang);
}

function updateList(listId, items) {
    var list = document.getElementById(listId);
    if (list) {
        list.innerHTML = '';
        for (var i = 0; i < items.length; i++) {
            var li = document.createElement('li');
            li.textContent = items[i];
            list.appendChild(li);
        }
    }
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
    if (menuButton) {
        menuButton.onclick = toggleMenu;
    }

    // Liens du menu
    var menuLinks = document.querySelectorAll('#navMenu a');
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].onclick = closeMenu;
    }

    // Scroll (uniquement pour la navbar)
    window.onscroll = updateNavbar;
    
    // Appeler une fois au chargement
    updateNavbar();
};