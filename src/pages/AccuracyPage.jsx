import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartLine } from 'react-icons/fa';
import AccuracyChart from '../components/AccuracyChart';

export default function AccuracyPage() {
    return (
        <div className="analysis-container">
            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', marginBottom: '2rem', border: 'none', paddingLeft: 0 }}>
                <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Model <span className="gradient-text">Accuracy</span></h1>
                <p className="hero-subtitle">
                    Transparency is key. We benchmark our AI models against standard datasets to ensure reliable detection of fraudulent job listings.
                </p>
            </header>

            <div className="input-card" style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <FaChartLine style={{ fontSize: '2rem', color: 'var(--accent-neon)' }} />
                    <h2 style={{ fontSize: '2rem', margin: 0 }}>Performance Metrics</h2>
                </div>

                <AccuracyChart />

                <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '1rem' }}>
                    <StatBox label="Validation Set" value="18,000+" desc="Real & Fake Listings" />
                    <StatBox label="DNN (Deep Learning)" value="98.55%" desc="Primary Model Used" />

                    <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-neon)', marginBottom: '0.5rem' }}>Why DNN over MLP?</div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            While MLP scored slightly higher (98.88%), we chose <strong>DNN (TensorFlow)</strong> for its superior <strong>production scalability</strong>, robust serialization, and better handling of real-time architectural updates compared to Scikit-Learn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatBox({ label, value, desc }) {
    return (
        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>{value}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{label}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{desc}</div>
        </div>
    );
}
