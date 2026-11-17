'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BrandIdentity } from './brand-identity'

const links = [['Beranda', '#beranda'], ['Tentang Kami', '#tentang'], ['Layanan', '#layanan'], ['Keunggulan', '#keunggulan'], ['Industri', '#industri'], ['Kontak', '#kontak']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-wrap">
    <BrandIdentity />
    <nav className={`desktop-nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="mobile-cta" href="#kontak" onClick={() => setOpen(false)}>Konsultasi Sekarang <ArrowUpRight size={16} /></a>
    </nav>
    <a className="nav-cta" href="#kontak">Konsultasi Sekarang <ArrowUpRight size={16} /></a>
    <button className="menu-toggle" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}
