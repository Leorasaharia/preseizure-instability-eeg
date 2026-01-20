import { Section } from './ui/Section';

export default function Interpretation() {
    return (
        <Section className="bg-slate-900 text-white text-center py-24 mb-0 max-w-none w-full">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Interpretation</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                <p className="text-xl md:text-3xl leading-normal text-slate-200 font-light font-serif italic">
                    "Our results demonstrate that EEG exhibits measurable markers of neural instability well before seizure onset, supporting a systems-level view of epilepsy that prioritizes dynamics over static features."
                </p>
            </div>
        </Section>
    )
}
