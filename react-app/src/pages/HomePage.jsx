import './HomePage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../authContext'; // Import the authentication context

export default function HomePage() {
  const { isLoggedIn, login, logout } = useAuth(); // Access login state and functions from context
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register

  function toggleMenu() {
    document.querySelector('.menu-icon')?.classList.toggle("change");
    document.querySelector(".nav-links")?.classList.toggle("menu-open");
  }

  const handleAuth = async () => {
    setError('');
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      if (isRegistering) {
        // Registration logic
        const res = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to register');
        }

        alert('Registration successful! You can now log in.');
        setIsRegistering(false); // Switch to login mode after successful registration
      } else {
        // Login logic
        const res = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Invalid credentials');
        }

        login(data.token); // Save token in context and localStorage
        setShowLogin(false); // Close modal after successful login
      }
    } catch (err) {
      setError(err.message || 'An error occurred.');
    }
  };

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
            <li>
              {isLoggedIn ? (
                <span onClick={logout}>Logout</span>
              ) : (
                <span onClick={() => setShowLogin(true)} style={{ cursor: 'pointer' }}>
                  Login
                </span>
              )}
            </li>
            <li><Link to="/form" className="btn">Join Now</Link></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
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
        <p>&copy; {new Date().getFullYear()} Game Website</p>
      </footer>

      {/* Login/Register Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            <button type="button" onClick={handleAuth} className="btn">
              {isRegistering ? 'Register' : 'Login'}
            </button>
            <p>
              {isRegistering ? (
                <>
                  Already have an account?{' '}
                  <span
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => setIsRegistering(false)}
                  >
                    Login here
                  </span>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <span
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => setIsRegistering(true)}
                  >
                    Register here
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}