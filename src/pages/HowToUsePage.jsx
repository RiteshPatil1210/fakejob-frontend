import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBriefcase, FaPaste, FaSearchDollar } from 'react-icons/fa';

export default function HowToUsePage() {
    return (
        <div className="analysis-container">
            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', marginBottom: '2rem', border: 'none', paddingLeft: 0 }}>
                <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>How to Use <span className="gradient-text">FakeJob Shield</span></h1>
                <p className="hero-subtitle">
                    Verifying a job listing is simple. Follow these three steps to instantly assess the safety of your next career move.
                </p>
            </header>

            <section className="features-grid" style={{ marginBottom: '4rem' }}>
                <div className="feature-card">
                    <div className="feature-icon"><FaBriefcase /></div>
                    <h3>1. Enter Job Details</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Start by filling in the <strong>Job Title</strong>, <strong>Company Name</strong>, and <strong>Location</strong>. This helps our system contextually analyze the role.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><FaPaste /></div>
                    <h3>2. Paste Description</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Copy the full job description from the listing and paste it into the analysis box. This is where our AI detects hidden linguistic red flags.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><FaSearchDollar /></div>
                    <h3>3. Get Instant Analysis</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Click <strong>"Check"</strong> to let our Deep Neural Network scan the listing. You'll get a clear <strong>Safe</strong> or <strong>Suspicious</strong> result with a confidence score.</p>
                </div>
            </section>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link to="/analyze" className="btn-primary" style={{ display: 'inline-flex' }}>
                    Start Analyzing Now
                </Link>
            </div>
        </div>
    );
}
