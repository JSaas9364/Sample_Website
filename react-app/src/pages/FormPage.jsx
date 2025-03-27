import './HomePage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authContext'; // Import the authentication context

export default function FormPage() {
  const { isLoggedIn, login, logout } = useAuth(); // Access login state and functions
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = async () => {
    setLoginError('');
    if (!username || !password) {
      setLoginError('Please enter both username and password.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Invalid credentials');
      }

      const data = await res.json();
      login(data.token); // Save token in context and localStorage
      setShowLogin(false); // Close modal
    } catch (err) {
      setLoginError(err.message || 'Invalid username or password.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setError('You must be logged in to submit the form.');
      return;
    }

    if (email !== confirmEmail) {
      setError('Emails do not match!');
      return;
    }

    setError('');

    const payload = {
      name: `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`,
      email: email,
      message: document.getElementById('message').value,
    };

    try {
      const token = localStorage.getItem('token');

      const res = await fetch('http://localhost:3001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert('Message sent! ID: ' + data.id);
    } catch (err) {
      alert('Failed to send message.');
      console.error(err);
    }
  };

  return (
    <div id="form-page">
      <header>
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="Game Logo" /></a>
        </div>
        <div className="menu-icon" onClick={() => toggleMenu()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">Games</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li>
              {isLoggedIn ? (
                <button onClick={logout} className="btn">Logout</button>
              ) : (
                <span onClick={() => setShowLogin(true)} style={{ cursor: 'pointer' }}>
                  Login
                </span>
              )}
            </li>
            <li><Link to="/form" className="btn">Join Now</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <video autoPlay muted loop className="background-video" id="form-background-video">
          <source src="/images/tree.mp4" type="video/mp4" />
        </video>

        <div className="contact-page">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" name="first-name" required />

              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" name="last-name" required />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="confirm-email">Confirm Email Address:</label>
              <input
                type="email"
                id="confirm-email"
                name="confirm-email"
                required
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />

              {error && <div id="errorMessage" style={{ color: 'red' }}>{error}</div>}

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Game Website</p>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
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
            {loginError && <p style={{ color: 'red', marginBottom: '1rem' }}>{loginError}</p>}
            <button type="button" onClick={handleLogin} className="btn">Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

function toggleMenu() {
  document.querySelector('.menu-icon')?.classList.toggle("change");
  document.querySelector(".nav-links")?.classList.toggle("menu-open");
}