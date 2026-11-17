const stock = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=82`

export const images = {
  hero: '/images/hero.png',
  about: stock('photo-1497366754035-f200968a6e72'),
  services: {
    security: stock('photo-1560250097-0b93528c311a'),
    cleaning: stock('photo-1581578731548-c64695cc6952'),
    generalSupport: stock('photo-1497366216548-37526070297c'),
    landscape: stock('photo-1558904541-efa843a96f01'),
    parking: stock('photo-1590674899484-d5640e854abe'),
    administration: stock('photo-1497366811353-6870744d04b2'),
  },
  industries: [
    stock('photo-1497366754035-f200968a6e72'), stock('photo-1565008447742-97f6f38c985c'),
    stock('photo-1486406146926-c627a92ad1ab'), stock('photo-1586528116311-ad8dd3c8310d'),
    stock('photo-1486406146926-c627a92ad1ab'), stock('photo-1521737711867-e3b97375f902'),
  ],
  clients: {
    bptdYogyakarta: '', // Simpan logo resmi di public/images/clients/ lalu isi path-nya di sini.
  },
} as const
