import React from 'react'
import { Card } from '../ui/card'
import { Palette, Users, Zap } from 'lucide-react'

const FeaturesPreview = () => {
  return (
    <section className='py-20 bg-black/5'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-16 h-16 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Zap className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-3'>سرعت بالا</h3>
            <p className='text-black/60'>
              وب‌سایت‌هایی با بهترین عملکرد و سرعت بارگذاری
            </p>
          </Card>

          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-16 h-16 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Palette className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-3'>طراحی مدرن</h3>
            <p className='text-black/60'>
              رابط کاربری زیبا و مدرن متناسب با برند شما
            </p>
          </Card>

          <Card className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='w-16 h-16 bg-black/10 flex items-center justify-center mx-auto mb-6'>
              <Users className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-xl font-bold mb-3'>پشتیبانی کامل</h3>
            <p className='text-black/60'>
              پشتیبانی ۲۴ ساعته و به‌روزرسانی مداوم
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FeaturesPreview
