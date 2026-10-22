import {
  Atom,
  Braces,
  Code2,
  Database,
  Figma,
  Globe2,
  Layout,
  MonitorSmartphone,
  Palette,
  Wrench,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const capabilityList = [
  ["Frontend Development", "Interactive websites with HTML, CSS, Bootstrap, JavaScript and React.", Layout],
  ["UI/UX Design", "Intuitive interface layouts and design ideas explored in Figma.", Palette],
  ["Database Tools", "Working with SQL Server and structured data.", Database],
  ["Responsive Websites", "Experiences that adapt across screens.", MonitorSmartphone],
];

const categoryIcons = {
  html: Braces,
  css: Palette,
  javascript: Code2,
  bootstrap: Globe2,
  react: Atom,
  figma: Figma,
  database: Database,
};

const groupIcons = {
  Frontend: Code2,
  "UI/UX Design": Figma,
  Database,
};

export default function Skills() {
  const ratedSkills = portfolio.skills.filter((skill) => Number.isFinite(skill.level));
  const average = Math.round(
    ratedSkills.reduce((total, skill) => total + skill.level, 0) /
      ratedSkills.length,
  );
  const skillsByCategory = portfolio.skills.reduce((groups, skill) => {
    const categorySkills = groups[skill.category] || [];
    return { ...groups, [skill.category]: [...categorySkills, skill] };
  }, {});

  return (
    <section className="section-wrap skills-section" id="skills">
      <SectionHeading
        eyebrow="My skills"
        title={<>Technologies I <span>work with</span></>}
        description="I combine frontend development, interface design and database tools to build engaging digital experiences."
        centered
      />
      <div className="skills-layout">
        <div className="skill-categories">
          <div className="skill-category-list">
            {Object.entries(skillsByCategory).map(([category, skills]) => {
              const GroupIcon = groupIcons[category] || Code2;
              return (
                <div className="skill-category panel" key={category}>
                  <h3><GroupIcon size={17} /> {category}</h3>
                  <div className="skill-list">
                    {skills.map((skill) => {
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
              );
            })}
          </div>
          {ratedSkills.length > 0 && <p className="skills-footnote">Skill levels are self-assessed and reflect my current learning journey.</p>}
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
      <div className="learning-note"><Database size={15} /> Focused on frontend development, UI/UX design and continuing to build my software engineering skills.</div>
    </section>
  );
}
