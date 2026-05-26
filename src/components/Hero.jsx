import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GCAL_URL } from '../data/site';
import styles from './Hero.module.css';

const slides = [
  {
    heading: 'Regain Your\nActive Lifestyle',
    sub: 'Expert physiotherapy care in Doncaster, tailored to your recovery journey.',
    bg: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1800&q=90&fit=crop&crop=center',
  },
  {
    heading: 'Move Better,\nLive Better',
    sub: 'HCPC & CSP registered physiotherapists dedicated to your recovery.',
    bg: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1800&q=90&fit=crop&crop=center',
  },
  {
    heading: 'No GP Referral\nNeeded',
    sub: 'Open 7 days a week — 8am to 7pm. Fast appointments available.',
    bg: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=1800&q=90&fit=crop&crop=center',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const { heading, sub } = slides[current];

  return (
    <section id="home" className={styles.hero}>
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.bg} ${i === current ? styles.bgActive : ''}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        />
      ))}
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.content} ${animating ? styles.fadeOut : styles.fadeIn}`}>
          <h1 className={styles.heading}>
            {heading.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className={styles.sub}>{sub}</p>
          <div className={styles.actions}>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.btnBook}>
              BOOK NOW
            </a>
            <Link to="about" smooth offset={-90} duration={600} className={styles.btnLearn}>
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
