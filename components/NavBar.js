// components/NavBar.js

export default function NavBar() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="brand">
            Royal Events Worldwide
          </a>
          <nav className="nav-links">
            <a href="/bookings">Bookings</a>
            <a href="/health">Health</a>
            <a href="/store">Store</a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.25)
          );
        }

        .site-header-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #fefefe;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
        }

        .nav-links a {
          margin-left: 1rem;
          font-size: 0.9rem;
          color: #f5f5f5;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: #d4af37; /* gold */
        }

        @media (max-width: 640px) {
          .site-header-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
          }

          .nav-links a {
            margin-left: 0;
            margin-right: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
