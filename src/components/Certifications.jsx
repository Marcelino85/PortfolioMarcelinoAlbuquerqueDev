import React from 'react';
import { Award, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import {
  PROFILE,
  CERTIFICATIONS,
  EDUCATION,
  PRACTICAL_EXPERIENCE
} from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Formação & Credenciais</p>
          <h2 className="section-title">Certificações, formação acadêmica e vivência prática</h2>
          <p className="section-subtitle">
            Base formal em Análise e Desenvolvimento de Sistemas combinada com certificações oficiais AWS e experiência aplicada em sistemas corporativos.
          </p>
        </div>

        <div className="credentials-grid">
          <div className="credential-column">
            <div className="credential-col-header">
              <Award size={20} className="credential-col-icon" aria-hidden="true" />
              <h3 className="credential-col-title">Certificações</h3>
            </div>
            <div className="credential-list">
              {CERTIFICATIONS.map((cert) => (
                <article key={cert.title} className="credential-item">
                  <p className="credential-kicker">{cert.type}</p>
                  <h4 className="credential-item-title">{cert.title}</h4>
                  <p className="credential-org">{cert.issuer}</p>
                  <p className="credential-desc">{cert.description}</p>
                </article>
              ))}
            </div>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '14px',
                borderTop: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <span className="project-stack-line">Verificação oficial</span>
              <a
                href={PROFILE.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <span>Credly</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="credential-column">
            <div className="credential-col-header">
              <GraduationCap size={20} className="credential-col-icon" aria-hidden="true" />
              <h3 className="credential-col-title">Formação Acadêmica</h3>
            </div>
            <div className="credential-list">
              {EDUCATION.map((edu) => (
                <article key={edu.title} className="credential-item">
                  <p className="credential-kicker">{edu.type}</p>
                  <h4 className="credential-item-title">{edu.title}</h4>
                  <p className="credential-org">{edu.institution}</p>
                  <p className="credential-desc">{edu.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="credential-column">
            <div className="credential-col-header">
              <Briefcase size={20} className="credential-col-icon" aria-hidden="true" />
              <h3 className="credential-col-title">Vivência Prática</h3>
            </div>
            <div className="credential-list">
              {PRACTICAL_EXPERIENCE.map((exp) => (
                <article key={exp.title} className="credential-item">
                  <p className="credential-kicker">{exp.context}</p>
                  <h4 className="credential-item-title">{exp.title}</h4>
                  <p className="credential-desc">{exp.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
