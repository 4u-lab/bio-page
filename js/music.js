// Lecteur musique
function initMusic() {
  if (!CONFIG.music.enabled) return

  const player = document.getElementById('music-player')
  const audio = document.getElementById('audio')
  const toggle = document.getElementById('music-toggle')
  const icon = document.getElementById('music-icon')
  const disc = document.getElementById('music-disc')
  const titleEl = document.getElementById('music-title')
  const artistEl = document.getElementById('music-artist')

  // Rempli les infos
  titleEl.textContent = CONFIG.music.title
  artistEl.textContent = CONFIG.music.artist
  audio.src = CONFIG.music.src
  audio.loop = true
  audio.volume = 0.5

  player.classList.remove('hidden')

  // Play / Pause
  toggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play()
      icon.className = 'fa-solid fa-pause'
      disc.classList.remove('paused')
    } else {
      audio.pause()
      icon.className = 'fa-solid fa-play'
      disc.classList.add('paused')
    }
  })
}

// Appelé après le clic sur l'écran d'entrée
function startMusic() {
  if (!CONFIG.music.enabled || !CONFIG.music.autoplay) return
  const audio = document.getElementById('audio')
  audio.play().catch(() => {})
}