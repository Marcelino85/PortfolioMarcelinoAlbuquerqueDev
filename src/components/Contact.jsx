import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (status.type) {
      setStatus({ type: '', text: '' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setStatus({
        type: 'error',
        text: `Não foi possível copiar automaticamente. E-mail: ${PROFILE.email}`
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedSubject = formState.subject.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: 'error',
        text: 'Preencha seu nome, e-mail e mensagem antes de enviar.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        text: 'Informe um endereço de e-mail válido.'
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(
      trimmedSubject || `Contato via Portfólio — ${trimmedName}`
    );
    const mailtoBody = encodeURIComponent(
      `Nome: ${trimmedName}\nE-mail: ${trimmedEmail}\n\nMensagem:\n${trimmedMessage}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus({
      type: 'success',
      text: 'Mensagem preparada no seu cliente de e-mail. Você também pode copiar meu endereço ao lado.'
    });
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Contato</p>
          <h2 className="section-title">Vamos conversar sobre oportunidades e projetos</h2>
          <p className="section-subtitle">
            {PROFILE.location} — {PROFILE.availability}.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div>
              <h3 className="dossier-title">Canais Diretos</h3>
              <p className="dossier-subtitle">
                Disponível para vagas Júnior Full Stack, Backend, Cloud AWS ou projetos freelance.
              </p>
            </div>

            <div className="contact-channels">
              <div className="contact-channel-row">
                <div className="contact-channel-main">
                  <Mail size={18} color="var(--accent-primary)" aria-hidden="true" />
                  <div style={{ minWidth: 0 }}>
                    <span className="contact-channel-label">E-mail</span>
                    <span className="contact-channel-value">{PROFILE.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={handleCopyEmail}
                  aria-label="Copiar endereço de e-mail"
                >
                  {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-row"
              >
                <div className="contact-channel-main">
                  <Github size={18} color="var(--accent-primary)" aria-hidden="true" />
                  <div style={{ minWidth: 0 }}>
                    <span className="contact-channel-label">GitHub</span>
                    <span className="contact-channel-value">{PROFILE.githubHandle}</span>
                  </div>
                </div>
                <span className="text-link">Abrir</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-row"
              >
                <div className="contact-channel-main">
                  <Linkedin size={18} color="var(--accent-primary)" aria-hidden="true" />
                  <div style={{ minWidth: 0 }}>
                    <span className="contact-channel-label">LinkedIn</span>
                    <span className="contact-channel-value">Marcelino Albuquerque</span>
                  </div>
                </div>
                <span className="text-link">Conectar</span>
              </a>

              <div className="contact-channel-row">
                <div className="contact-channel-main">
                  <MapPin size={18} color="var(--accent-aws)" aria-hidden="true" />
                  <div style={{ minWidth: 0 }}>
                    <span className="contact-channel-label">Localização</span>
                    <span className="contact-channel-value">{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="contact-name" className="form-label">
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="form-label">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="voce@empresa.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject" className="form-label">
                Assunto
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Ex: Oportunidade Desenvolvedor Full Stack Júnior"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message" className="form-label">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Compartilhe detalhes sobre a vaga, projeto ou contato..."
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.text && (
              <div
                className={`form-feedback ${
                  status.type === 'success' ? 'is-success' : 'is-error'
                }`}
                role="status"
              >
                {status.type === 'success' ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <AlertCircle size={16} aria-hidden="true" />
                )}
                <span>{status.text}</span>
              </div>
            )}

            <div>
              <button type="submit" className="btn btn-primary">
                <Send size={16} />
                <span>Enviar Mensagem</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
