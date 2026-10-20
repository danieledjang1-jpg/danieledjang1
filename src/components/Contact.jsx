import { useState } from "react";
import {
  CheckCircle2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
};

function ContactForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = {};
    ["name", "email", "service", "budget", "details"].forEach((field) => {
      if (!String(formData.get(field) || "").trim()) nextErrors[field] = "Please complete this field.";
    });
    const email = String(formData.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ type: "error", message: "Please check the highlighted fields." });
      form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch(portfolio.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "The message could not be sent.");
      }
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
      setErrors({});
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "The form service is unavailable. Please email me directly using the link below.",
      });
    } finally {
      setSending(false);
    }
  }

  const fieldError = (field) => errors[field]
    ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span>
    : null;

  return (
    <form className="contact-form panel" onSubmit={handleSubmit} noValidate>
      <h3>Send a message</h3>
      <div className="form-grid">
        <label>Full name
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => setErrors((current) => ({ ...current, name: "" }))} />
          {fieldError("name")}
        </label>
        <label>Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => setErrors((current) => ({ ...current, email: "" }))} />
          {fieldError("email")}
        </label>
        <label>Service required
          <select name="service" defaultValue="" required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} onChange={() => setErrors((current) => ({ ...current, service: "" }))}>
            <option value="" disabled>Select a service</option>
            {portfolio.contactServices.map((service) => <option key={service}>{service}</option>)}
          </select>
          {fieldError("service")}
        </label>
        <label>Project budget
          <select name="budget" defaultValue="" required aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "budget-error" : undefined} onChange={() => setErrors((current) => ({ ...current, budget: "" }))}>
            <option value="" disabled>Select a range</option>
            {portfolio.budgetRanges.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
          {fieldError("budget")}
        </label>
        <label className="form-full">Project details
          <textarea name="details" rows="4" placeholder="Tell me a little about the project..." required aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "details-error" : undefined} onChange={() => setErrors((current) => ({ ...current, details: "" }))} />
          {fieldError("details")}
        </label>
      </div>
      <button className="button button-primary submit-button" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send message"} <Send size={15} />
      </button>
      {status.message && (
        <p className={`form-status ${status.type}`} role="status">
          {status.type === "success" && <CheckCircle2 size={16} />}
          {status.message}
        </p>
      )}
      {status.type === "error" && (
        <a className="form-fallback" href={`mailto:${portfolio.email}?subject=Portfolio%20project%20enquiry`}>
          Email {portfolio.email} instead
        </a>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-copy">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Let&apos;s work <span>together</span></>}
          description="Have a project in mind? Send me a message and let's discuss how I can help."
        />
        <div className="contact-details">
          <a href={`mailto:${portfolio.email}`}><span><Mail size={18} /></span><div><small>Email</small>{portfolio.email}</div></a>
          <div><span><MapPin size={18} /></span><div><small>Location</small>{portfolio.location}</div></div>
        </div>
        <p className="availability-line"><span className="status-dot" /> {portfolio.availability}</p>
        <div className="contact-socials">
          {portfolio.socialLinks.filter((item) => socialIcons[item.label]).map((item) => {
            const Icon = socialIcons[item.label];
            return <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer"><Icon size={17} /></a>;
          })}
        </div>
        <div className="contact-portrait">
          <img src={portfolio.portrait} alt="" loading="lazy" />
          <span>I&apos;m ready to hear about your idea.</span>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
