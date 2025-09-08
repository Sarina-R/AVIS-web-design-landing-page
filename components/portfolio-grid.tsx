'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { PortfolioModal } from './portfolio-modal'
import { Eye, ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
  widthClass: string
  heightClass: string
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
    widthClass: 'col-span-2',
    heightClass: 'h-96',
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
    widthClass: 'col-span-2',
    heightClass: 'h-64',
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
    widthClass: 'col-span-2',
    heightClass: 'h-80',
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
    widthClass: 'col-span-2',
    heightClass: 'h-72',
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
    widthClass: 'col-span-2',
    heightClass: 'h-80',
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
    widthClass: 'col-span-2',
    heightClass: 'h-96 -top-32',
  },
  {
    id: '7',
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
    widthClass: 'col-span-2',
    heightClass: 'h-52 -top-15',
  },
  {
    id: '8',
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
    widthClass: 'col-span-2',
    heightClass: 'h-80 -top-25',
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
    <div className='min-h-screen p-6 relative'>
      <div className='grid grid-cols-8 gap-4 auto-rows-min absolute sm:-right-50 -left-5 sm:left-0 w-[120vw]'>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.widthClass} ${item.heightClass} rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group`}
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.image || '/placeholder.svg'}
              alt={item.title}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3'>
                <Eye className='w-5 h-5 text-neutral-800' />
              </div>
            </div>
            <div className='absolute inset-0 bg-transparent hover:bg-neutral-900/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 p-4'>
              <div className='text-white'>
                <div className='flex items-center justify-between mb-2'>
                  <Badge
                    variant='secondary'
                    className='text-xs bg-neutral-700 text-white'
                  >
                    {item.category}
                  </Badge>
                  {item.liveUrl && (
                    <Link href={item.liveUrl} target='_blank'>
                      <ExternalLink className='w-4 h-4 text-neutral-200' />
                    </Link>
                  )}
                </div>
                <h3 className='font-semibold text-lg mb-2 hover:text-blue-400 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-neutral-200 text-sm line-clamp-2 mb-4'>
                  {item.description}
                </p>
                <div className='flex flex-wrap gap-1'>
                  {item.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='text-xs border-neutral-400 text-neutral-100'
                    >
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies.length > 3 && (
                    <Badge
                      variant='outline'
                      className='text-xs border-neutral-400 text-neutral-100'
                    >
                      +{item.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-8'>
        <Link href='/showcase'>
          <button className='bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-black/90 transition-colors absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
            مشاهده همه نمونه کارها
          </button>
        </Link>
      </div>

      <PortfolioModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
