import React from 'react';
import { ArrowDownRight, FileText, Github, Linkedin, MapPin, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-split">
          <div className="hero-main">
            <div className="hero-meta-line">
              <span>{PROFILE.location}</span>
              <span aria-hidden="true">·</span>
              <span className="hero-meta-accent">AWS Certified Cloud Practitioner</span>
            </div>

            <h1 className="hero-title">{PROFILE.fullName}</h1>

            <p className="hero-role">{PROFILE.headline}</p>

            <p className="hero-summary">{PROFILE.heroSummary}</p>

            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">
                <span>Explorar Projetos</span>
                <ArrowDownRight size={18} />
              </a>

              <button type="button" className="btn btn-secondary" onClick={onOpenResume}>
                <FileText size={18} />
                <span>Currículo</span>
              </button>
            </div>

            <div className="hero-social-links">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <Github size={17} />
                <span>{PROFILE.githubHandle}</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <aside className="hero-dossier" aria-label="Resumo técnico e credenciais">
            <div className="dossier-header">
              <div>
                <h2 className="dossier-title">Perfil de Engenharia & Nuvem</h2>
                <p className="dossier-subtitle">Foco em entregas Full Stack e arquitetura AWS</p>
              </div>
              <ShieldCheck size={22} color="var(--accent-aws)" aria-hidden="true" />
            </div>

            <ul className="dossier-list">
              <li className="dossier-item">
                <span className="dossier-item-label">Especialidade Principal</span>
                <span className="dossier-item-value">
                  React.js, Node.js, Express, APIs REST & Python
                </span>
              </li>
              <li className="dossier-item">
                <span className="dossier-item-label">Cloud & Dados</span>
                <span className="dossier-item-value">
                  AWS (EC2, S3, Lambda, Connect, Lex), MySQL, PostgreSQL & Firebase
                </span>
              </li>
              <li className="dossier-item">
                <span className="dossier-item-label">Certificações Oficiais</span>
                <span className="dossier-item-value">
                  AWS Certified Cloud Practitioner · Amazon Connect
                </span>
              </li>
              <li className="dossier-item">
                <span className="dossier-item-label">Vivência Corporativa</span>
                <span className="dossier-item-value">
                  ERP Sankhya · ServiceNow · Guarda Chuva Software
                </span>
              </li>
            </ul>

            <div className="dossier-footer">
              <span className="dossier-location">
                <MapPin size={15} aria-hidden="true" />
                <span>{PROFILE.availability}</span>
              </span>
              <a href="#contato" className="text-link">
                <span>Entrar em contato</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="hero-proof-strip" aria-label="Destaques da trajetória">
          {PROFILE.highlights.map((item) => (
            <div key={item.value} className="proof-cell">
              <p className="proof-value">{item.value}</p>
              <p className="proof-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
