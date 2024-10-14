import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="/images/landing-bg.jpg" alt="Background" className="bg-image" />
      <h2>Welcome to Paradise Nursery</h2>
      <p>Your one-stop shop for houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
