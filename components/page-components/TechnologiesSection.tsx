import { Badge, Code } from 'lucide-react'
import React from 'react'
import { Card } from '../ui/card'

const TechnologiesSection = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            تکنولوژی‌های مدرن
          </h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
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
              className='p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-white'
            >
              <div className='w-16 h-16 bg-black/10 flex items-center justify-center mx-auto mb-4'>
                <Code className='w-8 h-8 text-black' />
              </div>
              <h3 className='font-bold text-sm mb-2'>{tech.name}</h3>
              <Badge className='bg-black/10 text-black text-xs'>
                {tech.category}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
