const stock = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=82`

export const images = {
  hero: '/images/hero.png',
  about: '/images/about-arindama.png',
  
services: {
  security: '/images/services/security-service-hd.jpg',
  cleaning: '/images/services/cleaning-service-hd.jpg',
  generalSupport: '/images/services/driver-service.jpg',
  administration: '/images/services/staff-administration-hd.jpg',
  landscape: '/images/services/facility-property-management.jpg',
  parking: stock('photo-1590674899484-d5640e854abe'),
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
