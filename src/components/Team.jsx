import { team } from '../data/site';
import styles from './Team.module.css';

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>OUR EXPERTS</span>
          <h2 className={styles.heading}>Meet Our Team</h2>
        </div>
        <div className={styles.grid}>
          {team.map((member, i) => (
            <div key={member.name} className={`${styles.card} reveal delay-${i + 1}`}>
              <div className={styles.imgWrap}>
                <img
                  src={member.img}
                  alt={member.name}
                  className={styles.img}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-${i === 0 ? '1612349317150-e413f6a5b16d' : i === 1 ? '1594824476967-48c8b964273f' : '1582750433449-648ed127bb54'}?w=400&q=80&fit=crop&crop=face`;
                  }}
                />
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
      </div>
    </section>
  );
}
