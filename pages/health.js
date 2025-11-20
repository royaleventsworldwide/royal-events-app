// pages/health.js
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

      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #533483 100%)',
        color: 'white',
        padding: '80px 20px 40px',
        position: 'relative'
      }}>
        {/* Animated background overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(72, 209, 204, 0.1) 0%, transparent 50%)',
          animation: 'pulse 10s ease-in-out infinite',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '20px',
              background: 'linear-gradient(to right, #48d1cc, #fff, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              Royal Health &amp; Wellness
            </h1>
            <p style={{
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Before the lights, cameras and crowds — your health comes first.
              Royal Events Worldwide promotes high-class, healthy living so you
              can perform, create and celebrate at your best.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '80px',
            flexWrap: 'wrap'
          }}>
            <a href="/bookings" style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #48d1cc, #40e0d0)',
              color: '#0f3460',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 15px rgba(72, 209, 204, 0.3)',
              display: 'inline-block'
            }}>
              Book a Wellness Experience
            </a>
            <a href="#highlights" style={{
              padding: '15px 40px',
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}>
              See What We Offer
            </a>
          </div>

          <div id="highlights" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '60px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8a2be2, #9370db)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '2rem'
              }}>
                🧠
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '15px',
                color: '#ffd700'
              }}>
                Mind
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                Motivational speakers, mindset coaching and stress-relief
                sessions that keep you mentally sharp and focused.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(72, 209, 204, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48d1cc, #40e0d0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '2rem'
              }}>
                💪
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '15px',
                color: '#48d1cc'
              }}>
                Body
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                Fitness, movement and recovery options designed to keep your
                body strong, flexible and ready for the spotlight.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '2rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '15px',
                color: '#ffd700'
              }}>
                Spirit
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                Rest, reflection and luxury self-care moments that let you slow
                down, recharge and realign with your purpose.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}</style>
      </main>
    </>
  );
}
