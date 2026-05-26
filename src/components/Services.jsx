import { IMAGES, GCAL_URL } from '../data/site';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>OUR SERVICES</span>
          <h2 className={styles.heading}>Physiotherapy</h2>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.textCol} reveal-left`}>
            <p className={styles.para}>
              At Doncaster Physiotherapy, we offer a range of services to help you recover and achieve
              your optimal health. From general physiotherapy and sports rehabilitation to specialised
              treatments for specific conditions, our experienced team is here to guide you through
              your recovery journey.
            </p>
            <p className={styles.para}>
              All our physiotherapists are registered with the Health and Care Professions Council
              (HCPC) and the Chartered Society of Physiotherapy (CSP), ensuring the highest standard
              of care for every patient.
            </p>
            <div className={styles.serviceList}>
              {[
                'Physiotherapy',
                'Sports Injury Rehab',
                'Sports Massage',
                'Back & Neck Pain',
                'Mobility & Recovery',
                'Post-Operative Rehabilitation',
                'Home Visits',
                'Injection Therapy (Information Only)',
              ].map((s) => (
                <div key={s} className={styles.serviceItem}>
                  <span className={styles.bullet}>✓</span> {s}
                </div>
              ))}
            </div>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              Know More
            </a>
          </div>

          <div className={`${styles.imgCol} reveal-right`}>
            <img
              src={IMAGES.physiotherapy}
              alt="Physiotherapy treatment"
              className={styles.img}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=700&q=80&fit=crop';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
