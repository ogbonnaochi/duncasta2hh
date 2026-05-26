import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contact, GCAL_URL } from '../data/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out by phone, email or book directly online.</p>
        </div>
      </div>

      {/* Contact grid */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            <div className={styles.infoCol}>
              <span className="sec-label">GET IN TOUCH</span>
              <h2 className="sec-heading">We're Here to Help</h2>
              <p className={styles.para}>Whether you have a question about a specific condition, want to know more about our services, or are ready to book — our friendly team is here to help.</p>

              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>Our Address</div>
                    <div className={styles.itemVal}>{contact.address}</div>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12 19.79 19.79 0 0 1 1.81 3.42 2 2 0 0 1 3.79 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>Phone</div>
                    <a href={`tel:${contact.phone}`} className={styles.itemLink}>{contact.phone}</a>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>Email</div>
                    {contact.emails.map(e => (
                      <a key={e} href={`mailto:${e}`} className={styles.itemLink} style={{ display: 'block' }}>{e}</a>
                    ))}
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className={styles.itemTitle}>Opening Hours</div>
                    <div className={styles.itemVal}>{contact.hours}</div>
                  </div>
                </div>
              </div>

              <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-orange" style={{ marginTop: 8 }}>
                Book an Appointment
              </a>
            </div>

            <div className={styles.mapCol}>
              <iframe
                title="Doncaster Physio — Danum House, South Parade, Doncaster DN1 2DY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.354!2d-1.13522!3d53.52266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879784b0d14c4c9%3A0xb9f3b2c94a9b3b1a!2sDanum%20House%2C%20South%20Parade%2C%20Doncaster%20DN1%202DY!5e0!3m2!1sen!2suk!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className={styles.badgesSection}>
        <div className="container">
          <div className={styles.badgesGrid}>
            {[
              ['No GP Referral Needed', 'Book directly without waiting for a GP referral.'],
              ['Fast Appointments', 'Rapid appointment availability so you can start recovery quickly.'],
              ['Open 7 Days', 'Monday to Sunday, 8am – 7pm, fitting around your schedule.'],
              ['HCPC & CSP Registered', 'All physiotherapists fully registered with both regulatory bodies.'],
            ].map(([title, desc]) => (
              <div key={title} className={styles.badgeCard}>
                <div className={styles.badgeTick}>✓</div>
                <div className={styles.badgeTitle}>{title}</div>
                <div className={styles.badgeDesc}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Ready to Book Your Appointment?</h2>
          <p>No GP referral needed. Book online via Google Calendar and we'll confirm by email.</p>
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book Now</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
