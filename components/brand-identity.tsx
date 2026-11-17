'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/src/config/site-config'

export function BrandIdentity({ footer = false }: { footer?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false)
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#beranda" aria-label={`${siteConfig.companyName}, beranda`}>
    {!imageFailed ? <Image src={siteConfig.logoPath} alt={siteConfig.companyName} width={160} height={44} className="brand-image" onError={() => setImageFailed(true)} /> : <><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-copy"><strong>ARINDAMA</strong><small>TUNGGA MADANI</small></span></>}
  </a>
}
