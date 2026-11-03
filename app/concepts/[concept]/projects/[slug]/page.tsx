import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InquiryForm } from '@/components/shared/inquiry-form';
import { ProjectGallery } from '@/components/shared/project-gallery';
import { SiteFooter } from '@/components/shared/site-footer';
import { projects } from '@/data/projects';
import { concepts, getConcept, type ConceptId } from '@/lib/concepts';
import { getProject } from '@/lib/utils';
import styles from './project-detail.module.css';
import { LegacyProjectDetail } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerProjectDetail } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureProjectDetail } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.flatMap(({ id }) => projects.map(({ slug }) => ({ concept: id, slug }))); }

export async function generateMetadata({ params }: { params: { concept: string; slug: string } }): Promise<Metadata> {
  const concept = getConcept(params.concept);
  const project = getProject(params.slug);
  return concept && project ? { title: `${project.name} · ${concept.name}`, description: project.summary } : { title: 'Development not found' };
}

export default function ProjectDetailPage({ params }: { params: { concept: string; slug: string } }) {
  const concept = getConcept(params.concept);
  const project = getProject(params.slug);
  if (!concept || !project) notFound();
  if (concept.id === 'legacy') return <LegacyProjectDetail project={project} />;
  if (concept.id === 'explorer') return <ExplorerProjectDetail project={project} />;
  if (concept.id === 'architecture') return <ArchitectureProjectDetail project={project} />;
  return <main id="top" className={styles.page}><header className={styles.header}><Link href={`/concepts/${concept.id}/projects`} className={styles.back}>← All developments</Link><span className={styles.wordmark}>AURELIA / {concept.name}</span><Link href={`/concepts/${concept.id}`} className={styles.switch}>Concept home ↗</Link></header><section className={styles.hero}><div className={styles.heroImage}><Image src={project.heroImage} alt={`${project.name} architectural view`} fill sizes="(max-width: 800px) 100vw, 58vw" priority /></div><div className={styles.heroCopy}><p className={styles.eyebrow}>{project.propertyType} · {project.status}</p><h1>{project.name}</h1><p className={styles.tagline}>{project.tagline}</p><p className={styles.location}>{project.location}</p></div></section><section className={styles.content}><div className={styles.overview}><p className={styles.eyebrow}>Overview</p><p className={styles.lead}>{project.summary}</p><p className={styles.body}>{project.description}</p></div><div className={styles.highlights}><p className={styles.eyebrow}>Highlights</p><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></section><section className={styles.gallery}><div className={styles.sectionHead}><p className={styles.eyebrow}>A closer look</p><h2>Material, light,<br /><em>and everyday life.</em></h2></div><ProjectGallery images={project.gallery} projectName={project.name} /></section><section className={styles.inquiry}><div><p className={styles.eyebrow}>Start a conversation</p><h2>Tell us what<br /><em>you’re looking for.</em></h2><p className={styles.body}>This fictional enquiry form demonstrates the interaction pattern for a future sales or information request.</p></div><InquiryForm projectName={project.name} /></section><SiteFooter concept={concept.id as ConceptId} /></main>;
}
