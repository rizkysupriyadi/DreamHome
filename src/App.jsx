import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <WhyChooseUs />
      </div>

      <div data-aos="zoom-in-up">
        <FeaturedProperties />
      </div>

      <div data-aos="fade-left">
        <Testimonials />
      </div>

      <div data-aos="flip-up">
        <CTA />
      </div>

      <Footer />
    </div>
  );
}

export default App;
