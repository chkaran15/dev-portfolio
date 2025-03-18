import About from "@/components/pages/landing/about";
import Awards from "@/components/pages/landing/awards";
import Education from "@/components/pages/landing/education";
import Hero from "@/components/pages/landing/hero";
import Projects from "@/components/pages/landing/projects";
import Testimonials from "@/components/pages/landing/testominals";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Testimonials />
      <Awards />
    </>
  );
};

export default Home;
