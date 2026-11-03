import Image from 'next/image';
import Link from 'next/link';
import { ConceptPreview } from '@/components/concept-preview';
import { company } from '@/data/company';
import { concepts } from '@/lib/concepts';
import styles from './showcase.module.css';

export default function ShowcasePage() {
  return (
    <main id="top">
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Aurelia Developments showcase home"><span className={styles.brandMark}>A</span><span>Aurelia<br />Developments</span></Link>
        <span className={styles.headerNote}>Independent showcase / 2026</span>
      </header>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>A digital direction study</p>
          <h1>Three perspectives.<br /><em>One real estate</em> experience.</h1>
          <p className={styles.intro}>An independent exploration of three digital directions for a modern property developer — from timeless corporate storytelling to intuitive project discovery and immersive architectural presentation.</p>
          <a className={styles.scrollLink} href="#directions"><span>↓</span> View the directions</a>
        </div>
        <div className={styles.heroImage}>
          <Image src="/images/brand/showcase-hero.jpg" alt="Sunlit modern architecture with warm stone and planted terraces" fill priority sizes="(max-width: 760px) 100vw, 52vw" />
          <span className={styles.imageCaption}>Aurelia / an independent fictional concept</span>
        </div>
      </section>
      <section className={styles.directions} id="directions">
        <div className={styles.sectionIntro}><p className={styles.kicker}>01 — Choose a direction</p><p className={styles.sectionNote}>Same sample portfolio. Different point of view.</p></div>
        <div className={styles.previewGrid}>{concepts.map((concept) => <ConceptPreview key={concept.id} concept={concept} />)}</div>
      </section>
      <section className={styles.disclosure}>
        <div><p className={styles.kicker}>A note on the work</p><h2>A fictional brand,<br /><em>built for possibility.</em></h2></div>
        <div className={styles.disclosureCopy}><p>{company.introduction}</p><p className={styles.disclosureLabel}>{company.disclosure}</p></div>
      </section>
      <footer className={styles.footer}><span className={styles.brand}>AURELIA / 2026</span><span>Three perspectives, one shared foundation.</span><Link href="#top">Back to top ↑</Link></footer>
    </main>
  );
}
