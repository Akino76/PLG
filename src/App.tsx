import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">PROVO</span>
              <span className="logo-subtext">Local Guide</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Reach Your Community</h1>
          <p>Professional Direct Mail Marketing Solutions</p>
          <p className="hero-subtext">Targeted postcard campaigns that connect with local businesses and homeowners</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>Why Choose PROVO Local Guide?</h2>
          <div className="about-features">
            <div className="feature">
              <h3>✓ Proven Results</h3>
              <p>Years of successful campaigns with measurable outcomes</p>
            </div>
            <div className="feature">
              <h3>✓ Expert Team</h3>
              <p>Experienced professionals dedicated to your success</p>
            </div>
            <div className="feature">
              <h3>✓ Local Expertise</h3>
              <p>Deep knowledge of local markets and communities</p>
            </div>
            <div className="feature">
              <h3>✓ Custom Solutions</h3>
              <p>Tailored strategies for your specific business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Tell us about your project..." rows={5}></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> (801) 694-3473</p>
            <p><strong>Email:</strong> zanderman765@gmail.com</p>
            <p><strong>Address:</strong> Provo, UT 84601</p>
            <p><strong>Hours:</strong> Mon-Fri, 9am-5pm</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 PROVO Local Guide. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
