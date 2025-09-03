import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from 'lucide-react'
import HeroSection from '@/components/page-components/HeroSection'
import FeaturesPreview from '@/components/page-components/FeaturesPreview'
import PortfolioSection from '@/components/page-components/PortfolioSection'
import BenefitsSection from '@/components/page-components/BenefitsSection'
import FeaturesSection from '@/components/page-components/FeaturesSection'
import WorkFlowSection from '@/components/page-components/WorkFlowSection'
import TechnologiesSection from '@/components/page-components/TechnologiesSection'
import OrderFromSection from '@/components/page-components/OrderFromSection'
import PricingPlansSection from '@/components/page-components/PricingPlansSection'
import ContactSection from '@/components/page-components/ContactSection'

export default function HomePage() {
  return (
    <div className='min-h-screen max-w-6xl m-auto border border-black/10'>
      {/* Navigation */}
      <nav className='border-b border-black/10 backdrop-blur-sm sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-black flex items-center justify-center'>
                <Globe className='w-5 h-5 text-white' />
              </div>
              <span className='text-xl font-bold'>AVIS</span>
            </div>
            <div className='hidden md:flex items-center gap-8'>
              <a
                href='#portfolio'
                className='text-black/60 hover:text-black transition-colors text-sm font-medium'
              >
                نمونه کارها
              </a>
              <a
                href='#services'
                className='text-black/60 hover:text-black transition-colors text-sm font-medium'
              >
                خدمات
              </a>
              <a
                href='#pricing'
                className='text-black/60 hover:text-black transition-colors text-sm font-medium'
              >
                قیمت‌ها
              </a>
              <a
                href='#contact'
                className='text-black/60 hover:text-black transition-colors text-sm font-medium'
              >
                تماس
              </a>
            </div>
            <Button size='sm' className='bg-black text-white hover:bg-black/90'>
              شروع پروژه
            </Button>
          </div>
        </div>
      </nav>
      <HeroSection />
      <FeaturesPreview />
      <PortfolioSection />
      <BenefitsSection />
      <FeaturesSection />
      <WorkFlowSection />
      <TechnologiesSection />
      <PricingPlansSection />
      <OrderFromSection />
      <ContactSection />
      <footer className='bg-white border-t border-black/10'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-8 h-8 bg-black flex items-center justify-center'>
                  <Globe className='w-5 h-5 text-white' />
                </div>
                <span className='text-xl font-bold'>AVIS</span>
              </div>
              <p className='text-black/60 mb-6'>
                طراحی و توسعه وب‌سایت‌های مدرن با جدیدترین تکنولوژی‌ها. تیمی
                حرفه‌ای برای رسیدن به بهترین نتایج.
              </p>
              <div className='flex gap-3'>
                <a
                  href='#'
                  className='w-10 h-10 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Twitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className='font-bold text-lg mb-6'>خدمات</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    طراحی وب‌سایت
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    فروشگاه آنلاین
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    اپلیکیشن وب
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    بهینه‌سازی SEO
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    پشتیبانی و نگهداری
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-bold text-lg mb-6'>لینک‌های مفید</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#portfolio'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    نمونه کارها
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    سفارش پروژه
                  </a>
                </li>
                <li>
                  <a
                    href='#pricing'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    قیمت‌ها
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-black/60 hover:text-black transition-colors'
                  >
                    وبلاگ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='font-bold text-lg mb-6'>تماس با ما</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-black' />
                  <span className='text-black/60'>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-black' />
                  <span className='text-black/60'>info@avis.ir</span>
                </div>
                <div className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-black mt-0.5' />
                  <span className='text-black/60'>
                    تهران، خیابان ولیعصر، پلاک ۱۲۳
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-black/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-black/60'>© ۱۴۰۳ AVIS. تمامی حقوق محفوظ است.</p>
            <div className='flex gap-8'>
              <a
                href='#'
                className='text-black/60 hover:text-black transition-colors'
              >
                حریم خصوصی
              </a>
              <a
                href='#'
                className='text-black/60 hover:text-black transition-colors'
              >
                شرایط استفاده
              </a>
              <a
                href='#'
                className='text-black/60 hover:text-black transition-colors'
              >
                سوالات متداول
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
