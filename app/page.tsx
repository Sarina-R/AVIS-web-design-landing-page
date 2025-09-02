import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Star,
  Users,
  Shield,
  Clock,
  Headphones,
  Rocket,
  CheckCircle,
  Smartphone,
  Search,
  Database,
  Lock,
  BarChart3,
  Check,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Globe,
} from 'lucide-react'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { StepByStepForm } from '@/components/step-by-step-form'

export default function HomePage() {
  return (
    <div className='min-h-screen '>
      {/* Navigation */}
      <nav className='border-b border-border /95 backdrop-blur supports-[backdrop-filter]:/60 sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary flex items-center justify-center'>
                <Globe className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='text-xl font-bold text-foreground'>AVIS</span>
            </div>
            <div className='hidden md:flex items-center gap-8'>
              <a
                href='#portfolio'
                className='text-muted-foreground hover:text-foreground transition-colors text-sm font-medium'
              >
                نمونه کارها
              </a>
              <a
                href='#services'
                className='text-muted-foreground hover:text-foreground transition-colors text-sm font-medium'
              >
                خدمات
              </a>
              <a
                href='#pricing'
                className='text-muted-foreground hover:text-foreground transition-colors text-sm font-medium'
              >
                قیمت‌ها
              </a>
              <a
                href='#contact'
                className='text-muted-foreground hover:text-foreground transition-colors text-sm font-medium'
              >
                تماس
              </a>
            </div>
            <Button size='sm' className='animate-pulse-glow'>
              شروع پروژه
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative py-24 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 geometric-pattern opacity-30'></div>
        <div className='absolute inset-0 dot-pattern opacity-20'></div>

        <div className='max-w-6xl mx-auto px-6 relative'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 bg-card border border-border px-4 py-2 mb-8 animate-fade-in-up'>
              <Star className='w-4 h-4 text-accent' />
              <span className='text-sm text-muted-foreground font-medium'>
                بیش از ۱۰۰ پروژه موفق
              </span>
            </div>

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance animate-fade-in-up'>
              وب‌سایت‌های <span className='text-accent'>مدرن</span>
              <br />
              توسط <span className='text-primary'>AVIS</span>
            </h1>

            <p className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty animate-slide-in-left'>
              طراحی و توسعه وب‌سایت‌های حرفه‌ای با Next.js 15، TypeScript،
              Tailwind CSS
            </p>

            <div className='flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in-up'>
              {[
                'Next.js 15',
                'TypeScript',
                'Tailwind CSS',
                'shadcn/ui',
                'React',
              ].map((tech) => (
                <div
                  key={tech}
                  className='bg-card border border-border px-4 py-2 hover:bg-muted transition-colors'
                >
                  <span className='text-sm font-medium text-card-foreground'>
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'>
              <Button
                size='lg'
                className='text-base px-8 py-6 animate-pulse-glow'
              >
                شروع پروژه
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='text-base px-8 py-6 bg-transparent border-2'
              >
                مشاهده نمونه کارها
              </Button>
            </div>

            <div className='grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>۱۰۰+</div>
                <div className='text-muted-foreground text-sm font-medium'>
                  پروژه تکمیل شده
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>۵۰+</div>
                <div className='text-muted-foreground text-sm font-medium'>
                  مشتری راضی
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>۲۴/۷</div>
                <div className='text-muted-foreground text-sm font-medium'>
                  پشتیبانی
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className='py-20 bg-muted/50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Zap className='w-8 h-8 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-3'>سرعت بالا</h3>
              <p className='text-muted-foreground'>
                وب‌سایت‌هایی با بهترین عملکرد و سرعت بارگذاری
              </p>
            </Card>

            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Palette className='w-8 h-8 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-3'>طراحی مدرن</h3>
              <p className='text-muted-foreground'>
                رابط کاربری زیبا و مدرن متناسب با برند شما
              </p>
            </Card>

            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Users className='w-8 h-8 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-3'>پشتیبانی کامل</h3>
              <p className='text-muted-foreground'>
                پشتیبانی ۲۴ ساعته و به‌روزرسانی مداوم
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              نمونه کارهای ما
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              مجموعه‌ای از پروژه‌های موفق که با استفاده از جدیدترین تکنولوژی‌ها
              طراحی و توسعه داده‌ایم
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-24 bg-muted/50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              چرا AVIS را انتخاب کنید؟
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              مزایای منحصر به فرد کار با تیم حرفه‌ای ما
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Rocket className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-4'>تحویل سریع</h3>
              <p className='text-muted-foreground'>
                پروژه‌های شما در کمترین زمان ممکن و با بالاترین کیفیت تحویل داده
                می‌شود
              </p>
            </Card>

            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Shield className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-4'>ضمانت کیفیت</h3>
              <p className='text-muted-foreground'>
                ۶ ماه ضمانت رایگان و پشتیبانی کامل پس از تحویل پروژه
              </p>
            </Card>

            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Headphones className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-4'>پشتیبانی ۲۴/۷</h3>
              <p className='text-muted-foreground'>
                تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست
              </p>
            </Card>

            <Card className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                <Clock className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-4'>به‌روزرسانی مداوم</h3>
              <p className='text-muted-foreground'>
                استفاده از جدیدترین تکنولوژی‌ها و به‌روزرسانی مداوم سایت شما
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              ویژگی‌های خدمات ما
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              تمام چیزهایی که برای یک وب‌سایت موفق نیاز دارید
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <Smartphone className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>طراحی ریسپانسیو</h3>
              </div>
              <p className='text-muted-foreground'>
                سایت شما در تمام دستگاه‌ها از موبایل تا دسکتاپ به بهترین شکل
                نمایش داده می‌شود
              </p>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <Search className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>بهینه‌سازی SEO</h3>
              </div>
              <p className='text-muted-foreground'>
                سایت شما در موتورهای جستجو رتبه بالایی کسب می‌کند و ترافیک
                بیشتری جذب می‌کند
              </p>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <Zap className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>سرعت بالا</h3>
              </div>
              <p className='text-muted-foreground'>
                بهینه‌سازی کامل برای سرعت بارگذاری و تجربه کاربری عالی
              </p>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <Lock className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>امنیت بالا</h3>
              </div>
              <p className='text-muted-foreground'>
                پیاده‌سازی بهترین استانداردهای امنیتی و محافظت از اطلاعات
              </p>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <Database className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>مدیریت محتوا</h3>
              </div>
              <p className='text-muted-foreground'>
                پنل مدیریت آسان برای به‌روزرسانی محتوای سایت بدون نیاز به دانش
                فنی
              </p>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary/10 flex items-center justify-center'>
                  <BarChart3 className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>آنالیتیکس پیشرفته</h3>
              </div>
              <p className='text-muted-foreground'>
                ردیابی و تحلیل رفتار کاربران برای بهبود مداوم عملکرد سایت
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className='py-24 bg-muted/50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              فرآیند کار ما
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
                className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'
              >
                <div className='relative mb-8'>
                  <div className='w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-4'>
                    <item.icon className='w-10 h-10 text-primary-foreground' />
                  </div>
                  <div className='absolute -top-2 -right-2 w-8 h-8 bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground'>
                    {item.step}
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
                <p className='text-muted-foreground'>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              تکنولوژی‌های مدرن
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              استفاده از جدیدترین و بهترین ابزارهای توسعه وب
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {[
              { name: 'Next.js 15', category: 'Framework' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'shadcn/ui', category: 'Components' },
              { name: 'React', category: 'Library' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Vercel', category: 'Hosting' },
              { name: 'Stripe', category: 'Payment' },
              { name: 'Supabase', category: 'Backend' },
            ].map((tech) => (
              <Card
                key={tech.name}
                className='p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'
              >
                <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                  <Code className='w-8 h-8 text-primary' />
                </div>
                <h3 className='font-bold text-sm mb-2'>{tech.name}</h3>
                <Badge variant='secondary' className='text-xs'>
                  {tech.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id='pricing' className='py-24 bg-muted/50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              پلن‌های آماده
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              بسته‌های از پیش تعریف شده برای شروع سریع پروژه‌تان
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Basic Plan */}
            <Card className='p-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-3'>پایه</h3>
                <p className='text-muted-foreground mb-6'>
                  برای کسب‌وکارهای کوچک
                </p>
                <div className='text-4xl font-bold text-primary mb-2'>
                  ۱۵ میلیون
                </div>
                <p className='text-sm text-muted-foreground'>تومان</p>
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
                    <Check className='w-5 h-5 text-primary flex-shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className='w-full'>انتخاب پلن پایه</Button>
            </Card>

            {/* Professional Plan */}
            <Card className='p-10 border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative border-2 bg-card'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                <Badge className='bg-primary text-primary-foreground px-6 py-2'>
                  محبوب‌ترین
                </Badge>
              </div>

              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-3'>حرفه‌ای</h3>
                <p className='text-muted-foreground mb-6'>
                  برای کسب‌وکارهای متوسط
                </p>
                <div className='text-4xl font-bold text-primary mb-2'>
                  ۳۵ میلیون
                </div>
                <p className='text-sm text-muted-foreground'>تومان</p>
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
                    <Check className='w-5 h-5 text-primary flex-shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className='w-full'>انتخاب پلن حرفه‌ای</Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className='p-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-3'>سازمانی</h3>
                <p className='text-muted-foreground mb-6'>برای شرکت‌های بزرگ</p>
                <div className='text-4xl font-bold text-primary mb-2'>
                  ۶۵ میلیون
                </div>
                <p className='text-sm text-muted-foreground'>تومان</p>
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
                    <Check className='w-5 h-5 text-primary flex-shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className='w-full'>انتخاب پلن سازمانی</Button>
            </Card>
          </div>

          <div className='text-center mt-16'>
            <p className='text-muted-foreground mb-6'>
              نیاز به چیز خاص‌تری دارید؟
            </p>
            <Button
              variant='outline'
              size='lg'
              className='border-2 bg-transparent'
            >
              درخواست پلن سفارشی
            </Button>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id='services' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              سفارش پروژه
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              با تکمیل فرم زیر، قیمت تقریبی پروژه‌تان را دریافت کنید و سفارش خود
              را ثبت نمایید
            </p>
          </div>

          <StepByStepForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-24 bg-muted/50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              تماس با ما
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              آماده پاسخگویی به سوالات شما و شروع پروژه‌تان هستیم
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Contact Info */}
            <div className='space-y-10'>
              <div>
                <h3 className='text-2xl font-bold mb-8'>اطلاعات تماس</h3>
                <div className='space-y-8'>
                  <div className='flex items-center gap-6'>
                    <div className='w-16 h-16 bg-primary/10 flex items-center justify-center'>
                      <Phone className='w-8 h-8 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg'>تلفن تماس</h4>
                      <p className='text-muted-foreground'>۰۲۱-۱۲۳۴۵۶۷۸</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-6'>
                    <div className='w-16 h-16 bg-primary/10 flex items-center justify-center'>
                      <Mail className='w-8 h-8 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg'>ایمیل</h4>
                      <p className='text-muted-foreground'>info@avis.ir</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-6'>
                    <div className='w-16 h-16 bg-primary/10 flex items-center justify-center'>
                      <MapPin className='w-8 h-8 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg'>آدرس</h4>
                      <p className='text-muted-foreground'>
                        تهران، خیابان ولیعصر، پلاک ۱۲۳
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='font-bold text-lg mb-6'>شبکه‌های اجتماعی</h4>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                  >
                    <Instagram className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    className='w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                  >
                    <Twitter className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    className='w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                  >
                    <Linkedin className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    className='w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                  >
                    <Github className='w-6 h-6' />
                  </a>
                </div>
              </div>

              <Card className='p-8 border-0 bg-card'>
                <h4 className='font-bold text-lg mb-4'>ساعات کاری</h4>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span>شنبه تا چهارشنبه:</span>
                    <span className='text-muted-foreground'>۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>پنج‌شنبه:</span>
                    <span className='text-muted-foreground'>۹:۰۰ - ۱۳:۰۰</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>جمعه:</span>
                    <span className='text-muted-foreground'>تعطیل</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className='p-10 border-0 bg-card'>
              <h3 className='text-2xl font-bold mb-8'>پیام بفرستید</h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <Label
                      htmlFor='firstName'
                      className='text-base font-medium'
                    >
                      نام
                    </Label>
                    <Input
                      id='firstName'
                      placeholder='نام شما'
                      className='mt-2'
                    />
                  </div>
                  <div>
                    <Label htmlFor='lastName' className='text-base font-medium'>
                      نام خانوادگی
                    </Label>
                    <Input
                      id='lastName'
                      placeholder='نام خانوادگی شما'
                      className='mt-2'
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='email' className='text-base font-medium'>
                    ایمیل
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='example@email.com'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='phone' className='text-base font-medium'>
                    شماره تماس
                  </Label>
                  <Input
                    id='phone'
                    placeholder='۰۹۱۲۳۴۵۶۷۸۹'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='subject' className='text-base font-medium'>
                    موضوع
                  </Label>
                  <Input
                    id='subject'
                    placeholder='موضوع پیام شما'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='message' className='text-base font-medium'>
                    پیام
                  </Label>
                  <Textarea
                    id='message'
                    placeholder='پیام خود را اینجا بنویسید...'
                    className='min-h-32 mt-2'
                  />
                </div>

                <Button className='w-full'>
                  ارسال پیام
                  <Send className='w-4 h-4 ml-2' />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-card border-t border-border'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-8 h-8 bg-primary flex items-center justify-center'>
                  <Globe className='w-5 h-5 text-primary-foreground' />
                </div>
                <span className='text-xl font-bold'>AVIS</span>
              </div>
              <p className='text-muted-foreground mb-6'>
                طراحی و توسعه وب‌سایت‌های مدرن با جدیدترین تکنولوژی‌ها. تیمی
                حرفه‌ای برای رسیدن به بهترین نتایج.
              </p>
              <div className='flex gap-3'>
                <a
                  href='#'
                  className='w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Twitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors'
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
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    طراحی وب‌سایت
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    فروشگاه آنلاین
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    اپلیکیشن وب
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    بهینه‌سازی SEO
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
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
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    نمونه کارها
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    سفارش پروژه
                  </a>
                </li>
                <li>
                  <a
                    href='#pricing'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    قیمت‌ها
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
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
                  <Phone className='w-5 h-5 text-primary' />
                  <span className='text-muted-foreground'>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-primary' />
                  <span className='text-muted-foreground'>info@avis.ir</span>
                </div>
                <div className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-primary mt-0.5' />
                  <span className='text-muted-foreground'>
                    تهران، خیابان ولیعصر، پلاک ۱۲۳
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-muted-foreground'>
              © ۱۴۰۳ AVIS. تمامی حقوق محفوظ است.
            </p>
            <div className='flex gap-8'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                حریم خصوصی
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                شرایط استفاده
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
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
