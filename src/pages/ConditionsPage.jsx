import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { conditions, GCAL_URL } from '../data/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import styles from './ConditionsPage.module.css';

const conditionDetails = [
  { label: 'Ankle and Foot', detail: 'Ankle sprains, Achilles tendinopathy, plantar fasciitis, and metatarsal injuries treated with manual therapy and progressive rehab.' },
  { label: 'Back & Spine', detail: 'Disc herniation, facet joint dysfunction, sciatica, spondylosis and chronic lower back pain managed with hands-on treatment and exercise.' },
  { label: 'Hip and Groin', detail: 'Hip impingement, bursitis, labral tears, groin strains and snapping hip syndrome assessed and treated by specialist physios.' },
  { label: 'Knee', detail: 'Ligament sprains, meniscal injuries, patellofemoral pain, IT band syndrome and post-surgical knee rehab programmes.' },
  { label: 'Neck', detail: 'Cervicogenic headaches, whiplash, disc-related neck pain, nerve root irritation and postural neck dysfunction.' },
  { label: 'Pre/Post Surgery', detail: 'Prehabilitation to prepare for surgery and structured post-operative programmes to restore full strength and function.' },
  { label: 'Shoulder', detail: 'Rotator cuff injuries, shoulder impingement, frozen shoulder, AC joint problems and shoulder instability.' },
  { label: 'Soft Tissue Injuries', detail: 'Muscle strains, ligament sprains, contusions and tendon injuries across all body regions.' },
  { label: 'Sports Injuries', detail: 'Full range of acute and chronic sports injuries for athletes at all levels — from weekend warriors to elite competitors.' },
];

export default function ConditionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Conditions</span>
          </div>
          <h1>Common Conditions Treated</h1>
          <p>We treat more than the pain — we treat the cause of the problem, so your recovery is faster and more lasting.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="sec-label">WHAT WE TREAT</span>
            <h2 className="sec-heading">Conditions We Specialise In</h2>
            <p className={styles.sub}>Our physiotherapists are experienced in treating a wide range of musculoskeletal and sports-related conditions.</p>
          </div>

          {/* Clean uniform 3-column grid - same as homepage */}
          <div className={styles.grid}>
            {conditions.map((c, i) => (
              <div key={c.label} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={c.img} alt={c.label} className={styles.img}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&q=80&fit=crop'; }} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{c.label}</h3>
                  <p className={styles.cardDetail}>{conditionDetails[i]?.detail}</p>
                  <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>Book Now →</a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.notFound}>
            <h3 className={styles.notFoundTitle}>Can't find your condition?</h3>
            <p className={styles.notFoundText}>We treat a wide range of musculoskeletal and sports conditions. Contact us and we'll advise whether we can help.</p>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-orange">Book an Assessment</a>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Helping you get better, feel better and stay better.</h2>
          <p>Book your appointment online — no GP referral needed. Open 7 days a week.</p>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book an Appointment</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
