import Image from 'next/image';
import Link from 'next/link';
import type { Concept } from '@/lib/concepts';
import styles from './concept-preview.module.css';

export function ConceptPreview({ concept }: { concept: Concept }) {
  return (
    <article className={`${styles.card} ${styles[concept.accent]}`}>
      <div className={styles.media}>
        <Image src={concept.image} alt={`${concept.name} concept preview`} fill sizes="(max-width: 760px) 100vw, 33vw" />
        <span className={styles.number}>{concept.number}</span>
        <span className={styles.mediaLabel}>Aurelia / direction</span>
      </div>
      <div className={styles.body}>
        <div>
          <p className={styles.eyebrow}>{concept.positioning}</p>
          <h2>{concept.name}</h2>
        </div>
        <p className={styles.rationale}>{concept.rationale}</p>
        <Link className={styles.link} href={`/concepts/${concept.id}`}>
          Explore direction <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
