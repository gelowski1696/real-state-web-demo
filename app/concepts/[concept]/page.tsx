import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { concepts, getConcept } from '@/lib/concepts';
import { projects } from '@/data/projects';
import styles from './concept-shell.module.css';
import { LegacyHome } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerHome } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureHome } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.map(({ id }) => ({ concept: id })); }

export async function generateMetadata({ params }: { params: { concept: string } }): Promise<Metadata> {
  const concept = getConcept(params.concept);
  if (!concept) return { title: 'Concept not found' };
  return { title: concept.name, description: `${concept.positioning} — an independent Aurelia Developments concept.` };
}

export default function ConceptPage({ params }: { params: { concept: string } }) {
  const concept = getConcept(params.concept);
  if (!concept) notFound();
  if (concept.id === 'legacy') return <LegacyHome />;
  if (concept.id === 'explorer') return <ExplorerHome />;
  if (concept.id === 'architecture') return <ArchitectureHome />;
  return (
    <main className={`${styles.page} ${styles[concept.accent]}`}>
      <header className={styles.nav}><Link href="/" className={styles.wordmark}>AURELIA / DEVELOPMENTS</Link><span>{concept.number} — {concept.name}</span><Link href="/" className={styles.back}>Switch direction ↗</Link></header>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Phase 1 foundation · concept route resolved</p>
        <h1>{concept.name}</h1>
        <p className={styles.positioning}>{concept.positioning}</p>
        <p className={styles.description}>{concept.rationale} This route is the foundation for the full concept experience in the next implementation phase.</p>
        <div className={styles.actions}><Link href={`/concepts/${concept.id}/projects`} className={styles.primary}>View developments <span>↗</span></Link><Link href="/" className={styles.secondary}>Back to showcase</Link></div>
      </section>
      <section className={styles.preview}><div><p className={styles.eyebrow}>Shared sample content</p><h2>{projects.length} fictional developments.<br />One reusable data model.</h2></div><p className={styles.note}>The route is intentionally lightweight in Phase 1. It establishes validation, metadata, and navigation continuity while the concept-specific page system is built in subsequent phases.</p></section>
    </main>
  );
}
