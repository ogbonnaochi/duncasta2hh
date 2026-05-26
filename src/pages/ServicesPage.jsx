import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GCAL_URL } from '../data/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import styles from './ServicesPage.module.css';

const servicesList = [
  { title: 'Physiotherapy', desc: 'Comprehensive assessment and hands-on treatment for musculoskeletal conditions. Our physiotherapists assess your problem, diagnose the cause, and create a tailored treatment plan to get you back to full function.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop' },
  { title: 'Sports Injury Rehabilitation', desc: 'Targeted rehabilitation programmes designed to return athletes and active individuals to peak performance safely and efficiently, reducing the risk of re-injury.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80&fit=crop' },
  { title: 'Sports Massage', desc: 'Deep tissue and sports massage therapy to relieve muscle tension, reduce delayed onset muscle soreness, improve circulation, and accelerate recovery between training sessions.', img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=700&q=80&fit=crop' },
  { title: 'Back & Neck Pain', desc: 'Evidence-based treatment for acute and chronic spinal conditions including disc herniation, postural dysfunction, facet joint pain and nerve-related symptoms.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80&fit=crop' },
  { title: 'Mobility & Recovery', desc: 'Personalised mobility programmes designed to restore range of motion, improve flexibility, and build the movement quality needed for long-term health and performance.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80&fit=crop' },
  { title: 'Post-Operative Rehabilitation', desc: 'Structured post-surgical recovery plans that guide you through each phase of healing — rebuilding strength, stability and confidence after orthopaedic procedures.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop' },
  { title: 'Home Visits', desc: 'Professional physiotherapy delivered in the comfort of your own home for patients who are unable to travel to the clinic due to mobility limitations or acute injury.', img: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=700&q=80&fit=crop' },
  { title: 'Injection Therapy', desc: 'Information and referral for corticosteroid and hyaluronic acid injection treatments. Full injection service available upon completion of registration and clinical assessment.', img: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop' },
];

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span>
          </div>
          <h1>Our Services</h1>
          <p>A comprehensive range of physiotherapy services for individuals, businesses and insurers across Doncaster.</p>
        </div>
      </div>

      {/* Intro stats */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className="sec-label">WHAT WE OFFER</span>
              <h2 className="sec-heading">Expert Physiotherapy for Every Need</h2>
              <p className={styles.para}>At Doncaster Physiotherapy, we offer a range of services to help you recover and achieve your optimal health. From general physiotherapy and sports rehabilitation to specialised treatments, our experienced team will guide you through every step of your recovery journey.</p>
              <p className={styles.para}>All our physiotherapists are registered with the HCPC and CSP. No GP referral is needed — simply book online and we will take care of the rest.</p>
            </div>
            <div className={styles.statsGrid}>
              {[['8+','Years Experience'],['2,400+','Patients Treated'],['8','Services Offered'],['7 Days','A Week']].map(([n, l]) => (
                <div key={l} className={styles.statCard}>
                  <div className={styles.statNum}>{n}</div>
                  <div className={styles.statLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services alternating rows */}
      <section className={styles.servicesSection}>
        <div className="container">
          {servicesList.map((s, i) => (
            <div key={s.title} className={`${styles.row} ${i % 2 !== 0 ? styles.rowReversed : ''}`}>
              <div className={styles.rowImg}>
                <img src={s.img} alt={s.title}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop'; }} />
              </div>
              <div className={styles.rowText}>
                <span className={styles.rowNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.rowTitle}>{s.title}</h3>
                <p className={styles.rowDesc}>{s.desc}</p>
                <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-orange">Book This Service</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <p>Book an initial assessment and our team will recommend the best treatment plan for you.</p>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book an Assessment</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
