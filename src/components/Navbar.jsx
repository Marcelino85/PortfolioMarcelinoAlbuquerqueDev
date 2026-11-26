import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' }
];

export default function Navbar({ theme, onToggleTheme, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand-wordmark">
            {PROFILE.shortName}
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm header-resume-desktop"
              onClick={onOpenResume}
            >
              <FileText size={16} />
              <span>Currículo</span>
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <nav className="mobile-nav-drawer" aria-label="Navegação móvel">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={16} />
            <span>Ver Currículo</span>
          </button>
        </nav>
      )}
    </>
  );
}
