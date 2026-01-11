import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaRobot, FaHeadset } from 'react-icons/fa';

export default function Chatbot({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your FakeJob Shield assistant. How can I help you regarding our service?", sender: 'bot' }
    ]);
    const [menuStep, setMenuStep] = useState('main'); // 'main', 'howItWorks', 'safety'
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Reset state when closed or opened fresh
    useEffect(() => {
        if (isOpen) {
            setMessages([{ id: 1, text: "Hello! I'm your FakeJob Shield assistant. How can I help you regarding our service?", sender: 'bot' }]);
            setMenuStep('main');
        }
    }, [isOpen]);

    const handleOptionClick = (option) => {
        // Add user selection as a message
        const userMsg = { id: Date.now(), text: option.label, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        if (option.action === 'contact') {
            // Contact Support Logic
            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now(), text: "Redirecting you to email support...", sender: 'bot' }]);

                // Open Email Client immediately
                const subject = encodeURIComponent("Support Request: Fake Job Project");
                window.location.href = `mailto:patilritesh998@gmail.com?subject=${subject}`;
            }, 500);
        } else if (option.nextMenu) {
            // Navigation to sub-menu
            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now(), text: option.answer || "Here are some details. What specific aspect are you curious about?", sender: 'bot' }]);
                setMenuStep(option.nextMenu);
            }, 600);
        } else if (option.action === 'back') {
            // Navigation Back
            setTimeout(() => {
                if (option.targetMenu) setMenuStep(option.targetMenu);
            }, 300);
        } else {
            // Standard Preset Q&A Logic
            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now(), text: option.answer, sender: 'bot' }]);
            }, 600);
        }
    };

    // Menu Definitions
    const menus = {
        main: [
            { label: "How does this work?", answer: "We use advanced AI to scan job descriptions for patterns used by scammers.", nextMenu: 'howItWorks' },
            { label: "Is it safe / accurate?", answer: "Your safety is our priority. We use strict privacy protocols and validated machine learning models.", nextMenu: 'safety' },
            { label: "Is this free?", answer: "Yes, this tool is 100% free for students and job seekers." },
            { label: "Contact Support Team", action: 'contact' }
        ],
        howItWorks: [
            { label: "What technology is used?", answer: "We utilize a Deep Neural Network (DNN) trained on thousands of confirmed scam listings to analyze text patterns." },
            { label: "Is it hard to use?", answer: "Not at all! Simply paste the job description into the analyzer, and we'll give you instant feedback." },
            { label: "« Back to Start", action: 'back', targetMenu: 'main' }
        ],
        safety: [
            { label: "Is the result accurate?", answer: "Our system utilizes an advanced machine learning model trained on thousands of verified scam datasets to provide highly reliable predictions. However, we always recommend using your own judgment as a final check." },
            { label: "Read Privacy Policy", answer: "We prioritize your privacy. No personal data is sold or shared. (This is a demo, so no real policy link yet!)" },
            { label: "« Back to Start", action: 'back', targetMenu: 'main' }
        ]
    };

    const currentOptions = menus[menuStep] || menus['main'];

    if (!isOpen) return null;

    return (
        <div className="chatbot-container">
            {/* Header */}
            <div className="chat-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaHeadset />
                    <span>Support Assistant</span>
                </div>
                <button onClick={onClose} className="chat-close-btn">
                    <FaTimes />
                </button>
            </div>

            {/* Body */}
            <div className="chat-body">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                        {msg.sender === 'bot' && <div className="bot-avatar"><FaRobot /></div>}
                        <div className="chat-content">
                            <div className="chat-bubble">
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}

                <div ref={messagesEndRef} />
            </div>

            {/* Footer - Dynamic Options Menu */}
            <div className="options-container">
                {currentOptions.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleOptionClick(opt)}
                        className={`chat-option-btn ${opt.action === 'contact' ? 'contact-support-btn' : ''} ${opt.action === 'back' ? 'back-btn' : ''}`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
