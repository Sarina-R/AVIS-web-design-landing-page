'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PortfolioModal } from './portfolio-modal'
import { Eye, ExternalLink } from 'lucide-react'

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
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'فروشگاه آنلاین مد و پوشاک',
    description:
      'طراحی و توسعه فروشگاه آنلاین کامل با سیستم پرداخت، مدیریت موجودی و پنل ادمین پیشرفته. این پروژه شامل طراحی UI/UX مدرن و تجربه کاربری بهینه برای خرید آنلاین است.',
    image: '/modern-fashion-ecommerce.png',
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
    image: '/online-learning-dashboard.png',
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
    image: '/modern-corporate-business-website.png',
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
    image: '/project-management-dashboard.png',
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
    image: '/online-booking-reservation-system.png',
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
    image: '/minimalist-personal-blog-portfolio.png',
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

export function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className='group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300'
            onClick={() => handleItemClick(item)}
          >
            <div className='aspect-video overflow-hidden bg-muted relative'>
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3'>
                  <Eye className='w-5 h-5 text-gray-800' />
                </div>
              </div>
            </div>

            <div className='p-6'>
              <div className='flex items-center justify-between mb-3'>
                <Badge variant='secondary' className='text-xs'>
                  {item.category}
                </Badge>
                {item.liveUrl && (
                  <ExternalLink className='w-4 h-4 text-muted-foreground' />
                )}
              </div>

              <h3 className='font-semibold text-lg mb-2 group-hover:text-primary transition-colors'>
                {item.title}
              </h3>

              <p className='text-muted-foreground text-sm line-clamp-2 mb-4'>
                {item.description}
              </p>

              <div className='flex flex-wrap gap-1'>
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
            </div>
          </div>
        ))}
      </div>

      <PortfolioModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
