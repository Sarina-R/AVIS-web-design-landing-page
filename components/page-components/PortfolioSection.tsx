import React from 'react'
import { PortfolioGrid } from '../portfolio-grid'

const PortfolioSection = () => {
  return (
    <section id='portfolio' className='py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            نمونه کارهای ما
          </h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            مجموعه‌ای از پروژه‌های موفق که با استفاده از جدیدترین تکنولوژی‌ها
            طراحی و توسعه داده‌ایم
          </p>
        </div>

        <PortfolioGrid />
      </div>
    </section>
  )
}

export default PortfolioSection
