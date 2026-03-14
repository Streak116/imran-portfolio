import Hero from "@/../components/Hero";
import Education from "@/../components/Education";
import Work from "@/../components/Work";
import Skills from "@/../components/Skills";
import Projects from "@/../components/Projects";
import Contact from "@/../components/Contact";
import ScrollToTop from "@/../components/ScrollToTop";
import Stats from "@/../components/Stats";
import About from "@/../components/About";

export default function Home() {
  return (
    <>
      <div>
        <section id="about"><Hero /></section>
        <Stats />
        <About />
        <section id="work"><Work /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </div>
      <ScrollToTop />
    </>
  );
}
