import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConceptSwitcher } from '@/components/shared/concept-switcher';
import { ProjectExplorer } from '@/components/shared/project-explorer';
import { SiteFooter } from '@/components/shared/site-footer';
import { projects } from '@/data/projects';
import { concepts, getConcept, type ConceptId } from '@/lib/concepts';
import styles from './projects-page.module.css';
import { LegacyProjects } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerProjects } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureProjects } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.map(({ id }) => ({ concept: id })); }

export async function generateMetadata({ params }: { params: { concept: string } }): Promise<Metadata> {
  const concept = getConcept(params.concept);
  return concept ? { title: `Developments · ${concept.name}`, description: `Explore the fictional Aurelia Developments portfolio through ${concept.name}.` } : { title: 'Developments not found' };
}

export default function ProjectsPage({ params, searchParams }: { params: { concept: string }; searchParams?: { q?: string; type?: string; status?: string } }) {
  const concept = getConcept(params.concept);
  if (!concept) notFound();
  if (concept.id === 'legacy') return <LegacyProjects />;
  if (concept.id === 'explorer') {
    const allowedTypes = ['Condominium', 'Residential Community', 'Mixed Use', 'Commercial'] as const;
    const allowedStatuses = ['Ongoing', 'Upcoming', 'Completed'] as const;
    const initialType = allowedTypes.includes(searchParams?.type as (typeof allowedTypes)[number]) ? searchParams?.type as (typeof allowedTypes)[number] : undefined;
    const initialStatus = allowedStatuses.includes(searchParams?.status as (typeof allowedStatuses)[number]) ? searchParams?.status as (typeof allowedStatuses)[number] : undefined;
    return <ExplorerProjects initialQuery={searchParams?.q} initialType={initialType} initialStatus={initialStatus} />;
  }
  if (concept.id === 'architecture') return <ArchitectureProjects />;
  return <main id="top" className={styles.page}><header className={styles.header}><Link className={styles.wordmark} href={`/concepts/${concept.id}`}>AURELIA / DEVELOPMENTS</Link><ConceptSwitcher active={concept.id as ConceptId} /></header><section className={styles.intro}><p className={styles.eyebrow}>Shared discovery foundation · {concept.name}</p><h1>Developments<br /><em>with a point of view.</em></h1><p className={styles.description}>Search the shared fictional portfolio by name, location, property type, or status. Every record is illustrative demo content.</p></section><section className={styles.explorer}><ProjectExplorer projects={projects} concept={concept.id as ConceptId} /></section><SiteFooter concept={concept.id as ConceptId} /></main>;
}
