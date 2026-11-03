'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './legacy.module.css';

const links = [
  ['Projects', 'projects'],
  ['About', 'about'],
  ['News', 'news'],
  ['Contact', 'contact'],
] as const;

export function LegacyHeader({ active }: { active: 'home' | 'projects' | 'about' | 'news' | 'contact' }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, [open]);
  return <header className={`${styles.header} ${open ? styles.headerOpen : ''}`}><Link href="/concepts/legacy" className={styles.logo} aria-label="Aurelia Developments home"><span className={styles.logoMark}>A</span><span>Aurelia<br />Developments</span></Link><nav className={styles.desktopNav} aria-label="Main navigation">{links.map(([label, path]) => <Link className={active === path ? styles.active : undefined} href={`/concepts/legacy/${path}`} key={path}>{label}</Link>)}</nav><Link className={styles.showcaseLink} href="/">All directions ↗</Link><button className={styles.menuButton} type="button" aria-expanded={open} aria-controls="legacy-mobile-nav" onClick={() => setOpen((value) => !value)}><span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" /></button>{open && <nav className={styles.mobileNav} id="legacy-mobile-nav" aria-label="Mobile navigation">{links.map(([label, path]) => <Link className={active === path ? styles.active : undefined} href={`/concepts/legacy/${path}`} key={path} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}</nav>}</header>;
}

export function LegacyFooter() {
  return <footer className={styles.footer}><div className={styles.footerTop}><Link href="/concepts/legacy" className={styles.logo}><span className={styles.logoMark}>A</span><span>Aurelia<br />Developments</span></Link><p>Building places.<br /><em>Creating possibilities.</em></p><Link className={styles.footerCta} href="/concepts/legacy/contact">Begin a conversation <span>↗</span></Link></div><div className={styles.footerBottom}><span>Independent fictional concept · Portfolio demonstration only</span><span>© 2026 Aurelia Developments</span><Link href="#top">Back to top ↑</Link></div></footer>;
}

export function LegacyProjectLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/concepts/legacy/projects/${slug}`}>{children}</Link>;
}

