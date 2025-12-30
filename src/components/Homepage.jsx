// src/components/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page home-page">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Detect Fake Job Listings Before It’s Too Late.</h1>
          <p>
            FakeJob Shield analyzes job descriptions using AI + rule-based
            checks to help students and job seekers stay safe from scams,
            upfront fees, and too-good-to-be-true offers.
          </p>

          <div className="hero-actions">
            <Link to="/analyze" className="btn-primary">
              Analyze a Job Now
            </Link>
            <a
              href="#why-important"
              className="btn-secondary"
            >
              Why this matters
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>🔍 Dual Engine</strong>
              <span>AI model + rule engine</span>
            </div>
            <div>
              <strong>🧠 Transparent</strong>
              <span>Shows why a job is fake</span>
            </div>
            <div>
              <strong>🎓 Built for you</strong>
              <span>Students & early job seekers</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          {/* You can change these URLs to your own images */}
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="People analyzing data on laptops"
          />
          <div className="hero-image-overlay-card">
            <p className="overlay-title">Real-time Scam Analysis</p>
            <p className="overlay-subtitle">
              Highlight risky patterns like fees, WhatsApp-only contact, and
              daily payout promises.
            </p>
          </div>
        </div>
      </section>

      {/* Why important section */}
      <section id="why-important" className="section">
        <h2>Why is this important?</h2>
        <p className="section-intro">
          Fake job posts steal time, money, and confidence. Many students end up
          paying “registration fees” or sharing sensitive info before realizing
          it’s a scam. Our system helps you pause, analyze, and decide.
        </p>

        <div className="cards-grid">
          <div className="info-card">
            <h3>🚫 Spot Red Flags</h3>
            <p>
              We catch common scam signals like upfront payments, Gmail-only HR,
              WhatsApp-only communication, no interview, and daily payout offers.
            </p>
          </div>
          <div className="info-card">
            <h3>🤝 Build Trust</h3>
            <p>
              When a job is genuine, we show it clearly with a green label and
              high confidence, so you can apply with more confidence.
            </p>
          </div>
          <div className="info-card">
            <h3>📊 Transparent Decisions</h3>
            <p>
              Every analysis comes with an explanation—what the model thought
              and which rules were triggered, if any.
            </p>
          </div>
        </div>
      </section>

      {/* Small “How it works” section */}
      <section className="section">
        <h2>How it works</h2>
        <div className="how-grid">
          <div className="how-step">
            <span className="how-number">1</span>
            <h4>Paste job details</h4>
            <p>
              Fill in the job title, company, and description from any portal or
              WhatsApp forward.
            </p>
          </div>
          <div className="how-step">
            <span className="how-number">2</span>
            <h4>AI + Rules analyze it</h4>
            <p>
              Our model scores the job and our rules check for classic scam
              patterns.
            </p>
          </div>
          <div className="how-step">
            <span className="how-number">3</span>
            <h4>See clear result</h4>
            <p>
              Get a colored label (Fake / Real), confidence score, and a clear
              explanation you can understand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// // src/components/HomePage.jsx
// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <div className="page home-page">
//       {/* Hero section */}
//       <section className="hero">
//         <div className="hero-inner">
//           <div className="hero-text">
//             <p className="eyebrow">Protect yourself from fake job offers</p>
//             <h1>Detect Fake Job Listings Before It’s Too Late.</h1>
//             <p className="hero-subtitle">
//               FakeJob Shield analyzes job descriptions using AI + rule-based
//               checks to help students and job seekers stay safe from scams,
//               upfront fees, and too-good-to-be-true offers.
//             </p>

//             <div className="hero-actions">
//               <Link to="/AnalyzePage" className="btn-primary">
//                 Analyze a Job Now
//               </Link>
//               <a href="#why-important" className="btn-secondary">
//                 Why this matters
//               </a>
//             </div>

//             <div className="hero-highlights">
//               <div className="highlight-card">
//                 <strong>🔍 Dual Engine</strong>
//                 <span>AI model + rule engine</span>
//               </div>
//               <div className="highlight-card">
//                 <strong>🧠 Transparent</strong>
//                 <span>Shows why a job is fake</span>
//               </div>
//               <div className="highlight-card">
//                 <strong>🎓 Built for you</strong>
//                 <span>Students & early job seekers</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-image">
//             <img
//               src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="People analyzing data on laptops"
//             />
//             <div className="hero-image-overlay-card">
//               <p className="overlay-title">Real-time Scam Analysis</p>
//               <p className="overlay-subtitle">
//                 Highlight risky patterns like fees, WhatsApp-only contact, and
//                 daily payout promises.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why important section */}
//       <section id="why-important" className="section">
//         <div className="section-inner">
//           <h2>Why is this important?</h2>
//           <p className="section-intro">
//             Fake job posts steal time, money, and confidence. Many students end up
//             paying “registration fees” or sharing sensitive info before realizing
//             it’s a scam. Our system helps you pause, analyze, and decide.
//           </p>

//           <div className="cards-grid">
//             <div className="info-card">
//               <h3>🚫 Spot Red Flags</h3>
//               <p>
//                 We catch common scam signals like upfront payments, Gmail-only HR,
//                 WhatsApp-only communication, no interview, and daily payout offers.
//               </p>
//             </div>
//             <div className="info-card">
//               <h3>🤝 Build Trust</h3>
//               <p>
//                 When a job is genuine, we show it clearly with a green label and
//                 high confidence, so you can apply with more confidence.
//               </p>
//             </div>
//             <div className="info-card">
//               <h3>📊 Transparent Decisions</h3>
//               <p>
//                 Every analysis comes with an explanation—what the model thought
//                 and which rules were triggered, if any.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How it works section */}
//       <section className="section section-alt">
//         <div className="section-inner">
//           <h2>How it works</h2>
//           <div className="how-grid">
//             <div className="how-step">
//               <span className="how-number">1</span>
//               <h4>Paste job details</h4>
//               <p>
//                 Fill in the job title, company, and description from any portal or
//                 WhatsApp forward.
//               </p>
//             </div>
//             <div className="how-step">
//               <span className="how-number">2</span>
//               <h4>AI + Rules analyze it</h4>
//               <p>
//                 Our model scores the job and our rules check for classic scam
//                 patterns.
//               </p>
//             </div>
//             <div className="how-step">
//               <span className="how-number">3</span>
//               <h4>See clear result</h4>
//               <p>
//                 Get a colored label (Fake / Real), confidence score, and a clear
//                 explanation you can understand.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

