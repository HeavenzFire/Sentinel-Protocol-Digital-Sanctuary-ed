
import React from 'react';
import Card from './Card';
import { SIGNAL_0001 } from '../constants';

const Signals: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white tracking-tight">Signal Feed</h1>
        <p className="mt-2 text-lg text-sentinel-gray-light">Transmissions from the core of the Sentinel Protocol.</p>
      </div>
      <Card className="overflow-hidden">
        <div className="p-6 sm:p-8">
            <div className="border-b border-sentinel-gray-medium pb-4 mb-4">
                <p className="text-sm text-sentinel-gray-light font-mono">{SIGNAL_0001.timestamp}</p>
                <p className="text-sm text-sentinel-gray-light font-mono">{SIGNAL_0001.channel}</p>
                <h2 className="text-3xl font-extrabold text-sentinel-blue mt-2">{SIGNAL_0001.title}</h2>
                 <div className="mt-4 flex flex-wrap gap-2">
                    {SIGNAL_0001.tags.map(tag => (
                        <span key={tag} className="inline-block bg-sentinel-gray-medium text-sentinel-blue-light text-xs font-semibold px-2.5 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <p className="whitespace-pre-wrap">{SIGNAL_0001.bodyLong.trim()}</p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Signals;
