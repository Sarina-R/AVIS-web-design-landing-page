import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from 'lucide-react'
import './globals.css'
import Image from 'next/image'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const samim = localFont({
  src: [
    {
      path: '../public/fonts/Samim.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Samim-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-samim',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'خدمات طراحی وبسایت آویس',
  description: 'یک وبسایت ساخته شده با Next.js',
  icons: {
    icon: 'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <head>
        <link
          rel='preload'
          href='/fonts/Samim.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Samim-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`${samim.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Navigation */}
        <nav className='border-b border-black/10 backdrop-blur-sm sticky top-0 z-50'>
          <div className='max-w-6xl mx-auto px-6 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 flex items-center justify-center'>
                  <Image
                    src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain invert'
                  />
                </div>
                <span className='text-xl font-bold'>آویس</span>
              </div>
              <div className='hidden md:flex items-center gap-8'>
                <a
                  href='#portfolio'
                  className='text-black/60 hover:text-black transition-colors text-sm font-medium'
                >
                  نمونه کارها
                </a>
                <a
                  href='#services'
                  className='text-black/60 hover:text-black transition-colors text-sm font-medium'
                >
                  خدمات
                </a>
                <a
                  href='#pricing'
                  className='text-black/60 hover:text-black transition-colors text-sm font-medium'
                >
                  قیمت‌ها
                </a>
                <a
                  href='#contact'
                  className='text-black/60 hover:text-black transition-colors text-sm font-medium'
                >
                  تماس
                </a>
              </div>
              <Button
                size='sm'
                className='bg-black text-white hover:bg-black/90'
              >
                شروع پروژه
              </Button>
            </div>
          </div>
        </nav>
        {children}

        <footer className='border-t border-black/10'>
          <div className='max-w-6xl mx-auto px-6 pb-16'>
            <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
              <p className='text-black/60'>
                © ۱۴۰۳ AVIS. تمامی حقوق محفوظ است.
              </p>
              <div className='flex gap-8'>
                <a
                  href='#'
                  className='text-black/60 hover:text-black transition-colors'
                >
                  حریم خصوصی
                </a>
                <a
                  href='#'
                  className='text-black/60 hover:text-black transition-colors'
                >
                  شرایط استفاده
                </a>
                <a
                  href='#'
                  className='text-black/60 hover:text-black transition-colors'
                >
                  سوالات متداول
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
