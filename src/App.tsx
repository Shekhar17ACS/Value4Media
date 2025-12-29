import useSmoothScroll from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesShowcase from './components/ServicesShowcase';
import Process from './components/Process';
import BrandFriend from './components/BrandFriend';
import WorkShowcase from './components/WorkShowcase';
import ClientMarquee from './components/ClientMarquee';
import Testimonials from './components/Testimonials';
import StillConfused from './components/StillConfused';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

function App() {
  useSmoothScroll();

  return (
    <div className="relative">
      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <ServicesShowcase />
      <Process />
      <BrandFriend />
      <WorkShowcase />
      <ClientMarquee />
      <Testimonials />
      <StillConfused />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
