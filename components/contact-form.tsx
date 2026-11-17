'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/src/config/site-config'
import { content } from '@/src/config/content'

export function ContactForm() {
  const [feedback, setFeedback] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    if (!siteConfig.whatsappNumber) {
      setFeedback('Nomor WhatsApp belum dikonfigurasi. Silakan lengkapi informasi kontak perusahaan.')
      return
    }
    const data = new FormData(form)
    const message = [
      'Halo PT Arindama Tungga Madani, saya ingin berdiskusi mengenai kebutuhan layanan.',
      `Nama: ${data.get('name')}`, `Perusahaan: ${data.get('company')}`, `Email: ${data.get('email')}`,
      `WhatsApp: ${data.get('phone')}`, `Layanan: ${data.get('service')}`, `Pesan: ${data.get('message')}`,
    ].join('\n')
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setFeedback('Pesan siap dikirim melalui WhatsApp. Silakan lanjutkan percakapan di tab baru.')
    form.reset()
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Nama Lengkap<input name="name" autoComplete="name" placeholder="Nama Anda" required /></label>
      <label>Nama Perusahaan<input name="company" autoComplete="organization" placeholder="Perusahaan Anda" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="nama@perusahaan.com" required /></label>
      <label>Nomor WhatsApp<input name="phone" type="tel" autoComplete="tel" placeholder="+62 812 3456 7890" required /></label>
      <label className="field-wide">Layanan yang Dibutuhkan<select name="service" required defaultValue=""><option value="" disabled>Pilih layanan</option><optgroup label="Layanan Unggulan">{content.featuredServices.map((service) => <option key={service.title}>{service.title}</option>)}</optgroup><optgroup label="Layanan Lainnya">{content.otherServices.map((service) => <option key={service}>{service}</option>)}</optgroup></select></label>
      <label className="field-wide">Pesan<textarea name="message" rows={4} placeholder="Ceritakan kebutuhan operasional Anda" required /></label>
    </div>
    <button className="button button-primary" type="submit">Kirim melalui WhatsApp <ArrowUpRight size={17} /></button>
    <p className="form-note" role="status" aria-live="polite">{feedback || 'Data tidak disimpan di situs ini. Anda akan melanjutkan melalui WhatsApp.'}</p>
  </form>
}
