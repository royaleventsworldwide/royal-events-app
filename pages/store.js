// pages/store.js
import Head from "next/head";
import NavBar from '../components/NavBar';

export default function StorePage() {
  return (
    <>
      <Head>
        <title>Store | Royal Events Worldwide</title>
        <meta
          name="description"
          content="Digital content, PDFs, audio, and resources for inspiration, healing, and education."
        />
      </Head>

      <NavBar />

      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%)',
        color: 'white',
        padding: '80px 20px 40px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Animated background overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
          animation: 'pulse 12s ease-in-out infinite',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1200px',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
              padding: '10px 30px',
              borderRadius: '50px',
              marginBottom: '30px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#1a1a2e',
              letterSpacing: '1px'
            }}>
              COMING SOON
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              marginBottom: '20px',
              background: 'linear-gradient(to right, #ffd700, #fff, #8a2be2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              Royal Events Store
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              maxWidth: '700px',
              margin: '0 auto 20px',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Digital content, PDFs, and audio resources for inspiration,
              healing, and education.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              Curated experiences and resources from Royal Events Worldwide.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '60px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px 30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>
                📚
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#ffd700'
              }}>
                Digital Content
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                E-books, guides, and exclusive digital resources to elevate your event experience.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px 30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8a2be2, #9370db)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>
                🎧
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#9370db'
              }}>
                Audio Resources
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Meditations, affirmations, and audio programs for healing and personal growth.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px 30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(72, 209, 204, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48d1cc, #40e0d0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2.5rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#48d1cc'
              }}>
                Curated Experiences
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Premium packages and exclusive access to world-class wellness and entertainment.
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '60px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '30px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Want to be notified when we launch?
            </p>
            
            <div style={{
              maxWidth: '500px',
              margin: '0 auto',
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '15px 25px',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              <button style={{
                padding: '15px 40px',
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                color: '#1a1a2e',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                Notify Me
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          
          input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          input:focus {
            outline: none;
            border-color: #ffd700;
            box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
          }
        `}</style>
      </main>
    </>
  );
}
