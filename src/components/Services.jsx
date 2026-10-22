import {
  ArrowRight,
  Building2,
  Layout,
  Palette,
  PanelsTopLeft,
  TabletSmartphone,
  UserRound,
  Wrench,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const serviceIcons = {
  layout: Layout,
  design: Palette,
  building: Building2,
  user: UserRound,
  panels: PanelsTopLeft,
  wrench: Wrench,
  tablet: TabletSmartphone,
};

const formatNaira = (price) =>
  `NGN ${new Intl.NumberFormat("en-NG").format(price)}`;

export default function Services() {
  return (
    <section className="section-wrap services-section" id="services">
      <SectionHeading
        eyebrow="My services"
        title={<>What I can do <span>for you</span></>}
        description="Web development services for individuals and businesses looking to build or improve their online presence."
        centered
      />
      <div className="services-layout">
        <div className="services-grid">
          {portfolio.services.map((service) => {
            const Icon = serviceIcons[service.icon] || Layout;
            return (
              <article className="service-card panel" key={service.title}>
                <span className="service-icon"><Icon size={19} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
        <aside className="pricing-card panel">
          <span className="eyebrow">Affordable &amp; flexible</span>
          <h3>Starting price</h3>
          <p className="pricing-disclaimer">Editable sample guide prices — please confirm before publishing.</p>
          <ul>
            {portfolio.samplePricing.map((item) => (
              <li key={item.label}><span>{item.label}</span><strong>{formatNaira(item.price)}</strong></li>
            ))}
          </ul>
          <p className="pricing-note">Prices may vary based on project complexity.</p>
          <a className="button button-primary" href="#contact">Request a quote <ArrowRight size={16} /></a>
        </aside>
      </div>
      <div className="why-panel panel">
        <div><span className="eyebrow">Working together</span><h3>Thoughtful work, clear communication</h3></div>
        <p>Clean, responsive development, clear communication and careful attention to your project goals.</p>
        <a className="button button-secondary" href="#contact">Let&apos;s work together <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}
