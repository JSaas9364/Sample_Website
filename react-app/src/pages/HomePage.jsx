import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="Game Logo" /></a>
        </div>
        <nav>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">Games</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">More</Link></li>
            <li><Link to="/form" className="btn">Join Now</Link></li>
          </ul>

        </nav>
        <div className="menu-icon" onClick={() => toggleMenu()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      <section className="hero">
        <video autoPlay muted loop className="background-video">
          <source src="/images/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>WELCOME TO THE WORLD OF GAMING</h1>
          <p>Immerse yourself in a universe of adventure, strategy, and action.</p>
          <a href="#" className="btn">More About Us</a>
        </div>
      </section>

      <main>
        <section className="features">
          <h2>Explore the Features</h2>
          <div className="feature-container">
            <div className="feature-box">
              <h3>Adventure Awaits</h3>
              <p>Embark on epic quests and uncover hidden secrets.</p>
            </div>
            <div className="feature-box">
              <h3>Multiplayer Battles</h3>
              <p>Engage in strategic battles with players worldwide.</p>
            </div>
            <div className="feature-box">
              <h3>Expansive World</h3>
              <p>Discover vast landscapes, dungeons, and thriving cities.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Game Website</p>
      </footer>
    </div>
  );
}

function toggleMenu() {
  document.querySelector('.menu-icon')?.classList.toggle("change");
  document.querySelector(".nav-links")?.classList.toggle("menu-open");
}
