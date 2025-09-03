import React from 'react'
import { Card } from '../ui/card'
import {
  BarChart3,
  Database,
  Lock,
  Search,
  Smartphone,
  Zap,
} from 'lucide-react'

const FeaturesSection = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            ویژگی‌های خدمات ما
          </h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            تمام چیزهایی که برای یک وب‌سایت موفق نیاز دارید
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <Smartphone className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>طراحی ریسپانسیو</h3>
            </div>
            <p className='text-black/60'>
              سایت شما در تمام دستگاه‌ها از موبایل تا دسکتاپ به بهترین شکل نمایش
              داده می‌شود
            </p>
          </Card>

          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <Search className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>بهینه‌سازی SEO</h3>
            </div>
            <p className='text-black/60'>
              سایت شما در موتورهای جستجو رتبه بالایی کسب می‌کند و ترافیک بیشتری
              جذب می‌کند
            </p>
          </Card>

          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <Zap className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>سرعت بالا</h3>
            </div>
            <p className='text-black/60'>
              بهینه‌سازی کامل برای سرعت بارگذاری و تجربه کاربری عالی
            </p>
          </Card>

          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <Lock className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>امنیت بالا</h3>
            </div>
            <p className='text-black/60'>
              پیاده‌سازی بهترین استانداردهای امنیتی و محافظت از اطلاعات
            </p>
          </Card>

          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <Database className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>مدیریت محتوا</h3>
            </div>
            <p className='text-black/60'>
              پنل مدیریت آسان برای به‌روزرسانی محتوای سایت بدون نیاز به دانش فنی
            </p>
          </Card>

          <Card className='p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-black/10 flex items-center justify-center'>
                <BarChart3 className='w-6 h-6 text-black' />
              </div>
              <h3 className='text-xl font-bold'>آنالیتیکس پیشرفته</h3>
            </div>
            <p className='text-black/60'>
              ردیابی و تحلیل رفتار کاربران برای بهبود مداوم عملکرد سایت
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
