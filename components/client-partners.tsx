
import Image from 'next/image'

const partners = [
  { name: 'PT High Power Laser Sheet Metal', logo: '/images/clients/hpl.png' },
  { name: 'Kementerian Pelindungan Pekerja Migran Indonesia', logo: '/images/clients/kementerian-p2mi.png' },
  { name: 'Universitas Muhammadiyah Prof. Dr. HAMKA', logo: '/images/clients/uhamka.png' },
  { name: 'Ayo Mataram', logo: '/images/clients/ayo-mataram.png' },
  { name: 'Dinas Perindustrian dan Perdagangan Kabupaten Lombok Tengah', logo: '/images/clients/disperindag-lombok-tengah.png' },
  { name: 'DPRD Kabupaten Lombok Barat', logo: '/images/clients/dprd-lombok-barat.png' },
  { name: 'Dinas Perhubungan Kabupaten Kuningan', logo: '/images/clients/dishub-kuningan.png' },
  { name: 'Badan Gizi Nasional', logo: '/images/clients/badan-gizi-nasional.png' },
  { name: 'PDAM Lombok Timur', logo: '/images/clients/pdam-lombok-timur.png' },
  { name: 'RSUD Ampenan', logo: '/images/clients/rsud-ampenan.png' },
  { name: 'Komnas HAM RI', logo: '/images/clients/komnas-ham.png' },
  { name: 'RSUD Praya', logo: '/images/clients/rsud-praya.png' },
  { name: 'Balai Pengelolaan Transportasi Darat Kelas II D.I. Yogyakarta', logo: '/images/clients/bptd-yogyakarta.png' },
  { name: 'HUKO Coffee, Food, Nature', logo: '/images/clients/huko.png' },
  { name: 'Chocomory', logo: '/images/clients/chocomory.png' },
  { name: 'Ayola Hotel', logo: '/images/clients/ayola-hotel.png' },
]

export function ClientPartners() {
  return (
    <section className="partners-section section-pad" id="mitra">
      <div className="container">
        <div className="partners-heading">
          <span className="eyebrow">
            <i />
            MITRA DAN KLIEN
          </span>

          <h2>
            Dipercaya untuk <em>bekerja sama.</em>
          </h2>

          <p>
            Kami bangga dapat menjalin kerja sama dengan berbagai perusahaan,
            instansi, dan organisasi.
          </p>
        </div>

        <div
          className="partners-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {partners.map((partner) => (
            <div
              className="partner-logo"
              key={partner.name}
              title={partner.name}
              style={{
                height: '130px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                background: '#ffffff',
                border: '1px solid #edf0f4',
                borderRadius: '10px',
              }}
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={180}
                height={90}
                sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 180px"
                style={{
                  width: '100%',
                  height: '90px',
                  maxWidth: '180px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
