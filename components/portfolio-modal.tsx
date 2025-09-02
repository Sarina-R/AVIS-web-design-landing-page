'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Calendar, Code, Palette } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-mobile'

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

interface PortfolioModalProps {
  item: PortfolioItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PortfolioModal({
  item,
  open,
  onOpenChange,
}: PortfolioModalProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!item) return null

  const content = (
    <div className='space-y-6'>
      <div className='aspect-video rounded-lg overflow-hidden bg-muted'>
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <Badge variant='secondary'>{item.category}</Badge>
          <div className='flex items-center gap-1 text-sm text-muted-foreground'>
            <Calendar className='w-4 h-4' />
            {item.completedDate}
          </div>
        </div>

        <p className='text-muted-foreground leading-relaxed'>
          {item.description}
        </p>

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Code className='w-4 h-4 text-primary' />
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
            <Palette className='w-4 h-4 text-primary' />
            <span className='font-medium'>ویژگی‌های کلیدی:</span>
          </div>
          <ul className='space-y-2'>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className='flex items-start gap-2 text-sm text-muted-foreground'
              >
                <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0' />
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
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className='max-h-[90vh]'>
          <DrawerHeader className='text-right'>
            <DrawerTitle>{item.title}</DrawerTitle>
          </DrawerHeader>
          <div className='px-4 pb-6 overflow-y-auto'>{content}</div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-right'>{item.title}</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
}
