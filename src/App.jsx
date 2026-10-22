import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Testimonials() {
  return (
    <section className="section-wrap testimonials-section" id="testimonials">
      <div className="testimonial-placeholder panel">
        <span className="eyebrow">Client feedback</span>
        <h2>Good work speaks through the people you work with.</h2>
        <p>Verified client feedback will be added here when it is available to share.</p>
        <a href="#contact">Start a conversation <ArrowRight size={15} /></a>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const sections = [...document.querySelectorAll("main > section")];
    document.body.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("reveal-section");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
      sections.forEach((section) => {
        section.classList.remove("reveal-section", "is-visible");
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
