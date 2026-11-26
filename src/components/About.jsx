import React from 'react';
import { PROFILE } from '../data/portfolioData';

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Sobre Mim</p>
          <h2 className="section-title">
            Disciplina operacional aplicada à engenharia de software e nuvem
          </h2>
          <p className="section-subtitle">
            Trajetória sólida em resolução de problemas, análise de processos de negócio e construção de aplicações web completas.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            {PROFILE.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-pillars">
            <h3 className="pillar-heading">Diferenciais Profissionais</h3>

            <div className="pillar-item">
              <h4 className="pillar-title">Capacidade Analítica & Maturidade Profissional</h4>
              <p className="pillar-desc">
                Pensamento estruturado para investigar cenários complexos, documentar requisitos com clareza e entregar soluções confiáveis com ética e responsabilidade.
              </p>
            </div>

            <div className="pillar-item">
              <h4 className="pillar-title">Visão Full Stack de Ponta a Ponta</h4>
              <p className="pillar-desc">
                Da modelagem relacional em MySQL/PostgreSQL e APIs seguras com JWT ao consumo responsivo em React.js com foco em usabilidade.
              </p>
            </div>

            <div className="pillar-item">
              <h4 className="pillar-title">Arquitetura & Atendimento em Nuvem AWS</h4>
              <p className="pillar-desc">
                Conhecimento prático em computação serverless, armazenamento em nuvem e fluxos inteligentes integrando Amazon Connect, Lex V2 e Lambda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
