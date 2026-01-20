import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export default function KeyResults() {
    return (
        <Section id="results" className="bg-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-900 text-center">Key Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                    { title: "Variance Trends leading to Seizure", subtitle: "Significant increase in localized variance 15m pre-onset" },
                    { title: "Autocorrelation Increase", subtitle: "Lag-1 autocorrelation approaches 1.0 (Critical Slowing Down)" },
                    { title: "Feature Importance", subtitle: "Dynamical features outperform spectral power in early detection" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-[4/3] bg-slate-100 p-6 flex flex-col justify-end relative">
                            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                            {/* Abstract Chart Placeholder */}
                            <div className="flex items-end gap-1 h-32 w-full opacity-60 mix-blend-multiply">
                                {Array.from({ length: 20 }).map((_, j) => {
                                    const h = 20 + Math.random() * (j * 4);
                                    return (
                                        <div key={j} className="flex-1 bg-blue-500 rounded-t-sm transition-all duration-500 group-hover:bg-blue-600" style={{ height: `${h}%` }}></div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center p-6 bg-blue-50/50 rounded-xl border border-blue-100 max-w-2xl mx-auto">
                <p className="text-lg text-slate-700 italic font-medium">
                    "Early-warning indicators increase significantly prior to seizure onset observed across 85% of subjects."
                </p>
            </div>
        </Section>
    )
}
