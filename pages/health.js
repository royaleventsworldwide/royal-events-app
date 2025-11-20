// pages/health.js
import "../styles/globals.css";          // ⬅️ force global styles to load
import Head from "next/head";
import NavBar from "../components/NavBar";

export default function HealthPage() {
  return (
    <>
      <Head>
        <title>Health &amp; Wellness | Royal Events Worldwide</title>
        <meta
          name="description"
          content="Luxury wellness, self-care and speaker experiences designed to keep your mind, body and spirit in royal condition."
        />
      </Head>

      <NavBar />

      {/* Wrapper for animated background + section styling */}
      <main className="section-page health-page">
        <div className="section-content">
          <h1>Royal Health &amp; Wellness</h1>
          <p>
            Before the lights, cameras and crowds — your health comes first.
            Royal Events Worldwide promotes high-class, healthy living so you
            can perform, create and celebrate at your best.
          </p>

          <div className="section-actions">
            <a href="/bookings" className="primary-btn">
              Book a Wellness Experience
            </a>
            <a href="#highlights" className="secondary-btn">
              See What We Offer
            </a>
          </div>

          <div id="highlights" className="section-grid">
            <div className="section-card">
              <h3>Mind</h3>
              <p>
                Motivational speakers, mindset coaching and stress-relief
                sessions that keep you mentally sharp and focused.
              </p>
            </div>
            <div className="section-card">
              <h3>Body</h3>
              <p>
                Fitness, movement and recovery options designed to keep your
                body strong, flexible and ready for the spotlight.
              </p>
            </div>
            <div className="section-card">
              <h3>Spirit</h3>
              <p>
                Rest, reflection and luxury self-care moments that let you slow
                down, recharge and realign with your purpose.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
