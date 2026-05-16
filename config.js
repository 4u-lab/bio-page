const CONFIG = {

    // Profil
    profile: {
        username: "4u",
        description: "Developer. Builder. Open Source.",
        avatar: "assets/pp.png",
        banner: null,
    },

    // Apparence
    appearance: {
        // Couleur principal (accent)
        accentColor: "#58a6ff",

        // Fond : "particles", "snow", "gradient", "video", "image", "none"
        background: "image",

        // Si background = "gardient"
        gardientColors: ["#0d1117", "#1a1f35", "#2d3561"],

        // Si background = "image" ou "video" > mettre le chemin ici
        backgroundSrc: "assets/banner.png",

        // Curseur custom : "default", "dot", "circle"
        cursor: "dot",

        // Effet de typing sur la description: true, false
        typingEffect: true,

        // Couleur des particules, neige
        particleColor: "#58a6ff",
    },

    // Musique
    music: {
        enabled: true,
        // Lien direct vers un mp3 ou fichier local "assets/music.mp3"
        src: "assets/music.mp3",
        // Titre affiché
        title: "Never Gonna Give You Up",
        artist: "Rick Astley",
        autoplay: true,
    },

    // Liens & Réseaux
    // icon : nom d'icon Font Awesome (sans le "fa-")
    // url : lien complet
    // label : texte affiché
    // color : couleur du bouton (null = couleur accent)
    links: [
        {
            icon: "github",
            label: "Github",
            url: "https://github.com/4u-lab",
            color: "#FFFFFF",
        },
        // Ajoute autant de liens que tu veux ici...
    ],

    // Stats (optionnel)
    stats: [
        { label: "Projets", value: "3" },
        { label: "Repos", value: "3" },
        { label: "Commits", value: "10+" },
    ],

    // Ecran d'entrée
    enterScreen: {
        enabled: true,
        text: "Cliquez pour entrer",
        subtext: "4u",
    },
    
}
