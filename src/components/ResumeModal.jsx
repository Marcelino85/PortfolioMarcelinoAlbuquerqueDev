import React, { useEffect, useState } from 'react';
import { X, Printer, Mail, Download } from 'lucide-react';
import { PROFILE, EDUCATION, RESUME_DETAILS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [printNotice, setPrintNotice] = useState('');
  useEffect(() => {
    if (!isOpen) return undefined;

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
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setPrintNotice('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    setPrintNotice('');

    let printStarted = false;
    const onBeforePrint = () => {
      printStarted = true;
    };

    window.addEventListener('beforeprint', onBeforePrint, { once: true });

    try {
      window.print();
    } catch {
      printStarted = false;
    }

    window.setTimeout(() => {
      window.removeEventListener('beforeprint', onBeforePrint);
      if (!printStarted) {
        setPrintNotice(
          'O ambiente de visualização bloqueia a janela de impressão direta. O PDF pronto para impressão foi baixado automaticamente.'
        );
        handleDownloadPdf();
      }
    }, 300);
  };

  const handleDownloadPdf = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      const { CV_PDF_BASE64 } = await import('../data/cvPdfBase64.js');
      const binaryString = window.atob(CV_PDF_BASE64);
      const length = binaryString.length;
      const bytes = new Uint8Array(length);

      for (let i = 0; i < length; i += 1) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: 'application/pdf' });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'CV-Marcelino-Albuquerque-Developer.pdf';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-panel resume-printable">
        <div className="modal-header no-print">
          <div>
            <p className="project-meta-line">Currículo Completo</p>
            <h3 id="resume-modal-title" className="modal-title">
              {PROFILE.fullName}
            </h3>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar currículo"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-sheet">
            <div className="resume-top">
              <h4 className="resume-name">{PROFILE.fullName}</h4>
              <p className="resume-role">{RESUME_DETAILS.roleLine}</p>
              <p className="resume-meta">
                Paulista/PE · {PROFILE.email} · {PROFILE.phone}
              </p>
              <p className="resume-meta" style={{ marginTop: '4px' }}>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  LinkedIn
                </a>{' '}
                ·{' '}
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {PROFILE.githubHandle}
                </a>{' '}
                ·{' '}
                <a
                  href={PROFILE.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Credly
                </a>
              </p>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Resumo Profissional</h5>
              <p className="project-desc">{RESUME_DETAILS.summary}</p>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Formação Acadêmica</h5>
              <ul className="modal-list">
                {EDUCATION.map((edu) => (
                  <li key={edu.title}>
                    <strong>{edu.title}</strong> – {edu.institution}
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Competências Comportamentais</h5>
              <p className="project-desc">
                {RESUME_DETAILS.behavioralSkills.join(' · ')}
              </p>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Competências Técnicas</h5>
              <ul className="modal-list">
                {RESUME_DETAILS.technicalSkills.map((group) => (
                  <li key={group.label}>
                    <strong>{group.label}:</strong> {group.items}
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Experiências Profissionais</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {RESUME_DETAILS.experiences.map((exp) => (
                  <div key={exp.role}>
                    <p
                      className="project-desc"
                      style={{ fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {exp.role}{' '}
                      <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>
                        | {exp.period}
                      </span>
                    </p>
                    <ul className="modal-list" style={{ marginTop: '6px' }}>
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Experiências Relevantes</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {RESUME_DETAILS.relevantProjects.map((proj) => (
                  <div key={proj.name}>
                    <p
                      className="project-desc"
                      style={{ fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {proj.name}
                    </p>
                    <ul className="modal-list" style={{ marginTop: '6px' }}>
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Cursos e Certificações</h5>
              <ul className="modal-list">
                {RESUME_DETAILS.coursesAndCertifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="resume-block">
              <h5 className="modal-section-title">Idiomas e Informações Adicionais</h5>
              <ul className="modal-list">
                {RESUME_DETAILS.languagesAndInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {printNotice && (
          <div
            className="no-print"
            role="status"
            style={{
              padding: '10px 24px',
              fontSize: '0.8125rem',
              backgroundColor: 'var(--accent-cyan-subtle)',
              color: 'var(--text-primary)',
              borderTop: '1px solid var(--border-hairline)'
            }}
          >
            {printNotice}
          </div>
        )}

        <div className="modal-footer no-print">
          <a href="#contato" className="btn btn-secondary btn-sm" onClick={onClose}>
            <Mail size={15} />
            <span>Ir para Contato</span>
          </a>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}>
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleDownloadPdf}
              disabled={isDownloading}
            >
              <Download size={15} />
              <span>{isDownloading ? 'Preparando PDF...' : 'Baixar PDF'}</span>
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
              <Printer size={15} />
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
