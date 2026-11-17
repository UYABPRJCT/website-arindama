
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Building2,
  Check,
  Globe,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

import { SiteHeader } from './site-header'
import { BrandIdentity } from './brand-identity'
import { ClientPartners } from './client-partners'
import { ContactForm } from './contact-form'
import { content } from '@/src/config/content'
import { images } from '@/src/config/images'
import { siteConfig } from '@/src/config/site-config'

const advantageIcons = [
  Users,
  Workflow,
  Sparkles,
  Headphones,
  Building2,
  ShieldCheck,
]

const nav = [
  ['Beranda', '#beranda'],
  ['Tentang Kami', '#tentang'],
  ['Keunggulan', '#keunggulan'],
  ['Layanan', '#layanan'],
  ['Pimpinan & Tim', '#pimpinan'],
  ['Mitra & Klien', '#mitra'],
  ['Kontak', '#kontak'],
]

const companyTeam = [
  { name: 'Moh Choiril Anwar', role: 'HRD' },
  { name: 'Ngatwinto, S.M.', role: 'Operasional' },
  { name: 'Dewi Dwi Ningtiyas', role: 'Keuangan' },
  { name: 'Dodie', role: 'Marketing' },
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
                <span>AT</span>
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
        <section className="advantages-section section-pad" id="keunggulan">
          <div className="container advantage-layout">
            <div className="advantage-sticky reveal">
              <Eyebrow>MENGAPA ARINDAMA</Eyebrow>

              <h2>
                Mengapa memilih <em>Arindama?</em>
              </h2>

              <p>
                Berpengalaman melayani sektor swasta dan pemerintahan,
                didukung tenaga kerja terlatih, SOP terintegrasi, serta
                pengawasan operasional.
              </p>

              <a href="#kontak" className="button button-outline">
                Diskusikan kebutuhan <ArrowUpRight size={17} />
              </a>

              <div className="advantage-image">
                <Image
                  src={images.industries[0]}
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
                  Solusi layanan <em>Arindama.</em>
                </h2>
              </div>

              <p>
                Kami menyediakan solusi tenaga kerja dan pengelolaan
                fasilitas untuk mendukung kebutuhan operasional perusahaan.
              </p>
            </div>

            <div className="services-grid">
              {content.featuredServices.slice(0, 5).map((service, i) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                >
                  <div className="service-image">
                    <Image
                      src={images.services[service.image]}
                      alt={`Ilustrasi layanan ${service.title}`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />

                    <span className="service-number">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="service-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PIMPINAN & TIM */}
        <section className="director-section section-pad" id="pimpinan">
          <div className="container">
            <div className="section-heading centered reveal">
              <Eyebrow>PIMPINAN & TIM</Eyebrow>
              <h2>
                Orang-orang di balik <em>Arindama.</em>
              </h2>
              <p>
                Didukung tim yang solid, profesional, dan berpengalaman
                dalam menjalankan setiap tanggung jawab perusahaan.
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
              </div>

              <div className="director-info reveal">
                <Eyebrow>KEPEMIMPINAN KAMI</Eyebrow>
                <h2>Tina Putri Perdani, S.Pd.</h2>
                <p className="director-role">Direktur Utama</p>
                <span>PT Arindama Tungga Madani</span>
              </div>
            </div>

            <div className="team-heading reveal">
              <Eyebrow>STRUKTUR TIM</Eyebrow>
              <h3>Tim yang bekerja dalam satu tujuan.</h3>
            </div>

            <div className="team-grid">
              {companyTeam.map((member, i) => (
                <article className="team-card reveal" key={member.role}>
                  <span className="team-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="team-mark">
                    <Users size={22} strokeWidth={1.5} />
                  </span>

                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MITRA & KLIEN */}
        <section id="mitra">
          <ClientPartners />
        </section>

        {/* 7. KONTAK */}
        <section className="contact-section section-pad" id="kontak">
          <div className="container contact-layout">
            <div className="contact-intro reveal">
              <Eyebrow>HUBUNGI KAMI</Eyebrow>

              <h2>Mari diskusikan kebutuhan Anda.</h2>

              <p>
                Hubungi tim kami untuk mendiskusikan kebutuhan layanan
                outsourcing dan operasional perusahaan Anda.
              </p>

              <div className="contact-detail">
                <span className="detail-icon">
                  <Phone size={19} />
                </span>
                <div>
                  <small>WHATSAPP</small>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="detail-icon">
                  <Headphones size={19} />
                </span>
                <div>
                  <small>EMAIL</small>
                  <a href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="detail-icon">
                  <MapPin size={19} />
                </span>
                <div>
                  <small>HEAD OFFICE</small>
                  <p>{siteConfig.address}</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="detail-icon">
                  <AtSign size={19} />
                </span>
                <div>
                  <small>INSTAGRAM</small>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @pt.arindamatungga
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="detail-icon">
                  <Globe size={19} />
                </span>
                <div>
                  <small>WEBSITE</small>
                  <a
                    href={siteConfig.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.arindamatunggamadani.com
                  </a>
                </div>
              </div>

              <div className="contact-aside">
                Setiap kebutuhan dimulai dengan percakapan yang tepat.
              </div>
            </div>

            <div className="contact-panel reveal">
              <div className="form-heading">
                <span>01 — MULAI PERCAKAPAN</span>
                <h3>Kirimkan kebutuhan Anda</h3>
                <p>
                  Lengkapi formulir berikut untuk menyiapkan pesan WhatsApp.
                </p>
              </div>

              <ContactForm />
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
