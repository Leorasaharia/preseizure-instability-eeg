import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Github } from 'lucide-react';

export default function Reproducibility() {
    return (
        <Section id="reproducibility" className="bg-slate-50 border-t border-slate-200">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform duration-300">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Reproducible Research</h2>
                    <p className="text-slate-600 mb-6 max-w-xl text-lg leading-relaxed">
                        Entire pipeline implemented in Python. We believe in open science and transparent methodology.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {['Python', 'MNE-Python', 'NumPy', 'SciPy', 'scikit-learn'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-medium rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <Button size="lg" className="shrink-0 h-14 text-base px-8" onClick={() => window.open('https://github.com', '_blank')}>
                    <Github className="mr-2 h-5 w-5" /> View Full Code on GitHub
                </Button>
            </div>
        </Section>
    )
}
