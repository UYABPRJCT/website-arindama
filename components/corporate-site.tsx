
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

import { SiteHeader } from './site-header'
import { BrandIdentity } from './brand-identity'
import { ClientPartners } from './client-partners'
import { content } from '@/src/config/content'
import { images } from '@/src/config/images'
import { siteConfig } from '@/src/config/site-config'

const advantageIcons = [
  Users,
  Workflow,
  Sparkles,
  Headphones,
  Check,
  ShieldCheck,
]

const nav = [
  ['Beranda', '#beranda'],
  ['Tentang Kami', '#tentang'],
  ['Keunggulan', '#keunggulan'],
  ['Layanan', '#layanan'],
  ['Pimpinan', '#pimpinan'],
  ['Mitra & Klien', '#mitra'],
  ['Kontak', '#kontak'],
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <i />
      {children}
    </span>
  )
}

export function CorporateSite() {
  useEffect(() => {
    const [activeService, setActiveService] = useState<number | null>(0)
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )

    nodes.forEach(node => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SiteHeader />

      <main>
        {/* 1. BERANDA — HERO BANNER DIPERTAHANKAN */}
        <section className="hero hero--banner" id="beranda">
          <div className="hero-banner-image">
            <Image
              src={images.hero}
              alt="Layanan profesional PT Arindama Tungga Madani di lingkungan perkantoran"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="hero-banner-overlay" />
          <div className="hero-grid" />

          <div className="container hero-banner-content">
            <div className="hero-banner-copy">
              <Eyebrow>{siteConfig.tagline}</Eyebrow>

              <h1>{content.hero.title}</h1>
              <p>{content.hero.description}</p>

              <div className="hero-actions">
                <a className="button button-light" href="#kontak">
                  Konsultasi Sekarang <ArrowUpRight size={17} />
                </a>

                <a className="text-link hero-link" href="#layanan">
                  Jelajahi Layanan <ArrowRight size={17} />
                </a>
              </div>

              <div className="hero-banner-proof">
                <span className="hero-proof-icon">
                  <ShieldCheck size={18} />
                </span>

                <span>
                  <b>Mitra operasional terpercaya</b>
                  <small>Layanan profesional dan terstruktur</small>
                </span>
              </div>
            </div>

            <div className="hero-banner-side">
              <span className="hero-banner-index">
                PT ARINDAMA TUNGGA MADANI
              </span>
              <span className="hero-banner-line" />
              <span className="hero-banner-side-text">
                Mendukung operasional bisnis Anda
              </span>
            </div>
          </div>

          <a
            className="scroll-cue"
            href="#tentang"
            aria-label="Gulir ke Tentang Kami"
          >
            <ArrowDown size={17} />
          </a>
        </section>

        {/* 2. TENTANG KAMI — PROFIL, VISI, DAN MISI */}
        <section className="about-section section-pad" id="tentang">
          <div className="container about-layout">
            <div className="about-visual reveal">
              <div className="about-image">
                <Image
                  src={images.about}
                  alt="Lingkungan kerja dan fasilitas perusahaan"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>

              <div className="image-label">
  <Image
    src="/images/logo-arindama.png"
    alt="Logo PT Arindama Tungga Madani"
    width={48}
    height={48}
    style={{ objectFit: 'contain' }}
  />
  <p>
    PT Arindama
    <br />
    Tungga Madani
  </p>
</div>

              <div className="image-outline" />
            </div>

            <div className="about-copy reveal">
              <Eyebrow>TENTANG KAMI</Eyebrow>

              <h2>Mitra yang memahami kebutuhan operasional Anda.</h2>

              <p>{content.about.description}</p>
              <p>{content.about.supporting}</p>

              <p className="company-category">
                <strong>Bidang usaha</strong>
                {siteConfig.businessCategory}
              </p>

              <a href="#keunggulan" className="text-link">
                Kenali keunggulan kami <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="container">
            <div className="vision-mission">
              <article className="reveal">
                <span>01 / VISI</span>
                <h3>Visi Kami</h3>
                <p>{content.about.vision}</p>
              </article>

              <article className="reveal">
                <span>02 / MISI</span>
                <h3>Misi Kami</h3>

                <ul>
                  {content.about.mission.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* 3. KEUNGGULAN */}
        <section
          className="advantages-section section-pad"
          id="keunggulan"
        >
          <div className="container advantage-layout">
            <div className="advantage-sticky reveal">
              <Eyebrow>MENGAPA ARINDAMA</Eyebrow>

              <h2>
                Mengapa memilih <em>Arindama?</em>
              </h2>

              <p>
                Berpengalaman melayani sektor swasta dan pemerintahan,
                didukung tenaga kerja terlatih, SOP terintegrasi,
                serta pengawasan operasional.
              </p>

              <a href="#kontak" className="button button-outline">
                Diskusikan kebutuhan <ArrowUpRight size={17} />
              </a>

              <div className="advantage-image">
                <Image
                  src="/images/team-arindama.png"
                  alt="Lingkungan kerja yang tertata"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="advantage-list">
              {content.advantages.map(([title, text], i) => {
                const Icon = advantageIcons[i] || Check

                return (
                  <article className="advantage-item reveal" key={title}>
                    <span className="advantage-icon">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <div>
                      <span className="card-number">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>

                    <ArrowUpRight
                      className="advantage-arrow"
                      size={18}
                    />
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. LAYANAN — TANPA LAYANAN TAMBAHAN */}
        
<section className="services-section section-pad" id="layanan">
  <div className="container">
    <div className="section-heading split-heading reveal">
      <div>
        <Eyebrow>LAYANAN KAMI</Eyebrow>
        <h2>
          Solusi layanan Arindama.
          <br />
          <em>Profesional dan terpercaya.</em>
        </h2>
      </div>
      <p>
        Pilih layanan untuk melihat informasi lebih lanjut mengenai solusi
        yang kami sediakan bagi kebutuhan operasional perusahaan Anda.
      </p>
    </div>

    <div className="services-accordion">
      {content.featuredServices.map((service, i) => {
        const isOpen = activeService === i

        return (
          <article
            className={`service-accordion-item ${isOpen ? 'is-open' : ''}`}
            key={service.title}
          >
            <button
              className="service-accordion-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`service-content-${i}`}
              onClick={() => setActiveService(isOpen ? null : i)}
            >
              <span className="service-accordion-number">
                0{i + 1}
              </span>

              <span className="service-accordion-title">
                {service.title}
              </span>

              <span className="service-accordion-icon">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div
                className="service-accordion-content"
                id={`service-content-${i}`}
              >
                <div className="service-accordion-image">
                  <Image
                    src={images.services[service.image]}
                    alt={`Layanan ${service.title}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 38vw"
                  />
                </div>

                <div className="service-accordion-description">
                  <span className="service-detail-label">
                    LAYANAN 0{i + 1}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#kontak" className="text-link">
                    Konsultasikan layanan ini
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            )}
          </article>
        )
      })}
    </div>
  </div>
</section>


        {/* 5. PIMPINAN — TANPA BAGIAN TIM */}
        <section className="director-section section-pad" id="pimpinan">
          <div className="container">
            <div className="director-heading reveal">
              <Eyebrow>KEPEMIMPINAN PERUSAHAAN</Eyebrow>

              <h2>
                Pimpinan <em>Arindama.</em>
              </h2>

              <p>
                Kepemimpinan yang berkomitmen membangun pelayanan
                profesional, terpercaya, dan berkualitas.
              </p>
            </div>

            <div className="director-layout">
              <div className="director-photo reveal">
                <Image
                  src="/images/pimpinan.png"
                  alt="Tina Putri Perdani, S.Pd., Direktur Utama PT Arindama Tungga Madani"
                  width={1000}
                  height={1000}
                  priority
                  sizes="(max-width: 700px) 85vw, 420px"
                />

                <span className="director-photo-mark">AT</span>
              </div>

              <div className="director-info reveal">
                <Eyebrow>DIREKTUR UTAMA</Eyebrow>

                <h2>Tina Putri Perdani, S.Pd.</h2>

                <p className="director-role">Direktur Utama</p>

                <span>PT Arindama Tungga Madani</span>

                <div className="director-divider" />

                <p className="director-description">
                  Memimpin dan mengarahkan perusahaan dalam memberikan
                  solusi layanan tenaga kerja dan pengelolaan fasilitas
                  yang profesional bagi setiap mitra.
                </p>

                <div className="director-signature">
                  <span>PT ARINDAMA TUNGGA MADANI</span>
                  <strong>Professional • Trusted • Quality</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MITRA & KLIEN */}
        <section id="mitra">
          <ClientPartners />
        </section>

        
{/* 7. KONTAK */}
<section className="contact-section section-pad" id="kontak">
  <div className="container">
    <div className="contact-simple reveal">
      <span className="contact-simple-label">
        PT ARINDAMA TUNGGA MADANI
      </span>

      <h2>
        Mari bekerja sama
        <br />
        bersama Arindama.
      </h2>

      <p>
        Diskusikan kebutuhan tenaga kerja dan pengelolaan
        fasilitas perusahaan Anda bersama tim kami.
      </p>

      <a
        className="button button-light contact-wa-button"
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
          'Halo PT Arindama Tungga Madani, saya ingin berkonsultasi mengenai layanan perusahaan.'
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={19} />
        Hubungi Kami via WhatsApp
        <ArrowUpRight size={17} />
      </a>

      <span className="contact-simple-number">
        {siteConfig.whatsappDisplay}
      </span>

      <div className="contact-simple-decoration">
        AT
      </div>
    </div>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <BrandIdentity footer />
              <p>
                Mitra profesional untuk kebutuhan tenaga kerja dan
                pengelolaan fasilitas perusahaan.
              </p>
            </div>

            <div className="footer-links">
              <h4>NAVIGASI</h4>
              {nav.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>

            <div className="footer-links">
              <h4>LAYANAN</h4>
              {content.featuredServices.slice(0, 5).map(service => (
                <a key={service.title} href="#layanan">
                  {service.title}
                </a>
              ))}
            </div>

            <div className="footer-links footer-contact">
              <h4>HUBUNGI</h4>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </a>

              <a href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>

              <p>{siteConfig.address}</p>

              <a
                href={siteConfig.website}
                target="_blank"
                rel="noreferrer"
              >
                www.arindamatunggamadani.com
              </a>

              <div className="social-links">
                {siteConfig.socials.instagram && (
                  <a
                    href={siteConfig.socials.instagram}
                    aria-label="Instagram"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                )}

                {siteConfig.socials.linkedin && (
                  <a
                    href={siteConfig.socials.linkedin}
                    aria-label="LinkedIn"
                    rel="noreferrer"
                  >
                    in
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {siteConfig.companyName}.
              Hak cipta dilindungi.
            </span>

            <a href="#beranda">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>

      <a
        className="floating-contact"
        href="#kontak"
        aria-label="Hubungi Arindama"
      >
        <Headphones size={20} />
      </a>
    </>
  )
}
