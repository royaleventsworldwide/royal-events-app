// pages/health.js
import NavBar from '../components/NavBar';

export default function HealthPage() {
  return (
    <>
      <NavBar />

      <main
        style={{
          minHeight: '100vh',
          padding: '5rem 2rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1>Health Resources</h1>
        <p>
          Diabetes, Lupus, Cancer resources and other wellness support connected
          to Royal Events Worldwide.
        </p>
        <p>
          This page will host links, PDFs, and partners focused on health,
          healing, and wellbeing.
        </p>
      </main>
    </>
  );
}
