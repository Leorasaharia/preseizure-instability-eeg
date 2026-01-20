import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Activity, Disc, TrendingUp } from 'lucide-react';

export default function CoreConcept() {
    const concepts = [
        {
            icon: <Activity className="w-8 h-8 text-blue-600" />,
            title: "Rising Variance",
            description: "As the system loses resilience, small perturbations cause larger fluctuations in neural voltage.",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
            title: "Increasing Autocorrelation",
            description: "The brain state becomes 'sticky', showing memory of previous states—a hallmark of critical slowing down.",
        },
        {
            icon: <Disc className="w-8 h-8 text-blue-600" />,
            title: "Slow Recovery",
            description: "Recovery rates from intrinsic noise decrease as the bifurcation point (seizure) approaches.",
        }
    ];

    return (
        <Section id="core-concept" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Critical Slowing Down</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Inspired by dynamical systems theory, we move beyond black-box deep learning to identify physics-based precursors of transition.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {concepts.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
