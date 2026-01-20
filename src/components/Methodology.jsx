import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export default function Methodology() {
    const steps = [
        { title: "Dataset Integration", desc: "CHB-MIT Scalp EEG Database (PhysioNet)" },
        { title: "Signal Preprocessing", desc: "Band-pass filtering (0.5-40Hz) & Artifact Rejection" },
        { title: "Feature Extraction", desc: "Sliding-window analysis of Variance & Lag-1 Autocorrelation" },
        { title: "Statistical Modeling", desc: "Mann-Kendall trend analysis comparing Pre-seizure vs Baseline" }
    ];

    return (
        <Section id="methodology" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Methodology</h2>
                <p className="text-slate-500">A rigorous, reproducible pipeline.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>

                <div className="space-y-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col text-center md:text-left`}
                        >
                            <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600">{step.desc}</p>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white ring-1 ring-slate-200 shadow-sm z-10 shrink-0"></div>
                            <div className="flex-1 hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
