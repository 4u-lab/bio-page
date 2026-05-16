// Init principale
window.addEventListener('DOMContentLoaded', () => {
  // Applique le titre de la page
  document.title = CONFIG.profile.username

  // Init effets de fond et curseur
  initEffects()
  initCursor()

  // Écran d'entrée
  if (CONFIG.enterScreen.enabled) {
    showEnterScreen()
  } else {
    showMain()
  }
})

// Écran d'entrée
function showEnterScreen() {
  const screen = document.getElementById('enter-screen')
  const text = document.getElementById('enter-text')
  const subtext = document.getElementById('enter-subtext')

  text.textContent = CONFIG.enterScreen.text
  subtext.textContent = CONFIG.enterScreen.subtext

  screen.addEventListener('click', () => {
    screen.classList.add('fade-out')
    startMusic()
    setTimeout(() => {
      screen.style.display = 'none'
      showMain()
    }, 600)
  })
}

// Affichage du profil
function showMain() {
  const main = document.getElementById('main')
  main.classList.remove('hidden')

  renderProfile()
  renderStats()
  renderLinks()
  initMusic()
}

function renderProfile() {
  const avatar = document.getElementById('avatar')
  const username = document.getElementById('username')
  const desc = document.getElementById('description')

  avatar.src = CONFIG.profile.avatar
  username.textContent = CONFIG.profile.username

  // Effet de typing sur la description
  if (CONFIG.appearance.typingEffect) {
    typeText(desc, CONFIG.profile.description)
  } else {
    desc.textContent = CONFIG.profile.description
  }
}

function typeText(el, text, speed = 40) {
  el.textContent = ''
  let i = 0
  const interval = setInterval(() => {
    el.textContent += text[i]
    i++
    if (i >= text.length) clearInterval(interval)
  }, speed)
}

// Stats
function renderStats() {
  const container = document.getElementById('stats')

  if (!CONFIG.stats || CONFIG.stats.length === 0) {
    container.style.display = 'none'
    return
  }

  CONFIG.stats.forEach(stat => {
    const div = document.createElement('div')
    div.className = 'stat-item'
    div.innerHTML = `
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    `
    container.appendChild(div)
  })
}

// Liens
function renderLinks() {
  const container = document.getElementById('links')

  CONFIG.links.forEach(link => {
    const a = document.createElement('a')
    a.href = link.url
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.className = 'link-btn'

    const color = link.color || CONFIG.appearance.accentColor
    a.style.borderColor = color + '40'

    a.innerHTML = `
      <i class="fa-brands fa-${link.icon}" style="color:${color}"></i>
      <span>${link.label}</span>
    `

    a.addEventListener('mouseenter', () => {
      a.style.borderColor = color
      a.style.boxShadow = `0 8px 24px ${color}30`
    })

    a.addEventListener('mouseleave', () => {
      a.style.borderColor = color + '40'
      a.style.boxShadow = ''
    })

    container.appendChild(a)
  })
}