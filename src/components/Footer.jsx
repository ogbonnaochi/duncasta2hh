import { useNavigate } from 'react-router-dom';
import { IMAGES, contact, GCAL_URL } from '../data/site';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'PHYSIOTHERAPY', path: '/services' },
  { label: 'OUR TEAM', path: '/team' },
  { label: 'CONDITIONS', path: '/conditions' },
  { label: 'CONTACT', path: '/contact' },
];

const partners = [
  { name: 'HCPC', fullName: 'Health and Care Professions Council', url: 'https://www.hcpc-uk.org' },
  { name: 'CSP', fullName: 'Chartered Society of Physiotherapy', url: 'https://www.csp.org.uk' },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.regBanner}>
        <div className={`container ${styles.regInner}`}>
          <span className={styles.regIcon}>✓</span>
          <span className={styles.regText}>
            All our physios are registered with the{' '}
            <strong>Health and Care Professional Council (HCPC)</strong> of UK and{' '}
            <strong>Chartered Society of Physiotherapy UK (CSP)</strong>
          </span>
          <div className={styles.regBadges}>
            <a href="https://www.hcpc-uk.org" target="_blank" rel="noopener noreferrer" className={styles.regBadge}>HCPC<span>Registered</span></a>
            <a href="https://www.csp.org.uk" target="_blank" rel="noopener noreferrer" className={styles.regBadge}>CSP<span>Member</span></a>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.brand}>
            <img src={IMAGES.logoFooter} alt="Doncaster Physio" className={styles.logo}
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
            <div className={styles.logoFallback} style={{ display:'none' }}>
              <span className={styles.logoBig}>DUNCASTA PHYSIO</span>
            </div>
            <p className={styles.brandDesc}>
              The Physiotherapists of Doncaster Physiotherapy and Sports Injury Clinic are dedicated
              to delivering individualised and effective treatments in pain relief and rehabilitation.
            </p>
            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {contact.address}
              </div>
              <a href={`tel:${contact.phone}`} className={`${styles.contactRow} ${styles.contactLink}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12 19.79 19.79 0 0 1 1.81 3.42 2 2 0 0 1 3.79 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {contact.phone}
              </a>
              {contact.emails.map(e => (
                <a key={e} href={`mailto:${e}`} className={`${styles.contactRow} ${styles.contactLink}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {e}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(({ label, path }) => (
                <li key={path + label}>
                  <button className={styles.footLink} onClick={() => navigate(path)}>{label}</button>
                </li>
              ))}
              <li><a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.footLink}>BOOK NOW</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Partners &amp; Associations</h4>
            <div className={styles.partnerCards}>
              {partners.map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.partnerCard}>
                  <div className={styles.partnerName}>{p.name}</div>
                  <div className={styles.partnerFull}>{p.fullName}</div>
                </a>
              ))}
            </div>
            <h4 className={styles.colTitle} style={{ marginTop: 28 }}>Opening Hours</h4>
            <div className={styles.hoursRow}>
              <span>Monday – Sunday</span>
              <span className={styles.hoursVal}>8:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© 2026 – Doncaster Physiotherapy | All Rights Reserved</span>
          <div className={styles.socials}>
            {[
              ['Facebook', contact.socials.facebook, <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>],
              ['Twitter', contact.socials.twitter, <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l16 16M4 20L20 4"/></svg>],
              ['LinkedIn', contact.socials.linkedin, <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>],
              ['Instagram', contact.socials.instagram, <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>],
            ].map(([label, url, icon]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label={label}>{icon}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
