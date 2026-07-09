import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Container from "@/components/layout/Container";


const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Container>
    
  );
};

export default Home;