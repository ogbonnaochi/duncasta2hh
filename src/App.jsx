import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import useScrollReveal from './hooks/useScrollReveal';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesStrip from './components/ServicesStrip';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Conditions from './components/Conditions';
import Team from './components/Team';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  useScrollReveal();
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ServicesStrip />
        <About />
        <Services />
        <Testimonials />
        <Conditions />
        <Team />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
