export const conceptIds = ['legacy', 'explorer', 'architecture'] as const;
export type ConceptId = (typeof conceptIds)[number];

export type Concept = {
  id: ConceptId;
  number: string;
  name: string;
  positioning: string;
  rationale: string;
  accent: string;
  image: string;
};

export const concepts: Concept[] = [
  {
    id: 'legacy',
    number: '01',
    name: 'The Legacy',
    positioning: 'Premium · sophisticated · timeless',
    rationale: 'A warm, editorial corporate direction for a developer with a long view.',
    accent: 'bronze',
    image: '/images/brand/legacy-preview.jpg',
  },
  {
    id: 'explorer',
    number: '02',
    name: 'The Explorer',
    positioning: 'Modern · functional · user-focused',
    rationale: 'A clear discovery experience that helps people find the right development quickly.',
    accent: 'cobalt',
    image: '/images/brand/explorer-preview.jpg',
  },
  {
    id: 'architecture',
    number: '03',
    name: 'The Architecture',
    positioning: 'Artistic · immersive · editorial',
    rationale: 'A bolder visual story for projects where material, proportion, and atmosphere lead.',
    accent: 'ink',
    image: '/images/brand/architecture-preview.jpg',
  },
];

export function getConcept(id: string): Concept | undefined {
  return concepts.find((concept) => concept.id === id);
}
