import { FileText } from 'lucide-react'
import { content } from '@/src/config/content'

export function LegalitiesSection() {
  return <section className="legalities-section section-pad" id="legalitas">
    <div className="container">
      <div className="section-heading split-heading reveal">
        <div><span className="eyebrow"><i />IDENTITAS PERUSAHAAN</span><h2>Legalitas dan<br /><em>identitas perusahaan.</em></h2></div>
        <p>Area ini disiapkan untuk menampilkan dokumen dan identitas resmi perusahaan. Lengkapi dengan berkas atau logo yang telah disetujui sebelum publikasi.</p>
      </div>
      <div className="legalities-grid">
        {content.legalities.map((item, index) => <article className="legality-card reveal" key={item}>
          <span className="legality-icon"><FileText size={19} strokeWidth={1.6} /></span>
          <span className="card-number">0{index + 1}</span>
          <h3>{item}</h3>
          <p>Dokumen / identitas resmi dapat ditambahkan di sini.</p>
        </article>)}
      </div>
    </div>
  </section>
}
