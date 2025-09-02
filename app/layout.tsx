import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
