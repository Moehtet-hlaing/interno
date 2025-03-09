import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './components/hero/HeroSection'
import GridImage from './components/hero/GridImage'
import Header from './components/header/Header'
import Steps from './components/steps/Steps'
import About from './components/about/About'
import TestimonialSection from './components/testimonial/TestimonialSection'
import Brands from './components/brands/Brands'
import Work from './components/work/Work'
import Stats from './components/stats/Stats'
import News from './components/news/News'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'

const App = () => {
  // useEffect(() => {
  //   console.log("AOS");
  //   AOS.init({
  //     duration: 800, // Smooth and slower animation
  //     offset: 0, // Starts later in the viewport
  //     easing: 'ease-in-sine',
  //     once: false,
  //   });
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  
    setTimeout(() => {
      AOS.refreshHard(); // Force refresh animations
    }, 1000);
  }, []);
  
  return (

<main className='max-w-[1920px] mx-auto bg-white'>
      <Header />
      <GridImage />
      <HeroSection />
      <Steps />
      <About />
      <TestimonialSection />
      <Brands />
      <Work />
      <Stats />
      <News />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App