// pages/store.js
import NavBar from '../components/NavBar';

export default function StorePage() {
  return (
    <>
      <NavBar />

      <main className="store-page">
        <div className="store-overlay">
          <div className="store-content">
            <h1>Royal Events Store</h1>
            <p>
              Digital content, PDFs, and audio resources for inspiration,
              healing, and education.
            </p>
            <p>
              Curated experiences and resources from Royal Events Worldwide.
              Store opening soon.
            </p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .store-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #ffffff;
          background-image: url('/bd1-hero.png');
          background-size: 110%;
          background-position: center top;
          background-repeat: no-repeat;
          animation: storeHeroPan 25s ease-in-out infinite alternate;
        }

        .store-overlay {
          width: 100%;
          height: 100%;
          padding: 4.5rem 2rem 2rem; /* top padding for nav */
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.65);
        }

        .store-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .store-content p {
          font-size: 1rem;
          max-width: 600px;
          margin: 0.5rem auto;
        }

        @keyframes storeHeroPan {
          0% {
            background-position: center top;
          }
          100% {
            background-position: center bottom;
          }
        }

        @media (max-width: 768px) {
          .store-content h1 {
            font-size: 2rem;
          }

          .store-overlay {
            padding: 4.5rem 1.5rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
