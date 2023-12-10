const imageNames = [
    "image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png",
    "image7.png", "image8.png", "image9.png", "image10.png", "image11.png", "image12.png",
    "image13.png", "image14.png", "image15.png", "image16.png", "image17.png", "image18.png"
];

const titles = [
    "Le Concert", "L'Entremetteuse", "Soldat et jeune fille riant", "Une jeune fille assoupie", "La liseuse à la fenêtre", "La Femme en bleu lisant une lettre",
    "La Dame au collier de perles", "Le Christ dans la maison de Marthe et Marie", "La Laitière", "L'art de la peinture", "La Lettre d'amour", "La Jeune Fille à la perle",
    "Le Verre levé", "La Jeune Fille au verre de vin", "La Sentinelle", "La Ruelle", "Jeune femme à l'aiguière", "La Leçon de musique"
];

// Créer un objet associatif pour stocker les titres en fonction des noms d'images
const imageTitles = {};
for (let i = 0; i < imageNames.length; i++) {
    imageTitles[imageNames[i]] = titles[i];
}

function getImageElement(imageName) {
    const image = document.createElement('img');
    image.src = 'images/' + imageName;
    image.alt = 'changer-images';
    image.title = imageTitles[imageName]; // Utiliser le titre associé au nom d'image
    image.className = 'randomImage';
    return image;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function changeAllImages() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Supprimer les images existantes

    shuffleArray(imageNames); // Mélanger les noms d'images
    // Ajouter 12 images aléatoires avec les nouveaux noms d'images
    for (let i = 0; i < 12; i++) {
        const randomImageName = imageNames[i];
        const image = getImageElement(randomImageName);
        container.appendChild(image);
    }
}

document.addEventListener('DOMContentLoaded', changeAllImages);

// JavaScript pour la fenêtre pop-up de consentement aux cookies
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsentPopup = document.getElementById('cookie-consent-popup');
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    const refuseCookiesBtn = document.getElementById('refuse-cookies-btn');

    // Vérifier si l'utilisateur a déjà donné son consentement pendant cette session
    const hasConsent = sessionStorage.getItem('cookieConsent');

    if (!hasConsent) {
        // Afficher la fenêtre pop-up si le consentement n'a pas été donné pendant cette session
        cookieConsentPopup.style.display = 'block';

        // Ajouter un gestionnaire d'événements pour le bouton d'acceptation des cookies
        acceptCookiesBtn.addEventListener('click', function () {
            // Cacher la fenêtre pop-up
            cookieConsentPopup.style.display = 'none';

            // Stocker le consentement dans les cookies de session
            sessionStorage.setItem('cookieConsent', 'true');
        });

        // Ajouter un gestionnaire d'événements pour le bouton de refus des cookies
        refuseCookiesBtn.addEventListener('click', function () {
            // Cacher la fenêtre pop-up
            cookieConsentPopup.style.display = 'none';
        });
    }
});
