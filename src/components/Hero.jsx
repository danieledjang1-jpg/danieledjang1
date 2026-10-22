import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Atom,
  Code2,
  Database,
  Download,
  Facebook,
  Figma,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook,
};

const toolIcons = {
  html: Code2,
  css: Code2,
  javascript: Code2,
  bootstrap: Globe2,
  react: Atom,
  figma: Figma,
  database: Database,
};

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> Hello, I&apos;m</span>
        <h1>{portfolio.firstName} <span>{portfolio.lastName}</span></h1>
        <p className="hero-title">{portfolio.title}</p>
        <p className="hero-description">{portfolio.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Hire Me <ArrowRight size={16} />
          </a>
          <a className="button button-secondary" href="#projects">
            View My Projects <Code2 size={16} />
          </a>
          <a className="button button-outline" href={portfolio.cv} download>
            <Download size={16} /> Download CV
          </a>
        </div>
        <div className="hero-socials" aria-label="Contact and social profiles">
          <a href={`mailto:${portfolio.email}`}><Mail size={16} /> Email</a>
          {portfolio.whatsapp && (
            <a href={`https://wa.me/${portfolio.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
          )}
          {portfolio.socialLinks.filter((item) => socialIcons[item.label]).map((item) => {
            const Icon = socialIcons[item.label];
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <Icon size={16} /> {item.label}
              </a>
            );
          })}
        </div>
        <div className="hero-stats">
          {portfolio.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="portrait-frame">
          <img src={portfolio.portrait} alt="Portrait of Daniel Edjang" />
        </div>
        <div className="tech-float panel">
          <span className="tech-float-title">Tools I work with</span>
          <div className="tech-float-list">
            {portfolio.skills.map((skill) => {
              const Icon = toolIcons[skill.icon] || Code2;
              return <span key={skill.name}><Icon size={14} /> {skill.name}</span>;
            })}
          </div>
        </div>
        <div className="hero-note">Let&apos;s build<br />something great <ArrowDownRight size={28} /></div>
        <a href="#about" className="scroll-hint">
          Scroll down <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
