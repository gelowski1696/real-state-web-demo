import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConceptSwitcher } from '@/components/shared/concept-switcher';
import { ConceptPlaceholder } from '@/components/shared/concept-placeholder';
import { SiteFooter } from '@/components/shared/site-footer';
import { concepts, getConcept, type ConceptId } from '@/lib/concepts';
import styles from '../projects/projects-page.module.css';
import { LegacyAbout } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerAbout } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureAbout } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.map(({ id }) => ({ concept: id })); }
export async function generateMetadata({ params }: { params: { concept: string } }): Promise<Metadata> { const concept = getConcept(params.concept); return concept ? { title: `About · ${concept.name}` } : { title: 'About not found' }; }
export default function AboutPage({ params }: { params: { concept: string } }) { const concept = getConcept(params.concept); if (!concept) notFound(); if (concept.id === 'legacy') return <LegacyAbout />; if (concept.id === 'explorer') return <ExplorerAbout />; if (concept.id === 'architecture') return <ArchitectureAbout />; return <main id="top" className={styles.page}><header className={styles.header}><Link className={styles.wordmark} href={`/concepts/${concept.id}`}>AURELIA / DEVELOPMENTS</Link><ConceptSwitcher active={concept.id as ConceptId} /></header><ConceptPlaceholder concept={concept} eyebrow="Company foundation" title="A clearer way to build places." body="Aurelia Developments is a fictional company profile. The full concept-specific editorial story will be shaped in the next implementation phases; this route establishes the shared page structure and navigation continuity." /><SiteFooter concept={concept.id as ConceptId} /></main>; }
