// pages/bookings.js
import Head from "next/head";
import NavBar from "../components/NavBar";

export default function BookingsPage() {
  return (
    <>
      <Head>
        <title>Bookings | Royal Events Worldwide</title>
        <meta
          name="description"
          content="Book luxury speakers, hosts and wellness experiences with Royal Events Worldwide."
        />
      </Head>

      <NavBar />

      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
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
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite',
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
              background: 'linear-gradient(to right, #ffd700, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              Book Your Royal Experience
            </h1>
            <p style={{
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Secure elite speakers, hosts and wellness experiences for your next
              event. We focus on premium, healthy, high-class environments so you
              and your guests feel taken care of from start to finish.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}>
            <a href="#booking-form" style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
              color: '#1a1a2e',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
              display: 'inline-block'
            }}>
              Request a Booking
            </a>
            <a href="/health" style={{
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
              View Health & Wellness Options
            </a>
          </div>

          <div id="booking-form" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '10px',
              color: '#ffd700'
            }}>
              Quick Booking Request
            </h2>
            <p style={{
              marginBottom: '30px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Share a few details and someone from the Royal Events team will
              follow up.
            </p>

            <form>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <input 
                  type="text" 
                  placeholder="Phone (optional)" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input 
                  type="text" 
                  placeholder="Event City" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <input 
                  type="date" 
                  placeholder="Event Date" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input 
                  type="text" 
                  placeholder="Estimated Budget" 
                  style={{
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <textarea
                rows={4}
                placeholder="Tell us about the event and what you need (speaker, host, wellness activation, etc.)"
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  marginBottom: '20px',
                  resize: 'vertical'
                }}
              />

              <button 
                type="submit" 
                style={{
                  width: '100%',
                  padding: '15px 40px',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  color: '#1a1a2e',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          
          input::placeholder,
          textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          input:focus,
          textarea:focus {
            outline: none;
            border-color: #ffd700;
            box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
          }
        `}</style>
      </main>
    </>
  );
}
