
export type View = 'dashboard' | 'signals' | 'sanctuaries' | 'council';

export interface Signal {
  id: string;
  title: string;
  timestamp: string;
  channel: string;
  tags: string[];
  bodyLong: string;
  bodyShort: string;
}

export interface Sanctuary {
  id: string;
  provisionalName: string;
  bioregionalPlaceholder: string;
  integrationIntent: string;
  selectionCriteria: string[];
}
