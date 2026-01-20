import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5")}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <div className="font-serif font-bold text-xl text-slate-900 tracking-tight cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Neural<span className="text-slate-400 font-light">Instability</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Motivation', id: 'motivation' },
                        { name: 'Concept', id: 'core-concept' },
                        { name: 'Methodology', id: 'methodology' },
                        { name: 'Results', id: 'results' },
                        { name: 'Live View', id: 'dashboard' },
                    ].map(item => (
                        <button
                            key={item.name}
                            onClick={() => scrollTo(item.id)}
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                    <Button size="sm" variant="outline" onClick={() => scrollTo('reproducibility')}>Code</Button>
                </nav>
            </div>
        </header>
    );
}
