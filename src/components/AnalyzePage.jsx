// // src/components/AnalyzePage.jsx
// import { useState } from "react";

// const API_URL = "http://localhost:8080/api/predict"; // Spring Boot backend

// export default function AnalyzePage() {
//   const [form, setForm] = useState({
//     title: "",
//     company: "",
//     location: "",
//     url: "",
//     salary: "",
//     employmentType: "Full-time",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");

//   // ----------------- helpers -----------------
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClear = () => {
//     setForm({
//       title: "",
//       company: "",
//       location: "",
//       url: "",
//       salary: "",
//       employmentType: "Full-time",
//       description: "",
//     });
//     setResult(null);
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     // Payload sent to Spring Boot backend
//     const payload = {
//       title: form.title,
//       company: form.company,
//       location: form.location,
//       url: form.url,
//       salary: form.salary,
//       employmentType: form.employmentType, // Spring will forward / transform as needed
//       description: form.description,
//     };

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         let message = `Server error (${res.status})`;
//         try {
//           const errData = await res.json();
//           if (errData && errData.detail) message = errData.detail;
//         } catch {
//           // ignore JSON parse errors
//         }
//         throw new Error(message);
//       }

//       const data = await res.json();
//       console.log("API response from backend /api/predict:", data);
//       setResult(data);
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "Something went wrong while analyzing the job");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLabelBadgeClass = (label) => {
//     if (label === "fake") return "badge badge-fake";
//     if (label === "real") return "badge badge-real";
//     return "badge badge-neutral";
//   };

//   const getLabelText = (label) => {
//     if (label === "fake") return "Fake / Risky";
//     if (label === "real") return "Likely Real";
//     return "Unknown";
//   };

//   const formatConfidence = (conf) => {
//     if (conf == null) return "-";
//     const pct = Math.round(conf * 100);
//     return `${pct}%`;
//   };

//   const confidencePercent =
//     result?.confidence != null
//       ? Math.round(result.confidence * 100)
//       : null;

//   // ----------------- UI -----------------
//   return (
//     <div className="page analyze-page">
//       {/* Header */}
//       <section className="section analyze-header">
//         <h1>Analyze a Job Listing</h1>
//         <p>
//           Fill in the job details below and click <strong>Analyze</strong>. We’ll
//           run it through our AI model and rule engine to highlight possible scams.
//         </p>
//       </section>

//       <div className="analyze-layout">
//         {/* Left: Form */}
//         <section className="analyze-form-card">
//           <form onSubmit={handleSubmit} className="job-form">
//             <div className="form-row">
//               <label htmlFor="title">Job Title</label>
//               <input
//                 id="title"
//                 type="text"
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 placeholder="e.g. Work From Home Data Entry"
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <label htmlFor="company">Company</label>
//               <input
//                 id="company"
//                 type="text"
//                 name="company"
//                 value={form.company}
//                 onChange={handleChange}
//                 placeholder="e.g. Global Support Services"
//               />
//             </div>

//             <div className="form-row">
//               <label htmlFor="location">Location</label>
//               <input
//                 id="location"
//                 type="text"
//                 name="location"
//                 value={form.location}
//                 onChange={handleChange}
//                 placeholder="e.g. Remote / Work From Home (India)"
//               />
//             </div>

//             <div className="form-row">
//               <label htmlFor="url">Job URL</label>
//               <input
//                 id="url"
//                 type="url"
//                 name="url"
//                 value={form.url}
//                 onChange={handleChange}
//                 placeholder="Paste the job link if available"
//               />
//             </div>

//             <div className="form-grid-2">
//               <div className="form-row">
//                 <label htmlFor="salary">Salary (optional)</label>
//                 <input
//                   id="salary"
//                   type="text"
//                   name="salary"
//                   value={form.salary}
//                   onChange={handleChange}
//                   placeholder="e.g. ₹20,000 – ₹40,000 / month"
//                 />
//               </div>

//               <div className="form-row">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <select
//                   id="employmentType"
//                   name="employmentType"
//                   value={form.employmentType}
//                   onChange={handleChange}
//                 >
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Internship">Internship</option>
//                   <option value="Contract">Contract</option>
//                   <option value="Temporary">Temporary</option>
//                   <option value="Freelance">Freelance</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-row">
//               <label htmlFor="description">Job Description</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 placeholder="Copy the full job description here…"
//                 rows={8}
//                 required
//               />
//             </div>

//             {error && <p className="error-text">⚠️ {error}</p>}

//             <div className="form-actions">
//               <button type="submit" className="btn-primary" disabled={loading}>
//                 {loading ? "Analyzing..." : "Analyze"}
//               </button>
//               <button
//                 type="button"
//                 className="btn-secondary"
//                 onClick={handleClear}
//                 disabled={loading}
//               >
//                 Clear
//               </button>
//             </div>
//           </form>
//         </section>

//         {/* Right: Result */}
//         <section className="analyze-result-card">
//           <h2>Analysis Result</h2>

//           {!result && !loading && !error && (
//             <p className="placeholder-text">
//               Submit a job listing to see the analysis here.
//             </p>
//           )}

//           {loading && (
//             <p className="placeholder-text">Analyzing job listing…</p>
//           )}

//           {result && (
//             <>
//               {/* Top summary */}
//               <div className="result-header">
//                 <span className={getLabelBadgeClass(result.label)}>
//                   {getLabelText(result.label)}
//                 </span>
//                 <span className="confidence-text">
//                   Confidence: {formatConfidence(result.confidence)}
//                 </span>
//               </div>

//               {/* Confidence bar */}
//               <div className="confidence-bar-wrapper">
//                 <div className="confidence-bar-bg">
//                   <div
//                     className={
//                       result.label === "fake"
//                         ? "confidence-bar-fill fake"
//                         : "confidence-bar-fill real"
//                     }
//                     style={{
//                       width: `${Math.min(
//                         100,
//                         Math.max(0, confidencePercent ?? 0)
//                       )}%`,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Explanation */}
//               <div className="result-section">
//                 <h4>Explanation</h4>
//                 <p>{result.explanation || "Model inference result."}</p>
//               </div>

//               {/* Rules */}
//               <div className="result-section">
//                 <h4>Rules Triggered</h4>
//                 {result.rules && result.rules.length > 0 ? (
//                   <div className="rules-chips">
//                     {result.rules.map((ruleId) => (
//                       <span key={ruleId} className="rule-chip">
//                         {ruleId}
//                       </span>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="muted-text">
//                     No specific red-flag rules triggered.
//                   </p>
//                 )}
//               </div>

//               {/* Raw JSON */}
//               <details className="result-section">
//                 <summary>Raw response</summary>
//                 <pre className="raw-json">
//                   {JSON.stringify(result, null, 2)}
//                 </pre>
//               </details>
//             </>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }



// src/components/AnalyzePage.jsx
import { useState } from "react";
import "./Analyzepage.css"; // make sure this import exists

const API_URL = "http://localhost:8080/api/predict";

export default function AnalyzePage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    url: "",
    salary: "",
    employmentType: "Full-time",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setForm({
      title: "",
      company: "",
      location: "",
      url: "",
      salary: "",
      employmentType: "Full-time",
      description: "",
    });
    setResult(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    const payload = {
      title: form.title,
      company: form.company,
      location: form.location,
      url: form.url,
      salary: form.salary,
      employment_type: form.employmentType,
      description: form.description,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server error (${res.status}) while analyzing job`);
      }

      const data = await res.json();
      console.log("API response:", data);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong while analyzing the job");
    } finally {
      setLoading(false);
    }
  };

  const getLabelText = (label) => {
    if (label === "fake") return "Fake / Risky";
    if (label === "real") return "Likely Real";
    return "Unknown";
  };

  const getLabelClass = (label) => {
    if (label === "fake") return "badge badge-fake";
    if (label === "real") return "badge badge-real";
    return "badge badge-neutral";
  };

  const confidencePercent =
    result?.confidence != null
      ? Math.round(result.confidence * 100)
      : null;

  return (
    <div className="analyze-page">
      <header className="analyze-header">
        <div className="analyze-header-inner">
          <h1>Analyze a Job Listing</h1>
          <p>
            Fill in the job details and click <strong>Analyze</strong>. Our AI
            model and rule engine will flag potential scams and highlight risks.
          </p>
        </div>
      </header>

      <main className="analyze-main">
        {/* Left: Form card */}
        <section className="card card-form">
          <h2 className="card-title">Job Details</h2>
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="title">Job Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g. Software Engineer – Backend"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="e.g. Google"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g. Bangalore, India (Hybrid)"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="url">Job URL</label>
                <input
                  id="url"
                  name="url"
                  type="url"
                  placeholder="Paste the job link if available"
                  value={form.url}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="salary">Salary (optional)</label>
                <input
                  id="salary"
                  name="salary"
                  type="text"
                  placeholder="e.g. ₹18–30 LPA"
                  value={form.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="employmentType">Employment Type</label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={form.employmentType}
                  onChange={handleChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="description">Job Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Paste the full job description here…"
                rows={7}
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="form-error">⚠️ {error}</p>}

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Analyzing…" : "Analyze"}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClear}
                disabled={loading}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* Right: Result card */}
        <section className="card card-result">
          <h2 className="card-title">Analysis Result</h2>

          {!result && !loading && !error && (
            <p className="placeholder">
              The analysis will appear here after you submit a job.
            </p>
          )}

          {loading && (
            <p className="placeholder">Analyzing job listing, please wait…</p>
          )}

          {error && !loading && (
            <p className="form-error">{error}</p>
          )}

          {result && (
            <div className="analysis">
              <div className="analysis-top">
                <span className={getLabelClass(result.label)}>
                  {getLabelText(result.label)}
                </span>
                {confidencePercent !== null && (
                  <span className="analysis-confidence">
                    Confidence: <strong>{confidencePercent}%</strong>
                  </span>
                )}
              </div>

              <div className="confidence-bar">
                <div className="confidence-bar-bg">
                  <div
                    className={
                      result.label === "fake"
                        ? "confidence-bar-fill fake"
                        : "confidence-bar-fill real"
                    }
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, confidencePercent ?? 0)
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="analysis-section">
                <h3>Explanation</h3>
                <p>{result.explanation || "Model inference result."}</p>
              </div>

              <div className="analysis-section">
                <h3>Rules Triggered</h3>
                {result.rules && result.rules.length > 0 ? (
                  <div className="rules-chips">
                    {result.rules.map((ruleId) => (
                      <span key={ruleId} className="rule-chip">
                        {ruleId}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="muted">No specific rules were triggered.</p>
                )}
              </div>

              <details className="analysis-section raw-section">
                <summary>Raw response</summary>
                <pre className="raw-json">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </details>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

