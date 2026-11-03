import styles from './loading.module.css';

export default function Loading() {
  return <main className={styles.loading} aria-live="polite" aria-busy="true"><span className={styles.mark}>A</span><p>Loading Aurelia</p><span className={styles.line} /></main>;
}
