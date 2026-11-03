import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConceptSwitcher } from '@/components/shared/concept-switcher';
import { InquiryForm } from '@/components/shared/inquiry-form';
import { SiteFooter } from '@/components/shared/site-footer';
import { concepts, getConcept, type ConceptId } from '@/lib/concepts';
import styles from '../projects/projects-page.module.css';
import contactStyles from './contact-page.module.css';
import { LegacyContact } from '@/components/concepts/legacy/legacy-pages';
import { ExplorerContact } from '@/components/concepts/explorer/explorer-pages';
import { ArchitectureContact } from '@/components/concepts/architecture/architecture-pages';

export function generateStaticParams() { return concepts.map(({ id }) => ({ concept: id })); }
export async function generateMetadata({ params }: { params: { concept: string } }): Promise<Metadata> { const concept = getConcept(params.concept); return concept ? { title: `Contact · ${concept.name}` } : { title: 'Contact not found' }; }
export default function ContactPage({ params }: { params: { concept: string } }) { const concept = getConcept(params.concept); if (!concept) notFound(); if (concept.id === 'legacy') return <LegacyContact />; if (concept.id === 'explorer') return <ExplorerContact />; if (concept.id === 'architecture') return <ArchitectureContact />; return <main id="top" className={styles.page}><header className={styles.header}><Link className={styles.wordmark} href={`/concepts/${concept.id}`}>AURELIA / DEVELOPMENTS</Link><ConceptSwitcher active={concept.id as ConceptId} /></header><section className={contactStyles.intro}><p className={contactStyles.eyebrow}>Start a conversation · {concept.name}</p><h1>Let’s make<br /><em>room for more.</em></h1><p className={contactStyles.body}>Use the form below to demonstrate a considered enquiry experience. This is a fictional portfolio project, so no message will be sent.</p></section><section className={contactStyles.formWrap}><InquiryForm /></section><SiteFooter concept={concept.id as ConceptId} /></main>; }
