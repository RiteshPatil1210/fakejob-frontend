import { useState } from 'react';
import { useAnalysis } from '../context/AnalysisContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle, Trash2, ExternalLink, Filter } from 'lucide-react';
import Modal from './Modal';
import clsx from 'clsx';

export default function HistoryList() {
    const { history, deleteItem, clearHistory } = useAnalysis();
    const [filter, setFilter] = useState('all'); // all, fake, real
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredHistory = history.filter(item => {
        if (filter === 'all') return true;
        return item.result.label === filter;
    });

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleDateString(undefined, {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Clock className="text-gray-400" size={20} />
                    Recent Analysis
                </h3>

                {history.length > 0 && (
                    <button
                        onClick={clearHistory}
                        className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 hover:bg-red-50 rounded transition-colors"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                {['all', 'fake', 'real'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                            "px-3 py-1.5 rounded-full text-xs font-semibold capitalize border transition-all whitespace-nowrap",
                            filter === f
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                        )}
                    >
                        {f === 'all' ? 'All scans' : f}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 min-h-[200px] max-h-[600px]">
                <AnimatePresence mode='popLayout'>
                    {filteredHistory.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 text-gray-400 text-sm"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Filter size={20} />
                            </div>
                            <p>{history.length === 0 ? "No history yet." : "No matching results."}</p>
                        </motion.div>
                    ) : (
                        filteredHistory.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={() => setSelectedItem(item)}
                                className="group relative bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-200"
                            >
                                <div className="flex justify-between items-start gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            {item.result.label === 'fake' ? (
                                                <AlertTriangle size={14} className="text-red-500 shrink-0" />
                                            ) : (
                                                <CheckCircle size={14} className="text-green-500 shrink-0" />
                                            )}
                                            <h4 className="font-semibold text-gray-900 truncate text-sm">
                                                {item.formData.title}
                                            </h4>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate mb-2">
                                            {item.formData.company || 'Unknown Company'}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <time className="text-[10px] text-gray-400 font-medium">
                                                {formatDate(item.timestamp)}
                                            </time>
                                            <span className={clsx(
                                                "text-[10px] font-bold px-2 py-0.5 rounded-full",
                                                item.result.label === 'fake'
                                                    ? "bg-red-50 text-red-600"
                                                    : "bg-green-50 text-green-600"
                                            )}>
                                                {Math.round(item.result.confidence * 100)}% Match
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteItem(item.id);
                                        }}
                                        className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>

            {/* Detail Modal */}
            <Modal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title="Analysis Details"
            >
                {selectedItem && (
                    <div className="space-y-6">
                        <div className="flex items-start justify-between bg-gray-50 p-4 rounded-xl">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{selectedItem.formData.title}</h3>
                                <p className="text-gray-600">{selectedItem.formData.company}</p>
                            </div>
                            <div className={clsx(
                                "px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2",
                                selectedItem.result.label === 'fake' ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                            )}>
                                {selectedItem.result.label === 'fake' ? <AlertTriangle size={16} /> : <CheckCircle size={16} />}
                                {selectedItem.result.label === 'fake' ? "Potential Scam" : "Likely Real"}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-gray-500 mb-1">Location</span>
                                <p className="font-medium text-gray-900">{selectedItem.formData.location || '-'}</p>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1">Salary</span>
                                <p className="font-medium text-gray-900">{selectedItem.formData.salary || '-'}</p>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1">Type</span>
                                <p className="font-medium text-gray-900">{selectedItem.formData.employmentType || '-'}</p>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1">Date Scanned</span>
                                <p className="font-medium text-gray-900">{formatDate(selectedItem.timestamp)}</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-bold text-gray-900 uppercase">Analysis Explanation</h4>
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-900 text-sm leading-relaxed">
                                {selectedItem.result.explanation}
                            </div>
                        </div>

                        {selectedItem.result.rules?.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-gray-900 uppercase">Flags Detected</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedItem.result.rules.map(rule => (
                                        <span key={rule} className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                                            {rule}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-4 border-t mt-4 flex justify-between items-center">
                            <span className="text-xs text-gray-400">ID: {selectedItem.id}</span>
                            {selectedItem.formData.url && (
                                <a
                                    href={selectedItem.formData.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                                >
                                    Original Job Post <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
