// components/NavBar.js

export default function NavBar() {
  return (
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
  );
}
