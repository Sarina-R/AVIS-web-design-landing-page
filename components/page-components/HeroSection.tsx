'use client'

import { ArrowRight, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md'

  const variants = {
    default:
      'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200',
    outline:
      'border border-dashed border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-800',
  }

  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 py-3 text-base',
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

interface AnimatedPathProps {
  d: string
  delay?: number
  duration?: number
  className?: string
}

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  d,
  delay = 0,
  duration = 1.5,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <svg className={className}>
      <defs>
        <linearGradient id={`gradient-${d}`} x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop
            offset='0%'
            style={{
              stopColor: 'currentColor',
              stopOpacity: isVisible ? 0.2 : 0,
              transition: `stop-opacity ${duration}s ease-in-out`,
            }}
          />
          <stop
            offset='100%'
            style={{
              stopColor: 'currentColor',
              stopOpacity: isVisible ? 1 : 0,
              transition: `stop-opacity ${duration}s ease-in-out`,
            }}
          />
        </linearGradient>
      </defs>
      <path
        d={d}
        stroke={`url(#gradient-${d})`}
        strokeWidth='1'
        fill='none'
        strokeDasharray='1000'
        strokeDashoffset={isVisible ? 0 : 1000}
        style={{
          transition: `stroke-dashoffset ${duration}s ease-in-out`,
        }}
      />
    </svg>
  )
}

const AnimatedHorizontalLine: React.FC<{
  delay?: number
  duration?: number
}> = ({ delay = 0, duration = 1 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <svg
      className='absolute left-1/2 -translate-x-1/2 w-[105%] h-px'
      viewBox='0 0 100 1'
      preserveAspectRatio='none'
    >
      <line
        x1='0'
        y1='0.5'
        x2='100'
        y2='0.5'
        stroke='currentColor'
        strokeOpacity='0.15'
        strokeWidth='1'
        strokeDasharray='1,0.5'
        strokeDashoffset={isVisible ? 0 : 100}
        style={{
          transition: `stroke-dashoffset ${duration}s ease-in-out`,
        }}
      />
    </svg>
  )
}

interface GlowingLineProps {
  x: number // percentage (e.g., 33.3333, 95)
  delay?: number
  duration?: number
  isVisible?: boolean
}

const GlowingLine: React.FC<GlowingLineProps> = ({
  x,
  delay = 0,
  duration = 2,
  isVisible = true,
}) => {
  return (
    <svg
      className='absolute -top-10 h-[800vh] w-px text-black dark:text-white'
      style={{
        left: `${x}%`,
        transitionDelay: `${delay}ms`,
      }}
      viewBox='0 0 1 100'
      preserveAspectRatio='none'
    >
      <line
        x1='0.5'
        y1='0'
        x2='0.5'
        y2='100'
        stroke='currentColor'
        strokeOpacity='0.15'
        strokeWidth='1'
        strokeDasharray='0.1,0.2'
        strokeDashoffset={isVisible ? 0 : 100}
        style={{
          transition: `stroke-dashoffset ${duration}s ease-in-out`,
        }}
      />
    </svg>
  )
}

