import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRobot, FaMagic, FaShieldAlt } from 'react-icons/fa';
import HowItWorksImage from '../assets/how-it-works.png';

export default function HowItWorksPage() {
    return (
        <div className="analysis-container" style={{ maxWidth: '1000px' }}>
            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', marginBottom: '2rem', border: 'none', paddingLeft: 0 }}>
                <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>How It <span className="gradient-text">Works</span></h1>
                <p className="hero-subtitle">
                    Our AI acts like a digital detective. Here is the simple logic behind every scan.
                </p>
            </header>

            <div className="input-card" style={{ padding: '3rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <li style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '2rem', color: 'var(--accent-neon)', background: 'rgba(0, 240, 255, 0.1)', padding: '1.5rem', borderRadius: '50%', minWidth: '100px', textAlign: 'center' }}><FaMagic /></div>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>1. Read & Understand</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>Just like a seasoned recruiter reading a resume, our AI scans every single word of the job description. It doesn't just look for keywords; it understands the <strong>context</strong> and <strong>intent</strong> behind the text.</p>
                        </div>
                    </li>
                    <li style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '2rem', color: 'var(--accent-neon)', background: 'rgba(0, 240, 255, 0.1)', padding: '1.5rem', borderRadius: '50%', minWidth: '100px', textAlign: 'center' }}><FaRobot /></div>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>2. Check Patterns</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>We compare the listing against a massive database of <strong>18,000+</strong> real and fake job posts. The AI looks for subtle "scam fingerprints"—weird grammar, specific phrasing, and structural anomalies that humans often miss.</p>
                        </div>
                    </li>
                    <li style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '2rem', color: 'var(--accent-neon)', background: 'rgba(0, 240, 255, 0.1)', padding: '1.5rem', borderRadius: '50%', minWidth: '100px', textAlign: 'center' }}><FaShieldAlt /></div>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>3. Final Verdict</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>Based on this deep analysis, we give you a clear <strong>Safe</strong> or <strong>Not Safe</strong> result, along with a confidence score so you can make an informed decision.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <Link to="/accuracy" className="btn-primary" style={{ display: 'inline-flex' }}>
                    See Our Accuracy Stats
                </Link>
            </div>
        </div>
    );
}
