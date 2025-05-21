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
        support: "Support",
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
        copyright: "All rights reserved.",
        privacy: "Privacy Policy",
        privacyTitle: "Privacy Policy",
        privacyDesc: "Last updated: May 21, 2025",
        privacyIntro: "At Nexee, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our Nexee application (\"Application\"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.",
        dataCollectionTitle: "DATA COLLECTION POLICY",
        dataCollectionDesc: "Nexee does not collect or store any personal data from its users. Our application functions as an interface that connects to third-party services to provide you with information about movies and TV shows.",
        thirdPartyTitle: "THIRD-PARTY SERVICES",
        thirdPartyDesc: "Our application integrates with the following third-party services:",
        traktService: "<strong>Trakt.tv</strong>: When you connect your Trakt.tv account to Nexee, you authorize our application to access your Trakt.tv data according to their privacy policy. This includes your watched history, watchlist, ratings, and other activity data. Please refer to Trakt.tv's Privacy Policy for more information.",
        simklService: "<strong>Simkl</strong>: When you connect your Simkl account to Nexee, you authorize our application to access your Simkl data according to their privacy policy. This includes your watched history, watchlist, ratings, and other activity data. Please refer to Simkl's Privacy Policy for more information.",
        tmdbService: "<strong>TMDB (The Movie Database)</strong>: Nexee uses TMDB to retrieve information about movies and TV shows, including metadata, images, and availability information. Please refer to TMDB's Privacy Policy for more information.",
        dataStorageTitle: "DATA STORAGE",
        dataStorageDesc: "Any data that is stored within the Nexee application is kept locally on your device. This may include:",
        localPreferences: "Application preferences and settings",
        localCache: "Temporary cache of movie and TV show information",
        localAuth: "Authentication tokens for connected third-party services",
        dataStorageNote: "This data is stored only on your device and is not transmitted to our servers.",
        termsOfServiceTitle: "TERMS OF SERVICE FOR THIRD-PARTY INTEGRATIONS",
        termsOfServiceDesc: "By using Nexee with third-party integrations, you agree to the following:",
        termsRespect: "You will respect the terms of service of Trakt.tv, Simkl, and TMDB when using our application.",
        termsApiLimits: "You understand that there may be limitations on the frequency and volume of data that can be accessed through these services due to their API restrictions.",
        termsAccuracy: "While we strive to provide accurate information, the data displayed in Nexee is sourced from these third-party services, and we cannot guarantee its complete accuracy.",
        termsAvailability: "Service availability depends on the uptime and functionality of these third-party APIs, which are beyond our control.",
        securityTitle: "SECURITY",
        securityDesc: "We implement reasonable security measures to protect the limited data stored on your device. However, no method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.",
        yourRightsTitle: "YOUR RIGHTS",
        yourRightsDesc: "Since Nexee does not collect or store your personal data on our servers, there is no need for data access or deletion requests directed to us. However, you can:",
        rightsDisconnect: "Disconnect any third-party services from Nexee at any time through the application settings",
        rightsClearCache: "Clear local cache data through the application settings",
        rightsUninstall: "Uninstall the application to remove all locally stored data",
        yourRightsNote: "For data stored by third-party services (Trakt.tv, Simkl, TMDB), please refer to their respective privacy policies for information on how to access, modify, or delete your data.",
        contactTitle: "CONTACT US",
        contactDesc: "If you have questions or comments about this Privacy Policy, please contact us at:",
        changesTitle: "CHANGES TO THIS PRIVACY POLICY",
        changesDesc: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.",
        backToHome: "← Back to Home"
    },
    cs: {
        support: "Podpora",
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
        copyright: "Všechna práva vyhrazena.",
        privacy: "Zásady ochrany osobních údajů",
        privacyTitle: "Zásady ochrany osobních údajů",
        privacyDesc: "Poslední aktualizace: 21. května 2025",
        privacyIntro: "V Nexee bereme vaše soukromí vážně. Tyto zásady ochrany osobních údajů vysvětlují, jak nakládáme s vašimi informacemi při používání naší aplikace Nexee (\"Aplikace\"). Přečtěte si prosím tyto zásady ochrany osobních údajů pečlivě. Pokud nesouhlasíte s podmínkami těchto zásad ochrany osobních údajů, prosím, nepoužívejte aplikaci.",
        dataCollectionTitle: "ZÁSADY SBĚRU DAT",
        dataCollectionDesc: "Nexee neshromažďuje ani neukládá žádné osobní údaje svých uživatelů. Naše aplikace funguje jako rozhraní, které se připojuje ke službám třetích stran, aby vám poskytlo informace o filmech a televizních pořadech.",
        thirdPartyTitle: "SLUŽBY TŘETÍCH STRAN",
        thirdPartyDesc: "Naše aplikace se integruje s následujícími službami třetích stran:",
        traktService: "<strong>Trakt.tv</strong>: Když připojíte svůj účet Trakt.tv k Nexee, autorizujete naši aplikaci k přístupu k vašim datům Trakt.tv podle jejich zásad ochrany osobních údajů. To zahrnuje vaši historii sledování, seznam ke zhlédnutí, hodnocení a další údaje o aktivitě. Další informace naleznete v Zásadách ochrany osobních údajů Trakt.tv.",
        simklService: "<strong>Simkl</strong>: Když připojíte svůj účet Simkl k Nexee, autorizujete naši aplikaci k přístupu k vašim datům Simkl podle jejich zásad ochrany osobních údajů. To zahrnuje vaši historii sledování, seznam ke zhlédnutí, hodnocení a další údaje o aktivitě. Další informace naleznete v Zásadách ochrany osobních údajů Simkl.",
        tmdbService: "<strong>TMDB (The Movie Database)</strong>: Nexee používá TMDB k získávání informací o filmech a televizních pořadech, včetně metadat, obrázků a informací o dostupnosti. Další informace naleznete v Zásadách ochrany osobních údajů TMDB.",
        dataStorageTitle: "UKLÁDÁNÍ DAT",
        dataStorageDesc: "Veškerá data, která jsou uložena v aplikaci Nexee, jsou uchovávána lokálně na vašem zařízení. Může to zahrnovat:",
        localPreferences: "Předvolby a nastavení aplikace",
        localCache: "Dočasná mezipaměť informací o filmech a televizních pořadech",
        localAuth: "Autentizační tokeny pro připojené služby třetích stran",
        dataStorageNote: "Tato data jsou uložena pouze na vašem zařízení a nejsou přenášena na naše servery.",
        termsOfServiceTitle: "PODMÍNKY SLUŽBY PRO INTEGRACE TŘETÍCH STRAN",
        termsOfServiceDesc: "Používáním Nexee s integracemi třetích stran souhlasíte s následujícím:",
        termsRespect: "Budete respektovat podmínky služby Trakt.tv, Simkl a TMDB při používání naší aplikace.",
        termsApiLimits: "Rozumíte, že mohou existovat omezení frekvence a objemu dat, ke kterým lze přistupovat prostřednictvím těchto služeb, kvůli jejich omezením API.",
        termsAccuracy: "Ačkoli se snažíme poskytovat přesné informace, data zobrazená v Nexee pocházejí z těchto služeb třetích stran a nemůžeme zaručit jejich úplnou přesnost.",
        termsAvailability: "Dostupnost služby závisí na době provozu a funkčnosti těchto API třetích stran, které jsou mimo naši kontrolu.",
        securityTitle: "BEZPEČNOST",
        securityDesc: "Implementujeme přiměřená bezpečnostní opatření k ochraně omezených dat uložených na vašem zařízení. Žádná metoda elektronického ukládání však není 100% bezpečná. Ačkoli se snažíme používat komerčně přijatelné prostředky k ochraně vašich dat, nemůžeme zaručit jejich absolutní bezpečnost.",
        yourRightsTitle: "VAŠE PRÁVA",
        yourRightsDesc: "Vzhledem k tomu, že Nexee neshromažďuje ani neukládá vaše osobní údaje na našich serverech, není třeba žádat o přístup k datům nebo o jejich odstranění. Můžete však:",
        rightsDisconnect: "Odpojit jakékoli služby třetích stran od Nexee kdykoli prostřednictvím nastavení aplikace",
        rightsClearCache: "Vymazat data místní mezipaměti prostřednictvím nastavení aplikace",
        rightsUninstall: "Odinstalovat aplikaci a odstranit tak všechna lokálně uložená data",
        yourRightsNote: "Pro data uložená službami třetích stran (Trakt.tv, Simkl, TMDB) se prosím obraťte na jejich příslušné zásady ochrany osobních údajů pro informace o tom, jak přistupovat, upravovat nebo mazat vaše data.",
        contactTitle: "KONTAKTUJTE NÁS",
        contactDesc: "Pokud máte dotazy nebo připomínky k těmto Zásadám ochrany osobních údajů, kontaktujte nás na:",
        changesTitle: "ZMĚNY TĚCHTO ZÁSAD OCHRANY OSOBNÍCH ÚDAJŮ",
        changesDesc: "Naše Zásady ochrany osobních údajů můžeme čas od času aktualizovat. O jakýchkoli změnách vás budeme informovat zveřejněním nových Zásad ochrany osobních údajů na této stránce a aktualizací data \"Poslední aktualizace\" v horní části této stránky. Doporučujeme vám pravidelně kontrolovat tyto Zásady ochrany osobních údajů, zda nedošlo k nějakým změnám.",
        backToHome: "← Zpět na hlavní stránku"
    },
    sk: {
        support: "Podpora",
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
        copyright: "Všetky práva vyhradené.",
        privacy: "Zásady ochrany osobných údajov",
        privacyTitle: "Zásady ochrany osobných údajov",
        privacyDesc: "Posledná aktualizácia: 21. mája 2025",
        privacyIntro: "V Nexee berieme vaše súkromie vážne. Tieto zásady ochrany osobných údajov vysvetľujú, ako nakladáme s vašimi informáciami pri používaní našej aplikácie Nexee (\"Aplikácia\"). Prečítajte si prosím tieto zásady ochrany osobných údajov pozorne. Ak nesúhlasíte s podmienkami týchto zásad ochrany osobných údajov, prosím, nepoužívajte aplikáciu.",
        dataCollectionTitle: "ZÁSADY ZBERU DÁT",
        dataCollectionDesc: "Nexee nezhromažďuje ani neukladá žiadne osobné údaje svojich používateľov. Naša aplikácia funguje ako rozhranie, ktoré sa pripája k službám tretích strán, aby vám poskytlo informácie o filmoch a televíznych reláciách.",
        thirdPartyTitle: "SLUŽBY TRETÍCH STRÁN",
        thirdPartyDesc: "Naša aplikácia sa integruje s nasledujúcimi službami tretích strán:",
        traktService: "<strong>Trakt.tv</strong>: Keď pripojíte svoj účet Trakt.tv k Nexee, autorizujete našu aplikáciu na prístup k vašim údajom Trakt.tv podľa ich zásad ochrany osobných údajov. To zahŕňa vašu históriu sledovania, zoznam na pozretie, hodnotenia a ďalšie údaje o aktivite. Ďalšie informácie nájdete v Zásadách ochrany osobných údajov Trakt.tv.",
        simklService: "<strong>Simkl</strong>: Keď pripojíte svoj účet Simkl k Nexee, autorizujete našu aplikáciu na prístup k vašim údajom Simkl podľa ich zásad ochrany osobných údajov. To zahŕňa vašu históriu sledovania, zoznam na pozretie, hodnotenia a ďalšie údaje o aktivite. Ďalšie informácie nájdete v Zásadách ochrany osobných údajov Simkl.",
        tmdbService: "<strong>TMDB (The Movie Database)</strong>: Nexee používa TMDB na získavanie informácií o filmoch a televíznych reláciách, vrátane metadát, obrázkov a informácií o dostupnosti. Ďalšie informácie nájdete v Zásadách ochrany osobných údajov TMDB.",
        dataStorageTitle: "UKLADANIE DÁT",
        dataStorageDesc: "Všetky údaje, ktoré sú uložené v aplikácii Nexee, sú uchovávané lokálne na vašom zariadení. Môže to zahŕňať:",
        localPreferences: "Predvoľby a nastavenia aplikácie",
        localCache: "Dočasná vyrovnávacia pamäť informácií o filmoch a televíznych reláciách",
        localAuth: "Autentifikačné tokeny pre pripojené služby tretích strán",
        dataStorageNote: "Tieto údaje sú uložené iba na vašom zariadení a nie sú prenášané na naše servery.",
        termsOfServiceTitle: "PODMIENKY SLUŽBY PRE INTEGRÁCIE TRETÍCH STRÁN",
        termsOfServiceDesc: "Používaním Nexee s integráciami tretích strán súhlasíte s nasledujúcim:",
        termsRespect: "Budete rešpektovať podmienky služby Trakt.tv, Simkl a TMDB pri používaní našej aplikácie.",
        termsApiLimits: "Rozumiete, že môžu existovať obmedzenia frekvencie a objemu údajov, ku ktorým je možné pristupovať prostredníctvom týchto služieb, kvôli ich obmedzeniam API.",
        termsAccuracy: "Hoci sa snažíme poskytovať presné informácie, údaje zobrazené v Nexee pochádzajú z týchto služieb tretích strán a nemôžeme zaručiť ich úplnú presnosť.",
        termsAvailability: "Dostupnosť služby závisí od doby prevádzky a funkčnosti týchto API tretích strán, ktoré sú mimo našej kontroly.",
        securityTitle: "BEZPEČNOSŤ",
        securityDesc: "Implementujeme primerané bezpečnostné opatrenia na ochranu obmedzených údajov uložených na vašom zariadení. Žiadna metóda elektronického ukladania však nie je 100% bezpečná. Hoci sa snažíme používať komerčne prijateľné prostriedky na ochranu vašich údajov, nemôžeme zaručiť ich absolútnu bezpečnosť.",
        yourRightsTitle: "VAŠE PRÁVA",
        yourRightsDesc: "Vzhľadom na to, že Nexee nezhromažďuje ani neukladá vaše osobné údaje na našich serveroch, nie je potrebné žiadať o prístup k údajom alebo o ich odstránenie. Môžete však:",
        rightsDisconnect: "Odpojiť akékoľvek služby tretích strán od Nexee kedykoľvek prostredníctvom nastavení aplikácie",
        rightsClearCache: "Vymazať údaje miestnej vyrovnávacej pamäte prostredníctvom nastavení aplikácie",
        rightsUninstall: "Odinštalovať aplikáciu a odstrániť tak všetky lokálne uložené údaje",
        yourRightsNote: "Pre údaje uložené službami tretích strán (Trakt.tv, Simkl, TMDB) sa prosím obráťte na ich príslušné zásady ochrany osobných údajov pre informácie o tom, ako pristupovať, upravovať alebo mazať vaše údaje.",
        contactTitle: "KONTAKTUJTE NÁS",
        contactDesc: "Ak máte otázky alebo pripomienky k týmto Zásadám ochrany osobných údajov, kontaktujte nás na:",
        changesTitle: "ZMENY TÝCHTO ZÁSAD OCHRANY OSOBNÝCH ÚDAJOV",
        changesDesc: "Naše Zásady ochrany osobných údajov môžeme z času na čas aktualizovať. O akýchkoľvek zmenách vás budeme informovať zverejnením nových Zásad ochrany osobných údajov na tejto stránke a aktualizáciou dátumu \"Posledná aktualizácia\" v hornej časti tejto stránky. Odporúčame vám pravidelne kontrolovať tieto Zásady ochrany osobných údajov, či nedošlo k nejakým zmenám.",
        backToHome: "← Späť na hlavnú stránku"
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