interface StatItemProps {
  number: string
  label: string
  delay: number
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`text-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
        {number}
      </div>
      <div className='text-neutral-500 dark:text-neutral-400 text-sm font-medium uppercase'>
        {label}
      </div>
    </div>
  )
}

const useMediaQuery = (query: string): boolean => {
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

const HeroSection: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState<boolean>(false)
  const [subtitleVisible, setSubtitleVisible] = useState<boolean>(false)
  const [techVisible, setTechVisible] = useState<boolean>(false)
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false)
  const isLarge = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    const timers = [
      setTimeout(() => setTitleVisible(true), 300),
      setTimeout(() => setSubtitleVisible(true), 500),
      setTimeout(() => setTechVisible(true), 700),
      setTimeout(() => setButtonsVisible(true), 900),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  const techStack: string[] = ['Next.js 15', 'WordPress']

  return (
    <section className='relative pb-5 mt-20 border-b border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950'>
      <div className='relative'>
        <div className='absolute left-1/2 top-0 -translate-x-1/2 w-[105%] h-px bg-neutral-200 dark:bg-neutral-700 z-50' />
      </div>
      <div className='absolute -left-12 -top-12 border border-dashed w-24 h-24 rounded-full border-neutral-300 dark:border-neutral-600 border-r-transparent rotate-45 z-50' />

      {/* Background SVG Patterns */}
      <div className='absolute inset-0'>
        <svg
          className='absolute inset-0 w-full h-full text-neutral-200 dark:text-neutral-700'
          viewBox='0 0 1400 900'
          preserveAspectRatio='xMidYMid slice'
        >
          <AnimatedPath d='M0,450 H1400' delay={300} duration={2} />
          <AnimatedPath d='M700,0 V900' delay={600} duration={2} />
        </svg>
      </div>

      {/* Glowing Vertical Lines */}
      <GlowingLine x={isLarge ? 33.3333 : 5} delay={200} />
      <GlowingLine x={isLarge ? 66.6666 : 95} delay={400} />

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center'>
          <div className='bg-white dark:bg-neutral-950'>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 px-4 py-2 mt-6 mb-2 rounded-full transition-opacity duration-500 ${
                titleVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Star className='w-4 h-4 text-white dark:text-neutral-900' />
              <span className='text-sm font-medium text-white dark:text-neutral-900'>
                بیش از ۱۰۰ پروژه موفق
              </span>
            </div>
            {/* Main Title */}
            <h1
              className={`text-5xl md:text-6xl font-semibold text-neutral-800 dark:text-neutral-100 pb-8 leading-tight transition-opacity duration-500 max-w-80 sm:max-w-max mx-auto ${
                titleVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              خدمات طراحی وبسایت {''}
              <span className='relative inline-block text-neutral-900 dark:text-neutral-100'>
                AVIS
              </span>
            </h1>
          </div>
          {/* line */}
          <div className='relative'>
            <AnimatedHorizontalLine delay={10} duration={2} />
          </div>

          {/* Subtitle */}
          <p
            className={`text-base md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-medium transition-opacity duration-500 bg-white dark:bg-neutral-950 py-4 ${
              subtitleVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            طراحی و توسعه وب‌سایت‌های حرفه‌ای با جدیدترین تکنولوژی‌ها
          </p>
          {/* line */}
          <div className='relative'>
            <AnimatedHorizontalLine delay={50} duration={2} />
          </div>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap items-center justify-center transition-opacity duration-500 ${
              techVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {techStack.map((tech: string, index: number) => (
              <div
                key={tech}
                className={`px-4 py-2 transition-opacity duration-500`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                <span className='text-xs text-neutral-900 dark:text-neutral-100 font-black'>
                  {tech}
                </span>
              </div>
            ))}
          </div>
          {/* line */}
          <div className='relative'>
            <AnimatedHorizontalLine delay={100} duration={2} />
          </div>

          {/* CTA Buttons */}
          <div
            className={`relative grid grid-cols-1 items-center justify-center gap-4 my-10 transition-opacity duration-500 md:max-w-[31%] mx-auto ${
              buttonsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Button size='lg' className='w-[80%] m-auto'>
              <ArrowRight className='w-4 h-4 ml-2' />
              <span>شروع پروژه</span>
            </Button>
            <Button variant='outline' size='lg' className='w-[80%] m-auto'>
              <span> نمونه کارها</span>
            </Button>
            <div className='absolute -right-10 -bottom-18 border w-16 h-16 rounded-full border-neutral-300 dark:border-neutral-600 border-l-transparent rotate-45 z-50' />
          </div>
          {/* line */}
          <div className='relative'>
            <AnimatedHorizontalLine delay={200} duration={2} />
          </div>

          {/* Stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto py-15'>
            <StatItem number='۱۰۰+' label='پروژه تکمیل شده' delay={1200} />
            <StatItem number='۵۰+' label='مشتری راضی' delay={1400} />
            <StatItem number='۲۴/۷' label='پشتیبانی' delay={1600} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
