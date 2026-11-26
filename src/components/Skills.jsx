import React, { useState } from 'react';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS = {
  frontend: Code2,
  backend: Server,
  'database-cloud': Database,
  'tools-systems': Wrench
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Stack Tecnológica</p>
          <h2 className="section-title">Tecnologias e ferramentas de atuação</h2>
          <p className="section-subtitle">
            Competências aplicadas no desenvolvimento de interfaces web, APIs REST, persistência de dados, infraestrutura AWS e sistemas corporativos.
          </p>
        </div>

        <div className="skills-toolbar" role="tablist" aria-label="Filtrar habilidades por categoria">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`filter-tab ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todas
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === category.id}
              className={`filter-tab ${activeFilter === category.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleCategories.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.id] || Code2;
            return (
              <article key={category.id} className="skill-category-card">
                <div className="skill-cat-header">
                  <div>
                    <h3 className="skill-cat-title">{category.title}</h3>
                    <p className="skill-cat-sub">{category.subtitle}</p>
                  </div>
                  <IconComponent size={22} className="skill-cat-icon" aria-hidden="true" />
                </div>

                <ul className="skill-list">
                  {category.items.map((skill) => (
                    <li key={skill.name} className="skill-entry">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-detail">{skill.detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
