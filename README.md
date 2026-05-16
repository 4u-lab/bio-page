<div align="center">

# 🌐 Bio Page

**Une page de profil personnalisable — musique, effets visuels, liens, stats. Hébergeable gratuitement sur GitHub Pages.**

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[🌐 Voir la démo](https://4u-lab.github.io/bio-page) · [🐛 Reporter un bug](https://github.com/4u-lab/bio-page/issues) · [💡 Suggérer une idée](https://github.com/4u-lab/bio-page/issues)

</div>

---

## ✨ Fonctionnalités

- 👤 **Profil** — photo, pseudo, description avec effet de typing
- 🎵 **Lecteur musique** — MP3 local ou lien direct, play/pause, disc animé
- 🌅 **Fond customisable** — particules, neige, dégradé animé, image, vidéo
- 🔗 **Liens illimités** — GitHub, Discord, X, Instagram, ou n'importe quel lien
- 📊 **Stats** — affiche tes stats personnalisées
- 🖱️ **Curseur custom** — point lumineux ou cercle
- ⌨️ **Écran d'entrée** — animation de bienvenue au clic
- 📱 **Responsive** — fonctionne sur mobile
- 💾 **Zéro serveur** — 100% statique, hébergeable gratuitement

---

## 🚀 Installation

### Option 1 — Double-clic

| Système | Fichier |
|---|---|
| Windows | `start.bat` |
| Mac / Linux | `start.sh` |

### Option 2 — Manuellement

Ouvre `index.html` dans ton navigateur. C'est tout.

### Option 3 — Fork & GitHub Pages

```bash
# 1. Fork ce repo sur GitHub
# 2. Clone ton fork
git clone https://github.com/TON-PSEUDO/bio-page.git
cd bio-page

# 3. Personnalise config.js
# 4. Push tes changements
git add .
git commit -m "feat: ma bio page"
git push

# 5. Active GitHub Pages
# Settings → Pages → Branch main → Save
# Ton site est en ligne sur https://TON-PSEUDO.github.io/bio-page
```

---

## ⚙️ Configuration — `config.js`

**Tout se passe dans `config.js`. Tu n'as pas besoin de toucher au reste du code.**

### 👤 Profil

```js
profile: {
  username: "4u",                        // Ton pseudo affiché
  description: "Developer. Builder.",    // Ta description (supporte le typing effect)
  avatar: "assets/pp.png",              // Chemin vers ta photo (ou URL externe)
  banner: null,                          // Bannière (null = désactivé)
},
```

---

### 🎨 Apparence

```js
appearance: {
  accentColor: "#58a6ff",   // Couleur principale — change tout d'un coup

  // Fond : choisir une valeur parmi les options ci-dessous
  background: "particles",  // "particles" | "snow" | "gradient" | "image" | "video" | "none"

  // Seulement si background = "gradient"
  gradientColors: ["#0d1117", "#1a1f35", "#2d3561"],

  // Seulement si background = "image" ou "video"
  backgroundSrc: "assets/tonfond.mp4",

  // Curseur : "dot" | "circle" | "default"
  cursor: "dot",

  // Effet de typing sur la description
  typingEffect: true,   // true | false

  // Couleur des particules ou de la neige
  particleColor: "#58a6ff",
},
```

**Options de fond :**

| Valeur | Effet |
|---|---|
| `"particles"` | Points animés reliés par des lignes |
| `"snow"` | Flocons de neige qui tombent |
| `"gradient"` | Dégradé animé (couleurs dans `gradientColors`) |
| `"image"` | Image ou GIF en fond (chemin dans `backgroundSrc`) |
| `"video"` | Vidéo MP4 en boucle (chemin dans `backgroundSrc`) |
| `"none"` | Fond uni noir |

---

### 🎵 Musique

```js
music: {
  enabled: true,              // true = activé | false = désactivé
  src: "assets/music.mp3",   // Chemin vers ton MP3 local
  title: "Ma musique",        // Titre affiché dans le player
  artist: "Artiste",          // Artiste affiché
  autoplay: true,             // Démarre au clic sur l'écran d'entrée
},
```

> ⚠️ Le fichier MP3 doit être dans le dossier `assets/`. Renomme le en `music.mp3` ou change le chemin dans `src`.

---

### 🖥️ Écran d'entrée

```js
enterScreen: {
  enabled: true,               // true = activé | false = désactivé
  text: "Cliquez pour entrer", // Texte principal
  subtext: "4u",               // Sous-texte (ton pseudo par exemple)
},
```

---

### 🔗 Liens

```js
links: [
  {
    icon: "github",                        // Nom de l'icône Font Awesome Brands
    label: "GitHub",                       // Texte affiché sur le bouton
    url: "https://github.com/4u-lab",     // Lien complet
    color: null,                           // null = couleur accent | ou "#HEX"
  },
  // Ajoute autant de liens que tu veux...
],
```

**Icônes disponibles** (Font Awesome Brands) :

| Service | `icon` |
|---|---|
| GitHub | `"github"` |
| Discord | `"discord"` |
| X (Twitter) | `"x-twitter"` |
| Instagram | `"instagram"` |
| YouTube | `"youtube"` |
| Twitch | `"twitch"` |
| TikTok | `"tiktok"` |
| Spotify | `"spotify"` |
| Steam | `"steam"` |
| Reddit | `"reddit"` |
| LinkedIn | `"linkedin"` |

> Pour ajouter un lien sans icône réseau, utilise `"link"` comme icon (Font Awesome Solid).

---

### 📊 Stats

```js
stats: [
  { label: "Projets", value: "3" },
  { label: "Repos", value: "3" },
  { label: "Commits", value: "10+" },
  // Ajoute ou supprime des stats librement
],
```

> Pour désactiver les stats, mets un tableau vide : `stats: []`

---

## 🗂️ Structure du projet

```
bio-page/
├── index.html          # Structure HTML — ne pas modifier sauf ajout de blocs
├── config.js           # ← TOUT se configure ici
├── README.md
├── start.bat           # Lancement Windows
├── start.sh            # Lancement Mac/Linux
├── css/
│   └── style.css       # Styles — modifier pour changer le design
├── js/
│   ├── app.js          # Logique principale — profil, liens, stats
│   ├── effects.js      # Effets visuels — particules, neige, gradient, curseur
│   └── music.js        # Lecteur musique
└── assets/
    ├── pp.png          # Ta photo de profil
    └── music.mp3       # Ta musique
```

---

## ➕ Ajouter une fonctionnalité

### Ajouter un lien

Dans `config.js`, ajoute un objet dans `links` :

```js
{
  icon: "youtube",
  label: "YouTube",
  url: "https://youtube.com/@tonchan",
  color: "#ff0000",
},
```

### Ajouter une stat

```js
{ label: "Followers", value: "120" },
```

### Changer la couleur de tout le site

Change juste `accentColor` dans `config.js` :

```js
accentColor: "#ff6b6b",  // rouge
accentColor: "#3fb950",  // vert
accentColor: "#f0883e",  // orange
```

### Désactiver la musique

```js
music: {
  enabled: false,
  ...
}
```

### Désactiver l'écran d'entrée

```js
enterScreen: {
  enabled: false,
  ...
}
```

---

## 🤝 Contribuer

```bash
git checkout -b feature/ma-feature
git commit -m "feat: ma feature"
git push origin feature/ma-feature
# Ouvre une Pull Request
```

---

## 📄 Licence

MIT — fork, modifie, utilise librement.

---

<div align="center">

Fait avec ❤️ par [4u-lab](https://github.com/4u-lab) · Open Source · MIT License

</div>