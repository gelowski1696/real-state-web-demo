import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConceptSwitcher } from '@/components/shared/concept-switcher';
import { SiteFooter } from '@/components/shared/site-footer';
import { newsItems } from '@/data/news';
import { concepts, getConcept, type ConceptId } from '@/lib/concepts';
import styles from '../projects/projects-page.module.css';
import newsStyles from './news-page.module.css';
import { LegacyNews } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerNews } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureNews } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.map(({ id }) => ({ concept: id })); }
export async function generateMetadata({ params }: { params: { concept: string } }): Promise<Metadata> { const concept = getConcept(params.concept); return concept ? { title: `News · ${concept.name}` } : { title: 'News not found' }; }
export default function NewsPage({ params }: { params: { concept: string } }) { const concept = getConcept(params.concept); if (!concept) notFound(); if (concept.id === 'legacy') return <LegacyNews />; if (concept.id === 'explorer') return <ExplorerNews />; if (concept.id === 'architecture') return <ArchitectureNews />; return <main id="top" className={styles.page}><header className={styles.header}><Link className={styles.wordmark} href={`/concepts/${concept.id}`}>AURELIA / DEVELOPMENTS</Link><ConceptSwitcher active={concept.id as ConceptId} /></header><section className={newsStyles.intro}><p className={newsStyles.eyebrow}>Journal · {concept.name}</p><h1>Notes from<br /><em>the long view.</em></h1><p className={newsStyles.body}>Fictional perspective, project journals, and community stories from the Aurelia showcase.</p></section><section className={newsStyles.list}>{newsItems.map((item) => <article key={item.slug} className={newsStyles.item}><div><p className={newsStyles.meta}>{item.category} · {item.date}</p><h2>{item.title}</h2></div><p>{item.excerpt}</p></article>)}</section><SiteFooter concept={concept.id as ConceptId} /></main>; }
