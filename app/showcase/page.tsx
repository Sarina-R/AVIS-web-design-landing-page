'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, Code, Palette, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PortfolioModal } from '@/components/portfolio-modal'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  completedDate: string
  features: string[]
  liveUrl?: string
  widthClass?: string
  heightClass?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'فروشگاه آنلاین مد و پوشاک',
    description:
      'طراحی و توسعه فروشگاه آنلاین کامل با سیستم پرداخت، مدیریت موجودی و پنل ادمین پیشرفته. این پروژه شامل طراحی UI/UX مدرن و تجربه کاربری بهینه برای خرید آنلاین است.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    category: 'فروشگاه آنلاین',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'Supabase',
    ],
    completedDate: 'آذر ۱۴۰۳',
    features: [
      'سیستم پرداخت امن با Stripe',
      'پنل مدیریت پیشرفته',
      'سیستم جستجو و فیلتر هوشمند',
      'طراحی ریسپانسیو برای همه دستگاه‌ها',
      'بهینه‌سازی SEO کامل',
    ],
    liveUrl: 'https://example-fashion.com',
  },
  {
    id: '2',
    title: 'پلتفرم آموزش آنلاین',
    description:
      'سامانه جامع آموزش آنلاین با قابلیت برگزاری کلاس‌های زنده، آپلود ویدیو، سیستم امتحان و گواهینامه. طراحی شده برای ارائه بهترین تجربه یادگیری.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    category: 'آموزش آنلاین',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'WebRTC'],
    completedDate: 'آبان ۱۴۰۳',
    features: [
      'کلاس‌های زنده با WebRTC',
      'سیستم امتحان و نمره‌دهی',
      'پنل مدرس و دانشجو',
      'گواهینامه دیجیتال',
      'پیگیری پیشرفت تحصیلی',
    ],
  },
  {
    id: '3',
    title: 'سایت شرکتی و نمایشگاهی',
    description:
      'وب‌سایت شرکتی مدرن با طراحی منحصر به فرد، انیمیشن‌های جذاب و محتوای بهینه‌سازی شده برای موتورهای جستجو. نمایش خدمات و محصولات به شکلی حرفه‌ای.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'سایت شرکتی',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Contentful'],
    completedDate: 'مهر ۱۴۰۳',
    features: [
      'انیمیشن‌های تعاملی',
      'سیستم مدیریت محتوا',
      'فرم تماس پیشرفته',
      'گالری تصاویر و ویدیو',
      'چندزبانه بودن',
    ],
    liveUrl: 'https://example-corporate.com',
  },
  {
    id: '4',
    title: 'اپلیکیشن مدیریت پروژه',
    description:
      'ابزار قدرتمند مدیریت پروژه با قابلیت‌های کامل ردیابی وظایف، همکاری تیمی، گزارش‌گیری و تحلیل عملکرد. طراحی شده برای تیم‌های مختلف.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    category: 'اپلیکیشن وب',
    technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis'],
    completedDate: 'شهریور ۱۴۰۳',
    features: [
      'داشبورد تحلیلی پیشرفته',
      'سیستم اعلان‌های real-time',
      'مدیریت تیم و دسترسی‌ها',
      'گزارش‌گیری خودکار',
      'تقویم و زمان‌بندی هوشمند',
    ],
  },
  {
    id: '5',
    title: 'پلتفرم رزرو آنلاین',
    description:
      'سیستم رزرو آنلاین برای کسب‌وکارهای خدماتی با قابلیت مدیریت تقویم، پرداخت آنلاین، اعلان‌های خودکار و پنل مدیریت کامل.',
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
    category: 'سیستم رزرو',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Twilio'],
    completedDate: 'مرداد ۱۴۰۳',
    features: [
      'تقویم رزرو تعاملی',
      'سیستم پرداخت چندگانه',
      'اعلان SMS و ایمیل',
      'مدیریت منابع و خدمات',
      'گزارش‌های مالی دقیق',
    ],
  },
  {
    id: '6',
    title: 'بلاگ شخصی و نمایشگاه آثار',
    description:
      'وب‌سایت شخصی برای نمایش آثار هنری و نوشته‌ها با طراحی مینیمال و زیبا. شامل سیستم مدیریت محتوا و بهینه‌سازی کامل برای سرعت.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
    category: 'وب‌سایت شخصی',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    completedDate: 'تیر ۱۴۰۳',
    features: [
      'سیستم بلاگ با MDX',
      'گالری آثار تعاملی',
      'بهینه‌سازی تصاویر',
      'حالت تاریک و روشن',
      'سرعت بارگذاری بالا',
    ],
    liveUrl: 'https://example-portfolio.com',
  },
]

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

interface PortfolioModalProps {
  item: PortfolioItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const Page = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleModalClose = (open: boolean) => {
    setIsModalOpen(open)
    if (!open) {
      setTimeout(() => setSelectedItem(null), 300)
    }
  }

  return (
    <div className='min-h-screen dark:bg-neutral-950 border border-black/10  dark:border-white/10 max-w-7xl mx-auto '>
      <main className='pt-28 pb-16'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='text-center py-8 border-b border-black/10  dark:border-white/10 px-4 sm:px-6 lg:px-8 '>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight'>
              نمونه کارها
            </h2>
            <p className='text-neutral-600 dark:text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed'>
              مجموعه‌ای از پروژه‌های موفق که با استفاده از جدیدترین تکنولوژی‌ها
              توسعه یافته‌اند
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className='group cursor-pointer bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                onClick={() => handleItemClick(item)}
              >
                <div className='relative h-56 overflow-hidden'>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute top-4 right-4'>
                    <Badge
                      variant='secondary'
                      className='bg-white/95 dark:bg-neutral-950/95 text-neutral-800 dark:text-neutral-200 font-medium px-3 py-1 rounded-full shadow-sm'
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className='p-6 space-y-4'>
                  <h3 className='text-xl font-semibold text-right text-neutral-900 dark:text-white'>
                    {item.title}
                  </h3>
                  <p className='text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-2'>
                    {item.description}
                  </p>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400'>
                      <Calendar className='w-4 h-4' />
                      {item.completedDate}
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {item.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant='outline'
                        className='text-xs bg-neutral-100 dark:bg-neutral-800 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200'
                      >
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge
                        variant='outline'
                        className='text-xs bg-neutral-100 dark:bg-neutral-800 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200'
                      >
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className='flex items-center justify-between pt-2'>
                    <span className='text-xs text-neutral-500 dark:text-neutral-400'>
                      {item.features.length} ویژگی
                    </span>
                    <span className='text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300'>
                      مشاهده جزئیات
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <PortfolioModal
        item={selectedItem}
        open={isModalOpen}
        onOpenChange={handleModalClose}
      />
    </div>
  )
}

export default Page
