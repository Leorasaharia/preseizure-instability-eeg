import { Section } from './ui/Section';

export default function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="max-w-2xl mx-auto text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-white shadow-sm">
                    <img src="https://ui-avatars.com/api/?name=Leora+Saharia&background=1e293b&color=fff&size=128" alt="Leora Saharia" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Leora Saharia</h3>
                <p className="text-blue-700 font-medium mb-1 uppercase tracking-wider text-xs">Computational Neuroscience | Biomedical Engineering</p>
                <p className="text-slate-600 mb-6 font-serif">National Institute of Technology Raipur</p>
                <p className="text-slate-400 text-sm italic font-light border-t border-slate-200 pt-6">Interested in translational neuroengineering and brain dynamics.</p>
            </div>
        </Section>
    )
}
