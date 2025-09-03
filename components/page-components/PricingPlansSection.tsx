import React from 'react'
import { Button } from '../ui/button'
import { Badge, Check } from 'lucide-react'
import { Card } from '../ui/card'

const PricingPlansSection = () => {
  return (
    <section id='pricing' className='py-24 bg-black/5'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>پلن‌های آماده</h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            بسته‌های از پیش تعریف شده برای شروع سریع پروژه‌تان
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Basic Plan */}
          <Card className='p-10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-3'>پایه</h3>
              <p className='text-black/60 mb-6'>برای کسب‌وکارهای کوچک</p>
              <div className='text-4xl font-bold text-black mb-2'>
                ۱۵ میلیون
              </div>
              <p className='text-sm text-black/60'>تومان</p>
            </div>

            <ul className='space-y-4 mb-10'>
              {[
                'تا ۵ صفحه',
                'طراحی ریسپانسیو',
                'بهینه‌سازی SEO پایه',
                'فرم تماس',
                '۳ ماه پشتیبانی',
                'تحویل در ۱۰ روز کاری',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-3'>
                  <Check className='w-5 h-5 text-black flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full bg-black text-white hover:bg-black/90'>
              انتخاب پلن پایه
            </Button>
          </Card>

          {/* Professional Plan */}
          <Card className='p-10 border-black/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative border-2 bg-white'>
            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
              <Badge className='bg-black text-white px-6 py-2'>
                محبوب‌ترین
              </Badge>
            </div>

            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-3'>حرفه‌ای</h3>
              <p className='text-black/60 mb-6'>برای کسب‌وکارهای متوسط</p>
              <div className='text-4xl font-bold text-black mb-2'>
                ۳۵ میلیون
              </div>
              <p className='text-sm text-black/60'>تومان</p>
            </div>

            <ul className='space-y-4 mb-10'>
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
                <li key={feature} className='flex items-center gap-3'>
                  <Check className='w-5 h-5 text-black flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full bg-black text-white hover:bg-black/90'>
              انتخاب پلن حرفه‌ای
            </Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className='p-10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-3'>سازمانی</h3>
              <p className='text-black/60 mb-6'>برای شرکت‌های بزرگ</p>
              <div className='text-4xl font-bold text-black mb-2'>
                ۶۵ میلیون
              </div>
              <p className='text-sm text-black/60'>تومان</p>
            </div>

            <ul className='space-y-4 mb-10'>
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
                <li key={feature} className='flex items-center gap-3'>
                  <Check className='w-5 h-5 text-black flex-shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className='w-full bg-black text-white hover:bg-black/90'>
              انتخاب پلن سازمانی
            </Button>
          </Card>
        </div>

        <div className='text-center mt-16'>
          <p className='text-black/60 mb-6'>نیاز به چیز خاص‌تری دارید؟</p>
          <Button
            variant='outline'
            size='lg'
            className='border-2 bg-transparent border-black text-black hover:bg-black/5'
          >
            درخواست پلن سفارشی
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingPlansSection
