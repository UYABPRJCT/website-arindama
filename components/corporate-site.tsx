'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, AtSign, Building2, Check, Globe, Headphones, MapPin, Phone, ShieldCheck, Sparkles, Users, Workflow } from 'lucide-react'
import { SiteHeader } from './site-header'
import { BrandIdentity } from './brand-identity'
import { ClientPartners } from './client-partners'
import { ContactForm } from './contact-form'
import { content } from '@/src/config/content'
import { images } from '@/src/config/images'
import { siteConfig } from '@/src/config/site-config'

const valueIcons = [ShieldCheck, Sparkles, Check, Users, Headphones]
const advantageIcons = [Users, Workflow, Sparkles, Headphones, Building2, ShieldCheck]
const nav = [['Beranda', '#beranda'], ['Tentang Kami', '#tentang'], ['Layanan', '#layanan'], ['Keunggulan', '#keunggulan'], ['Industri', '#industri'], ['Kontak', '#kontak']]

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow"><i />{children}</span> }

export function CorporateSite() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { nodes.forEach(node => node.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <>
    <SiteHeader />
    <main>
      <section className="hero" id="beranda">
        <div className="hero-grid" />
        <div className="hero-inner container">
          <div className="hero-copy"><Eyebrow>{siteConfig.tagline}</Eyebrow>
            <h1>{content.hero.title}</h1><p>{content.hero.description}</p>
            <div className="hero-actions"><a className="button button-light" href="#kontak">Konsultasi Sekarang <ArrowUpRight size={17} /></a><a className="text-link hero-link" href="#layanan">Jelajahi Layanan <ArrowRight size={17} /></a></div>
            <div className="hero-note"><span className="note-line" />Layanan profesional, pendekatan terstruktur</div>
          </div>
          <div className="hero-visual"><div className="hero-photo"><Image src={images.hero} alt="Petugas keamanan profesional di lobi gedung perkantoran modern" fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div><div className="hero-photo-shade" />
            <div className="photo-caption"><span className="caption-icon"><ShieldCheck size={19} /></span><span><b>Operasional yang tertata</b><small>Dimulai dari mitra yang tepat</small></span></div><span className="hero-index">01 — 06</span>
          </div>
        </div><a className="scroll-cue" href="#tentang" aria-label="Gulir ke Tentang Kami"><ArrowDown size={17} /></a>
      </section>

      <section className="about-section section-pad" id="tentang"><div className="container about-layout">
        <div className="about-visual reveal"><div className="about-image"><Image src={images.about} alt="Interior kantor modern dan area kerja kolaboratif" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div className="image-label"><span>AT</span><p>PT Arindama<br />Tungga Madani</p></div><div className="image-outline" /></div>
        <div className="about-copy reveal"><Eyebrow>TENTANG KAMI</Eyebrow><h2>{content.about.title}</h2><p>{content.about.description}</p><p>{content.about.supporting}</p><p className="company-category"><strong>Bidang usaha</strong>{siteConfig.businessCategory}</p>
          <div className="vision-mission"><article><span>01 / VISI</span><p>{content.about.vision}</p></article><article><span>02 / MISI</span><ul>{content.about.mission.map((item) => <li key={item}>{item}</li>)}</ul></article></div><p className="director-line"><strong>Direktur Utama</strong><span>{content.about.director}</span></p><a href="#nilai" className="text-link">Kenali nilai kami <ArrowRight size={16} /></a>
        </div>
      </div></section>

      <ClientPartners />

      <section className="values-section section-pad" id="nilai"><div className="container"><div className="section-heading centered reveal"><Eyebrow>PRINSIP KAMI</Eyebrow><h2>Nilai yang mendasari<br />setiap layanan.</h2><p>Landasan untuk membangun hubungan kerja yang profesional dan bertanggung jawab.</p></div>
        <div className="values-grid">{content.values.map((item, i) => { const Icon = valueIcons[i]; return <article className="value-card reveal" key={item.title}><span className="value-icon"><Icon size={21} strokeWidth={1.6} /></span><span className="card-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article> })}</div>
      </div></section>

      <section className="services-section section-pad" id="layanan"><div className="container"><div className="section-heading split-heading reveal"><div><Eyebrow>LAYANAN KAMI</Eyebrow><h2>Fasilitas yang terkelola.<br /><em>Bisnis yang bergerak.</em></h2></div><p>{'Kami menyediakan berbagai solusi layanan tenaga kerja untuk mendukung kebutuhan operasional dan pengelolaan fasilitas perusahaan.'}</p></div>
        <div className="services-grid">{content.featuredServices.map((service, i) => <article className="service-card reveal" key={service.title}><div className="service-image"><Image src={images.services[service.image]} alt={`Ilustrasi layanan ${service.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="service-number">0{i + 1}</span><span className="service-arrow"><ArrowUpRight size={20} /></span></div><div className="service-body"><h3>{service.title}</h3><p>{service.text}</p></div></article>)}</div>
        <div className="other-services reveal"><h3>Layanan Lainnya</h3><ul className="other-services-grid">{content.otherServices.map((service) => <li key={service}>{service}</li>)}</ul></div>
      </div></section>

      <section className="advantages-section section-pad" id="keunggulan"><div className="container advantage-layout"><div className="advantage-sticky reveal"><Eyebrow>MENGAPA ARINDAMA</Eyebrow><h2>Operasional yang lebih baik berawal dari <em>kolaborasi yang tepat.</em></h2><p>Kami mendukung kebutuhan layanan dengan komunikasi yang jelas, pengelolaan yang terarah, dan perhatian pada pelaksanaan di lapangan.</p><a href="#kontak" className="button button-outline">Diskusikan kebutuhan <ArrowUpRight size={17} /></a><div className="advantage-image"><Image src={images.industries[0]} alt="Ruang kerja kantor yang tertata dan terang" fill sizes="(max-width: 900px) 100vw, 40vw" /></div></div>
        <div className="advantage-list">{content.advantages.map(([title, text], i) => { const Icon = advantageIcons[i]; return <article className="advantage-item reveal" key={title}><span className="advantage-icon"><Icon size={20} strokeWidth={1.6} /></span><div><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="advantage-arrow" size={18} /></article> })}</div>
      </div></section>

      <section className="industries-section section-pad" id="industri"><div className="container"><div className="section-heading centered reveal"><Eyebrow>SEKTOR LAYANAN</Eyebrow><h2>Solusi untuk berbagai<br />sektor industri.</h2><p>Mendukung aktivitas di lingkungan kerja dan fasilitas dengan kebutuhan yang beragam.</p></div>
        <div className="industry-grid">{content.industries.map((industry, i) => <article className="industry-card reveal" key={industry}><Image src={images.industries[i]} alt={`Lingkungan ${industry.toLowerCase()}`} fill sizes="(max-width: 600px) 50vw, 33vw" /><div className="industry-overlay" /><span className="industry-count">0{i + 1}</span><h3>{industry}</h3><ArrowUpRight size={19} className="industry-arrow" /></article>)}</div>
      </div></section>

      <section className="process-section section-pad" id="proses"><div className="container"><div className="section-heading split-heading reveal"><div><Eyebrow>ALUR KERJA</Eyebrow><h2>Bagaimana kami<br /><em>bekerja.</em></h2></div><p>Lima tahapan kolaborasi untuk menyelaraskan layanan dengan kebutuhan operasional klien.</p></div>
        <div className="process-grid">{content.process.map(([title, text], i) => <article className="process-step reveal" key={title}><span className="process-number">0{i + 1}</span><span className="process-rule" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>


      <section className="cta-band"><div className="cta-pattern" /><div className="container cta-content reveal"><div><Eyebrow>MITRA OPERASIONAL ANDA</Eyebrow><h2>{content.cta.title}</h2><p>{content.cta.text}</p></div><a className="button button-light" href="#kontak">Hubungi Kami <ArrowUpRight size={17} /></a></div></section>

      <section className="contact-section section-pad" id="kontak"><div className="container contact-layout"><div className="contact-intro reveal"><Eyebrow>HUBUNGI KAMI</Eyebrow><h2>Mari diskusikan<br />kebutuhan Anda.</h2><p>Hubungi tim kami untuk mendiskusikan kebutuhan layanan outsourcing dan operasional perusahaan Anda.</p><div className="contact-detail"><span className="detail-icon"><Phone size={19} /></span><div><small>WHATSAPP</small><a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">{siteConfig.whatsappDisplay}</a></div></div><div className="contact-detail"><span className="detail-icon"><Headphones size={19} /></span><div><small>EMAIL</small><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div className="contact-detail"><span className="detail-icon"><MapPin size={19} /></span><div><small>HEAD OFFICE</small><p>{siteConfig.address}</p></div></div><div className="contact-detail"><span className="detail-icon"><AtSign size={19} /></span><div><small>INSTAGRAM</small><a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">@pt.arindamatungga</a></div></div><div className="contact-detail"><span className="detail-icon"><Globe size={19} /></span><div><small>WEBSITE</small><a href={siteConfig.website} target="_blank" rel="noreferrer">www.arindamatunggamadani.com</a></div></div><div className="contact-aside">Setiap kebutuhan dimulai dengan percakapan yang tepat.</div></div>
        <div className="contact-panel reveal"><div className="form-heading"><span>01 — MULAI PERCAKAPAN</span><h3>Kirimkan kebutuhan Anda</h3><p>Lengkapi formulir berikut untuk menyiapkan pesan WhatsApp.</p></div><ContactForm /></div>
      </div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><BrandIdentity footer /><p>Mitra profesional untuk kebutuhan tenaga kerja dan pengelolaan fasilitas perusahaan.</p></div><div className="footer-links"><h4>NAVIGASI</h4>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="footer-links"><h4>LAYANAN</h4>{content.featuredServices.map(service => <a key={service.title} href="#layanan">{service.title}</a>)}</div><div className="footer-links footer-contact"><h4>HUBUNGI</h4><a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp {siteConfig.whatsappDisplay}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><p>{siteConfig.address}</p><a href={siteConfig.website} target="_blank" rel="noreferrer">www.arindamatunggamadani.com</a><div className="social-links">{siteConfig.socials.instagram && <a href={siteConfig.socials.instagram} aria-label="Instagram" rel="noreferrer">IG</a>}{siteConfig.socials.linkedin && <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" rel="noreferrer">in</a>}</div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}. Hak cipta dilindungi.</span><a href="#beranda">Kembali ke atas ↑</a></div></div></footer>
    <a className="floating-contact" href="#kontak" aria-label="Hubungi Arindama"><Headphones size={20} /></a>
  </>
}
