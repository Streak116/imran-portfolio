import Image from "next/image";
import Hero from "@/../components/Hero";
import Education from "@/../components/Education";
import Work from "@/../components/Work";
import Skills from "@/../components/Skills";
import Projects from "@/../components/Projects";
import Contact from "@/../components/Contact";
import ScrollToTop from "@/../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div>
        <section id="about"><Hero /></section>
        <section id="education"><Education /></section>
        <section id="work"><Work /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
      <ScrollToTop />
    </>
  );
}
