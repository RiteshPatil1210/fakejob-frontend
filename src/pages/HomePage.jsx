import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSearch, FaUserShield, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import HeroImage from '../assets/hero-image.png';

export default function HomePage() {
    return (
        <div className="hero-wrapper">
            <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem', alignItems: 'center', textAlign: 'left', maxWidth: '1400px' }}>

                {/* Text Content */}
                <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '5px 15px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '20px', color: 'var(--accent-neon)', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                        <FaShieldAlt /> AI-Powered Protection
                    </div>

                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                        Detect Fake Job Listings <br />
                        <span className="gradient-text">Before It’s Too Late.</span>
                    </h1>

                    <p className="hero-subtitle" style={{ marginLeft: 0, fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
                        FakeJob Shield analyzes job descriptions using advanced AI and rule-based checks to help you stay safe from scams, upfront fees, and fraudulent offers.
                    </p>

                    <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                        <Link to="/analyze" className="btn-primary glow-effect">
                            <FaSearch /> Analyze a Job Now
                        </Link>
                        <Link to="/why-matters" className="btn-secondary">
                            <FaUserShield /> Why this matters
                        </Link>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem' }}>
                        <FeatureBox title="Dual Engine" sub="AI + Rule Based" />
                        <FeatureBox title="Transparent" sub="Clear Explanations" />
                        <FeatureBox title="For You" sub="Students & Seekers" />
                    </div>
                </div>

                {/* Hero Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={HeroImage}
                        alt="Job Scam Protection"
                        style={{ width: '100%', maxWidth: '550px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                </div>

            </div>
        </div>
    );
}

function FeatureBox({ title, sub }) {
    return (
        <div style={{ background: 'var(--secondary-bg)', padding: '1rem 2rem', borderRadius: '12px', border: '1px solid var(--border-color)', minWidth: '150px' }}>
            <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>{title}</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{sub}</span>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{desc}</p>
        </div>
    );
}
