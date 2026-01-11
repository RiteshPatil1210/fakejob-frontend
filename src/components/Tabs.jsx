import { motion } from 'framer-motion';

export const Tabs = ({ tabs, activeTab, onChange, className }) => {
    return (
        <div className={`flex gap-1 p-1 bg-gray-100 rounded-xl w-fit ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active-tab"
                            className="absolute inset-0 bg-white rounded-lg shadow-sm border border-gray-200/50"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {tab.icon}
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
};
