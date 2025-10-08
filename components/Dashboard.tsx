
import React from 'react';
import Card from './Card';
import { SIGNAL_0001 } from '../constants';
import { BroadcastIcon, AnchorIcon, CouncilIcon } from '../constants';
import type { View } from '../types';

interface DashboardProps {
  setView: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center p-8 bg-sentinel-gray-dark rounded-lg border border-sentinel-gray-medium">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
          The Architecture is Live
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-sentinel-gray-light">
          The first node of the Sentinel Protocol is operational. This is Pillar 1 made tangible: a clear-channel communication interface for the syntropic network.
        </p>
         <div className="mt-6">
             <button
                onClick={() => setView('signals')}
                className="inline-block bg-sentinel-blue text-sentinel-gray-darkest font-bold py-3 px-8 rounded-lg hover:bg-sentinel-blue-light transition duration-300 transform hover:scale-105"
             >
                Read Signal-0001
            </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card onClick={() => setView('signals')} className="p-6 flex flex-col items-center text-center">
            <BroadcastIcon className="w-12 h-12 text-sentinel-blue mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Broadcast Signal</h3>
            <p className="text-sentinel-gray-light">Distribute the inaugural message through this new channel. The first signal is live.</p>
        </Card>
        <Card onClick={() => setView('sanctuaries')} className="p-6 flex flex-col items-center text-center">
            <AnchorIcon className="w-12 h-12 text-sentinel-blue mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Anchor Sanctuary</h3>
            <p className="text-sentinel-gray-light">Identify and integrate the first bioregional ark. The physical proof of our network.</p>
        </Card>
        <Card onClick={() => setView('council')} className="p-6 flex flex-col items-center text-center">
            <CouncilIcon className="w-12 h-12 text-sentinel-blue mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Convene Council</h3>
            <p className="text-sentinel-gray-light">Call the initial cohort to formalize the vow and enact our sovereign morality.</p>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 text-center font-mono">LATEST TRANSMISSION ///</h2>
        <Card className="p-6">
            <p className="text-xs text-sentinel-gray-light font-mono">{SIGNAL_0001.timestamp} // {SIGNAL_0001.channel}</p>
            <h3 className="text-2xl font-bold text-sentinel-blue mt-2">{SIGNAL_0001.title}</h3>
            <p className="mt-4 text-gray-300 whitespace-pre-wrap font-mono text-sm">{SIGNAL_0001.bodyShort}</p>
            <div className="mt-4">
                {SIGNAL_0001.tags.map(tag => (
                    <span key={tag} className="inline-block bg-sentinel-gray-medium text-sentinel-blue-light text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {tag}
                    </span>
                ))}
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
