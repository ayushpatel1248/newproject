import React, { useState } from 'react';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="background"></div>
      <div className="app-container">
        <nav className="navbar">
          <div className="logo">Lumina</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
            Sign In
          </button>
        </nav>

        <main className="hero">
          <div className="badge">✨ Announcing Lumina v2.0</div>
          <h1>Build faster with modern aesthetics</h1>
          <p>
            Experience a new standard of design with our intuitive platform. 
            Create stunning, responsive interfaces in minutes.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-secondary">View Documentation</button>
          </div>

          <div className="features" id="features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Optimized for speed and performance. Your users will love the instant load times and smooth interactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Carefully crafted aesthetics with glassmorphism, fluid typography, and dynamic animations built-in.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure by Default</h3>
              <p>Enterprise-grade security features out of the box. Focus on building while we handle the safety.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
