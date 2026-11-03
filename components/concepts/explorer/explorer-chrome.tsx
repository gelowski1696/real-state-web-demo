'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './explorer.module.css';

const links = [['Projects', 'projects'], ['About', 'about'], ['News', 'news'], ['Contact', 'contact']] as const;

export function ExplorerHeader({ active }: { active: 'home' | 'projects' | 'about' | 'news' | 'contact' }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', onKeyDown); return () => document.removeEventListener('keydown', onKeyDown); }, [open]);
  return <header className={styles.header}><Link href="/concepts/explorer" className={styles.wordmark} aria-label="Aurelia Explorer home"><span className={styles.wordmarkMark}>A</span><span>AURELIA<br /><b>EXPLORER</b></span></Link><nav className={styles.desktopNav} aria-label="Main navigation">{links.map(([label, path]) => <Link className={active === path ? styles.active : undefined} href={`/concepts/explorer/${path}`} key={path}>{label}</Link>)}</nav><Link href="/" className={styles.showcase}>All directions ↗</Link><button className={styles.menuButton} type="button" aria-expanded={open} aria-controls="explorer-mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">☰</span></button>{open && <nav className={styles.mobileNav} id="explorer-mobile-nav" aria-label="Mobile navigation">{links.map(([label, path]) => <Link href={`/concepts/explorer/${path}`} key={path} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}</nav>}</header>;
}

export function ExplorerFooter() {
  return <footer className={styles.footer}><div className={styles.footerBrand}><span className={styles.wordmarkMark}>A</span><span>AURELIA / EXPLORER</span></div><div className={styles.footerLinks}><Link href="/concepts/explorer/projects">Developments</Link><Link href="/concepts/explorer/about">About</Link><Link href="/concepts/explorer/news">News</Link><Link href="/concepts/explorer/contact">Contact</Link></div><div className={styles.footerMeta}><span>Independent fictional concept · 2026</span><Link href="#top">Back to top ↑</Link></div></footer>;
}
