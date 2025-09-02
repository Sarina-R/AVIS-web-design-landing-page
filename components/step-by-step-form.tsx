'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
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
    const websiteType = websiteTypes.find(
      (type) => type.id === formData.websiteType
    )
    const developmentType = developmentTypes.find(
      (type) => type.id === formData.developmentType
    )
    const pageCount = pageCounts.find(
      (count) => count.id === formData.pageCount
    )

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

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, featureId] })
    } else {
      setFormData({
        ...formData,
        features: formData.features.filter((id) => id !== featureId),
      })
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
              <h2 className='text-2xl font-bold mb-2'>
                نوع توسعه را انتخاب کنید
              </h2>
              <p className='text-muted-foreground'>
                چه نوع تکنولوژی برای پروژه‌تان ترجیح می‌دهید؟
              </p>
            </div>

            <RadioGroup
              value={formData.developmentType}
              onValueChange={(value) =>
                setFormData({ ...formData, developmentType: value })
              }
              className='space-y-4'
            >
              {developmentTypes.map((type) => (
                <div
                  key={type.id}
                  className='flex items-center space-x-2 space-x-reverse'
                >
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id} className='flex-1 cursor-pointer'>
                    <Card className='p-4 hover:bg-muted/50 transition-colors'>
                      <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                          <type.icon className='w-6 h-6 text-primary' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-semibold'>{type.title}</h3>
                          <p className='text-sm text-muted-foreground'>
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 2:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold mb-2'>موضوع سایت چیست؟</h2>
              <p className='text-muted-foreground'>
                نوع وب‌سایت مورد نظر خود را انتخاب کنید
              </p>
            </div>

            <RadioGroup
              value={formData.websiteType}
              onValueChange={(value) =>
                setFormData({ ...formData, websiteType: value })
              }
              className='grid grid-cols-1 md:grid-cols-2 gap-4'
            >
              {websiteTypes.map((type) => (
                <div
                  key={type.id}
                  className='flex items-center space-x-2 space-x-reverse'
                >
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id} className='flex-1 cursor-pointer'>
                    <Card className='p-4 hover:bg-muted/50 transition-colors h-full'>
                      <div className='flex flex-col items-center text-center gap-3'>
                        <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                          <type.icon className='w-6 h-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>{type.title}</h3>
                          <p className='text-sm text-muted-foreground mt-1'>
                            از {formatPrice(type.basePrice)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold mb-2'>تعداد صفحات</h2>
              <p className='text-muted-foreground'>
                چند صفحه برای وب‌سایت‌تان نیاز دارید؟
              </p>
            </div>

            <RadioGroup
              value={formData.pageCount}
              onValueChange={(value) =>
                setFormData({ ...formData, pageCount: value })
              }
              className='space-y-4'
            >
              {pageCounts.map((count) => (
                <div
                  key={count.id}
                  className='flex items-center space-x-2 space-x-reverse'
                >
                  <RadioGroupItem value={count.id} id={count.id} />
                  <Label htmlFor={count.id} className='flex-1 cursor-pointer'>
                    <Card className='p-4 hover:bg-muted/50 transition-colors'>
                      <div className='flex items-center justify-between'>
                        <h3 className='font-semibold'>{count.title}</h3>
                        <Badge variant='secondary'>
                          ضریب {count.multiplier}x
                        </Badge>
                      </div>
                    </Card>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold mb-2'>ویژگی‌های اضافی</h2>
              <p className='text-muted-foreground'>
                ویژگی‌های مورد نیاز خود را انتخاب کنید
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className='flex items-center space-x-2 space-x-reverse'
                >
                  <Checkbox
                    id={feature.id}
                    checked={formData.features.includes(feature.id)}
                    onCheckedChange={(checked) =>
                      handleFeatureChange(feature.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={feature.id} className='flex-1 cursor-pointer'>
                    <Card className='p-4 hover:bg-muted/50 transition-colors'>
                      <div className='flex items-center justify-between'>
                        <h3 className='font-semibold'>{feature.title}</h3>
                        <Badge variant='outline'>
                          {formatPrice(feature.price)}
                        </Badge>
                      </div>
                    </Card>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold mb-2'>توضیحات پروژه</h2>
              <p className='text-muted-foreground'>
                جزئیات بیشتری از پروژه‌تان برای ما بنویسید
              </p>
            </div>

            <div className='space-y-4'>
              <div>
                <Label htmlFor='description'>توضیحات کامل پروژه</Label>
                <Textarea
                  id='description'
                  placeholder='لطفاً جزئیات پروژه، انتظارات و نیازهای خاص خود را شرح دهید...'
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className='min-h-32'
                />
              </div>

              <div>
                <Label htmlFor='budget'>بودجه تقریبی (اختیاری)</Label>
                <Input
                  id='budget'
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
              <h2 className='text-2xl font-bold mb-2'>
                قیمت نهایی و ثبت سفارش
              </h2>
              <p className='text-muted-foreground'>
                اطلاعات تماس خود را وارد کنید
              </p>
            </div>

            {/* Price Summary */}
            <Card className='p-6 bg-primary/5 border-primary/20'>
              <h3 className='text-lg font-semibold mb-4 text-center'>
                خلاصه قیمت
              </h3>
              <div className='space-y-2 text-sm'>
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
              <div className='border-t pt-4 mt-4'>
                <div className='flex justify-between items-center text-lg font-bold'>
                  <span>قیمت تقریبی:</span>
                  <span className='text-primary'>
                    {formatPrice(calculatePrice())}
                  </span>
                </div>
                <p className='text-xs text-muted-foreground mt-2 text-center'>
                  * قیمت نهایی پس از بررسی دقیق پروژه اعلام خواهد شد
                </p>
              </div>
            </Card>

            {/* Contact Form */}
            <div className='space-y-4'>
              <div>
                <Label htmlFor='name'>نام و نام خانوادگی</Label>
                <Input
                  id='name'
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
                <Label htmlFor='email'>ایمیل</Label>
                <Input
                  id='email'
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
                <Label htmlFor='phone'>شماره تماس</Label>
                <Input
                  id='phone'
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
    <div className='max-w-4xl mx-auto'>
      {/* Progress Steps */}
      <div className='mb-12'>
        <div className='flex items-center justify-between mb-4'>
          {steps.map((step, index) => (
            <div key={step.id} className='flex items-center'>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep > step.id
                    ? 'bg-primary text-primary-foreground'
                    : currentStep === step.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {currentStep > step.id ? (
                  <Check className='w-5 h-5' />
                ) : (
                  step.id
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-full h-0.5 mx-2 transition-colors ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className='flex justify-between text-sm'>
          {steps.map((step) => (
            <div key={step.id} className='text-center'>
              <span
                className={`transition-colors ${
                  currentStep >= step.id
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className='p-8 mb-8'>{renderStepContent()}</Card>

      {/* Navigation Buttons */}
      <div className='flex justify-between'>
        <Button
          variant='outline'
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ArrowRight className='w-4 h-4 ml-2' />
          مرحله قبل
        </Button>

        {currentStep < steps.length ? (
          <Button onClick={nextStep} disabled={!isStepValid()}>
            مرحله بعد
            <ArrowLeft className='w-4 h-4 mr-2' />
          </Button>
        ) : (
          <Button
            onClick={() => {
              // Handle form submission
              alert(
                'سفارش شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.'
              )
            }}
            disabled={!isStepValid()}
            className='bg-green-600 hover:bg-green-700'
          >
            ثبت سفارش
            <Check className='w-4 h-4 mr-2' />
          </Button>
        )}
      </div>
    </div>
  )
}
