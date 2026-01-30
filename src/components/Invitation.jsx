import './Invitation.css'

const Invitation = () => {
  return (
    <main className="invitation">
      <div className="paper">
        <h1 className="title" data-animate="title">
          Elin &amp; Even
        </h1>
        <div className="divider" aria-hidden="true" data-animate="divider" />
        <p className="subtitle" data-animate="subtitle">
          Mer informasjon kommer.
        </p>
      </div>
      <div className="location-card" data-animate="location">
        <p className="location">
          <a
            href="https://www.olympen.no/oslo-nattklubb/"
            target="_blank"
            rel="noreferrer"
          >
            Festen vil være på <span className="underline">Pigalle</span>
          </a>
        </p>
        <ul className="directions" data-animate="directions">
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
      </div>
    </main>
  )
}

export default Invitation
