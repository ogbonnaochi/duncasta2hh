import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, whyUs, GCAL_URL } from '../data/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About Us</span>
          </div>
          <h1>About Doncaster Physiotherapy</h1>
          <p>Dedicated to delivering individualised, effective treatments in pain relief and rehabilitation.</p>
        </div>
      </div>

      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.textCol}>
              <span className="sec-label">WHO WE ARE</span>
              <h2 className="sec-heading">About Doncaster Physiotherapy</h2>
              <p className={styles.para}>The Physiotherapists of Doncaster Physiotherapy and Sports Injury Clinic are dedicated to delivering individualised and effective treatments in pain relief and rehabilitation for a variety of conditions.</p>
              <p className={styles.para}>With over 30 years combined expertise, our skilled physiotherapists offer specialist knowledge, expert care, and a commitment to improving your physical health and condition, while minimising the risk of recurrence.</p>
              <p className={styles.para}>All our physiotherapists are registered with the Health and Care Professions Council (HCPC) and the Chartered Society of Physiotherapy (CSP), ensuring the highest standard of care for every patient.</p>
              <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-orange" style={{ marginTop: 20 }}>Book an Appointment</a>
            </div>
            <div className={styles.imgCol}>
              <img src={IMAGES.aboutImg} alt="About Doncaster Physio" className={styles.img}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="sec-label">OUR STRENGTHS</span>
            <h2 className="sec-heading">Why Choose Us?</h2>
          </div>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <img src={w.img} alt={w.title} className={styles.whyIcon}
                    onError={e => { e.target.style.display = 'none'; }} />
                </div>
                <p className={styles.whyText}>{w.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="sec-label">OUR VALUES</span>
            <h2 className="sec-heading">What Drives Us</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Patient-Centred Care', desc: 'Every treatment plan is individually tailored to you — your body, your goals, your lifestyle. We listen first, then treat.' },
              { title: 'Evidence-Based Practice', desc: 'We use only clinically proven, research-backed techniques to ensure the most effective outcomes for every patient.' },
              { title: 'Continuous Development', desc: 'Our team regularly undergoes ongoing professional development to stay current with the latest advances in physiotherapy.' },
              { title: 'Accessible & Fast', desc: 'Open 7 days a week with no GP referral needed. We make it easy to get the care you need, when you need it.' },
            ].map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueNum}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer orange CTA band */}
      <div className="cta-band">
        <div className="container">
          <h2>Ready to Start Your Recovery?</h2>
          <p>Book directly — no GP referral needed. Open Monday to Sunday, 8am – 7pm.</p>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book an Appointment</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
