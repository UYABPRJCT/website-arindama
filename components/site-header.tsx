
'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BrandIdentity } from './brand-identity'

const links = [
  ['Beranda', '#beranda'],
  ['Tentang Kami', '#tentang'],
  ['Keunggulan', '#keunggulan'],
  ['Layanan', '#layanan'],
  ['Pimpinan', '#pimpinan'],
  ['Mitra & Klien', '#mitra'],
  ['Kontak', '#kontak'],
]

const whatsappLink =
  'https://wa.me/6285604036090?text=Halo%20PT%20Arindama%20Tungga%20Madani%2C%20saya%20ingin%20berkonsultasi.'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <BrandIdentity />

        <nav
          className={`desktop-nav ${open ? 'is-open' : ''}`}
          aria-label="Navigasi utama"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="mobile-cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Konsultasi Sekarang
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <a
          className="nav-cta"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Konsultasi Sekarang
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
