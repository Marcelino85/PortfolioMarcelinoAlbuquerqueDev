import React, { useState } from 'react';
import { ExternalLink, Layers, FolderGit2, ImageOff } from 'lucide-react';
import {
  FEATURED_PROJECT,
  SECONDARY_PROJECTS,
  COMPLEMENTARY_PROJECTS
} from '../data/portfolioData';

function ProjectScreenshot({ src, alt, url, title }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="browser-frame">
      <div className="browser-bar">
        <span className="browser-url">{url.replace(/^https?:\/\//, '')}</span>
      </div>
      <div className="browser-viewport">
        {hasError ? (
          <div className="image-fallback">
            <ImageOff size={28} aria-hidden="true" />
            <span>{title}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Projetos em Destaque</p>
          <h2 className="section-title">Soluções web, arquitetura Full Stack e nuvem</h2>
          <p className="section-subtitle">
            Aplicações reais em produção focadas em regras de negócio, autenticação segura, experiência do usuário e automação serverless.
          </p>
        </div>

        {/* Projeto 1: Destaque Principal - CodeBook */}
        <article className="featured-project-card">
          <div className="featured-project-grid">
            <div className="project-media-pane">
              <ProjectScreenshot
                src={FEATURED_PROJECT.screenshot}
                alt={FEATURED_PROJECT.screenshotAlt}
                url={FEATURED_PROJECT.liveUrl}
                title={FEATURED_PROJECT.shortTitle}
              />
            </div>

            <div className="featured-project-body">
              <div>
                <p className="project-meta-line">{FEATURED_PROJECT.category}</p>
                <h3 className="project-title-lg">{FEATURED_PROJECT.title}</h3>
                <p className="project-desc">{FEATURED_PROJECT.description}</p>
              </div>

              <div className="case-study-block">
                <h4 className="case-study-heading">Desafios Técnicos Resolvidos</h4>
                <ul className="case-study-list">
                  {FEATURED_PROJECT.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="project-stack-line">
                  <strong>Stack:</strong> {FEATURED_PROJECT.stack.join(' · ')}
                </p>

                <div className="project-actions">
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Acessar Projeto Online</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSelectProject(FEATURED_PROJECT)}
                  >
                    <Layers size={16} />
                    <span>Ver Detalhes Técnicos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Projetos 2 e 3: Simulado FGV & Oliveira Remodelação */}
        <div className="projects-grid-2">
          {SECONDARY_PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-media">
                <ProjectScreenshot
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  url={project.liveUrl}
                  title={project.shortTitle}
                />
              </div>

              <div className="project-card-body">
                <div>
                  <p className="project-meta-line">{project.category}</p>
                  <h3 className="project-title-md">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div>
                  <p className="project-stack-line">
                    <strong>Stack:</strong> {project.stack.join(' · ')}
                  </p>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>{project.ctaLabel}</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onSelectProject(project)}
                    >
                      <span>Detalhes</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Projetos Complementares */}
        <div>
          <h3 className="complementary-heading">Projetos Complementares & Arquitetura</h3>
          <div className="complementary-grid">
            {COMPLEMENTARY_PROJECTS.map((item) => (
              <article key={item.id} className="complementary-card">
                <div>
                  <div className="complementary-top">
                    <div>
                      <p className="project-meta-line">{item.category}</p>
                      <h4 className="complementary-title">{item.title}</h4>
                    </div>
                    <FolderGit2 size={20} color="var(--text-muted)" aria-hidden="true" />
                  </div>
                  <p className="project-desc" style={{ marginTop: '10px' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    flexWrap: 'wrap',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-hairline)'
                  }}
                >
                  <span className="project-stack-line">
                    <strong>Tecnologias:</strong> {item.stack.join(' · ')}
                  </span>
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
