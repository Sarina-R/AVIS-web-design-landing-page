'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, Code, Palette, X } from 'lucide-react'

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
  widthClass?: string // Made optional since we're not using it
  heightClass?: string // Made optional since we're not using it
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

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}

const Badge = ({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) => {
  const baseStyles =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    secondary: 'bg-gray-300 text-gray-900',
    outline: 'border border-gray-400 bg-white text-gray-700',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

interface ButtonProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

const Button = ({
  children,
  className = '',
  asChild = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? 'div' : 'button'
  return (
    <Component
      className={`inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

// Custom hook to detect mobile
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

// Portfolio Modal Component
const PortfolioModal = ({ item, open, onOpenChange }: PortfolioModalProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!item) return null

  const content = (
    <div className='space-y-6'>
      <div className='aspect-video rounded-lg overflow-hidden bg-gray-100'>
        <img
          src={item.image}
          alt={item.title}
          className='w-full h-full object-cover '
        />
      </div>

      <div className='space-y-4'>
        <div className='flex items-center gap-2 flex-wrap'>
          <Badge variant='secondary'>{item.category}</Badge>
          <div className='flex items-center gap-1 text-sm text-gray-500'>
            <Calendar className='w-4 h-4' />
            {item.completedDate}
          </div>
        </div>

        <p className='text-gray-600 leading-relaxed'>{item.description}</p>

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Code className='w-4 h-4 text-gray-900' />
            <span className='font-medium'>تکنولوژی‌های استفاده شده:</span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {item.technologies.map((tech) => (
              <Badge key={tech} variant='outline' className='text-xs'>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Palette className='w-4 h-4 text-gray-900' />
            <span className='font-medium'>ویژگی‌های کلیدی:</span>
          </div>
          <ul className='space-y-2'>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className='flex items-start gap-2 text-sm text-gray-600'
              >
                <div className='w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0' />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {item.liveUrl && (
          <Button className='w-full' asChild>
            <a href={item.liveUrl} target='_blank' rel='noopener noreferrer'>
              مشاهده سایت
              <ExternalLink className='w-4 h-4 mr-2' />
            </a>
          </Button>
        )}
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 z-50'
              onClick={() => onOpenChange(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className='fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[90vh] overflow-hidden'
            >
              <div className='p-4 border-b border-gray-200'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold text-right flex-1 text-gray-900'>
                    {item.title}
                  </h2>
                  <button
                    onClick={() => onOpenChange(false)}
                    className='p-2 hover:bg-gray-200 rounded-full'
                  >
                    <X className='w-5 h-5 text-gray-900' />
                  </button>
                </div>
              </div>
              <div className='px-4 pb-6 overflow-y-auto max-h-[calc(90vh-80px)]'>
                {content}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='p-6 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold text-right flex-1 text-gray-900'>
                  {item.title}
                </h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className='p-2 hover:bg-gray-200 rounded-full'
                >
                  <X className='w-5 h-5 text-gray-900' />
                </button>
              </div>
            </div>
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-100px)]'>
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
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
    <div className='min-h-screen'>
      <main className='max-w-6xl mx-auto border px-4 sm:px-0 pt-24'>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-900'>
              نمونه کارها
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto mt-4'>
              مجموعه‌ای از پروژه‌های موفق که با استفاده از جدیدترین تکنولوژی‌ها
              توسعه یافته‌اند
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className='group cursor-pointer bg-white border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleItemClick(item)}
              >
                <div className='relative h-48 overflow-hidden'>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute top-4 right-4'>
                    <Badge variant='secondary' className='bg-white/90'>
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-right text-gray-900'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 text-sm mt-2 line-clamp-2 leading-relaxed'>
                    {item.description}
                  </p>

                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-1 text-xs text-gray-500'>
                      <Calendar className='w-3 h-3' />
                      {item.completedDate}
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-1 mt-4'>
                    {item.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge variant='outline' className='text-xs'>
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className='flex items-center justify-between mt-4'>
                    <span className='text-xs text-gray-500'>
                      {item.features.length} ویژگی
                    </span>
                    <span className='text-sm font-medium text-gray-900'>
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
