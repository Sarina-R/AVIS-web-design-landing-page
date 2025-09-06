'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Code,
  Compass as Wordpress,
  Globe,
  ShoppingCart,
  Users,
  FileText,
  Calculator,
  AlertCircle,
  Star,
  MessageSquare,
  DollarSign,
  CreditCard,
  Info,
  User,
  Mail,
  Phone,
} from 'lucide-react'

// Interfaces
interface CartoonCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  [key: string]: any
}

interface CartoonButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'success'
  disabled?: boolean
  onClick?: () => void
  [key: string]: any
}

interface CartoonRadioProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
  name: string
  value: string
}

interface CartoonCheckboxProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

interface FormData {
  developmentType: string
  websiteType: string
  pageCount: string
  features: string[]
  description: string
  budget: string
  contactInfo: {
    name: string
    email: string
    phone: string
  }
}

// Constants
const steps = [
  { id: 1, title: 'نوع توسعه', icon: Code },
  { id: 2, title: 'موضوع سایت', icon: Globe },
  { id: 3, title: 'تعداد صفحات', icon: FileText },
  { id: 4, title: 'ویژگی‌ها', icon: Check },
  { id: 5, title: 'توضیحات', icon: Users },
  { id: 6, title: 'قیمت و ثبت', icon: Calculator },
]

const developmentTypes = [
  {
    id: 'custom',
    title: 'توسعه اختصاصی',
    description: 'با Next.js، React و جدیدترین تکنولوژی‌ها',
    icon: Code,
    multiplier: 1.5,
  },
  {
    id: 'wordpress',
    title: 'وردپرس',
    description: 'سریع، آسان و قابل مدیریت',
    icon: Wordpress,
    multiplier: 1,
  },
]

const websiteTypes = [
  { id: 'corporate', title: 'سایت شرکتی', basePrice: 15000000, icon: Globe },
  {
    id: 'ecommerce',
    title: 'فروشگاه آنلاین',
    basePrice: 35000000,
    icon: ShoppingCart,
  },
  { id: 'portfolio', title: 'نمایشگاه آثار', basePrice: 8000000, icon: Users },
  { id: 'blog', title: 'وبلاگ و خبری', basePrice: 12000000, icon: FileText },
  { id: 'landing', title: 'صفحه فرود', basePrice: 6000000, icon: FileText },
  { id: 'custom', title: 'سفارشی', basePrice: 20000000, icon: Code },
]

const pageCounts = [
  { id: '1-5', title: '۱ تا ۵ صفحه', multiplier: 1 },
  { id: '6-10', title: '۶ تا ۱۰ صفحه', multiplier: 1.3 },
  { id: '11-20', title: '۱۱ تا ۲۰ صفحه', multiplier: 1.7 },
  { id: '20+', title: 'بیش از ۲۰ صفحه', multiplier: 2.2 },
]

const features = [
  { id: 'seo', title: 'بهینه‌سازی SEO', price: 3000000 },
  { id: 'responsive', title: 'طراحی ریسپانسیو', price: 2000000 },
  { id: 'cms', title: 'سیستم مدیریت محتوا', price: 5000000 },
  { id: 'payment', title: 'درگاه پرداخت', price: 4000000 },
  { id: 'multilang', title: 'چندزبانه', price: 6000000 },
  { id: 'analytics', title: 'گوگل آنالیتیکس', price: 1000000 },
  { id: 'security', title: 'امنیت پیشرفته', price: 3000000 },
  { id: 'backup', title: 'پشتیبان‌گیری خودکار', price: 2000000 },
]

