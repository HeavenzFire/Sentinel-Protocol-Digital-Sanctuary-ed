
import React, { useState } from 'react';
import Card from './Card';
import { ARK_01 } from '../constants';

const Sanctuaries: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', location: '', justification: '', file: null });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormState(prevState => ({ ...prevState, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    console.log('Nomination submitted:', formState);
    setIsSubmitted(true);
  };
  
  return (
    <div className="animate-fade-in space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">Bioregional Anchors</h1>
        <p className="mt-2 text-lg text-sentinel-gray-light">Integrating high-coherence physical nodes into the network.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Provisional Node: Ark-01</h2>
            <Card className="p-6">
                <h3 className="text-2xl font-bold text-sentinel-blue">{ARK_01.provisionalName}</h3>
                <p className="text-sentinel-gray-light mt-1 font-mono">{ARK_01.bioregionalPlaceholder}</p>
                <p className="mt-4 text-gray-300">{ARK_01.integrationIntent}</p>
                
                <h4 className="mt-6 mb-2 text-lg font-semibold text-white">7-Point Coherence Checklist</h4>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                    {ARK_01.selectionCriteria.map((criterion, index) => (
                        <li key={index}>{criterion}</li>
                    ))}
                </ul>
            </Card>
        </div>
        
        <div className="lg:col-span-3">
             <h2 className="text-2xl font-bold text-white mb-4">Nominate an Ark-Spot</h2>
             <Card className="p-6">
                 {isSubmitted ? (
                    <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-sentinel-blue">Nomination Received</h3>
                        <p className="mt-2 text-gray-300">Your proposal has been added to the queue for review. Thank you for contributing to the network.</p>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Sanctuary Name</label>
                            <input type="text" name="name" id="name" required onChange={handleInputChange} className="mt-1 block w-full bg-sentinel-gray-dark border-sentinel-gray-medium rounded-md shadow-sm focus:ring-sentinel-blue focus:border-sentinel-blue"/>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-300">Location / Bioregion</label>
                            <input type="text" name="location" id="location" required onChange={handleInputChange} className="mt-1 block w-full bg-sentinel-gray-dark border-sentinel-gray-medium rounded-md shadow-sm focus:ring-sentinel-blue focus:border-sentinel-blue"/>
                        </div>
                        <div>
                             <label htmlFor="justification" className="block text-sm font-medium text-gray-300">Justification (Alignment with Coherence Checklist)</label>
                             <textarea name="justification" id="justification" rows={5} required onChange={handleInputChange} className="mt-1 block w-full bg-sentinel-gray-dark border-sentinel-gray-medium rounded-md shadow-sm focus:ring-sentinel-blue focus:border-sentinel-blue"></textarea>
                        </div>
                        <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-300">First Contact Packet (PDF)</label>
                            <input type="file" name="file" id="file" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sentinel-blue file:text-sentinel-gray-darkest hover:file:bg-sentinel-blue-light"/>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-sentinel-blue text-sentinel-gray-darkest font-bold py-2 px-4 rounded-lg hover:bg-sentinel-blue-light transition duration-300">Submit Nomination</button>
                        </div>
                    </form>
                 )}
             </Card>
        </div>
      </div>
    </div>
  );
};

export default Sanctuaries;
