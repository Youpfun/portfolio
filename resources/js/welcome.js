    // Animation du header
    document.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.classList.remove("-translate-y-full");
        } else {
            header.classList.add("-translate-y-full");
        }
    });
    
    // Copie de l'email dans le presse-papiers
    document.getElementById("contact-button").addEventListener("click", function() {
        const email = "tristan.gastaldy@gmail.com";
        navigator.clipboard.writeText(email).then(function() {
            alert("Email copié dans le presse-papiers !");
        });
    });