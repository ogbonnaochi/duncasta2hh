import styles from './Partners.module.css';

// Using HCPC and CSP as the two partners (from the flyer)
const partners = [
  {
    name: 'HCPC',
    fullName: 'Health and Care Professions Council',
    url: 'https://www.hcpc-uk.org',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Health_and_Care_Professions_Council_logo.svg/1200px-Health_and_Care_Professions_Council_logo.svg.png',
  },
  {
    name: 'CSP',
    fullName: 'Chartered Society of Physiotherapy',
    url: 'https://www.csp.org.uk',
    logo: 'https://www.csp.org.uk/sites/default/files/2019-11/csp_logo_0.png',
  },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>ASSOCIATIONS</span>
          <h2 className={styles.heading}>Partners &amp; Associations</h2>
        </div>
        <div className={styles.grid}>
          {partners.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal delay-${i + 1}`}
            >
              <img
                src={p.logo}
                alt={p.fullName}
                className={styles.logo}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className={styles.fallback} style={{ display: 'none' }}>
                <div className={styles.fallbackName}>{p.name}</div>
                <div className={styles.fallbackFull}>{p.fullName}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
