// pages/index.js

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <div className="home-overlay">
          <div className="hero-content">
            <p className="eyebrow">Royal Events Worldwide</p>
            <h1>Edutainment • Healing • Speakers • Luxury Events</h1>
            <p className="subtitle">
              Book world-class talent, access healing resources, and discover
              digital experiences curated for Royal Events.
            </p>

            <div className="hero-buttons">
              <a href="/bookings" className="btn primary">
                Book Talent
              </a>
              <a href="/store" className="btn secondary">
                Visit Store
              </a>
            </div>
          </div>

          <section className="info-sections">
            <div className="info-card">
              <h2>Bookings</h2>
              <p>Speakers, DJs, and healers for live and virtual events.</p>
            </div>
            <div className="info-card">
              <h2>Health</h2>
              <p>Resources around Diabetes, Lupus, Cancer, and wellbeing.</p>
            </div>
            <div className="info-card">
              <h2>Store</h2>
              <p>Digital content, PDFs, audio, and more.</p>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        .home-page {
          min-height: 100vh;
          display: flex;
          align-items: stretch;
          justify-content: center;
          background-image: url('/bd1-hero.png');
          background-size: 110%;
          background-position: center top;
          background-repeat: no-repeat;
          animation: homeHeroPan 35s ease-in-out infinite alternate;
          color: #ffffff;
        }

        .home-overlay {
          flex: 1;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.9)
          );
          padding: 3rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-content {
          max-width: 720px;
          margin: 0 auto 3rem;
          text-align: left;
        }

        .eyebrow {
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.85rem;
          color: #d4af37; /* gold */
          margin-bottom: 0.75rem;
        }

        .hero-content h1 {
          font-size: 2.3rem;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1rem;
          max-width: 540px;
          margin-bottom: 1.5rem;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.4rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
        }

        .btn.primary {
          background: #d4af37; /* gold */
          color: #000000;
        }

        .btn.secondary {
          background: transparent;
          color: #ffffff;
          border-color: #d4af37;
        }

        .btn.primary:hover {
          opacity: 0.9;
        }

        .btn.secondary:hover {
          background: rgba(0, 0, 0, 0.4);
        }

        .info-sections {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .info-card {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 0.75rem;
          padding: 1.2rem;
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .info-card h2 {
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
          color: #d4af37;
        }

        .info-card p {
          font-size: 0.95rem;
          margin: 0;
        }

        @keyframes homeHeroPan {
          0% {
            background-position: center top;
          }
          100% {
            background-position: center center;
          }
        }

        @media (max-width: 900px) {
          .info-sections {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .home-overlay {
            padding: 2rem 1.25rem 1.5rem;
          }

          .hero-content {
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-content h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
