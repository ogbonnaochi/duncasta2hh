import { contact, GCAL_URL } from '../data/site';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>GET IN TOUCH</span>
          <h2 className={styles.heading}>Contact Us</h2>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.infoCol} reveal-left`}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ),
                title: 'Our Address',
                val: contact.address,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12 19.79 19.79 0 0 1 1.81 3.42 2 2 0 0 1 3.79 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ),
                title: 'Phone',
                val: contact.phone,
                href: `tel:${contact.phone}`,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                ),
                title: 'Email',
                lines: contact.emails,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ),
                title: 'Opening Hours',
                val: contact.hours,
              },
            ].map(({ icon, title, val, lines, href }) => (
              <div key={title} className={styles.infoItem}>
                <div className={styles.iconWrap}>{icon}</div>
                <div>
                  <div className={styles.infoTitle}>{title}</div>
                  {lines ? (
                    lines.map(l => (
                      <a key={l} href={`mailto:${l}`} className={styles.infoLink}>{l}</a>
                    ))
                  ) : href ? (
                    <a href={href} className={styles.infoLink}>{val}</a>
                  ) : (
                    <div className={styles.infoVal}>{val}</div>
                  )}
                </div>
              </div>
            ))}

            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.bookBtn}>
              BOOK AN APPOINTMENT
            </a>
          </div>

          <div className={`${styles.mapCol} reveal-right`}>
            <iframe
              title="Doncaster Physio - Danum House, South Parade, Doncaster DN1 2DY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.354!2d-1.13522!3d53.52266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879784b0d14c4c9%3A0xb9f3b2c94a9b3b1a!2sDanum%20House%2C%20South%20Parade%2C%20Doncaster%20DN1%202DY!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
