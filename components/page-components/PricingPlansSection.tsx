import React from 'react'
import { Button } from '../ui/button'
import { Badge, Check } from 'lucide-react'
import { Card } from '../ui/card'
import Link from 'next/link'

const PricingPlansSection = () => {
  return (
    <section
      id='pricing'
      className='py-24 bg-gradient-to-b from-white dark:from-neutral-950 to-neutral-50 dark:to-white/[0.02]'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-neutral-900 dark:text-neutral-100'>
            پلن‌های آماده
          </h2>
          <p className='text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-80 mx-auto'>
            بسته‌های از پیش تعریف شده برای شروع سریع پروژه‌تان
          </p>
        </div>

        {/* Plans Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8'>
          {/* Basic Plan */}
          <Card className='p-10 rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-2 bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-700'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100'>
                پایه
              </h3>
              <p className='text-neutral-500 dark:text-neutral-400 mb-6'>
                برای کسب‌وکارهای کوچک
              </p>
              <div className='text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-2'>
                ۱۵ میلیون
              </div>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                تومان
              </p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700 dark:text-neutral-200'>
              {[
                'تا ۵ صفحه',
                'طراحی ریسپانسیو',
                'بهینه‌سازی SEO پایه',
                'فرم تماس',
                '۳ ماه پشتیبانی',
                'تحویل در ۱۰ روز کاری',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-2'>
                  <Check className='w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200'>
              انتخاب پلن پایه
            </Button>
          </Card>

          {/* Professional Plan (Highlighted) */}
          <Card className='p-10 rounded-2xl shadow-lg relative transition-transform duration-300 hover:-translate-y-2 border-2 border-neutral-900 dark:border-neutral-600 bg-white dark:bg-neutral-950'>
            <div className='absolute -top-5 left-1/2 -translate-x-1/2'>
              <Badge className='bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-5 py-1 text-sm rounded-full shadow-md'>
                محبوب‌ترین
              </Badge>
            </div>

            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100'>
                حرفه‌ای
              </h3>
              <p className='text-neutral-500 dark:text-neutral-400 mb-6'>
                برای کسب‌وکارهای متوسط
              </p>
              <div className='text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-2'>
                ۳۵ میلیون
              </div>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                تومان
              </p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700 dark:text-neutral-200'>
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
                  <Check className='w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200'>
              انتخاب پلن حرفه‌ای
            </Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className='p-10 rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-2 bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-700'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100'>
                سازمانی
              </h3>
              <p className='text-neutral-500 dark:text-neutral-400 mb-6'>
                برای شرکت‌های بزرگ
              </p>
              <div className='text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-2'>
                ۶۵ میلیون
              </div>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                تومان
              </p>
            </div>

            <ul className='space-y-3 mb-10 text-neutral-700 dark:text-neutral-200'>
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
                  <Check className='w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200'>
              انتخاب پلن سازمانی
            </Button>
          </Card>
        </div>

        {/* Custom Plan CTA */}
        <div className='text-center mt-20'>
          <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
            نیاز به چیز خاص‌تری دارید؟
          </p>
          <Link href='#services'>
            <Button
              variant='outline'
              size='lg'
              className='rounded-xl border-2 border-neutral-900 dark:border-neutral-600 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-transparent dark:hover:bg-transparent hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300'
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
