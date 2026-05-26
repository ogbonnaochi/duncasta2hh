import { IMAGES, GCAL_URL, whyUs } from '../data/site';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        {/* About Block */}
        <div className={styles.aboutGrid}>
          <div className={`${styles.textCol} reveal-left`}>
            <h2 className={styles.heading}>About Doncaster Physiotherapy</h2>
            <p className={styles.para}>
              The Physiotherapists of Doncaster Physiotherapy and Sports Injury Clinic are dedicated to
              delivering individualised and effective treatments in pain relief and rehabilitation for
              a variety of conditions.
            </p>
            <p className={styles.para}>
              With over 30 years combined expertise, our skilled physiotherapists offer specialist
              knowledge, expert care, and a commitment to improving your physical health and condition,
              while minimising the risk of recurrence.
            </p>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              Know More About Us
            </a>
          </div>
          <div className={`${styles.imgCol} reveal-right`}>
            <img
              src={IMAGES.aboutImg}
              alt="About Doncaster Physiotherapy"
              className={styles.img}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop'; }}
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className={styles.whySection}>
          <h2 className={`${styles.whyTitle} reveal`}>Why Choose Us?</h2>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div key={i} className={`${styles.whyCard} reveal delay-${i + 1}`}>
                <div className={styles.whyImgWrap}>
                  <img
                    src={w.img}
                    alt={w.title}
                    className={styles.whyImg}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p className={styles.whyText}>{w.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
