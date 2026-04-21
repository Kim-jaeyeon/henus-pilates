import { useEffect } from 'react';
import Lenis from 'lenis';
import type { StudioConfig } from './types/config';
import ThemeProvider from './theme/ThemeProvider';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Trainers from './components/sections/Trainers';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

interface Props {
  config: StudioConfig;
}

export default function App({ config }: Props) {
  const s = config.sections ?? {};

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.07, smoothWheel: true });
    (window as unknown as Record<string, unknown>).__lenis = lenis;
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); delete (window as unknown as Record<string, unknown>).__lenis; };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          io.unobserve(entry.target);
        }
      }),
      { threshold: 0.07, rootMargin: '0px 0px -60px 0px' }
    );
    const scan = () => document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  const show = {
    about:    s.about    !== false,
    programs: s.programs !== false,
    trainers: s.trainers !== false,
    gallery:  s.gallery  !== false,
    pricing:  s.pricing  !== false,
    location: s.location !== false,
    contact:  s.contact  !== false,
  };

  return (
    <ThemeProvider config={config}>
      <Nav studioName={config.studioName} logoUrl={config.logoUrl} sections={s} />

      <main>
        <Hero config={config.hero} variant={config.theme.heroVariant} />

        {show.gallery  && config.gallery  && <div id="gallery">  <Gallery  config={config.gallery} /></div>}
        {show.about    && config.about    && <div id="about">    <About    config={config.about} /></div>}
        {show.programs && config.programs && <div id="programs"> <Programs config={config.programs} /></div>}
        {show.trainers && config.trainers && <div id="trainers"> <Trainers config={config.trainers} /></div>}
        {show.pricing  && config.pricing  && <div id="pricing">  <Pricing  config={config.pricing} /></div>}
        {show.location && config.location && <div id="location"> <Location config={config.location} /></div>}
        {show.contact  && config.contact  && (
          <div id="contact">
            <Contact config={config.contact} />
          </div>
        )}
      </main>

      <Footer studioName={config.studioName} config={config.footer} />
    </ThemeProvider>
  );
}
