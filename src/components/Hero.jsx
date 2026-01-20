import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl mx-auto z-10 flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-slate-600 mb-8"
                >
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    Neuroscience Research Showcase
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Early-Warning Signals of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Neural Instability</span>
                </h1>

                <p className="text-xl md:text-3xl text-slate-700 mb-6 font-serif italic">
                    A dynamical systems–inspired approach to pre-seizure brain state analysis
                </p>

                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Interpretable EEG markers for detecting neural instability before seizure onset.
                    Leveraging Critical Slowing Down theory for clinical relevance.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" onClick={() => document.getElementById('reproducibility').scrollIntoView({ behavior: 'smooth' })}>
                        View Research Code <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('motivation').scrollIntoView({ behavior: 'smooth' })}>
                        Explore the Science <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