// Components
const CartoonCard: React.FC<CartoonCardProps> = ({
  children,
  className = '',
  hover = true,
  ...props
}) => (
  <div
    className={`
      bg-white border border-neutral-900 rounded-xl p-6
      shadow-sm transition-all duration-300 ease-in-out
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
)

const CartoonButton: React.FC<CartoonButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const baseClasses = `
    px-6 py-2.5 rounded-xl font-semibold text-base
    transition-all duration-300 ease-in-out
    flex items-center gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400
  `

  const variants = {
    primary: `${baseClasses} bg-black text-white hover:bg-neutral-800`,
    outline: `${baseClasses} border border-neutral-300 text-black hover:bg-neutral-100`,
    success: `${baseClasses} bg-black text-white hover:bg-neutral-800`,
  }

  return (
    <button className={variants[variant]} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

const CartoonRadio: React.FC<CartoonRadioProps> = ({
  checked,
  onChange,
  children,
  name,
  value,
}) => (
  <label className='flex items-center cursor-pointer group'>
    <div className='relative flex-shrink-0'>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='sr-only'
        aria-checked={checked}
      />
      <div
        className={`
          w-5 h-5 border-2 border-neutral-300 rounded
          transition-all duration-200
          ${checked ? 'border-black bg-black' : 'bg-white'}
          group-hover:border-neutral-500
        `}
      >
        {checked && <div className='absolute inset-1 bg-white rounded-sm' />}
      </div>
    </div>
    <div className='ml-3 flex-1'>{children}</div>
  </label>
)

const CartoonCheckbox: React.FC<CartoonCheckboxProps> = ({
  checked,
  onChange,
  children,
}) => (
  <label className='flex items-center cursor-pointer group'>
    <div className='relative flex-shrink-0'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='sr-only'
        aria-checked={checked}
      />
      <div
        className={`
          w-5 h-5 border-2 border-neutral-300 rounded
          transition-all duration-200
          ${checked ? 'border-black bg-black' : 'bg-white'}
          group-hover:border-neutral-500
        `}
      >
        {checked && <Check className='w-4 h-4 text-white absolute inset-0.5' />}
      </div>
    </div>
    <div className='ml-3 flex-1'>{children}</div>
  </label>
)

// Main Component
const StepByStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({
    developmentType: '',
    websiteType: '',
    pageCount: '',
    features: [],
    description: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    },
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const calculatePrice = (): number => {
    const websiteType = websiteTypes.find((t) => t.id === formData.websiteType)
    const developmentType = developmentTypes.find(
      (t) => t.id === formData.developmentType
    )
    const pageCount = pageCounts.find((p) => p.id === formData.pageCount)

    if (!websiteType || !developmentType || !pageCount) return 0

    let basePrice = websiteType.basePrice
    basePrice *= developmentType.multiplier
    basePrice *= pageCount.multiplier

    const featuresPrice = formData.features.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId)
      return total + (feature?.price || 0)
    }, 0)

    return basePrice + featuresPrice
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const handleFeatureChange = (featureId: string, checked: boolean): void => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, featureId]
        : prev.features.filter((id) => id !== featureId),
    }))
  }

  const nextStep = (): void => {
    if (currentStep < steps.length && isStepValid()) {
      setCurrentStep(currentStep + 1)
      setErrors({})
    } else {
      validateStep()
    }
  }

  const prevStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const validateStep = (): boolean => {
    const newErrors: { [key: string]: string } = {}
    switch (currentStep) {
      case 1:
        if (!formData.developmentType)
          newErrors.developmentType = 'لطفاً نوع توسعه را انتخاب کنید'
        break
      case 2:
        if (!formData.websiteType)
          newErrors.websiteType = 'لطفاً نوع وب‌سایت را انتخاب کنید'
        break
      case 3:
        if (!formData.pageCount)
          newErrors.pageCount = 'لطفاً تعداد صفحات را انتخاب کنید'
        break
      case 5:
        if (!formData.description.trim())
          newErrors.description = 'لطفاً توضیحات پروژه را وارد کنید'
        break
      case 6:
        if (!formData.contactInfo.name)
          newErrors.name = 'لطفاً نام خود را وارد کنید'
        if (!formData.contactInfo.email)
          newErrors.email = 'لطفاً ایمیل خود را وارد کنید'
        if (!formData.contactInfo.phone)
          newErrors.phone = 'لطفاً شماره تماس خود را وارد کنید'
        break
      default:
        break
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!formData.developmentType
      case 2:
        return !!formData.websiteType
      case 3:
        return !!formData.pageCount
      case 4:
        return true
      case 5:
        return !!formData.description.trim()
      case 6:
        return (
          !!formData.contactInfo.name &&
          !!formData.contactInfo.email &&
          !!formData.contactInfo.phone
        )
      default:
        return false
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                نوع توسعه را انتخاب کنید
              </h2>
              <p className='text-sm text-neutral-500'>
                چه نوع تکنولوژی برای پروژه‌تان ترجیح می‌دهید؟
              </p>
            </div>

            <div className='grid gap-3 max-w-xl mx-auto'>
              {developmentTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() =>
                    setFormData({ ...formData, developmentType: type.id })
                  }
                  className={`
                  relative group cursor-pointer transition-all duration-200
                  ${
                    formData.developmentType === type.id
                      ? 'bg- border-2 border-black/50'
                      : 'bg-neutral-50 border-2 border-neutral-100 hover:border-neutral-200'
                  }
                  rounded-lg p-4
                `}
                >
                  {formData.developmentType === type.id && (
                    <div className='absolute top-3 right-3'>
                      <div className='w-5 h-5 bg-black rounded-full flex items-center justify-center'>
                        <Check className='w-3 h-3 text-white' />
                      </div>
                    </div>
                  )}

                  <div className='flex items-center gap-4'>
                    <div
                      className={`
                    w-10 h-10 rounded-lg flex items-center justify-center
                    ${
                      formData.developmentType === type.id
                        ? 'bg-black'
                        : 'bg-neutral-200'
                    }
                  `}
                    >
                      <type.icon
                        className={`w-5 h-5 ${
                          formData.developmentType === type.id
                            ? 'text-white'
                            : 'text-neutral-500'
                        }`}
                      />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-medium text-neutral-700 mb-1'>
                        {type.title}
                      </h3>
                      <p className='text-sm text-neutral-500 leading-relaxed'>
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {errors.developmentType && (
                <div className='flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg'>
                  <AlertCircle className='w-4 h-4' />
                  <p className='text-xs'>{errors.developmentType}</p>
                </div>
              )}
            </div>
          </div>
        )

      case 2:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                موضوع سایت چیست؟
              </h2>
              <p className='text-sm text-neutral-500'>
                نوع وب‌سایت مورد نظر خود را انتخاب کنید
              </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto'>
              {websiteTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() =>
                    setFormData({ ...formData, websiteType: type.id })
                  }
                  className={`
                  relative group cursor-pointer transition-all duration-200
                  ${
                    formData.websiteType === type.id
                      ? ' border-2 border-black/50'
                      : 'bg-neutral-50 border-2 border-neutral-100 hover:border-neutral-200'
                  }
                  rounded-lg p-4 h-full
                `}
                >
                  {formData.websiteType === type.id && (
                    <div className='absolute top-3 right-3'>
                      <div className='w-5 h-5 bg-black rounded-full flex items-center justify-center'>
                        <Check className='w-3 h-3 text-white' />
                      </div>
                    </div>
                  )}

                  <div className='flex flex-col items-center text-center gap-3 h-full'>
                    <div
                      className={`
                    w-12 h-12 rounded-lg flex items-center justify-center
                    ${
                      formData.websiteType === type.id
                        ? 'bg-black'
                        : 'bg-neutral-200'
                    }
                  `}
                    >
                      <type.icon
                        className={`w-6 h-6 ${
                          formData.websiteType === type.id
                            ? 'text-white'
                            : 'text-neutral-500'
                        }`}
                      />
                    </div>
                    <div className='flex-1 flex flex-col justify-center'>
                      <h3 className='text-sm font-medium text-neutral-700 mb-2'>
                        {type.title}
                      </h3>
                      <div
                        className={`
                      inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${
                        formData.websiteType === type.id
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-500'
                      }
                    `}
                      >
                        از {formatPrice(type.basePrice)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {errors.websiteType && (
                <div className='col-span-full flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg'>
                  <AlertCircle className='w-4 h-4' />
                  <p className='text-xs'>{errors.websiteType}</p>
                </div>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                تعداد صفحات
              </h2>
              <p className='text-sm text-neutral-500'>
                چند صفحه برای وب‌سایت‌تان نیاز دارید؟
              </p>
            </div>

            <div className='grid gap-3 max-w-xl mx-auto'>
              {pageCounts.map((count) => (
                <div
                  key={count.id}
                  onClick={() =>
                    setFormData({ ...formData, pageCount: count.id })
                  }
                  className={`
                  relative group cursor-pointer transition-all duration-200
                  ${
                    formData.pageCount === count.id
                      ? ' border-2 border-black/50'
                      : 'bg-neutral-50 border-2 border-neutral-100 hover:border-neutral-200'
                  }
                  rounded-lg p-4
                `}
                >
                  {formData.pageCount === count.id && (
                    <div className='absolute top-3 right-3'>
                      <div className='w-5 h-5 bg-black rounded-full flex items-center justify-center'>
                        <Check className='w-3 h-3 text-white' />
                      </div>
                    </div>
                  )}

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div
                        className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${
                        formData.pageCount === count.id
                          ? 'bg-black'
                          : 'bg-neutral-200'
                      }
                    `}
                      >
                        <FileText
                          className={`w-5 h-5 ${
                            formData.pageCount === count.id
                              ? 'text-white'
                              : 'text-neutral-500'
                          }`}
                        />
                      </div>
                      <h3 className='text-lg font-medium text-neutral-700'>
                        {count.title}
                      </h3>
                    </div>
                    <div
                      className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${
                      formData.pageCount === count.id
                        ? 'bg-black text-white'
                        : 'bg-neutral-100 text-neutral-500'
                    }
                  `}
                    >
                      ضریب {count.multiplier}x
                    </div>
                  </div>
                </div>
              ))}
              {errors.pageCount && (
                <div className='flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg'>
                  <AlertCircle className='w-4 h-4' />
                  <p className='text-xs'>{errors.pageCount}</p>
                </div>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                ویژگی‌های اضافی
              </h2>
              <p className='text-sm text-neutral-500'>
                ویژگی‌های مورد نیاز خود را انتخاب کنید
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto'>
              {features.map((feature) => {
                const isSelected = formData.features.includes(feature.id)
                return (
                  <div
                    key={feature.id}
                    onClick={() => handleFeatureChange(feature.id, !isSelected)}
                    className={`
                    relative group cursor-pointer transition-all duration-200
                    ${
                      isSelected
                        ? 'border-2 border-black/50'
                        : 'bg-neutral-50 border-2 border-neutral-100 hover:border-neutral-200'
                    }
                    rounded-lg p-4
                  `}
                  >
                    {isSelected && (
                      <div className='absolute top-3 right-3'>
                        <div className='w-5 h-5 bg-black rounded-full flex items-center justify-center'>
                          <Check className='w-3 h-3 text-white' />
                        </div>
                      </div>
                    )}

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <div
                          className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        ${isSelected ? 'bg-black' : 'bg-neutral-200'}
                      `}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              isSelected ? 'text-white' : 'text-neutral-500'
                            }`}
                          />
                        </div>
                        <h3 className='text-base font-medium text-neutral-700'>
                          {feature.title}
                        </h3>
                      </div>
                      <div
                        className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${
                        isSelected
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-500'
                      }
                    `}
                      >
                        {formatPrice(feature.price)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )

      case 5:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                توضیحات پروژه
              </h2>
              <p className='text-sm text-neutral-500'>
                جزئیات بیشتری از پروژه‌تان برای ما بنویسید
              </p>
            </div>

            <div className='max-w-2xl mx-auto space-y-4'>
              <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-5'>
                <label className='block text-base font-medium text-neutral-700 mb-3'>
                  توضیحات کامل پروژه
                </label>
                <textarea
                  placeholder='لطفاً جزئیات پروژه، انتظارات و نیازهای خاص خود را شرح دهید...'
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className='w-full p-3 border-2 border-neutral-200 rounded-lg focus:border-blue-300 focus:ring-0 transition-all duration-200 resize-none text-neutral-700 placeholder-neutral-400 text-sm'
                />
                {errors.description && (
                  <div className='flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg mt-2'>
                    <AlertCircle className='w-4 h-4' />
                    <p className='text-xs'>{errors.description}</p>
                  </div>
                )}
              </div>

              <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-5'>
                <label className='block text-base font-medium text-neutral-700 mb-3'>
                  بودجه تقریبی (اختیاری)
                </label>
                <input
                  type='text'
                  placeholder='مثال: ۲۰ میلیون تومان'
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className='w-full p-3 border-2 border-neutral-200 rounded-lg focus:border-blue-300 focus:ring-0 transition-all duration-200 text-neutral-700 placeholder-neutral-400 text-sm'
                />
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-semibold text-neutral-800 mb-2'>
                قیمت نهایی و ثبت سفارش
              </h2>
              <p className='text-sm text-neutral-500'>
                اطلاعات تماس خود را وارد کنید
              </p>
            </div>

            <div className='max-w-4xl mx-auto space-y-6'>
              {/* Price Summary */}
              <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-6'>
                <div className='text-center mb-6'>
                  <h3 className='text-xl font-semibold text-neutral-800 mb-2'>
                    خلاصه قیمت
                  </h3>
                  <div className='w-16 h-0.5 bg-green-300 rounded-full mx-auto'></div>
                </div>

                <div className='space-y-3 text-neutral-600 text-sm'>
                  <div className='flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100'>
                    <span className='flex items-center gap-2'>
                      <Code className='w-4 h-4 text-blue-400' />
                      نوع توسعه:
                    </span>
                    <span className='font-medium'>
                      {
                        developmentTypes.find(
                          (t) => t.id === formData.developmentType
                        )?.title
                      }
                    </span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100'>
                    <span className='flex items-center gap-2'>
                      <Globe className='w-4 h-4 text-green-400' />
                      نوع سایت:
                    </span>
                    <span className='font-medium'>
                      {
                        websiteTypes.find((t) => t.id === formData.websiteType)
                          ?.title
                      }
                    </span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100'>
                    <span className='flex items-center gap-2'>
                      <FileText className='w-4 h-4 text-orange-400' />
                      تعداد صفحات:
                    </span>
                    <span className='font-medium'>
                      {
                        pageCounts.find((p) => p.id === formData.pageCount)
                          ?.title
                      }
                    </span>
                  </div>
                  {formData.features.length > 0 && (
                    <div className='flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-100'>
                      <span className='flex items-center gap-2'>
                        <Star className='w-4 h-4 text-purple-400' />
                        ویژگی‌های اضافی:
                      </span>
                      <span className='font-medium'>
                        {formData.features.length} مورد
                      </span>
                    </div>
                  )}
                </div>

                <div className='mt-6 pt-4 border-t-2 border-neutral-200'>
                  <div className='flex justify-between items-center mb-3'>
                    <span className='text-xl font-semibold text-neutral-800'>
                      قیمت تقریبی:
                    </span>
                    <span className='text-2xl font-bold text-green-600'>
                      {formatPrice(calculatePrice())}
                    </span>
                  </div>
                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-3'>
                    <p className='text-xs text-blue-600 text-center'>
                      <Info className='w-4 h-4 inline-block ml-1' />
                      قیمت نهایی پس از بررسی دقیق پروژه اعلام خواهد شد
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='grid md:grid-cols-3 gap-4'>
                <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-4'>
                  <label className='block text-base font-medium text-neutral-700 mb-3'>
                    نام و نام خانوادگی
                  </label>
                  <input
                    type='text'
                    placeholder='نام کامل خود را وارد کنید'
                    value={formData.contactInfo.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactInfo: {
                          ...formData.contactInfo,
                          name: e.target.value,
                        },
                      })
                    }
                    className='w-full p-3 border-2 border-neutral-200 rounded-lg focus:border-green-300 focus:ring-0 transition-all duration-200 text-neutral-700 placeholder-neutral-400 text-sm'
                  />
                  {errors.name && (
                    <div className='flex items-center gap-2 text-red-500 bg-red-50 p-2 rounded-lg mt-2'>
                      <AlertCircle className='w-4 h-4' />
                      <p className='text-xs'>{errors.name}</p>
                    </div>
                  )}
                </div>

                <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-4'>
                  <label className='block text-base font-medium text-neutral-700 mb-3'>
                    ایمیل
                  </label>
                  <input
                    type='email'
                    placeholder='example@email.com'
                    value={formData.contactInfo.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactInfo: {
                          ...formData.contactInfo,
                          email: e.target.value,
                        },
                      })
                    }
                    className='w-full p-3 border-2 border-neutral-200 rounded-lg focus:border-green-300 focus:ring-0 transition-all duration-200 text-neutral-700 placeholder-neutral-400 text-sm'
                  />
                  {errors.email && (
                    <div className='flex items-center gap-2 text-red-500 bg-red-50 p-2 rounded-lg mt-2'>
                      <AlertCircle className='w-4 h-4' />
                      <p className='text-xs'>{errors.email}</p>
                    </div>
                  )}
                </div>

                <div className='bg-neutral-50 rounded-lg border-2 border-neutral-100 p-4'>
                  <label className='block text-base font-medium text-neutral-700 mb-3'>
                    شماره تماس
                  </label>
                  <input
                    type='tel'
                    placeholder='09123456789'
                    value={formData.contactInfo.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactInfo: {
                          ...formData.contactInfo,
                          phone: e.target.value,
                        },
                      })
                    }
                    className='w-full p-3 border-2 border-neutral-200 rounded-lg focus:border-green-300 focus:ring-0 transition-all duration-200 text-neutral-700 placeholder-neutral-400 text-sm'
                  />
                  {errors.phone && (
                    <div className='flex items-center gap-2 text-red-500 bg-red-50 p-2 rounded-lg mt-2'>
                      <AlertCircle className='w-4 h-4' />
                      <p className='text-xs'>{errors.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='bg-white z-10 relative py-4 sm:p-8 border-y'>
      <div className='max-w-4xl mx-auto'>
        <div className='mb-12'>
          <div className='flex items-center justify-between mb-6'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center'>
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold
                    transition-all duration-300
                    ${
                      currentStep > step.id
                        ? 'bg-black text-white'
                        : currentStep === step.id
                        ? 'bg-white text-black border-2 border-black'
                        : 'bg-neutral-200 text-neutral-600'
                    }
                  `}
                  aria-current={currentStep === step.id ? 'step' : undefined}
                >
                  {currentStep > step.id ? (
                    <Check className='w-5 h-5' />
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      flex-1 h-0.5 mx-4
                      transition-colors duration-300
                      ${currentStep > step.id ? 'bg-black' : 'bg-neutral-200'}
                    `}
                  />
                )}
              </div>
            ))}
          </div>
          <div className='flex justify-between text-sm font-semibold'>
            {steps.map((step) => (
              <div key={step.id} className='text-center'>
                <span
                  className={`
                    transition-colors duration-300
                    ${
                      currentStep >= step.id ? 'text-black' : 'text-neutral-600'
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <CartoonCard className='mb-8 p-6 sm:p-8'>
          {renderStepContent()}
        </CartoonCard>
        <div className='flex justify-between'>
          <CartoonButton
            variant='outline'
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowRight className='w-5 h-5 ml-2' strokeWidth={2} />
            مرحله قبل
          </CartoonButton>
          {currentStep < steps.length ? (
            <CartoonButton onClick={nextStep} disabled={!isStepValid()}>
              مرحله بعد
              <ArrowLeft className='w-5 h-5 mr-2' strokeWidth={2} />
            </CartoonButton>
          ) : (
            <CartoonButton
              onClick={() => {
                if (validateStep()) {
                  alert(
                    'سفارش شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.'
                  )
                }
              }}
              disabled={!isStepValid()}
              variant='success'
            >
              ثبت سفارش
              <Check className='w-5 h-5 mr-2' strokeWidth={2} />
            </CartoonButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default StepByStepForm
