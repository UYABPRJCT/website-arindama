'use client'

import { useState } from 'react'
import Image from 'next/image'
import { content } from '@/src/config/content'
import { images } from '@/src/config/images'

function ClientLogo({ clientId, name }: { clientId: keyof typeof images.clients; name: string }) {
  const [failed, setFailed] = useState(false)
  const logoPath = images.clients[clientId]

  if (!logoPath || failed) {
    return <div className="client-logo-placeholder"><span>LOGO RESMI</span><small>Belum tersedia</small></div>
  }

  return <div className="client-logo-image"><Image src={logoPath} alt={`Logo ${name}`} fill sizes="220px" style={{ objectFit: 'contain' }} onError={() => setFailed(true)} /></div>
}

export function ClientPartners() {
  return <section className="partners-section section-pad" id="mitra">
    <div className="container">
      <div className="section-heading centered reveal">
        <span className="eyebrow"><i />MITRA DAN KLIEN</span>
        <h2>Perusahaan yang Mempercayai Kami</h2>
        <p>Kolaborasi dan kepercayaan menjadi fondasi dalam memberikan layanan terbaik.</p>
      </div>
      <div className="partners-grid">
        {content.clients.map(client => <article className="partner-card reveal" key={client.id}>
          <ClientLogo clientId={client.id} name={client.name} />
          <h3>{client.name}</h3>
        </article>)}
        <article className="partner-card partner-add reveal">
          <div className="client-logo-placeholder"><span>LOGO MITRA</span><small>Tempat untuk logo berikutnya</small></div>
          <h3>Mitra lainnya</h3>
        </article>
      </div>
    </div>
  </section>
}
