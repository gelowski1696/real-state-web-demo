import Link from 'next/link';

export default function NotFound() {
  return <main style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#f3f0e9', color: '#22221f', textAlign: 'center' }}><div><p style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>Aurelia / 404</p><h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 400, letterSpacing: '-.06em', margin: '1rem 0' }}>Direction not found.</h1><Link href="/" style={{ color: '#22221f', fontFamily: 'var(--font-mono)', fontSize: '.7rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>Return to showcase ↗</Link></div></main>;
}
