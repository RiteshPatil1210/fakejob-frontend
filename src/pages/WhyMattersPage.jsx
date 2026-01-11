import React from 'react';
import { FaUserSecret, FaMoneyBillAlt, FaFingerprint, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WarningImage from '../assets/why-matters.png';

export default function WhyMattersPage() {
    return (
        <div className="analysis-container" style={{ maxWidth: '1000px' }}>
            <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', marginBottom: '2rem', border: 'none', paddingLeft: 0 }}>
                <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Hidden Cost of <span className="gradient-text">Fake Jobs</span></h1>
                <p className="hero-subtitle">
                    It's not just about wasted time. Fake job listings are a gateway to identity theft, financial fraud, and exploitation. Understanding the risks is your first line of defense.
                </p>
            </header>

            <section className="features-grid" style={{ marginBottom: '4rem' }}>
                <InfoCard
                    icon={<FaMoneyBillAlt className="text-red-500" style={{ color: 'var(--danger-red)' }} />}
                    title="Financial Loss"
                    desc="Scammers often ask for 'training fees', 'equipment deposits', or 'visa processing charges'. Once paid, they vanish."
                />
                <InfoCard
                    icon={<FaFingerprint style={{ color: 'var(--accent-neon)' }} />}
                    title="Identity Theft"
                    desc="Resumes contain sensitive data. Malicious actors harvest this info to open bank accounts or apply for loans in your name."
                />
                <InfoCard
                    icon={<FaUserSecret style={{ color: 'var(--accent-blue)' }} />}
                    title="Data Harvesting"
                    desc="Some 'recruiters' are actually building databases of active contacts to sell to spammers and other scam networks."
                />
            </section>

            <div className="input-card" style={{ maxWidth: '100%', padding: '0', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
                    <div style={{ padding: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaShieldAlt style={{ color: 'var(--safe-green)' }} />
                            How We Protect You
                        </h2>


                        <div style={{ display: 'grid', mdGridTemplateColumns: '1fr 1fr', gap: '2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI Pattern Recognition</h3>
                                <p>Our trained models analyze thousands of listings to spot subtle linguistic cues that humans might miss—like urgency, vague descriptions, and inconsistent formatting.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Rule-Based Filtering</h3>
                                <p>We cross-reference known blacklisted domains, suspicious keyword combinations (e.g., 'WhatsApp only', 'No interview needed'), and salary anomalies.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Education First</h3>
                                <p>Every analysis provides a detailed explanation. We don't just say "Fake" or "Safe"—we tell you *why*, training you to spot scams yourself.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', background: 'rgba(0,0,0,0.2)' }}>
                        <img
                            src={WarningImage}
                            alt="Warning Sign"
                            style={{ maxWidth: '300px', width: '100%', filter: 'drop-shadow(0 0 15px rgba(255, 59, 48, 0.3))' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoCard({ icon, title, desc }) {
    return (
        <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{desc}</p>
        </div>
    );
}
