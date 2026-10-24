'use client'

import { useEffect, useState } from 'react'
import {
  detectLocale,
  getDictionary,
  persistLocale,
  type Locale,
} from '@/lib/i18n'

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M17 7H8M17 7v9" />
    </svg>
  )
}

function Stars({ label }: { label: string }) {
  return (
    <div className="stars" role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s}>★</span>
      ))}
    </div>
  )
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>('en')
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    setLocale(detectLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    persistLocale(locale)
  }, [locale])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add('visible'),
        ),
      { threshold: 0.12 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const t = getDictionary(locale)
  const toggleLocale = () => setLocale((prev) => (prev === 'en' ? 'es' : 'en'))

  return (
    <main id="main">
      <a href="#main" className="skip-link">
        {t.a11y.skip}
      </a>

      <nav className="nav">
        <a className="logo" href="#top">
          {t.brand.name}
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#work">{t.nav.work}</a>
            <a href="#studio">{t.nav.studio}</a>
            <a className="pill" href="#contact">
              {t.nav.book}
            </a>
          </div>
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLocale}
            aria-label={t.a11y.switchLang}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <div className="hero-wrap" id="top">
        <header className="hero">
          <div className="hero-media">
            <img src="/assets/hero-person.jpg" alt={t.hero.alt} />
            <div className="veil" />
            <div className="hero-copy">
              <span className="badge">
                <i />
                {t.hero.badge}
                <i />
              </span>
              <h1>
                {t.hero.title1}
                <br />
                {t.hero.title2} <em>{t.hero.conj}</em> {t.hero.title3}
              </h1>
              <p>{t.hero.text}</p>
            </div>
            <div className="scroll-arrow">↓</div>
          </div>
        </header>
      </div>

      <section className="section specialties wrap" id="studio">
        <h2 className="reveal">
          {t.specialties.title1}
          <br />
          {t.specialties.title2}
        </h2>
        <div className="service-list">
          {t.specialties.items.map((item, index) => (
            <article
              className={`service ${active === index ? 'active' : ''}`}
              key={item.title}
              onClick={() => setActive(active === index ? null : index)}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="service-bg">
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="service-icon">
                <Arrow />
              </span>
            </article>
          ))}
        </div>
        <div className="below reveal">
          <a className="dark-pill" href="#contact">
            {t.specialties.cta}
          </a>
          <span>{t.specialties.hint}</span>
        </div>
      </section>

      <section className="dark-section">
        <div className="wrap">
          <h2 className="reveal">
            {t.testimonials.title1}
            <br />
            {t.testimonials.title2}
          </h2>
          <div className="testimonials">
            {t.testimonials.items.map((item) => (
              <article className="testimonial reveal" key={item.name}>
                <Stars label={t.a11y.stars} />
                <blockquote>{item.quote}</blockquote>
                <div className="person">
                  <div className="avatar">{item.name[0]}</div>
                  <div>
                    <b>{item.name}</b>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats wrap">
        <div className="stats-head reveal">
          <span className="eyebrow">{t.stats.eyebrow}</span>
          <h2>
            {t.stats.title1}
            <br />
            {t.stats.title2}
          </h2>
        </div>
        <div className="stats-grid">
          {t.stats.items.map((item) => (
            <div className="stat reveal" key={item.num}>
              <span className="eyebrow">{item.num}</span>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section work wrap" id="work">
        <div className="work-head reveal">
          <h2>
            {t.work.title1}
            <br />
            {t.work.title2}
          </h2>
          <p>{t.work.text}</p>
        </div>
        <div className="work-grid">
          {t.work.items.map((item) => (
            <article className="work-item reveal" key={item.title}>
              <div className="work-frame">
                <img src={item.image} alt={`${item.title} ${t.work.alt}`} />
                <span>{t.work.view}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement wrap">
        <div className="float float-one">
          <img src="/assets/float-art-1.png" alt={t.statement.alt1} />
        </div>
        <div className="statement-inner reveal">
          <span className="badge dark-badge">
            <i />
            {t.statement.badge}
          </span>
          <p>
            {t.statement.textBefore} <b>{t.statement.bold}</b>{' '}
            {t.statement.textAfter}
          </p>
        </div>
        <div className="float float-two">
          <img src="/assets/strip-design.jpg" alt={t.statement.alt2} />
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <div>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>
              {t.contact.title1}
              <br />
              {t.contact.title2}
            </h2>
            <a className="touch" href={`mailto:${t.brand.email}`}>
              {t.brand.email} <span>↗</span>
            </a>
          </div>
          <p className="fine">{t.contact.fine}</p>
        </div>
        <div className="contact-image">
          <img src="/assets/contact-person.jpg" alt={t.contact.alt} />
        </div>
      </section>

      <footer className="wrap">
        <div className="footer-top">
          <div>
            <a className="logo" href="#top">
              {t.brand.name}
            </a>
            <p className="footer-blurb">{t.footer.blurb}</p>
            <div className="socials">
              <a href="#contact" aria-label={t.footer.socials.instagram}>
                ig
              </a>
              <a href="#contact" aria-label={t.footer.socials.linkedin}>
                in
              </a>
              <a
                href={`mailto:${t.brand.email}`}
                aria-label={t.footer.socials.email}
              >
                @
              </a>
            </div>
          </div>
          <div className="footer-cols">
            {t.footer.cols.map((col) => (
              <div key={col.heading}>
                <h5>{col.heading}</h5>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
            <div>
              <h5>{t.footer.visit}</h5>
              <span>{t.footer.location}</span>
              <span>{t.brand.email}</span>
            </div>
          </div>
        </div>
        <div className="wordmark">{t.brand.wordmark}</div>
        <div className="legal">
          <span>{t.footer.legal}</span>
          <span>{t.footer.made}</span>
        </div>
      </footer>
    </main>
  )
}
