import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { team, GCAL_URL } from '../data/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import styles from './TeamPage.module.css';

const fallbacks = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80&fit=crop&crop=face',
];

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Our Team</span>
          </div>
          <h1>Meet Our Team</h1>
          <p>Highly experienced, HCPC and CSP registered physiotherapists committed to your recovery.</p>
        </div>
      </div>

      {/* Team cards */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="sec-label">OUR EXPERTS</span>
            <h2 className="sec-heading">Expert Physiotherapists</h2>
            <p className={styles.sub}>All our physiotherapists are registered with the Health and Care Professions Council (HCPC) and the Chartered Society of Physiotherapy (CSP).</p>
          </div>

          <div className={styles.grid}>
            {team.map((member, i) => (
              <div key={member.name} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={member.img} alt={member.name} className={styles.img}
                    onError={e => { e.target.src = fallbacks[i]; }} />
                  <div className={styles.imgOverlay} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.role}>{member.role}</div>
                  <p className={styles.bio}>{member.bio}</p>
                  <div className={styles.tags}>
                    <span className={styles.tag}>HCPC Registered</span>
                    <span className={styles.tag}>CSP Member</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.note}>* Placeholder photos — replace with real team photos before going live.</p>
        </div>
      </section>

      {/* What patients can expect */}
      <section className={styles.expectSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="sec-label">OUR COMMITMENT</span>
            <h2 className="sec-heading">What Every Patient Can Expect</h2>
          </div>
          <div className={styles.expectGrid}>
            {[
              ['A thorough initial assessment', 'We take time to fully understand your condition, history and goals before beginning any treatment.'],
              ['A personalised treatment plan', 'No two patients are the same. Every plan is tailored specifically to your body and your recovery goals.'],
              ['Clear communication', 'We explain everything in plain language — what is wrong, why it happened, and exactly how we will fix it.'],
              ['Ongoing support', 'We monitor your progress closely and adjust your treatment plan as your recovery develops.'],
            ].map(([title, desc]) => (
              <div key={title} className={styles.expectCard}>
                <div className={styles.expectTick}>✓</div>
                <h3 className={styles.expectTitle}>{title}</h3>
                <p className={styles.expectDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Ready to meet the team?</h2>
          <p>Book your first appointment online — no GP referral needed.</p>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book an Appointment</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
