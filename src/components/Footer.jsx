import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true">DE</span>
          <span>Daniel <strong>Edjang</strong></span>
        </a>
        <p>Frontend Web Developer · Port Harcourt, Nigeria</p>
        <a className="footer-email" href={`mailto:${portfolio.email}`}>{portfolio.email} <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Daniel Edjang</span>
      </div>
    </footer>
  );
}
