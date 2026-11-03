'use client';

import { useEffect, useState } from 'react';
import styles from './shortlist-button.module.css';

const STORAGE_KEY = 'aurelia-shortlist';
const EVENT_NAME = 'aurelia-shortlist-change';

function readShortlist() {
  if (typeof window === 'undefined') return [] as string[];
  try { return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]') as string[]; } catch { return []; }
}

export function ShortlistButton({ slug, label }: { slug: string; label: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => { setSaved(readShortlist().includes(slug)); }, [slug]);
  const toggle = () => {
    const current = readShortlist();
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug].slice(-3);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(next.includes(slug));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  };
  return <button type="button" className={`${styles.button} ${saved ? styles.saved : ''}`} onClick={toggle} aria-pressed={saved} aria-label={`${saved ? 'Remove' : 'Add'} ${label} ${saved ? 'from' : 'to'} shortlist`}><span aria-hidden="true">{saved ? '★' : '☆'}</span>{saved ? 'Saved' : 'Shortlist'}</button>;
}

export { EVENT_NAME, STORAGE_KEY, readShortlist };
