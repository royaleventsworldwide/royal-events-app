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

      {/* This class name MUST match your CSS: .section-page and .bookings-page::before */}
      <main className="section-page bookings-page">
        <div className="section-content">
          <h1>Book Your Royal Experience</h1>
          <p>
            Secure elite speakers, hosts and wellness experiences for your next
            event. We focus on premium, healthy, high-class environments so you
            and your guests feel taken care of from start to finish.
          </p>

          <div className="section-actions">
            <a href="#booking-form" className="primary-btn">
              Request a Booking
            </a>
            <a href="/health" className="secondary-btn">
              View Health & Wellness Options
            </a>
          </div>

          <div id="booking-form" className="section-form">
            <h2>Quick Booking Request</h2>
            <p>
              Share a few details and someone from the Royal Events team will
              follow up.
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Phone (optional)" />
                <input type="text" placeholder="Event City" />
              </div>

              <div className="form-row">
                <input type="date" placeholder="Event Date" />
                <input type="text" placeholder="Estimated Budget" />
              </div>

              <textarea
                rows={4}
                placeholder="Tell us about the event and what you need (speaker, host, wellness activation, etc.)"
              />

              <button type="submit" className="primary-btn">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
