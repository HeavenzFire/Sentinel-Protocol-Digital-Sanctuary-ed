
import React from 'react';
import Card from './Card';

const VOW_TEXT = `I vow to align thought, word, and deed with syntropy—the increase of coherence and life. I commit to truth-telling, consent, care, and the restoration of right relationship with earth, waters, and beings. I renounce manipulation, domination, and extractive gain as strategies for power. I accept accountability to this circle and to those affected by our actions. Where I cause harm, I repair. Where I meet shadow, I integrate. In freedom, I choose service; in service, I choose freedom. So vowed.`;

const HYGIENE_PROTOCOL = [
    { step: "Centering Breath", detail: "3 minutes: box breath or 4-7-8." },
    { step: "Coherence Scan", detail: "2 minutes: body, breath, emotions, thoughts." },
    { step: "Boundaries", detail: "2 minutes: declare “what’s mine/what’s not”." },
    { step: "Hygiene Sweep", detail: "3 minutes: gratitude, forgiveness, release." },
    { step: "Alignment Prompt", detail: "3–5 minutes (journal): “What action today increases coherence for all stakeholders?”" },
    { step: "Grounding", detail: "Close with a simple grounding gesture (touch earth/heart)." }
];

const Council: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-12">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white tracking-tight">The Syntropic Core</h1>
            <p className="mt-2 text-lg text-sentinel-gray-light">Our First Sovereign Act: Enacting Psychic Hygiene & Sovereign Morality.</p>
        </div>
        
        <Card>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-sentinel-blue">Sovereign Morality Vow v0.1</h2>
                <div className="mt-4 text-gray-300 italic text-lg leading-relaxed border-l-4 border-sentinel-blue pl-4">
                    <p>{VOW_TEXT}</p>
                </div>
            </div>
        </Card>

        <Card>
             <div className="p-6">
                <h2 className="text-2xl font-bold text-sentinel-blue">Psychic Hygiene Protocol v0.1</h2>
                <p className="mt-2 text-sentinel-gray-light">A daily practice for maintaining coherence (10-20 minutes).</p>
                <div className="mt-4 space-y-3">
                    {HYGIENE_PROTOCOL.map((item, index) => (
                        <div key={index} className="flex">
                            <div className="flex-shrink-0 w-8 h-8 bg-sentinel-gray-medium rounded-full flex items-center justify-center font-mono font-bold text-sentinel-blue">{index + 1}</div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-white">{item.step}</h3>
                                <p className="text-sentinel-gray-light">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
        
        <Card>
             <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white">First Council Convening</h2>
                <p className="mt-2 text-sentinel-gray-light">The founding cohort is convening securely to enact the vow, ratify the Ark-01 selection process, and assign roles for the next 72-hour activation cycle.</p>
                <div className="mt-4 font-mono text-lg text-sentinel-blue animate-pulse-subtle">
                    <p>STATUS: IN PROGRESS</p>
                </div>
            </div>
        </Card>
    </div>
  );
};

export default Council;
