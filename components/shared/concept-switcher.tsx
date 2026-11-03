import Link from 'next/link';
import { type ConceptId } from '@/lib/concepts';
import { conceptRegistry } from '@/lib/concept-registry';
import styles from './concept-switcher.module.css';

export function ConceptSwitcher({ active }: { active?: ConceptId }) {
  return (
    <nav className={styles.nav} aria-label="Switch Aurelia concept">
      <span className={styles.label}>Directions</span>
      <div className={styles.links}>
        {Object.values(conceptRegistry).map((concept, index) => (
          <Link className={concept.id === active ? styles.active : undefined} href={concept.route} key={concept.id} aria-current={concept.id === active ? 'page' : undefined}>
            <span>{String(index + 1).padStart(2, '0')}</span>{concept.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
