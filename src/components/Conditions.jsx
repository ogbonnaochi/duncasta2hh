import { conditions } from '../data/site';
import styles from './Conditions.module.css';

export default function Conditions() {
  return (
    <section id="conditions" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>WHAT WE TREAT</span>
          <h2 className={styles.heading}>Common Conditions Treated</h2>
          <p className={styles.sub}>We treat more than the pain — we treat the cause, so your recovery is faster and more lasting.</p>
        </div>

        <div className={styles.grid}>
          {conditions.map((c, i) => (
            <div key={c.label} className={`${styles.card} reveal delay-${(i % 3) + 1}`}>
              <div className={styles.imgWrap}>
                <img
                  src={c.img}
                  alt={c.label}
                  className={styles.img}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&q=80&fit=crop';
                  }}
                />
              </div>
              <div className={styles.cardTitle}>{c.label}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaBanner} reveal`}>
          <h3 className={styles.ctaText}>Helping you get better, feel better and stay better.</h3>
          <a
            href="#contact"
            className={styles.ctaBtn}
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
