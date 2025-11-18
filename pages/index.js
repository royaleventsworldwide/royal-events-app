// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Royal Events Worldwide</title>
        <meta name="description" content="Royal Events Worldwide — Edutainment, Healing, Luxury Events" />
      </Head>

      <main className="hero-root">
        {/* VIDEO SOURCE: if you upload /public/videos/hero-video.mp4 it will play.
            If not present, the CSS fallback shows an animated still (bd1-hero.png). */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* if video not found, browser ignores and CSS fallback background is used */}
        </video>

        {/* overlay + content */}
        <div className="hero-overlay" />

        <header className="hero-content">
          <div className="brand">
            <div className="brand-title">Royal Events Worldwide</div>
            <div className="brand-sub">Edutainment • Healing • Speakers • Luxury Events</div>
          </div>

          <div className="cta-row">
            <a className="btn primary" href="/booking">Book Talent</a>
            <a className="btn ghost" href="/store">Visit Store</a>
          </div>
        </header>
      </main>

      <section className="below-hero">
        <div className="cards">
          <div className="card"><h3>Bookings</h3><p>Book speakers, DJs, healers.</p></div>
          <div className="card"><h3>Health</h3><p>Diabetes, Lupus, Cancer resources.</p></div>
          <div className="card"><h3>Store</h3><p>Digital content, PDFs, audio.</p></div>
        </div>
      </section>
    </>
  );
}