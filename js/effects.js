// Effets de fond
const canvas = document.getElementById('bg-canvas')
const ctx = canvas.getContext('2d')

let particles = []
let animFrame = null

function initEffects() {
  // Applique la couleur accent depuis la config
  document.documentElement.style.setProperty('--accent', CONFIG.appearance.accentColor)

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const bg = CONFIG.appearance.background

  if (bg === 'particles') startParticles()
  else if (bg === 'snow') startSnow()
  else if (bg === 'gradient') startGradient()
  else if (bg === 'image') setBgImage()
  else if (bg === 'video') setBgVideo()
}

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

// Particules
function startParticles() {
  const count = 80
  particles = []

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    })
  }

  animateParticles()
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const color = CONFIG.appearance.particleColor

  particles.forEach(p => {
    p.x += p.vx
    p.y += p.vy

    if (p.x < 0) p.x = canvas.width
    if (p.x > canvas.width) p.x = 0
    if (p.y < 0) p.y = canvas.height
    if (p.y > canvas.height) p.y = 0

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
    ctx.fill()
  })

  // Lignes entre particules proches
  particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
      if (dist < 120) {
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.strokeStyle = color + Math.floor((1 - dist / 120) * 40).toString(16).padStart(2, '0')
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    })
  })

  animFrame = requestAnimationFrame(animateParticles)
}

// Neige
function startSnow() {
  const count = 120
  particles = []

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: Math.random() * 1 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    })
  }

  animateSnow()
}

function animateSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const color = CONFIG.appearance.particleColor

  particles.forEach(p => {
    p.y += p.vy
    p.x += p.vx

    if (p.y > canvas.height) {
      p.y = -5
      p.x = Math.random() * canvas.width
    }

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
    ctx.fill()
  })

  animFrame = requestAnimationFrame(animateSnow)
}

// Dégradé anime
function startGradient() {
  const colors = CONFIG.appearance.gradientColors
  let t = 0

  function animate() {
    t += 0.003
    const grad = ctx.createLinearGradient(
      canvas.width * Math.sin(t),
      0,
      canvas.width * Math.cos(t),
      canvas.height
    )
    colors.forEach((c, i) => grad.addColorStop(i / (colors.length - 1), c))
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    animFrame = requestAnimationFrame(animate)
  }

  animate()
}

// Image de fond
function setBgImage() {
  if (!CONFIG.appearance.backgroundSrc) return
  document.body.style.backgroundImage = `url(${CONFIG.appearance.backgroundSrc})`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
}

// Vidéo de fond
function setBgVideo() {
  if (!CONFIG.appearance.backgroundSrc) return
  const video = document.createElement('video')
  video.src = CONFIG.appearance.backgroundSrc
  video.autoplay = true
  video.loop = true
  video.muted = true
  video.playsInline = true
  video.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `
  document.body.appendChild(video)
}

// Curseur custom
function initCursor() {
  if (CONFIG.appearance.cursor === 'default') {
    document.body.style.cursor = 'default'
    document.getElementById('custom-cursor').style.display = 'none'
    return
  }

  const cursor = document.getElementById('custom-cursor')

  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })

  if (CONFIG.appearance.cursor === 'circle') {
    cursor.style.width = '30px'
    cursor.style.height = '30px'
    cursor.style.background = 'transparent'
    cursor.style.border = `2px solid ${CONFIG.appearance.accentColor}`
  }
}