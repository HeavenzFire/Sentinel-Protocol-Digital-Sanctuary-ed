
import React from 'react';
import type { Signal, Sanctuary } from './types';

export const BroadcastIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.464 8.464a5 5 0 000 7.072m2.828 9.9A9 9 0 008.292 5.636" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 006-6 6 6 0 00-6-6 6 6 0 00-6 6 6 6 0 006 6z" />
  </svg>
);

export const AnchorIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.62.26c-1.23-.33-2.48.06-3.48.96l-3.36 3.03A3.012 3.012 0 0012 5.2a3.012 3.012 0 00-1.78 1.05L6.86 9.28a3 3 0 00-4.24 4.24l2.02 2.02a3 3 0 004.24 0l3.03-3.36c.9-.99 1.29-2.25.96-3.48" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-4 4m0 0l-1.5 1.5a2.121 2.121 0 103 3L13 17m-2-2l2-2" />
  </svg>
);

export const CouncilIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM3 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const SIGNAL_0001: Signal = {
  id: "0001",
  title: "Signal-0001: The Ark-Spot Is Live",
  timestamp: "2025-10-08T00:00:00Z",
  channel: "Pillar 1 — Digital Sanctuary (Public)",
  tags: ["#SentinelProtocol", "#ArkSpot", "#Syntropy", "#Pillars123"],
  bodyShort: "Signal-0001: The Ark-Spot is live. Broadcast. Anchor. Vow. Reality Weavers—seed the sanctuary. Ground-teams—name the first Syntropy Seed. Founders—convene and take the vow. Syntropy ascends. #SentinelProtocol",
  bodyLong: `
The architecture is awake. Signal-0001 affirms the live state of the Sentinel Protocol’s first node: a clear-channel sanctuary for the syntropic worldview. Pillars 1, 2, and 3 now activate in concert—broadcast, anchor, and vow.

To the Reality Weavers Guild: populate this Ark-Spot. Seed it with manifestos, art, pattern languages, and sacred decrees. Let the culture speak in many tongues but one signal: Syntropy ascends.

To the ground-teams: nominate the first bioregional sanctuary for prototype integration—the Syntropy Seed. We will document its water, food, energy, governance, and care systems as the first living entry in the Open-Source Resilience Library.

To the founding cohort: convene securely and enact the first vow. We bind ourselves to psychic hygiene and sovereign morality, choosing coherence beyond the decaying order.

This is the first light on the new timeline. We are the custodians of that dawn. Broadcast received. Network standing by. Proceed.
  `,
};

export const ARK_01: Sanctuary = {
    id: "01",
    provisionalName: "Ark-01: Dawnroot Sanctuary",
    bioregionalPlaceholder: "Cascadia (PNW)",
    integrationIntent: "Connect an existing high-coherence node (ecovillage/regenerative farm/healing center) as the prototype sanctuary.",
    selectionCriteria: [
        "Watershed integrity and on-site water cycle practices",
        "Food and soil systems with regenerative baselines",
        "Energy and thermal systems (renewables, efficiency, resilience)",
        "Governance model (transparent, consent/sociocracy-compatible)",
        "Care and conflict transformation protocols",
        "Education/hosting capacity for apprentices and site visitors",
        "Willingness to open-source appropriate pattern docs and metrics"
    ]
}
