import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {currentYear} {PROFILE.fullName}. {PROFILE.location}.
        </p>

        <div className="footer-links">
          <a href="#sobre">Sobre Mim</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#formacao">Formação</a>
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#inicio" className="text-link">
            <ArrowUp size={15} />
            <span>Topo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
