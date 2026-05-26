import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IMAGES, GCAL_URL } from '../data/site';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', path: '/', scrollTo: 'home' },
  { label: 'About Us', path: '/about', scrollTo: 'about' },
  {
    label: 'Services', path: '/services', scrollTo: 'services',
    children: [
      { label: 'Physiotherapy', path: '/services' },
      { label: 'Sports Massage', path: '/services' },
      { label: 'All Services', path: '/services' },
    ],
  },
  { label: 'Our Team', path: '/team', scrollTo: 'team' },
  { label: 'Conditions', path: '/conditions', scrollTo: 'conditions' },
  { label: 'Contact', path: '/contact', scrollTo: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNavClick = (item) => {
    setOpen(false);
    if (isHome && item.scrollTo) {
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <RouterLink to="/" className={styles.logo}>
          <img src={IMAGES.logo} alt="Doncaster Physio" className={styles.logoImg}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className={styles.logoFallback} style={{ display: 'none' }}>
            <span className={styles.logoBig}>DUNCASTA</span>
            <span className={styles.logoSmall}>PHYSIO</span>
          </div>
        </RouterLink>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.path + item.label} className={styles.navItem}
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className={`${styles.link} ${location.pathname === item.path ? styles.active : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
                {item.children && <ChevronDown size={13} style={{ marginLeft: 3 }} />}
              </button>
              {item.children && dropdown === item.label && (
                <ul className={styles.dropdown}>
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <RouterLink to={c.path} className={styles.dropLink}
                        onClick={() => setDropdown(null)}>
                        {c.label}
                      </RouterLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className={styles.bookBtn}>
          BOOK NOW
        </a>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {navItems.map((item) => (
            <button key={item.label} className={styles.mobileLink}
              onClick={() => handleNavClick(item)}>
              {item.label}
            </button>
          ))}
          <a href={GCAL_URL} target="_blank" rel="noopener noreferrer"
            className={styles.mobileBook} onClick={() => setOpen(false)}>
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  );
}
