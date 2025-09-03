import React from 'react'
import { Card } from '../ui/card'
import { Clock, Headphones, Rocket, Shield } from 'lucide-react'

const BenefitsSection = () => {
  return (
    <section className='py-24 bg-black/5'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            چرا AVIS را انتخاب کنید؟
          </h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            مزایای منحصر به فرد کار با تیم حرفه‌ای ما
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-20 h-20 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Rocket className='w-10 h-10 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-4'>تحویل سریع</h3>
            <p className='text-black/60'>
              پروژه‌های شما در کمترین زمان ممکن و با بالاترین کیفیت تحویل داده
              می‌شود
            </p>
          </Card>

          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-20 h-20 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Shield className='w-10 h-10 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-4'>ضمانت کیفیت</h3>
            <p className='text-black/60'>
              ۶ ماه ضمانت رایگان و پشتیبانی کامل پس از تحویل پروژه
            </p>
          </Card>

          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-20 h-20 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Headphones className='w-10 h-10 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-4'>پشتیبانی ۲۴/۷</h3>
            <p className='text-black/60'>
              تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست
            </p>
          </Card>

          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-20 h-20 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Clock className='w-10 h-10 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-4'>به‌روزرسانی مداوم</h3>
            <p className='text-black/60'>
              استفاده از جدیدترین تکنولوژی‌ها و به‌روزرسانی مداوم سایت شما
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
