import './HomePage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 


export default function FormPage() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (email !== confirmEmail) {
      setError('Emails do not match!');
      return;
    }
  
    setError('');
  
    const payload = {
      name: `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`,
      email: email,
      message: document.getElementById('message').value
    };
    
  
    try {
      const res = await fetch('http://localhost:3001/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
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
                <li><Link to="/">More</Link></li>
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
              <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="confirm-email">Confirm Email Address:</label>
              <input type="email" id="confirm-email" name="confirm-email" required value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />

              {error && <div id="errorMessage" style={{ color: 'red' }}>{error}</div>}

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

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
