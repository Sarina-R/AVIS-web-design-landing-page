import React from 'react'
import { Button } from '../ui/button'
import { Badge, Check } from 'lucide-react'
import { Card } from '../ui/card'
import Link from 'next/link'

const PricingPlansSection = () => {
  return (
    <section
      id='pricing'
      className='py-24 bg-gradient-to-b from-white to-neutral-50'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
            پلن‌های آماده
          </h2>
          <p className='text-lg md:text-xl text-neutral-600 max-w-80 mx-auto'>
            بسته‌های از پیش تعریف شده برای شروع سریع پروژه‌تان
          </p>
        </div>

        {/* Plans Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8'>
          {/* Basic Plan */}
          <Card className='p-10 rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-2 bg-white border border-neutral-100'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2'>پایه</h3>
              <p className='text-neutral-500 mb-6'>برای کسب‌وکارهای کوچک</p>
              <div className='text-4xl font-extrabold text-neutral-900 mb-2'>
                ۱۵ میلیون
              </div>
              <p className='text-sm text-neutral-500'>تومان</p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700'>
              {[
                'تا ۵ صفحه',
                'طراحی ریسپانسیو',
                'بهینه‌سازی SEO پایه',
                'فرم تماس',
                '۳ ماه پشتیبانی',
                'تحویل در ۱۰ روز کاری',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-2'>
                  <Check className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 text-white hover:bg-neutral-800'>
              انتخاب پلن پایه
            </Button>
          </Card>

          {/* Professional Plan (Highlighted) */}
          <Card className='p-10 rounded-2xl shadow-lg relative transition-transform duration-300 hover:-translate-y-2 border-2 border-neutral-900 bg-white'>
            <div className='absolute -top-5 left-1/2 -translate-x-1/2'>
              <Badge className='bg-neutral-900 text-white px-5 py-1 text-sm rounded-full shadow-md'>
                محبوب‌ترین
              </Badge>
            </div>

            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2'>حرفه‌ای</h3>
              <p className='text-neutral-500 mb-6'>برای کسب‌وکارهای متوسط</p>
              <div className='text-4xl font-extrabold text-neutral-900 mb-2'>
                ۳۵ میلیون
              </div>
              <p className='text-sm text-neutral-500'>تومان</p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700'>
              {[
                'تا ۱۵ صفحه',
                'طراحی اختصاصی',
                'بهینه‌سازی SEO کامل',
                'پنل مدیریت محتوا',
                'فرم‌های پیشرفته',
                'گوگل آنالیتیکس',
                '۶ ماه پشتیبانی',
                'تحویل در ۲۰ روز کاری',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-2'>
                  <Check className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 text-white hover:bg-neutral-800'>
              انتخاب پلن حرفه‌ای
            </Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className='p-10 rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-2 bg-white border border-neutral-100'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2'>سازمانی</h3>
              <p className='text-neutral-500 mb-6'>برای شرکت‌های بزرگ</p>
              <div className='text-4xl font-extrabold text-neutral-900 mb-2'>
                ۶۵ میلیون
              </div>
              <p className='text-sm text-neutral-500'>تومان</p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700'>
              {[
                'صفحات نامحدود',
                'طراحی کاملاً اختصاصی',
                'SEO و بازاریابی دیجیتال',
                'پنل مدیریت پیشرفته',
                'سیستم کاربران',
                'درگاه پرداخت',
                'آنالیتیکس پیشرفته',
                '۱۲ ماه پشتیبانی',
                'تحویل در ۳۰ روز کاری',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-2'>
                  <Check className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 text-white hover:bg-neutral-800'>
              انتخاب پلن سازمانی
            </Button>
          </Card>
        </div>

        {/* Custom Plan CTA */}
        <div className='text-center mt-20'>
          <p className='text-neutral-600 mb-4'>نیاز به چیز خاص‌تری دارید؟</p>
          <Link href='#services'>
            <Button
              variant='outline'
              size='lg'
              className='rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-colors duration-300'
            >
              درخواست پلن سفارشی
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PricingPlansSection
