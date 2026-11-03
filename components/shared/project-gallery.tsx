'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './project-gallery.module.css';

export function ProjectGallery({ images, projectName }: { images: string[]; projectName: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? 0 : (index + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? 0 : (index - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      returnFocusRef.current?.focus();
    };
  }, [activeIndex, images.length]);

  if (!images.length) return null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  return <>
    <div className={styles.grid} aria-label={`${projectName} gallery`}>
      {images.map((image, index) => <button type="button" className={styles.thumb} key={image} onClick={() => setActiveIndex(index)} aria-label={`Open ${projectName} image ${index + 1}`}><Image src={image} alt={`${projectName} detail view ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 25vw" /></button>)}
    </div>
    {activeImage && activeIndex !== null && <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={`${projectName} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}><span>{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span><button ref={closeRef} type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">Close ×</button></div>
        <div className={styles.largeImage}><Image src={activeImage} alt={`${projectName} detail view ${activeIndex + 1}`} fill sizes="100vw" priority /></div>
        <div className={styles.dialogControls}><button type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} aria-label="Previous image">← Previous</button><span>Use arrow keys to browse</span><button type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} aria-label="Next image">Next →</button></div>
      </div>
    </div>}
  </>;
}
