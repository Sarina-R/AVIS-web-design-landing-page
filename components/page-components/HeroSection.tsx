import { ArrowRight, Star } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='relative py-24 lg:py-32 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-6 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 mb-8'>
            <Star className='w-4 h-4 text-black' />
            <span className='text-sm font-medium text-black/60'>
              بیش از ۱۰۰ پروژه موفق
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'>
            وب‌سایت‌های <span className='text-black/80'>مدرن</span>
            <br />
            توسط <span className='text-black'>AVIS</span>
          </h1>

          <p className='text-xl md:text-2xl text-black/60 mb-12 max-w-3xl mx-auto'>
            طراحی و توسعه وب‌سایت‌های حرفه‌ای با Next.js 15، TypeScript،
            Tailwind CSS
          </p>

          <div className='flex flex-wrap items-center justify-center gap-3 mb-16'>
            {[
              'Next.js 15',
              'TypeScript',
              'Tailwind CSS',
              'shadcn/ui',
              'React',
            ].map((tech) => (
              <div
                key={tech}
                className='bg-white border border-black/10 px-4 py-2 hover:bg-black/5 transition-colors'
              >
                <span className='text-sm font-medium text-black'>{tech}</span>
              </div>
            ))}
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'>
            <Button
              size='lg'
              className='text-base px-8 py-6 bg-black text-white hover:bg-black/90'
            >
              شروع پروژه
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-base px-8 py-6 bg-transparent border-2 border-black text-black hover:bg-black/5'
            >
              مشاهده نمونه کارها
            </Button>
          </div>

          <div className='grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-black mb-2'>۱۰۰+</div>
              <div className='text-black/60 text-sm font-medium'>
                پروژه تکمیل شده
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-black mb-2'>۵۰+</div>
              <div className='text-black/60 text-sm font-medium'>
                مشتری راضی
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-black mb-2'>۲۴/۷</div>
              <div className='text-black/60 text-sm font-medium'>پشتیبانی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
