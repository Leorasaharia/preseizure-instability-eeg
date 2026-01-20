import { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { motion } from 'framer-motion';

const generateData = () => {
    const data = [];
    for (let i = 0; i < 50; i++) {
        data.push({ x: i, y: Math.sin(i * 0.5) + Math.random() * 0.5 });
    }
    return data;
};

export default function Dashboard() {
    const [data, setData] = useState(generateData());
    const [variance, setVariance] = useState(0.2);

    useEffect(() => {
        const interval = setInterval(() => {
            setVariance(v => {
                const time = Date.now() / 3000;
                // Periodic swelling of variance
                return 0.3 + (Math.sin(time) + 1) * 0.3;
            });

            setData(prev => {
                const lastX = prev[prev.length - 1].x;
                // Add noise scaled by current variance
                const newY = Math.sin(lastX * 0.2) + (Math.random() - 0.5) * (variance * 4);
                return [...prev.slice(1), { x: lastX + 1, y: newY }];
            });
        }, 50);
        return () => clearInterval(interval);
    }, [variance]);

    return (
        <Section id="dashboard" className="bg-slate-50 py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Real-time Analysis</h2>
                    <p className="text-slate-500 text-sm">Simulated data stream showing instability detection</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-slate-500">SYSTEM ACTIVE</span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Trace */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Raw EEG Signal (Ch. Fp1-F7)</h3>
                        <div className="text-xs font-mono text-slate-400">256 Hz</div>
                    </div>
                    <div className="h-64 flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <Line
                                    type="monotone"
                                    dataKey="y"
                                    stroke={variance > 0.6 ? "#ef4444" : "#2563eb"}
                                    strokeWidth={2}
                                    dot={false}
                                    isAnimationActive={false}
                                />
                                <YAxis domain={[-3, 3]} hide />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Variance Widget */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xs font-semibold text-slate-500 uppercase">Local Variance</h3>
                            <motion.span
                                animate={{ backgroundColor: variance > 0.6 ? '#fef2f2' : '#f0fdf4', color: variance > 0.6 ? '#b91c1c' : '#15803d' }}
                                className="text-[10px] font-bold px-2 py-0.5 rounded transition-colors"
                            >
                                {variance > 0.6 ? 'WARNING' : 'STABLE'}
                            </motion.span>
                        </div>
                        <div className="text-3xl font-mono font-bold text-slate-900 mb-3">{variance.toFixed(3)}</div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-slate-900"
                                animate={{
                                    width: `${Math.min(variance * 100, 100)}%`,
                                    backgroundColor: variance > 0.6 ? '#dc2626' : '#2563eb'
                                }}
                            />
                        </div>
                    </div>

                    {/* Autocorrelation Widget */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase mb-2">Lag-1 Autocorrelation</h3>
                        <div className="text-3xl font-mono font-bold text-slate-900 mb-3">
                            {Math.min((0.5 + variance * 0.4), 0.99).toFixed(3)}
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-indigo-500"
                                animate={{ width: `${(0.5 + variance * 0.4) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-6 text-[10px] text-slate-400 text-center uppercase tracking-widest font-mono">
                simulated data environment • visualization only
            </p>
        </Section>
    );
}
