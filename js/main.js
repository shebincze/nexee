// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Current year for footer copyright
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Nexee. All rights reserved.`;
    }
});

// Animation on scroll (simple implementation)
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .platform-card');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Language translations
const translations = {
    en: {
        home: "Home",
        features: "Features",
        platforms: "Platforms",
        about: "About",
        language: "Language",
        heroTitle: "Track Your Movies & TV Shows with Nexee",
        heroDesc: "The ultimate companion for organizing and planning your viewing experience across multiple platforms.",
        getStarted: "Get Started",
        learnMore: "Learn More",
        featuresTitle: "Features",
        featuresDesc: "Discover what makes Nexee the perfect companion for movie and TV show enthusiasts",
        trackContent: "Track Watched Content",
        trackContentDesc: "Keep a record of all the movies and TV shows you've watched.",
        streamingAvailability: "Streaming Availability",
        streamingAvailabilityDesc: "Find out where to watch your favorite content across various streaming platforms.",
        releaseNotifications: "Release Notifications",
        releaseNotificationsDesc: "Get notified about upcoming releases and premieres.",
        serviceIntegration: "Service Integration",
        serviceIntegrationDesc: "Seamless integration with trakt.tv, simkl, and TMDB for up-to-date information.",
        userInterface: "User-Friendly Interface",
        userInterfaceDesc: "Intuitive design optimized for all supported platforms.",
        trailerPlayback: "Trailer Playback",
        trailerPlaybackDesc: "Watch trailers directly within the app before deciding what to watch.",
        platformsTitle: "Available Platforms",
        platformsDesc: "Nexee is available on multiple Apple platforms",
        macOS: "macOS",
        macOSDesc: "Track your content on your Mac with our desktop application.",
        iOS: "iOS",
        iOSDesc: "Take Nexee with you on your iPhone and iPad.",
        tvOS: "tvOS",
        tvOSDesc: "Enjoy Nexee on your Apple TV for a seamless living room experience.",
        aboutTitle: "About Nexee",
        aboutDesc: "Learn more about our application",
        aboutContent: "Nexee is currently in development. Our team is working hard to bring you the best movie and TV show tracking experience across Apple platforms. Stay tuned for updates!",
        footerDesc: "Your movie and TV show companion",
        links: "Links",
        github: "GitHub",
        visitGithub: "Visit our GitHub",
        copyright: "All rights reserved."
    },
    cs: {
        home: "Domů",
        features: "Funkce",
        platforms: "Platformy",
        about: "O aplikaci",
        language: "Jazyk",
        heroTitle: "Sledujte své filmy a seriály s Nexee",
        heroDesc: "Dokonalý společník pro organizaci a plánování vašeho sledování napříč různými platformami.",
        getStarted: "Začít",
        learnMore: "Více informací",
        featuresTitle: "Funkce",
        featuresDesc: "Objevte, co dělá z Nexee dokonalého společníka pro milovníky filmů a seriálů",
        trackContent: "Sledování zhlédnutého obsahu",
        trackContentDesc: "Udržujte si přehled o všech filmech a seriálech, které jste již viděli.",
        streamingAvailability: "Dostupnost streamování",
        streamingAvailabilityDesc: "Zjistěte, kde můžete sledovat svůj oblíbený obsah na různých streamovacích platformách.",
        releaseNotifications: "Oznámení o vydání",
        releaseNotificationsDesc: "Dostávejte oznámení o nadcházejících novinkách a premiérách.",
        serviceIntegration: "Integrace služeb",
        serviceIntegrationDesc: "Bezproblémová integrace s trakt.tv, simkl a TMDB pro aktuální informace.",
        userInterface: "Uživatelsky přívětivé rozhraní",
        userInterfaceDesc: "Intuitivní design optimalizovaný pro všechny podporované platformy.",
        trailerPlayback: "Přehrávání trailerů",
        trailerPlaybackDesc: "Sledujte trailery přímo v aplikaci, než se rozhodnete, co budete sledovat.",
        platformsTitle: "Dostupné platformy",
        platformsDesc: "Nexee je dostupný na více platformách Apple",
        macOS: "macOS",
        macOSDesc: "Sledujte svůj obsah na Macu s naší desktopovou aplikací.",
        iOS: "iOS",
        iOSDesc: "Vezměte si Nexee s sebou na iPhone a iPad.",
        tvOS: "tvOS",
        tvOSDesc: "Užijte si Nexee na Apple TV pro bezproblémový zážitek v obývacím pokoji.",
        aboutTitle: "O aplikaci Nexee",
        aboutDesc: "Zjistěte více o naší aplikaci",
        aboutContent: "Nexee je momentálně ve vývoji. Náš tým usilovně pracuje na tom, aby vám přinesl nejlepší zážitek ze sledování filmů a seriálů na platformách Apple. Sledujte nás pro další aktualizace!",
        footerDesc: "Váš společník pro filmy a seriály",
        links: "Odkazy",
        github: "GitHub",
        visitGithub: "Navštivte náš GitHub",
        copyright: "Všechna práva vyhrazena."
    },
    sk: {
        home: "Domov",
        features: "Funkcie",
        platforms: "Platformy",
        about: "O aplikácii",
        language: "Jazyk",
        heroTitle: "Sledujte svoje filmy a seriály s Nexee",
        heroDesc: "Dokonalý spoločník pre organizáciu a plánovanie vášho sledovania naprieč rôznymi platformami.",
        getStarted: "Začať",
        learnMore: "Viac informácií",
        featuresTitle: "Funkcie",
        featuresDesc: "Objavte, čo robí z Nexee dokonalého spoločníka pre milovníkov filmov a seriálov",
        trackContent: "Sledovanie pozretého obsahu",
        trackContentDesc: "Udržujte si prehľad o všetkých filmoch a seriáloch, ktoré ste už videli.",
        streamingAvailability: "Dostupnosť streamovania",
        streamingAvailabilityDesc: "Zistite, kde môžete sledovať svoj obľúbený obsah na rôznych streamovacích platformách.",
        releaseNotifications: "Oznámenia o vydaní",
        releaseNotificationsDesc: "Dostávajte oznámenia o nadchádzajúcich novinkách a premiérach.",
        serviceIntegration: "Integrácia služieb",
        serviceIntegrationDesc: "Bezproblémová integrácia s trakt.tv, simkl a TMDB pre aktuálne informácie.",
        userInterface: "Používateľsky prívetivé rozhranie",
        userInterfaceDesc: "Intuitívny dizajn optimalizovaný pre všetky podporované platformy.",
        trailerPlayback: "Prehrávanie trailerov",
        trailerPlaybackDesc: "Sledujte trailery priamo v aplikácii, než sa rozhodnete, čo budete sledovať.",
        platformsTitle: "Dostupné platformy",
        platformsDesc: "Nexee je dostupný na viacerých platformách Apple",
        macOS: "macOS",
        macOSDesc: "Sledujte svoj obsah na Macu s našou desktopovou aplikáciou.",
        iOS: "iOS",
        iOSDesc: "Vezmite si Nexee so sebou na iPhone a iPad.",
        tvOS: "tvOS",
        tvOSDesc: "Užite si Nexee na Apple TV pre bezproblémový zážitok v obývacej izbe.",
        aboutTitle: "O aplikácii Nexee",
        aboutDesc: "Zistite viac o našej aplikácii",
        aboutContent: "Nexee je momentálne vo vývoji. Náš tím usilovne pracuje na tom, aby vám priniesol najlepší zážitok zo sledovania filmov a seriálov na platformách Apple. Sledujte nás pre ďalšie aktualizácie!",
        footerDesc: "Váš spoločník pre filmy a seriály",
        links: "Odkazy",
        github: "GitHub",
        visitGithub: "Navštívte náš GitHub",
        copyright: "Všetky práva vyhradené."
    }
};

// Language switcher functionality
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const currentLang = translations[lang];

    if (!currentLang) return;

    // Update all elements with data-i18n attribute
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (currentLang[key]) {
            element.textContent = currentLang[key];
        }
    });

    // Update language dropdown active state
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.language-dropdown a[data-lang="${lang}"]`).classList.add('active');

    // Store selected language in localStorage
    localStorage.setItem('nexee-language', lang);
}

// Initialize elements with opacity 0 for animation and set up language
document.addEventListener('DOMContentLoaded', function() {
    // Animation setup
    const elements = document.querySelectorAll('.feature-card, .platform-card');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Trigger scroll event to check initial visible elements
    window.dispatchEvent(new Event('scroll'));

    // Language setup
    const savedLanguage = localStorage.getItem('nexee-language') || 'en';
    setLanguage(savedLanguage);

    // Add language switcher event listeners
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
