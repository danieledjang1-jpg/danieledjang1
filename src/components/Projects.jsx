import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const filters = ["All", "Full Stack", "Frontend", "Backend"];

function ProjectCard({ project }) {
  return (
    <article className="project-card panel">
      <a className="project-image" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-image-action"><ArrowUpRight size={18} /></span>
      </a>
      <div className="project-content">
        <div className="project-heading"><h3>{project.title}</h3><span>{project.category}</span></div>
        <p>{project.description}</p>
        <div className="technology-tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-actions">
          {project.liveUrl && <a className="button button-primary button-small" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live demo</a>}
          {project.repositoryUrl && <a className="button button-secondary button-small" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Code2 size={14} /> View code</a>}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(
    () => filter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section className="section-wrap projects-section" id="projects">
      <div className="projects-heading-row">
        <SectionHeading
          eyebrow="My portfolio"
          title={<>Featured <span>projects</span></>}
          description="A selection of projects I've built and shared."
        />
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              className={filter === item ? "filter-button selected" : "filter-button"}
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {visibleProjects.length ? (
        <div className="projects-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : (
        <div className="empty-projects panel">
          No {filter.toLowerCase()} projects are listed yet. Check back as the portfolio grows.
        </div>
      )}
    </section>
  );
}
