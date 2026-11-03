import Link from 'next/link';
import type { Concept } from '@/lib/concepts';
import { projectsHref } from '@/lib/routes';
import styles from './concept-placeholder.module.css';

export function ConceptPlaceholder({ concept, eyebrow, title, body }: { concept: Concept; eyebrow: string; title: string; body: string }) {
  return <section className={styles.section}><p className={styles.eyebrow}>{eyebrow} · {concept.name}</p><h1>{title}</h1><p className={styles.body}>{body}</p><Link className={styles.action} href={projectsHref(concept.id)}>Explore developments <span>↗</span></Link></section>;
}
