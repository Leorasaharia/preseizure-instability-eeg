import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export default function Motivation() {
    return (
        <Section id="motivation" className="bg-slate-50 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Why Pre-Seizure Detection Matters</h2>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                        Epilepsy affects millions worldwide, yet most current EEG systems only detect seizures
                        <strong className="text-slate-900"> after onset</strong>—when it is often too late for effective intervention.
                    </p>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                        Neural systems behave as <strong className="text-slate-900">complex dynamical systems</strong>. Our research investigates whether the brain shows
                        measurable, generalized markers of instability—known as <span className="text-blue-600 font-semibold">Critical Slowing Down</span>—minutes to hours before a clinical seizure.
                    </p>
                    <div className="flex gap-6 mt-8">
                        <div className="px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-slate-900 mb-1">30%</div>
                            <div className="text-sm text-slate-500 font-medium tracking-wide text-xs uppercase">Refractory Epilepsy</div>
                        </div>
                        <div className="px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-slate-900 mb-1">&lt;30m</div>
                            <div className="text-sm text-slate-500 font-medium tracking-wide text-xs uppercase">Early Warning Window</div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Conceptual Viz */}
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-slate-100 flex items-center justify-center relative overflow-hidden shadow-xl border border-slate-200/60 p-8">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        {/* Abstract Wave Representation */}
                        <svg viewBox="0 0 200 100" className="w-full text-blue-500/20 drop-shadow-lg">
                            <path fill="currentColor" d="M0,50 C20,60 40,40 60,50 C80,60 100,50 120,50 C140,50 160,80 180,20 L200,50 L200,100 L0,100 Z" />
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,50 C20,60 40,40 60,50 C80,60 100,50 120,50 C140,50 160,80 180,20" className="text-blue-600" />
                        </svg>

                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono text-slate-500 shadow-sm border border-slate-100">
                            System State: Unstable
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
