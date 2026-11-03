import Link from 'next/link';
import { company } from '@/data/company';
import { type ConceptId } from '@/lib/concepts';
import { conceptPageHref, projectsHref } from '@/lib/routes';
import styles from './site-footer.module.css';

export function SiteFooter({ concept }: { concept: ConceptId }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}><span className={styles.mark}>A</span><span>{company.name}<small>{company.disclosure}</small></span></div>
      <nav className={styles.links} aria-label="Footer navigation">
        <Link href={projectsHref(concept)}>Developments</Link>
        <Link href={conceptPageHref(concept, 'about')}>About</Link>
        <Link href={conceptPageHref(concept, 'news')}>News</Link>
        <Link href={conceptPageHref(concept, 'contact')}>Contact</Link>
      </nav>
      <Link className={styles.top} href="#top">Back to top ↑</Link>
    </footer>
  );
}
