// pages/bookings.js
import NavBar from '../components/NavBar';

export default function BookingsPage() {
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
        <h1>Bookings</h1>
        <p>
          Book speakers, DJs, healers, and talent for Royal Events Worldwide.
        </p>
        <p>
          Soon you&apos;ll be able to submit booking requests, share event details,
          and confirm dates directly through this page.
        </p>
      </main>
    </>
  );
}
