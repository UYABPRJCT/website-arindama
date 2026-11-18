
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
    <div className="partners-section section-pad">
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
            Kami bangga dapat menjalin kerja sama dengan berbagai
            perusahaan, instansi, dan organisasi.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-logo" key={partner.name}>
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={280}
                height={150}
                sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
