import { useNavigate } from 'react-router-dom';
import { IMAGES, GCAL_URL } from '../data/site';
import styles from './ServicesStrip.module.css';

export default function ServicesStrip() {
  const navigate = useNavigate();
  return (
    <section className={styles.strip}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.card} reveal delay-1`}>
            <img src={IMAGES.physiotherapyIcon} alt="Our Services" className={styles.icon}
              onError={e => { e.target.style.display='none'; }} />
            <h3 className={styles.title}>OUR SERVICES</h3>
            <p className={styles.text}>Doncaster Physiotherapy provide a range of physiotherapy services for individuals, businesses &amp; insurers.</p>
            <button className={styles.link} onClick={() => navigate('/services')}>Learn More →</button>
          </div>
          <div className={`${styles.card} reveal delay-2`}>
            <img src={IMAGES.spineIcon} alt="What We Treat" className={styles.icon}
              onError={e => { e.target.style.display='none'; }} />
            <h3 className={styles.title}>WHAT WE TREAT</h3>
            <p className={styles.text}>We treat more than the pain – we treat the cause of the problem, so your pain will resolve faster.</p>
            <button className={styles.link} onClick={() => navigate('/conditions')}>View Conditions →</button>
          </div>
          <div className={`${styles.card} ${styles.cardDark} reveal delay-3`}>
            <h3 className={styles.titleLight}>Get treated today</h3>
            <p className={styles.textLight}>Whatever your problem we guarantee that we will have the best physiotherapist for you.</p>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.btnOrange}>Book Now →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
