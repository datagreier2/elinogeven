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
    </main>
  )
}

export default Invitation
