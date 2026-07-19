import About from "../components/About/About";
import Features from "../components/Features/Feature";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <Testimonial/>
      <Contact />
    </>
  );
}

export default Home;
