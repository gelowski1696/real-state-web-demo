'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './architecture.module.css';

const links = [['Projects', 'projects'], ['About', 'about'], ['Journal', 'news'], ['Contact', 'contact']] as const;

export function ArchitectureHeader({ active }: { active: 'home' | 'projects' | 'about' | 'news' | 'contact' }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', onKeyDown); return () => document.removeEventListener('keydown', onKeyDown); }, [open]);
  return <header className={`${styles.header} ${open ? styles.open : ''}`}><Link href="/concepts/architecture" className={styles.logo} aria-label="Aurelia Architecture home"><span>AURELIA</span><b>ARCHITECTURE</b></Link><nav className={styles.desktopNav} aria-label="Main navigation">{links.map(([label, path]) => <Link className={active === path ? styles.active : undefined} href={`/concepts/architecture/${path}`} key={path}>{label}</Link>)}</nav><Link href="/" className={styles.showcase}>Exit study ↗</Link><button type="button" className={styles.menuButton} aria-expanded={open} aria-controls="architecture-mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">↗</span></button>{open && <nav className={styles.mobileNav} id="architecture-mobile-nav" aria-label="Mobile navigation">{links.map(([label, path]) => <Link href={`/concepts/architecture/${path}`} key={path} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}</nav>}</header>;
}

export function ArchitectureFooter() {
  return <footer className={styles.footer}><div className={styles.footerMark}>A</div><div><p>AURELIA DEVELOPMENTS</p><span>Independent fictional concept · 2026</span></div><div className={styles.footerLinks}><Link href="/concepts/architecture/projects">Projects</Link><Link href="/concepts/architecture/about">About</Link><Link href="/concepts/architecture/contact">Contact</Link><Link href="#top">Top ↑</Link></div></footer>;
}
