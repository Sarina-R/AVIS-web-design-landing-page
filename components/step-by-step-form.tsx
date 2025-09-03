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
} from 'lucide-react'

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

// Component definitions
const CartoonCard = ({
  children,
  className = '',
  hover = true,
  ...props
}: CartoonCardProps) => (
  <div
    className={`
      bg-white border-4 border-black rounded-lg p-4 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      ${hover ? '' : ''}
      transition-all duration-200 ease-in-out
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
)

const CartoonButton = ({
  children,
  variant = 'primary',
  disabled = false,
  ...props
}: CartoonButtonProps) => {
  const baseClasses = `
    px-6 py-3 border-4 border-black rounded-lg font-bold text-lg
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
    active:translate-x-0.5 active:translate-y-0.5
    transition-all duration-150 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    disabled:hover:translate-x-0 disabled:hover:translate-y-0
  `

  const variants = {
    primary: `${baseClasses} bg-white text-black hover:bg-gray-100`,
    outline: `${baseClasses} bg-white text-black hover:bg-gray-50`,
    success: `${baseClasses} bg-gray-200 text-black hover:bg-gray-300`,
  }

  return (
    <button
      className={`${variants[variant]} ${
        disabled ? 'pointer-events-none' : ''
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const CartoonRadio = ({
  checked,
  onChange,
  children,
  name,
  value,
}: CartoonRadioProps) => (
  <label className='flex items-center cursor-pointer group'>
    <div className='relative flex-shrink-0'>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='sr-only'
      />
      <div
        className={`
        w-6 h-6 border-4 border-black rounded-full
        ${checked ? 'bg-black' : 'bg-white'}
        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        group-hover:-translate-x-0.5 group-hover:-translate-y-0.5
        transition-all duration-150
      `}
      >
        {checked && <div className='absolute inset-2 bg-white rounded-full' />}
      </div>
    </div>
    <div className='ml-3 flex-1'>{children}</div>
  </label>
)

const CartoonCheckbox = ({
  checked,
  onChange,
  children,
}: CartoonCheckboxProps) => (
  <label className='flex items-center cursor-pointer group'>
    <div className='relative flex-shrink-0'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='sr-only'
      />
      <div
        className={`
        w-6 h-6 border-4 border-black rounded
        ${checked ? 'bg-black' : 'bg-white'}
        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        group-hover:-translate-x-0.5 group-hover:-translate-y-0.5
        transition-all duration-150
      `}
      >
        {checked && (
          <Check
            className='w-4 h-4 text-white absolute inset-0.5'
            strokeWidth={4}
          />
        )}
      </div>
    </div>
    <div className='ml-3 flex-1'>{children}</div>
  </label>
)

const CartoonInput = ({ ...props }) => (
  <input
    className='
      w-full px-4 py-3 border-4 border-black rounded-lg
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      focus:-translate-x-0.5 focus:-translate-y-0.5
      transition-all duration-200 ease-in-out
      text-lg font-medium
      focus:outline-none
    '
    {...props}
  />
)

const CartoonTextarea = ({ ...props }) => (
  <textarea
    className='
      w-full px-4 py-3 border-4 border-black rounded-lg
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      focus:-translate-x-0.5 focus:-translate-y-0.5
      transition-all duration-200 ease-in-out
      text-lg font-medium resize-none
      focus:outline-none
    '
    {...props}
  />
)

const CartoonBadge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-200 text-black',
    outline: 'bg-white text-black',
  }

  return (
    <span
      className={`
      px-3 py-1 border-2 border-black rounded
      shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      text-sm font-bold
      ${variants[variant]}
    `}
    >
      {children}
    </span>
  )
}

// Main form component
export function StepByStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
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

  const calculatePrice = () => {
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, featureId]
        : prev.features.filter((id) => id !== featureId),
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.developmentType !== ''
      case 2:
        return formData.websiteType !== ''
      case 3:
        return formData.pageCount !== ''
      case 4:
        return true // Features are optional
      case 5:
        return formData.description.trim() !== ''
      case 6:
        return (
          formData.contactInfo.name &&
          formData.contactInfo.email &&
          formData.contactInfo.phone
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
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] stroke-black'>
                نوع توسعه را انتخاب کنید
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                چه نوع تکنولوژی برای پروژه‌تان ترجیح می‌دهید؟
              </p>
            </div>

            <div className='space-y-4'>
              {developmentTypes.map((type) => (
                <CartoonRadio
                  key={type.id}
                  name='developmentType'
                  value={type.id}
                  checked={formData.developmentType === type.id}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      developmentType: e.target.value,
                    })
                  }
                >
                  <CartoonCard>
                    <div className='flex items-center gap-4'>
                      <div className='w-16 h-16 bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                        <type.icon
                          className='w-8 h-8 text-black'
                          strokeWidth={3}
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-black text-black'>
                          {type.title}
                        </h3>
                        <p className='text-lg font-bold text-gray-700'>
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </CartoonCard>
                </CartoonRadio>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
                موضوع سایت چیست؟
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                نوع وب‌سایت مورد نظر خود را انتخاب کنید
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {websiteTypes.map((type) => (
                <CartoonRadio
                  key={type.id}
                  name='websiteType'
                  value={type.id}
                  checked={formData.websiteType === type.id}
                  onChange={(e) =>
                    setFormData({ ...formData, websiteType: e.target.value })
                  }
                >
                  <CartoonCard className='h-full'>
                    <div className='flex flex-col items-center text-center gap-4'>
                      <div className='w-16 h-16 bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                        <type.icon
                          className='w-8 h-8 text-black'
                          strokeWidth={3}
                        />
                      </div>
                      <div>
                        <h3 className='text-2xl font-black text-black'>
                          {type.title}
                        </h3>
                        <p className='text-lg font-bold text-gray-700 mt-2'>
                          از {formatPrice(type.basePrice)}
                        </p>
                      </div>
                    </div>
                  </CartoonCard>
                </CartoonRadio>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
                تعداد صفحات
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                چند صفحه برای وب‌سایت‌تان نیاز دارید؟
              </p>
            </div>

            <div className='space-y-4'>
              {pageCounts.map((count) => (
                <CartoonRadio
                  key={count.id}
                  name='pageCount'
                  value={count.id}
                  checked={formData.pageCount === count.id}
                  onChange={(e) =>
                    setFormData({ ...formData, pageCount: e.target.value })
                  }
                >
                  <CartoonCard>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-2xl font-black text-black'>
                        {count.title}
                      </h3>
                      <CartoonBadge variant='outline'>
                        ضریب {count.multiplier}x
                      </CartoonBadge>
                    </div>
                  </CartoonCard>
                </CartoonRadio>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
                ویژگی‌های اضافی
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                ویژگی‌های مورد نیاز خود را انتخاب کنید
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {features.map((feature) => (
                <CartoonCheckbox
                  key={feature.id}
                  checked={formData.features.includes(feature.id)}
                  onChange={(e) =>
                    handleFeatureChange(feature.id, e.target.checked)
                  }
                >
                  <CartoonCard>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-xl font-black text-black'>
                        {feature.title}
                      </h3>
                      <CartoonBadge variant='outline'>
                        {formatPrice(feature.price)}
                      </CartoonBadge>
                    </div>
                  </CartoonCard>
                </CartoonCheckbox>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
                توضیحات پروژه
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                جزئیات بیشتری از پروژه‌تان برای ما بنویسید
              </p>
            </div>

            <div className='space-y-6'>
              <div>
                <label className='block text-xl font-black text-black mb-3'>
                  توضیحات کامل پروژه
                </label>
                <CartoonTextarea
                  placeholder='لطفاً جزئیات پروژه، انتظارات و نیازهای خاص خود را شرح دهید...'
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={6}
                />
              </div>

              <div>
                <label className='block text-xl font-black text-black mb-3'>
                  بودجه تقریبی (اختیاری)
                </label>
                <CartoonInput
                  placeholder='مثال: ۲۰ میلیون تومان'
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-black mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
                قیمت نهایی و ثبت سفارش
              </h2>
              <p className='text-xl font-bold text-gray-700'>
                اطلاعات تماس خود را وارد کنید
              </p>
            </div>

            {/* Price Summary */}
            <CartoonCard className='bg-gray-100 border-8'>
              <h3 className='text-2xl font-black mb-6 text-center text-black'>
                خلاصه قیمت
              </h3>
              <div className='space-y-3 text-lg font-bold'>
                <div className='flex justify-between'>
                  <span>نوع توسعه:</span>
                  <span>
                    {
                      developmentTypes.find(
                        (t) => t.id === formData.developmentType
                      )?.title
                    }
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span>نوع سایت:</span>
                  <span>
                    {
                      websiteTypes.find((t) => t.id === formData.websiteType)
                        ?.title
                    }
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span>تعداد صفحات:</span>
                  <span>
                    {pageCounts.find((p) => p.id === formData.pageCount)?.title}
                  </span>
                </div>
                {formData.features.length > 0 && (
                  <div className='flex justify-between'>
                    <span>ویژگی‌های اضافی:</span>
                    <span>{formData.features.length} مورد</span>
                  </div>
                )}
              </div>
              <div className='border-t-4 border-black pt-6 mt-6'>
                <div className='flex justify-between items-center text-2xl font-black'>
                  <span>قیمت تقریبی:</span>
                  <span className='text-black'>
                    {formatPrice(calculatePrice())}
                  </span>
                </div>
                <p className='text-sm font-bold text-gray-700 mt-3 text-center'>
                  * قیمت نهایی پس از بررسی دقیق پروژه اعلام خواهد شد
                </p>
              </div>
            </CartoonCard>

            {/* Contact Form */}
            <div className='space-y-6'>
              <div>
                <label className='block text-xl font-black text-black mb-3'>
                  نام و نام خانوادگی
                </label>
                <CartoonInput
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
                />
              </div>

              <div>
                <label className='block text-xl font-black text-black mb-3'>
                  ایمیل
                </label>
                <CartoonInput
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
                />
              </div>

              <div>
                <label className='block text-xl font-black text-black mb-3'>
                  شماره تماس
                </label>
                <CartoonInput
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
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='min-h-screen  p-8 font-bold'>
      <div className='max-w-4xl mx-auto'>
        {/* Progress Steps */}
        <div className='mb-12'>
          <div className='flex items-center justify-between mb-6'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center'>
                <div
                  className={`
                    w-16 h-16 border-4 border-black rounded-full flex items-center justify-center text-xl font-black
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-200 ease-in-out
                    ${
                      currentStep > step.id
                        ? 'bg-black text-white'
                        : currentStep === step.id
                        ? 'bg-white text-black'
                        : 'bg-gray-300 text-gray-600'
                    }
                  `}
                >
                  {currentStep > step.id ? (
                    <Check className='w-8 h-8' strokeWidth={4} />
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      w-full h-2 mx-4 border-2 border-black
                      shadow-[0px_2px_0px_0px_rgba(0,0,0,1)]
                      transition-colors duration-200
                      ${currentStep > step.id ? 'bg-black' : 'bg-gray-300'}
                    `}
                  />
                )}
              </div>
            ))}
          </div>

          <div className='flex justify-between text-lg font-black'>
            {steps.map((step) => (
              <div key={step.id} className='text-center'>
                <span
                  className={`
                    transition-colors duration-200
                    ${currentStep >= step.id ? 'text-black' : 'text-gray-500'}
                  `}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <CartoonCard className='mb-8 p-8'>{renderStepContent()}</CartoonCard>

        {/* Navigation Buttons */}
        <div className='flex justify-between'>
          <CartoonButton
            variant='outline'
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowRight className='w-6 h-6 ml-2' strokeWidth={3} />
            مرحله قبل
          </CartoonButton>

          {currentStep < steps.length ? (
            <CartoonButton onClick={nextStep} disabled={!isStepValid()}>
              مرحله بعد
              <ArrowLeft className='w-6 h-6 mr-2' strokeWidth={3} />
            </CartoonButton>
          ) : (
            <CartoonButton
              onClick={() => {
                alert(
                  'سفارش شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.'
                )
              }}
              disabled={!isStepValid()}
              variant='success'
            >
              ثبت سفارش
              <Check className='w-6 h-6 mr-2' strokeWidth={3} />
            </CartoonButton>
          )}
        </div>
      </div>
    </div>
  )
}

// less bold
// 'use client'

// import { useState } from 'react'
// import {
//   ArrowRight,
//   ArrowLeft,
//   Check,
//   Code,
//   Compass as Wordpress,
//   Globe,
//   ShoppingCart,
//   Users,
//   FileText,
//   Calculator,
// } from 'lucide-react'

// interface CartoonCardProps {
//   children: React.ReactNode
//   className?: string
//   hover?: boolean
//   [key: string]: any
// }

// interface CartoonButtonProps {
//   children: React.ReactNode
//   variant?: 'primary' | 'outline' | 'success'
//   disabled?: boolean
//   onClick?: () => void
//   [key: string]: any
// }

// interface CartoonRadioProps {
//   checked: boolean
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//   children: React.ReactNode
//   name: string
//   value: string
// }

// interface CartoonCheckboxProps {
//   checked: boolean
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//   children: React.ReactNode
// }

// interface FormData {
//   developmentType: string
//   websiteType: string
//   pageCount: string
//   features: string[]
//   description: string
//   budget: string
//   contactInfo: {
//     name: string
//     email: string
//     phone: string
//   }
// }

// // Constants
// const steps = [
//   { id: 1, title: 'نوع توسعه', icon: Code },
//   { id: 2, title: 'موضوع سایت', icon: Globe },
//   { id: 3, title: 'تعداد صفحات', icon: FileText },
//   { id: 4, title: 'ویژگی‌ها', icon: Check },
//   { id: 5, title: 'توضیحات', icon: Users },
//   { id: 6, title: 'قیمت و ثبت', icon: Calculator },
// ]

// const developmentTypes = [
//   {
//     id: 'custom',
//     title: 'توسعه اختصاصی',
//     description: 'با Next.js، React و جدیدترین تکنولوژی‌ها',
//     icon: Code,
//     multiplier: 1.5,
//   },
//   {
//     id: 'wordpress',
//     title: 'وردپرس',
//     description: 'سریع، آسان و قابل مدیریت',
//     icon: Wordpress,
//     multiplier: 1,
//   },
// ]

// const websiteTypes = [
//   { id: 'corporate', title: 'سایت شرکتی', basePrice: 15000000, icon: Globe },
//   {
//     id: 'ecommerce',
//     title: 'فروشگاه آنلاین',
//     basePrice: 35000000,
//     icon: ShoppingCart,
//   },
//   { id: 'portfolio', title: 'نمایشگاه آثار', basePrice: 8000000, icon: Users },
//   { id: 'blog', title: 'وبلاگ و خبری', basePrice: 12000000, icon: FileText },
//   { id: 'landing', title: 'صفحه فرود', basePrice: 6000000, icon: FileText },
//   { id: 'custom', title: 'سفارشی', basePrice: 20000000, icon: Code },
// ]

// const pageCounts = [
//   { id: '1-5', title: '۱ تا ۵ صفحه', multiplier: 1 },
//   { id: '6-10', title: '۶ تا ۱۰ صفحه', multiplier: 1.3 },
//   { id: '11-20', title: '۱۱ تا ۲۰ صفحه', multiplier: 1.7 },
//   { id: '20+', title: 'بیش از ۲۰ صفحه', multiplier: 2.2 },
// ]

// const features = [
//   { id: 'seo', title: 'بهینه‌سازی SEO', price: 3000000 },
//   { id: 'responsive', title: 'طراحی ریسپانسیو', price: 2000000 },
//   { id: 'cms', title: 'سیستم مدیریت محتوا', price: 5000000 },
//   { id: 'payment', title: 'درگاه پرداخت', price: 4000000 },
//   { id: 'multilang', title: 'چندزبانه', price: 6000000 },
//   { id: 'analytics', title: 'گوگل آنالیتیکس', price: 1000000 },
//   { id: 'security', title: 'امنیت پیشرفته', price: 3000000 },
//   { id: 'backup', title: 'پشتیبان‌گیری خودکار', price: 2000000 },
// ]

// // Component definitions
// const CartoonCard = ({
//   children,
//   className = '',
//   hover = true,
//   ...props
// }: CartoonCardProps) => (
//   <div
//     className={`
//       bg-white border border-gray-200 rounded-lg p-4
//       shadow-sm
//       ${hover ? 'hover:shadow-md' : ''}
//       transition-all duration-200 ease-in-out
//       ${className}
//     `}
//     {...props}
//   >
//     {children}
//   </div>
// )

// const CartoonButton = ({
//   children,
//   variant = 'primary',
//   disabled = false,
//   ...props
// }: CartoonButtonProps) => {
//   const baseClasses = `
//     px-6 py-3 rounded-lg text-base
//     transition-all duration-150 ease-in-out
//     disabled:opacity-50 disabled:cursor-not-allowed
//   `

//   const variants = {
//     primary: `${baseClasses} bg-black text-white hover:bg-gray-800`,
//     outline: `${baseClasses} border border-gray-300 text-gray-700 hover:bg-gray-50`,
//     success: `${baseClasses} bg-green-600 text-white hover:bg-green-700`,
//   }

//   return (
//     <button className={variants[variant]} disabled={disabled} {...props}>
//       {children}
//     </button>
//   )
// }

// const CartoonRadio = ({
//   checked,
//   onChange,
//   children,
//   name,
//   value,
// }: CartoonRadioProps) => (
//   <label className='flex items-center cursor-pointer group'>
//     <div className='relative flex-shrink-0'>
//       <input
//         type='radio'
//         name={name}
//         value={value}
//         checked={checked}
//         onChange={onChange}
//         className='sr-only'
//       />
//       <div
//         className={`
//         w-5 h-5 border-2 border-gray-300 rounded-full
//         ${checked ? 'border-black bg-black' : 'bg-white'}
//         transition-all duration-150
//       `}
//       >
//         {checked && (
//           <div className='absolute inset-1.5 bg-white rounded-full' />
//         )}
//       </div>
//     </div>
//     <div className='ml-3 flex-1'>{children}</div>
//   </label>
// )

// const CartoonCheckbox = ({
//   checked,
//   onChange,
//   children,
// }: CartoonCheckboxProps) => (
//   <label className='flex items-center cursor-pointer group'>
//     <div className='relative flex-shrink-0'>
//       <input
//         type='checkbox'
//         checked={checked}
//         onChange={onChange}
//         className='sr-only'
//       />
//       <div
//         className={`
//         w-5 h-5 border-2 border-gray-300 rounded
//         ${checked ? 'border-black bg-black' : 'bg-white'}
//         transition-all duration-150
//       `}
//       >
//         {checked && <Check className='w-3 h-3 text-white absolute inset-0.5' />}
//       </div>
//     </div>
//     <div className='ml-3 flex-1'>{children}</div>
//   </label>
// )

// const CartoonInput = ({ ...props }) => (
//   <input
//     className='
//       w-full px-4 py-3 border border-gray-200 rounded-lg
//       focus:border-black focus:ring-1 focus:ring-black
//       transition-all duration-200 ease-in-out
//       text-base
//       focus:outline-none
//     '
//     {...props}
//   />
// )

// const CartoonTextarea = ({ ...props }) => (
//   <textarea
//     className='
//       w-full px-4 py-3 border border-gray-200 rounded-lg
//       focus:border-black focus:ring-1 focus:ring-black
//       transition-all duration-200 ease-in-out
//       text-base resize-none
//       focus:outline-none
//     '
//     {...props}
//   />
// )

// const CartoonBadge = ({ children, variant = 'default' }) => {
//   const variants = {
//     default: 'bg-gray-100 text-gray-700',
//     outline: 'bg-white text-gray-700 border border-gray-200',
//   }

//   return (
//     <span
//       className={`
//       px-3 py-1 rounded-full text-sm
//       ${variants[variant]}
//     `}
//     >
//       {children}
//     </span>
//   )
// }

// // Main form component
// export function StepByStepForm() {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [formData, setFormData] = useState<FormData>({
//     developmentType: '',
//     websiteType: '',
//     pageCount: '',
//     features: [],
//     description: '',
//     budget: '',
//     contactInfo: {
//       name: '',
//       email: '',
//       phone: '',
//     },
//   })

//   const calculatePrice = () => {
//     const websiteType = websiteTypes.find((t) => t.id === formData.websiteType)
//     const developmentType = developmentTypes.find(
//       (t) => t.id === formData.developmentType
//     )
//     const pageCount = pageCounts.find((p) => p.id === formData.pageCount)

//     if (!websiteType || !developmentType || !pageCount) return 0

//     let basePrice = websiteType.basePrice
//     basePrice *= developmentType.multiplier
//     basePrice *= pageCount.multiplier

//     const featuresPrice = formData.features.reduce((total, featureId) => {
//       const feature = features.find((f) => f.id === featureId)
//       return total + (feature?.price || 0)
//     }, 0)

//     return basePrice + featuresPrice
//   }

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
//   }

//   const handleFeatureChange = (featureId: string, checked: boolean) => {
//     setFormData((prev) => ({
//       ...prev,
//       features: checked
//         ? [...prev.features, featureId]
//         : prev.features.filter((id) => id !== featureId),
//     }))
//   }

//   const nextStep = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1)
//     }
//   }

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const isStepValid = () => {
//     switch (currentStep) {
//       case 1:
//         return formData.developmentType !== ''
//       case 2:
//         return formData.websiteType !== ''
//       case 3:
//         return formData.pageCount !== ''
//       case 4:
//         return true // Features are optional
//       case 5:
//         return formData.description.trim() !== ''
//       case 6:
//         return (
//           formData.contactInfo.name &&
//           formData.contactInfo.email &&
//           formData.contactInfo.phone
//         )
//       default:
//         return false
//     }
//   }

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] stroke-black'>
//                 نوع توسعه را انتخاب کنید
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 چه نوع تکنولوژی برای پروژه‌تان ترجیح می‌دهید؟
//               </p>
//             </div>

//             <div className='space-y-4'>
//               {developmentTypes.map((type) => (
//                 <CartoonRadio
//                   key={type.id}
//                   name='developmentType'
//                   value={type.id}
//                   checked={formData.developmentType === type.id}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       developmentType: e.target.value,
//                     })
//                   }
//                 >
//                   <CartoonCard>
//                     <div className='flex items-center gap-4'>
//                       <div className='w-16 h-16 bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
//                         <type.icon
//                           className='w-8 h-8 text-black'
//                           strokeWidth={3}
//                         />
//                       </div>
//                       <div className='flex-1'>
//                         <h3 className='text-xl font-medium text-black'>
//                           {type.title}
//                         </h3>
//                         <p className='text-lg font-bold text-gray-700'>
//                           {type.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CartoonCard>
//                 </CartoonRadio>
//               ))}
//             </div>
//           </div>
//         )

//       case 2:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
//                 موضوع سایت چیست؟
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 نوع وب‌سایت مورد نظر خود را انتخاب کنید
//               </p>
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//               {websiteTypes.map((type) => (
//                 <CartoonRadio
//                   key={type.id}
//                   name='websiteType'
//                   value={type.id}
//                   checked={formData.websiteType === type.id}
//                   onChange={(e) =>
//                     setFormData({ ...formData, websiteType: e.target.value })
//                   }
//                 >
//                   <CartoonCard className='h-full'>
//                     <div className='flex flex-col items-center text-center gap-4'>
//                       <div className='w-16 h-16 bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
//                         <type.icon
//                           className='w-8 h-8 text-black'
//                           strokeWidth={3}
//                         />
//                       </div>
//                       <div>
//                         <h3 className='text-xl font-medium text-black'>
//                           {type.title}
//                         </h3>
//                         <p className='text-lg font-bold text-gray-700 mt-2'>
//                           از {formatPrice(type.basePrice)}
//                         </p>
//                       </div>
//                     </div>
//                   </CartoonCard>
//                 </CartoonRadio>
//               ))}
//             </div>
//           </div>
//         )

//       case 3:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
//                 تعداد صفحات
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 چند صفحه برای وب‌سایت‌تان نیاز دارید؟
//               </p>
//             </div>

//             <div className='space-y-4'>
//               {pageCounts.map((count) => (
//                 <CartoonRadio
//                   key={count.id}
//                   name='pageCount'
//                   value={count.id}
//                   checked={formData.pageCount === count.id}
//                   onChange={(e) =>
//                     setFormData({ ...formData, pageCount: e.target.value })
//                   }
//                 >
//                   <CartoonCard>
//                     <div className='flex items-center justify-between'>
//                       <h3 className='text-2xl font-black text-black'>
//                         {count.title}
//                       </h3>
//                       <CartoonBadge variant='outline'>
//                         ضریب {count.multiplier}x
//                       </CartoonBadge>
//                     </div>
//                   </CartoonCard>
//                 </CartoonRadio>
//               ))}
//             </div>
//           </div>
//         )

//       case 4:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
//                 ویژگی‌های اضافی
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 ویژگی‌های مورد نیاز خود را انتخاب کنید
//               </p>
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//               {features.map((feature) => (
//                 <CartoonCheckbox
//                   key={feature.id}
//                   checked={formData.features.includes(feature.id)}
//                   onChange={(e) =>
//                     handleFeatureChange(feature.id, e.target.checked)
//                   }
//                 >
//                   <CartoonCard>
//                     <div className='flex items-center justify-between'>
//                       <h3 className='text-xl font-black text-black'>
//                         {feature.title}
//                       </h3>
//                       <CartoonBadge variant='outline'>
//                         {formatPrice(feature.price)}
//                       </CartoonBadge>
//                     </div>
//                   </CartoonCard>
//                 </CartoonCheckbox>
//               ))}
//             </div>
//           </div>
//         )

//       case 5:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
//                 توضیحات پروژه
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 جزئیات بیشتری از پروژه‌تان برای ما بنویسید
//               </p>
//             </div>

//             <div className='space-y-6'>
//               <div>
//                 <label className='block text-xl font-black text-black mb-3'>
//                   توضیحات کامل پروژه
//                 </label>
//                 <CartoonTextarea
//                   placeholder='لطفاً جزئیات پروژه، انتظارات و نیازهای خاص خود را شرح دهید...'
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                   rows={6}
//                 />
//               </div>

//               <div>
//                 <label className='block text-xl font-black text-black mb-3'>
//                   بودجه تقریبی (اختیاری)
//                 </label>
//                 <CartoonInput
//                   placeholder='مثال: ۲۰ میلیون تومان'
//                   value={formData.budget}
//                   onChange={(e) =>
//                     setFormData({ ...formData, budget: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         )

//       case 6:
//         return (
//           <div className='space-y-6'>
//             <div className='text-center mb-8'>
//               <h2 className='text-3xl font-semibold mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]'>
//                 قیمت نهایی و ثبت سفارش
//               </h2>
//               <p className='text-xl font-bold text-gray-700'>
//                 اطلاعات تماس خود را وارد کنید
//               </p>
//             </div>

//             {/* Price Summary */}
//             <CartoonCard className='bg-gray-100 border-8'>
//               <h3 className='text-2xl font-black mb-6 text-center text-black'>
//                 خلاصه قیمت
//               </h3>
//               <div className='space-y-3 text-lg font-bold'>
//                 <div className='flex justify-between'>
//                   <span>نوع توسعه:</span>
//                   <span>
//                     {
//                       developmentTypes.find(
//                         (t) => t.id === formData.developmentType
//                       )?.title
//                     }
//                   </span>
//                 </div>
//                 <div className='flex justify-between'>
//                   <span>نوع سایت:</span>
//                   <span>
//                     {
//                       websiteTypes.find((t) => t.id === formData.websiteType)
//                         ?.title
//                     }
//                   </span>
//                 </div>
//                 <div className='flex justify-between'>
//                   <span>تعداد صفحات:</span>
//                   <span>
//                     {pageCounts.find((p) => p.id === formData.pageCount)?.title}
//                   </span>
//                 </div>
//                 {formData.features.length > 0 && (
//                   <div className='flex justify-between'>
//                     <span>ویژگی‌های اضافی:</span>
//                     <span>{formData.features.length} مورد</span>
//                   </div>
//                 )}
//               </div>
//               <div className='border-t-4 border-black pt-6 mt-6'>
//                 <div className='flex justify-between items-center text-2xl font-black'>
//                   <span>قیمت تقریبی:</span>
//                   <span className='text-black'>
//                     {formatPrice(calculatePrice())}
//                   </span>
//                 </div>
//                 <p className='text-sm font-bold text-gray-700 mt-3 text-center'>
//                   * قیمت نهایی پس از بررسی دقیق پروژه اعلام خواهد شد
//                 </p>
//               </div>
//             </CartoonCard>

//             {/* Contact Form */}
//             <div className='space-y-6'>
//               <div>
//                 <label className='block text-xl font-black text-black mb-3'>
//                   نام و نام خانوادگی
//                 </label>
//                 <CartoonInput
//                   placeholder='نام کامل خود را وارد کنید'
//                   value={formData.contactInfo.name}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       contactInfo: {
//                         ...formData.contactInfo,
//                         name: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className='block text-xl font-black text-black mb-3'>
//                   ایمیل
//                 </label>
//                 <CartoonInput
//                   type='email'
//                   placeholder='example@email.com'
//                   value={formData.contactInfo.email}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       contactInfo: {
//                         ...formData.contactInfo,
//                         email: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className='block text-xl font-black text-black mb-3'>
//                   شماره تماس
//                 </label>
//                 <CartoonInput
//                   placeholder='09123456789'
//                   value={formData.contactInfo.phone}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       contactInfo: {
//                         ...formData.contactInfo,
//                         phone: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         )

//       default:
//         return null
//     }
//   }

//   return (
//     <div className='min-h-screen  p-8 font-bold'>
//       <div className='max-w-4xl mx-auto'>
//         {/* Progress Steps */}
//         <div className='mb-12'>
//           <div className='flex items-center justify-between mb-6'>
//             {steps.map((step, index) => (
//               <div key={step.id} className='flex items-center'>
//                 <div
//                   className={`
//                     w-10 h-10 rounded-full flex items-center justify-center text-base
//                     transition-all duration-200 ease-in-out
//                     ${
//                       currentStep > step.id
//                         ? 'bg-black text-white'
//                         : currentStep === step.id
//                         ? 'bg-gray-100 text-black border border-black'
//                         : 'bg-gray-100 text-gray-400'
//                     }
//                   `}
//                 >
//                   {currentStep > step.id ? (
//                     <Check className='w-5 h-5' />
//                   ) : (
//                     step.id
//                   )}
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className={`
//                     w-full h-0.5 mx-4
//                     transition-colors duration-200
//                     ${currentStep > step.id ? 'bg-black' : 'bg-gray-200'}
//                   `}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className='flex justify-between text-lg font-black'>
//             {steps.map((step) => (
//               <div key={step.id} className='text-center'>
//                 <span
//                   className={`
//                     transition-colors duration-200
//                     ${currentStep >= step.id ? 'text-black' : 'text-gray-500'}
//                   `}
//                 >
//                   {step.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Step Content */}
//         <CartoonCard className='mb-8 p-8'>{renderStepContent()}</CartoonCard>

//         {/* Navigation Buttons */}
//         <div className='flex justify-between'>
//           <CartoonButton
//             variant='outline'
//             onClick={prevStep}
//             disabled={currentStep === 1}
//           >
//             <ArrowRight className='w-6 h-6 ml-2' strokeWidth={3} />
//             مرحله قبل
//           </CartoonButton>

//           {currentStep < steps.length ? (
//             <CartoonButton onClick={nextStep} disabled={!isStepValid()}>
//               مرحله بعد
//               <ArrowLeft className='w-6 h-6 mr-2' strokeWidth={3} />
//             </CartoonButton>
//           ) : (
//             <CartoonButton
//               onClick={() => {
//                 alert(
//                   'سفارش شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.'
//                 )
//               }}
//               disabled={!isStepValid()}
//               variant='success'
//             >
//               ثبت سفارش
//               <Check className='w-6 h-6 mr-2' strokeWidth={3} />
//             </CartoonButton>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
