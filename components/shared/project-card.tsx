import Image from 'next/image';
import Link from 'next/link';
import type { ConceptId } from '@/lib/concepts';
import type { Project } from '@/lib/types';
import { projectHref } from '@/lib/routes';
import { ShortlistButton } from './shortlist-button';
import styles from './project-card.module.css';

export function ProjectCard({ project, concept }: { project: Project; concept: ConceptId }) {
  return (
    <article className={styles.card}>
      <Link className={styles.imageLink} href={projectHref(concept, project.slug)} aria-label={`View ${project.name}`}>
        <div className={styles.media}><Image src={project.heroImage} alt={`${project.name} architectural view`} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className={styles.status}>{project.status}</span></div>
      </Link>
      <div className={styles.content}>
        <div className={styles.heading}><div><p className={styles.type}>{project.propertyType}</p><h3><Link href={projectHref(concept, project.slug)}>{project.name}</Link></h3></div><span className={styles.arrow} aria-hidden="true">↗</span></div>
        <div className={styles.metaRow}><p className={styles.location}>{project.location}</p><ShortlistButton slug={project.slug} label={project.name} /></div>
        <p className={styles.summary}>{project.summary}</p>
      </div>
    </article>
  );
}
