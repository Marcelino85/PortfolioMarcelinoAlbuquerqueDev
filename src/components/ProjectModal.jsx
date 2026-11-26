import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <div>
            <p className="project-meta-line">{project.category}</p>
            <h3 id="project-modal-title" className="modal-title">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {project.screenshot && (
            <div className="browser-frame">
              <div className="browser-bar">
                <span className="browser-url">
                  {project.liveUrl.replace(/^https?:\/\//, '')}
                </span>
              </div>
              <div className="browser-viewport">
                <img
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          <div>
            <h4 className="modal-section-title">Visão Geral</h4>
            <p className="project-desc">{project.description}</p>
            {project.visualSummary && (
              <p className="project-desc" style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
                {project.visualSummary}
              </p>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="modal-section-title">Principais Funcionalidades</h4>
              <ul className="modal-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="case-study-block">
              <h4 className="case-study-heading">Desafios Técnicos Resolvidos</h4>
              <ul className="case-study-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="modal-section-title">Stack Tecnológica</h4>
            <p className="project-stack-line">{project.stack.join(' · ')}</p>
          </div>

          {project.competencies && project.competencies.length > 0 && (
            <div>
              <h4 className="modal-section-title">Competências Demonstradas</h4>
              <p className="project-stack-line">{project.competencies.join(' · ')}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Fechar
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>{project.ctaLabel || 'Acessar Projeto Online'}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
