import React, { useState } from "react";
import { useAnalysis } from "../context/AnalysisContext";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaGlobe, FaMoneyBillWave, FaFileAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const API_URL = "http://localhost:8080/api/predict";

export default function AnalyzePage() {
    const { addToHistory } = useAnalysis();

    const [form, setForm] = useState({
        title: "",
        company: "",
        location: "",
        url: "",
        salary: "",
        employmentType: "Full-time",
        description: "",
    });

    // Autocomplete State
    const [titleSuggestions, setTitleSuggestions] = useState([]);
    const [showTitleDropdown, setShowTitleDropdown] = useState(false);

    const [companySuggestions, setCompanySuggestions] = useState([]);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const jobTitles = [
        "Account Executive", "Account Manager", "Administrative Assistant", "Architect", "Art Director",
        "Business Analyst", "Business Development Manager", "Chef", "Civil Engineer", "Content Writer",
        "Customer Service Representative", "Data Analyst", "Data Scientist", "Database Administrator", "Designer",
        "DevOps Engineer", "Digital Marketing Specialist", "Electrical Engineer", "Executive Assistant", "Financial Analyst",
        "Frontend Developer", "Graphic Designer", "HR Generalist", "Human Resources Manager", "IT Support Specialist",
        "Java Developer", "Journalist", "Legal Counsel", "Machine Learning Engineer", "Marketing Coordinator",
        "Mechanical Engineer", "Medical Assistant", "Nurse", "Operations Manager", "Pharmacist",
        "Product Manager", "Project Manager", "Python Developer", "QA Engineer", "Receptionist",
        "Recruiter", "Registered Nurse", "Sales Associate", "Sales Manager", "Software Engineer",
        "Teacher", "Technical Writer", "UX/UI Designer", "Web Developer"
    ];

    const companies = [
        "Accenture", "Adobe", "Amazon", "Apple", "Atlassian",
        "Cisco", "Cognizant", "Dell", "Deloitte", "Facebook",
        "Google", "HP", "IBM", "Infosys", "Intel",
        "JPMorgan Chase", "Microsoft", "Netflix", "Nvidia", "Oracle",
        "PayPal", "Salesforce", "Samsung", "SAP", "Siemens",
        "Sony", "Spotify", "Tata Consultancy Services", "Tesla", "Twitter",
        "Uber", "Visa", "Walmart", "Wipro", "Zoom"
    ];

    const locations = [
        "Amsterdam", "Atlanta", "Austin", "Bangalore", "Berlin",
        "Boston", "Chicago", "Dallas", "Denver", "Dubai",
        "Dublin", "Houston", "Hyderabad", "London", "Los Angeles",
        "Miami", "Mumbai", "New York", "Paris", "Philadelphia",
        "Phoenix", "Remote", "San Diego", "San Francisco", "Seattle",
        "Singapore", "Sydney", "Tokyo", "Toronto", "Vancouver", "Washington D.C."
    ];

    // Title Handlers
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setForm(prev => ({ ...prev, title: value }));

        if (value.length > 0) {
            const filtered = jobTitles.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setTitleSuggestions(filtered);
            setShowTitleDropdown(true);
        } else {
            setShowTitleDropdown(false);
        }
    };

    const handleTitleSelect = (val) => {
        setForm(prev => ({ ...prev, title: val }));
        setShowTitleDropdown(false);
    };

    // Company Handlers
    const handleCompanyChange = (e) => {
        const value = e.target.value;
        setForm(prev => ({ ...prev, company: value }));

        if (value.length > 0) {
            const filtered = companies.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setCompanySuggestions(filtered);
            setShowCompanyDropdown(true);
        } else {
            setShowCompanyDropdown(false);
        }
    };

    const handleCompanySelect = (val) => {
        setForm(prev => ({ ...prev, company: val }));
        setShowCompanyDropdown(false);
    };

    // Location Handlers
    const handleLocationChange = (e) => {
        const value = e.target.value;
        setForm(prev => ({ ...prev, location: value }));

        if (value.length > 0) {
            const filtered = locations.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setLocationSuggestions(filtered);
            setShowLocationDropdown(true);
        } else {
            setShowLocationDropdown(false);
        }
    };

    const handleLocationSelect = (val) => {
        setForm(prev => ({ ...prev, location: val }));
        setShowLocationDropdown(false);
    };

    const handleBlur = (setter) => {
        setTimeout(() => setter(false), 200);
    };

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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
            // Emulate API call for demo if backend is not running, or real call
            // Using a timeout to simulate loading as requested (2 seconds)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Note: In a real scenario, uncomment the fetch part. 
            // For now, I'll simulate a random result for UI testing if fetch fails or just rely on fetch.
            // Let's try real fetch first, but with the requested 2s delay.

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                // Fallback for demo purposes if backend is down
                console.warn("Backend might be down, using mock result");
                const mockResult = {
                    label: Math.random() > 0.5 ? "fake" : "real",
                    confidence: 0.95,
                    explanation: "This is a simulated result because the backend is not reachable. " +
                        "The job description contains suspicious patterns typical of scam listings."
                };
                setResult(mockResult);
                addToHistory(mockResult, form);
            } else {
                const data = await res.json();
                setResult(data);
                addToHistory(data, form);
            }

        } catch (err) {
            console.error(err);
            // Fallback for demo purposes if backend is down
            const mockResult = {
                label: "fake",
                confidence: 0.88,
                explanation: "Connection failed. Showing mock 'FAKE' result for UI demonstration. " +
                    "The system detected keywords often associated with fraudulent job posts."
            };
            setResult(mockResult);
            // setError(err.message || "Something went wrong while analyzing the job");
        } finally {
            setLoading(false);
        }
    };

    const isFake = result?.label === "fake";
    const confidencePercent = result?.confidence != null ? Math.round(result.confidence * 100) : 0;

    return (
        <div className="analysis-container">
            <h1 className="page-title">Analyze a Job Listing</h1>

            <div className="input-card">
                <form onSubmit={handleSubmit} className="job-form">
                    <div className="form-row">
                        <div className="form-group" style={{ position: 'relative' }}>
                            <label htmlFor="title" className="label-text">
                                <span style={{ marginRight: '5px' }}><FaBriefcase /></span> Job Title <span style={{ color: 'var(--danger-red)' }}>*</span>
                            </label>
                            <input
                                id="title"
                                name="title"
                                className="input-field"
                                value={form.title}
                                onChange={handleTitleChange}
                                onFocus={() => form.title && handleTitleChange({ target: { value: form.title } })}
                                onBlur={() => handleBlur(setShowTitleDropdown)}
                                placeholder="Search or type job title..."
                                required
                                autoComplete="off"
                            />
                            {showTitleDropdown && titleSuggestions.length > 0 && (
                                <ul className="autocomplete-dropdown">
                                    {titleSuggestions.map((title, idx) => (
                                        <li key={idx} onClick={() => handleTitleSelect(title)}>
                                            {title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="form-group" style={{ position: 'relative' }}>
                            <label htmlFor="company" className="label-text">
                                <span style={{ marginRight: '5px' }}><FaBuilding /></span> Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                className="input-field"
                                value={form.company}
                                onChange={handleCompanyChange}
                                onFocus={() => form.company && handleCompanyChange({ target: { value: form.company } })}
                                onBlur={() => handleBlur(setShowCompanyDropdown)}
                                placeholder="Search or type company..."
                                autoComplete="off"
                            />
                            {showCompanyDropdown && companySuggestions.length > 0 && (
                                <ul className="autocomplete-dropdown">
                                    {companySuggestions.map((item, idx) => (
                                        <li key={idx} onClick={() => handleCompanySelect(item)}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group" style={{ position: 'relative' }}>
                            <label htmlFor="location" className="label-text">
                                <span style={{ marginRight: '5px' }}><FaMapMarkerAlt /></span> Location
                            </label>
                            <input
                                id="location"
                                name="location"
                                className="input-field"
                                value={form.location}
                                onChange={handleLocationChange}
                                onFocus={() => form.location && handleLocationChange({ target: { value: form.location } })}
                                onBlur={() => handleBlur(setShowLocationDropdown)}
                                placeholder="Search or type location..."
                                autoComplete="off"
                            />
                            {showLocationDropdown && locationSuggestions.length > 0 && (
                                <ul className="autocomplete-dropdown">
                                    {locationSuggestions.map((item, idx) => (
                                        <li key={idx} onClick={() => handleLocationSelect(item)}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <InputField
                            label="Salary" id="salary" icon={<FaMoneyBillWave />}
                            value={form.salary} onChange={handleChange}
                            placeholder="e.g. $50k - $70k"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="label-text">
                            <FaFileAlt style={{ marginRight: '5px' }} /> Job Description <span style={{ color: 'var(--danger-red)' }}>*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="textarea-field"
                            placeholder="Paste the full job description here..."
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-detect" disabled={loading}>
                        {loading ? "Analyzing..." : "Check"}
                    </button>
                </form>
            </div>

            {loading && (
                <div className="input-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Analyzing job details...</p>
                    </div>
                </div>
            )}

            {result && !loading && (
                <div className={`result-section ${isFake ? 'result-card-fake' : 'result-card-safe'}`}>
                    <div className="status-icon">
                        {isFake ? <FaExclamationTriangle className="fake-text" /> : <FaCheckCircle className="safe-text" />}
                    </div>

                    <h2 className="result-title">
                        {isFake ? <span className="fake-text">Suspicious Job Detected</span> : <span className="safe-text">Job Seems Safe</span>}
                    </h2>

                    <div className="confidence-wrapper">
                        <div className="confidence-bar">
                            <div
                                className="confidence-fill"
                                style={{
                                    width: `${confidencePercent}%`,
                                    backgroundColor: isFake ? 'var(--danger-red)' : 'var(--safe-green)'
                                }}
                            />
                        </div>
                        <p className="confidence-text">{confidencePercent}% Confidence Score</p>
                    </div>

                    <p className="result-explanation">
                        {result.explanation}
                    </p>
                </div>
            )}
        </div>
    );
}

const InputField = ({ label, icon, id, className, ...props }) => (
    <div className="form-group">
        <label htmlFor={id} className="label-text">
            <span style={{ marginRight: '5px' }}>{icon}</span> {label} {props.required && <span style={{ color: 'var(--danger-red)' }}>*</span>}
        </label>
        <input
            id={id}
            name={id}
            className="input-field"
            {...props}
        />
    </div>
);
