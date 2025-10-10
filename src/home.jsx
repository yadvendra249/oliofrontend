import React from "react";
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import About from './components/about';
import Booking from './components/booking';
import Packages from './components/plan-package';
import Blog from './components/blog';
import FAQ from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <Packages />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;