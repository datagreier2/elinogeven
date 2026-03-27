import { useEffect, useRef } from 'react'
import './Invitation.css'

const HeroIdentity = ({ identityRef, dateRef }) => {
  return (
    <div className="hero-identity" ref={identityRef}>
      <div className="date-display" ref={dateRef}>
        11/4
      </div>
      <h1 className="title">Elin &amp; Even</h1>
    </div>
  )
}

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src="/elinogeven.png" alt="Elin og Even" />
    </div>
  )
}

const EventBlock = () => {
  return (
    <div className="event-block">
      <p className="headline">BLI MED PÅ VÅR BRYLLUPSFEST!</p>
      <p className="venue">Mangelsgården, Oslo</p>
      <p className="time">Klokken 18.30</p>
    </div>
  )
}

const Invitation = () => {
  const identityRef = useRef(null)
  const dateRef = useRef(null)
  const eventRef = useRef(null)

  useEffect(() => {
    const identityEl = identityRef.current
    const dateEl = dateRef.current
    const eventEl = eventRef.current

    if (!identityEl || !dateEl || !eventEl) {
      return undefined
    }

    let frameId = null

    const update = () => {
      const identityRect = identityEl.getBoundingClientRect()
      const eventRect = eventEl.getBoundingClientRect()
      const shouldHideDate = identityRect.bottom >= eventRect.top - 6
      dateEl.style.opacity = shouldHideDate ? '0' : '1'
      dateEl.style.transform = shouldHideDate ? 'translateY(-6px)' : 'translateY(0)'
      identityEl.dataset.compact = shouldHideDate ? 'on' : 'off'
      frameId = null
    }

    const onScroll = () => {
      if (frameId) return
      frameId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <main className="invitation">
      <div className="paper">
        <HeroIdentity identityRef={identityRef} dateRef={dateRef} />
        <div className="paper-content">
          <header className="hero">
            <HeroImage />
            <div ref={eventRef}>
              <EventBlock />
            </div>
          </header>

          <nav className="quick-nav" aria-label="Hopp til seksjon">
            <a href="#svar">Svar ønskes</a>
            <a href="#sted">Adkomst</a>
            <a href="#toastmaster">Toastmaster</a>
            <a href="#kleskode">Kleskode</a>
          </nav>

          <div className="sections">
            <details className="section-card gift-card">
              <summary>
                <h2>Gaver</h2>
                <span className="gift-hint" aria-hidden="true">
                  <svg viewBox="0 0 60 30" role="presentation" aria-hidden="true">
                    <path d="M6 8l24 16L54 8" />
                  </svg>
                </span>
              </summary>
              <div className="gift-body">
                <p>
                  Det har kommet noen spørsmål om gaveliste, og dersom noen ønsker å
                  gi oss en liten gave blir vi selvfølgelig glade for alt. For
                  eksempel et bidrag til bryllupsreise, et gavekort, en
                  middagsinvitasjon eller noe dere tenker vi trenger.
                </p>
              </div>
            </details>
            <section className="section-card intro">
              <h2>Velkommen</h2>
              <p>
                Vi markerer både 10 år sammen og at vi nå er nygifte. Det fortjener
                en skikkelig fest!
              </p>
              <p>
                Derfor har vi gleden av å samle alle vi er glade i til å feire dette
                sammen med oss i Oslo, byen der vi møttes.
              </p>
              <p>
                Kvelden starter med velkomstdrink og mingling klokken 18.30. Utover
                kvelden blir det feiring med musikk, god drikke og snacks, og det
                serveres nattmat – pølsebuffet fra Syverkiosken. Festen varer til
                klokken 03.00.
              </p>
              <p className="ceremony">
                Vielsen vil finne sted på Oslo rådhus kl. 15.15, sammen med våre
                forlovere og nærmeste familie.
              </p>
            </section>

            <section id="svar" className="section-card">
              <h2>Svar ønskes</h2>
              <p className="rsvp">
                Bekreft deltagelse på melding til Elin eller Even innen 15. mars.
              </p>
              <p className="closing">Vi gleder oss til å feire med dere!</p>
            </section>

            <section id="sted" className="section-card">
              <h2>Mangelsgården</h2>
              <p>Festen vil finne sted på Mangelsgården i Oslo.</p>
              <ul className="directions" aria-label="Veibeskrivelser til Mangelsgården">
                <li>
                  <a
                    href="https://maps.app.goo.gl/zjMTNzHLaNWMVyzS6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fra Oslo S
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/TynyA7wr4754xY3c9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fra Nybrua bussholdeplass
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/dXsT8brgwEM19KBh9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fra Hammerborggata bussholdeplass
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/rDwuruC1jGdJh34a8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fra Spektrum P-hus
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/erBzSZzLShNE2Vhh6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fra Stenersgata (flere P-hus)
                  </a>
                </li>
              </ul>
            </section>

            <section id="toastmaster" className="section-card">
              <h2>Toastmaster</h2>
              <p>
                Om dere har spørsmål, ikke nøl med å ta kontakt. Ønsker du å bidra
                med en sang, et dikt eller annet kulturelt, ta kontakt med
                toastmaster Ståle Strandrud på telefon 98 68 18 47.
              </p>
            </section>

            <section id="kleskode" className="section-card">
              <h2>Kleskode</h2>
              <p>
                Bruden har på seg brudekjole og brudgommen stiller i smoking. Du tar
                på deg det du føler deg fin i.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Invitation
