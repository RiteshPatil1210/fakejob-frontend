import { createContext, useContext, useState, useEffect } from 'react';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
    const [history, setHistory] = useState(() => {
        try {
            const stored = localStorage.getItem('analysis_history');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('analysis_history', JSON.stringify(history));
    }, [history]);

    const addToHistory = (result, formData) => {
        const newItem = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            result,
            formData
        };
        setHistory(prev => [newItem, ...prev]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const deleteItem = (id) => {
        setHistory(prev => prev.filter(item => item.id !== id));
    };

    return (
        <AnalysisContext.Provider value={{ history, addToHistory, clearHistory, deleteItem }}>
            {children}
        </AnalysisContext.Provider>
    );
};

export const useAnalysis = () => {
    const context = useContext(AnalysisContext);
    if (!context) {
        throw new Error('useAnalysis must be used within an AnalysisProvider');
    }
    return context;
};
