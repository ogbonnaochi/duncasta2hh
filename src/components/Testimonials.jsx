import { useState } from 'react';
import { testimonials } from '../data/site';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>TESTIMONIALS</span>
          <h2 className={styles.heading}>What Our Patients Say</h2>
        </div>

        <div className={styles.slider}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
            >
              <div className={styles.quoteIcon}>"</div>
              <h3 className={styles.title}>{t.title}</h3>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.author[0]}</div>
                <div>
                  <div className={styles.authorName}>{t.author}</div>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
