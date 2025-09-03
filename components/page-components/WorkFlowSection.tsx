import React from 'react'
import { Card } from '../ui/card'
import { CheckCircle, Code, Palette, Users } from 'lucide-react'

const WorkFlowSection = () => {
  return (
    <section className='py-24 bg-black/5'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>فرآیند کار ما</h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            مراحل ساده و شفاف برای رسیدن به بهترین نتیجه
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              step: '۱',
              title: 'مشاوره و برنامه‌ریزی',
              description: 'بررسی نیازها و ارائه بهترین راه‌حل',
              icon: Users,
            },
            {
              step: '۲',
              title: 'طراحی و پروتوتایپ',
              description: 'ایجاد طرح اولیه و تایید نهایی',
              icon: Palette,
            },
            {
              step: '۳',
              title: 'توسعه و کدنویسی',
              description: 'پیاده‌سازی با جدیدترین تکنولوژی‌ها',
              icon: Code,
            },
            {
              step: '۴',
              title: 'تست و تحویل',
              description: 'آزمایش کامل و راه‌اندازی نهایی',
              icon: CheckCircle,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className='p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'
            >
              <div className='relative mb-8'>
                <div className='w-20 h-20 bg-black flex items-center justify-center mx-auto mb-4'>
                  <item.icon className='w-10 h-10 text-white' />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-black/80 flex items-center justify-center text-sm font-bold text-white'>
                  {item.step}
                </div>
              </div>
              <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
              <p className='text-black/60'>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkFlowSection
