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
    <section className='px-6 '>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center border-t bg-white z-10 py-20'>
          <h2 className='text-4xl md:text-[2.75rem] font-bold mb-6'>
            ویژگی‌های خدمات ما
          </h2>
          <p className='text-xl text-black/60 max-w-80 mx-auto'>
            تمام چیزهایی که برای یک وب‌سایت موفق نیاز دارید
          </p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3'>
          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <Smartphone className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>
                طراحی ریسپانسیو
              </h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              سایت شما در تمام دستگاه‌ها از موبایل تا دسکتاپ به بهترین شکل نمایش
              داده می‌شود
            </p>
          </div>

          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <Search className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>بهینه‌سازی SEO</h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              سایت شما در موتورهای جستجو رتبه بالایی کسب می‌کند و ترافیک بیشتری
              جذب می‌کند
            </p>
          </div>

          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <Zap className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>سرعت بالا</h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              بهینه‌سازی کامل برای سرعت بارگذاری و تجربه کاربری عالی
            </p>
          </div>

          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <Lock className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>امنیت بالا</h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              پیاده‌سازی بهترین استانداردهای امنیتی و محافظت از اطلاعات
            </p>
          </div>

          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <Database className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>مدیریت محتوا</h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              پنل مدیریت آسان برای به‌روزرسانی محتوای سایت بدون نیاز به دانش فنی
            </p>
          </div>

          <div className='p-8 transition-all duration-300 bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-10 md:w-12 h-10 md:h-12 bg-black rounded-2xl flex items-center justify-center'>
                <BarChart3 className='w-5 md:w-6 h-5 md:h-6 text-white' />
              </div>
              <h3 className='text-base md:text-xl font-bold'>
                آنالیتیکس پیشرفته
              </h3>
            </div>
            <p className='text-sm md:text-base text-black/60'>
              ردیابی و تحلیل رفتار کاربران برای بهبود مداوم عملکرد سایت
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
