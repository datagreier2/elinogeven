import { useEffect, useRef } from 'react'
import './Invitation.css'

const Invitation = () => {
  const heroImageRef = useRef(null)
  const heroRef = useRef(null)
  const heroStickyRef = useRef(null)
  const collapsedOnceRef = useRef(false)
  useEffect(() => {
    const imageEl = heroImageRef.current
    const heroEl = heroRef.current
    const stickyEl = heroStickyRef.current

    if (!imageEl || !heroEl || !stickyEl) {
      return undefined
    }

    let frameId = null

    let imageTop = 0
    let stickyHeight = 0
    let imageHeight = 0

    const measure = () => {
      imageTop = imageEl.getBoundingClientRect().top + window.scrollY
      stickyHeight = stickyEl.getBoundingClientRect().height
      imageHeight = imageEl.getBoundingClientRect().height
    }

    const updateFade = () => {
      const scrollY = window.scrollY
      const progress = scrollY - (imageTop - stickyHeight)
      const clamped = Math.min(Math.max(progress, 0), 80)
      const opacity = 1 - clamped / 100

      imageEl.style.setProperty('--fade', `${clamped}px`)
      imageEl.style.setProperty('--fade-opacity', opacity.toFixed(2))
      const imageBottom = imageTop + imageHeight
      const collapsed =
        scrollY > 8 && imageHeight > 0 && scrollY + stickyHeight >= imageBottom - 260
      if (collapsed) {
        collapsedOnceRef.current = true
      }

      const isCollapsed = collapsedOnceRef.current
      heroEl.dataset.sticky = isCollapsed ? 'off' : 'on'
      heroEl.dataset.collapsed = isCollapsed ? 'on' : 'off'
      frameId = null
    }

    const onScroll = () => {
      if (frameId) return
      frameId = requestAnimationFrame(updateFade)
    }

    const onResize = () => {
      measure()
      onScroll()
    }

    const prime = () => {
      measure()
      updateFade()
    }

    const imgEl = imageEl.querySelector('img')
    if (imgEl && !imgEl.complete) {
      imgEl.addEventListener('load', prime, { once: true })
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(prime)
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (imgEl) {
        imgEl.removeEventListener('load', prime)
      }
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <main className="invitation">
      <div className="paper">
        <header className="hero" ref={heroRef}>
          <div className="hero-sticky" data-animate="hero" ref={heroStickyRef}>
            <div className="date-display">11/4</div>
            <h1 className="title">Elin & Even</h1>
            <div className="hero-divider" aria-hidden="true" />
          </div>
          <div className="hero-image" ref={heroImageRef} data-animate="hero-image">
            <img src="/elinogeven.png" alt="Elin og Even" />
          </div>
          <div className="event-block">
            <p className="headline">BLI MED PÅ VÅR BRYLLUPSFEST!</p>
            <p className="venue">Pigalle Klubb, Oslo</p>
            <p className="time">Klokken 18.30</p>
          </div>
        </header>

        <nav className="quick-nav" aria-label="Hopp til seksjon" data-animate="nav">
          <a href="#svar">Svar vennligst</a>
          <a href="#sted">Adkomst</a>
          <a href="#toastmaster">Toastmaster</a>
          <a href="#kleskode">Kleskode</a>
        </nav>

        <div className="sections">
          <section className="section-card intro" data-animate="section">
            <h2>Velkommen</h2>
            <p>
              Vi markerer både 10 år sammen og at vi nå er nygifte. Det fortjener
              en skikkelig fest!
            </p>
            <p>
              Derfor har vi gleden av å samle alle vi er glade i til å feire dette
              sammen med oss i Oslo, byen der vi møttes. Det serveres ikke middag,
              men utover kvelden blir det noe enkelt å bite i, og selvfølgelig fest
              og dans.
            </p>
            <p className="gift">
              Gaven vi ønsker oss er at dere kommer og feirer dagen sammen med oss!
            </p>
            <p className="ceremony">
              Vielsen vil finne sted på Oslo rådhus kl. 15.15, sammen med våre
              forlovere og nærmeste familie.
            </p>
          </section>

          <section id="svar" className="section-card" data-animate="section">
            <h2>Svar vennligst</h2>
            <p className="rsvp">
              Bekreft deltagelse på melding til Elin eller Even innen 15. mars.
            </p>
            <p className="closing">Vi gleder oss til å feire med dere!</p>
          </section>

          <section id="sted" className="section-card" data-animate="section">
            <h2>Pigalle</h2>
            <p>Festen vil finne sted på Pigalle i Oslo.</p>
            <ul className="directions" aria-label="Veibeskrivelser til Pigalle">
              <li>
                <a
                  href="https://maps.app.goo.gl/RXEv9XxYduyoQGoEA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fra Oslo S
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/mcVQmqCnVF1BUymQ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fra Grønland T
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/euXgMbVPcnQqWapj7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fra 37-bussen
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/b6yvfFBYxrg2fJxV8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fra P-hus
                </a>
              </li>
            </ul>
          </section>

          <section id="toastmaster" className="section-card" data-animate="section">
            <h2>Toastmaster</h2>
            <p>
              Om dere har spørsmål, ikke nøl med å ta kontakt. Ønsker du å bidra
              med en sang, et dikt eller annet kulturelt, ta kontakt med
              toastmaster Ståle Strandrud på telefon 98 68 18 47.
            </p>
          </section>

          <section id="kleskode" className="section-card" data-animate="section">
            <h2>Kleskode</h2>
            <p>
              Bruden har på seg brudekjole og brudgommen stiller i smoking. Du tar
              på deg det du føler deg fin i.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Invitation
