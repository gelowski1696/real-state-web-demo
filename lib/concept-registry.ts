import type { ConceptId } from '@/lib/concepts';

export type ConceptRegistryEntry = {
  id: ConceptId;
  label: string;
  shortLabel: string;
  route: `/concepts/${ConceptId}`;
  theme: 'legacy' | 'explorer' | 'architecture';
};

export const conceptRegistry: Record<ConceptId, ConceptRegistryEntry> = {
  legacy: { id: 'legacy', label: 'The Legacy', shortLabel: 'Legacy', route: '/concepts/legacy', theme: 'legacy' },
  explorer: { id: 'explorer', label: 'The Explorer', shortLabel: 'Explorer', route: '/concepts/explorer', theme: 'explorer' },
  architecture: { id: 'architecture', label: 'The Architecture', shortLabel: 'Architecture', route: '/concepts/architecture', theme: 'architecture' },
};

export function getConceptRegistryEntry(id: string) {
  return conceptRegistry[id as ConceptId];
}
