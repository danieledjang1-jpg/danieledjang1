import {
  ArrowRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const qualities = [
  ["Problem solver", "I enjoy breaking down a challenge and finding a clear solution.", CheckCircle2],
  ["Fast learner", "I keep learning and growing my frontend development skills.", ArrowRight],
  ["Team player", "I value communication and working together toward a shared goal.", UserRound],
  ["Detail oriented", "I care about thoughtful layouts and a polished user experience.", CheckCircle2],
];

export default function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="about-copy">
        <SectionHeading
          eyebrow="About me"
          title={<>Turning ideas into <span>digital reality</span></>}
          description={portfolio.biography}
        />
        <div className="quality-grid">
          {qualities.map(([title, description, Icon]) => (
            <article className="quality-card panel" key={title}>
              <Icon size={18} />
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <div className="about-actions">
          <a className="button button-primary" href={portfolio.cv} download>
            <Download size={16} /> Download CV
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <aside className="personal-card panel">
        <div className="personal-photo">
          <img src={portfolio.portrait} alt="" loading="lazy" />
        </div>
        <div className="personal-info">
          <span className="eyebrow">Personal information</span>
          <div><UserRound size={16} /><span><small>Full name</small>{portfolio.name}</span></div>
          <div><MapPin size={16} /><span><small>Location</small>{portfolio.location}</span></div>
          <div><Mail size={16} /><span><small>Email</small><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></span></div>
          <div className="availability"><span className="status-dot" />{portfolio.availability}</div>
        </div>
      </aside>
    </section>
  );
}
