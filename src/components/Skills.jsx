import {
  Braces,
  Code2,
  Database,
  Globe2,
  Layout,
  MonitorSmartphone,
  Palette,
  Wrench,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const capabilityList = [
  ["Frontend Development", "Responsive, user-friendly interfaces.", Layout],
  ["Website Design", "Clean layouts for desktop and mobile.", Palette],
  ["Responsive Websites", "Experiences that adapt across screens.", MonitorSmartphone],
  ["Web Fundamentals", "HTML, CSS, JavaScript and Bootstrap.", Code2],
];

const categoryIcons = {
  html: Braces,
  css: Palette,
  javascript: Code2,
  bootstrap: Globe2,
};

export default function Skills() {
  const ratedSkills = portfolio.skills.filter((skill) => Number.isFinite(skill.level));
  const average = Math.round(
    ratedSkills.reduce((total, skill) => total + skill.level, 0) /
      ratedSkills.length,
  );

  return (
    <section className="section-wrap skills-section" id="skills">
      <SectionHeading
        eyebrow="My skills"
        title={<>Technologies I <span>work with</span></>}
        description="I work with modern frontend technologies to build responsive, user-friendly websites."
        centered
      />
      <div className="skills-layout">
        <div className="skill-categories">
          <div className="skill-category panel">
            <h3><Code2 size={17} /> Frontend</h3>
            <div className="skill-list">
              {portfolio.skills.map((skill) => {
                const Icon = categoryIcons[skill.icon] || Wrench;
                return (
                  <div className="skill-row" key={skill.name}>
                    <span className={`skill-icon skill-${skill.icon}`}><Icon size={17} /></span>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level ? `${skill.level}%` : "Used"}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="skills-footnote">Skill levels are self-assessed and reflect my current learning journey.</p>
        </div>
        <div className="skill-ring-wrap">
          <div className="skill-ring" style={{ "--progress": `${average}%` }}>
            <div><strong>{average}%</strong><span>Self-assessed<br />learning</span></div>
          </div>
          <span className="ring-caption">Growing through practice</span>
        </div>
        <div className="capabilities panel">
          <h3><Braces size={17} /> What I do</h3>
          {capabilityList.map(([title, description, Icon]) => (
            <div className="capability" key={title}>
              <span><Icon size={17} /></span>
              <div><h4>{title}</h4><p>{description}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="learning-note"><Database size={15} /> Focused on frontend development and continuing to build my software engineering skills.</div>
    </section>
  );
}
