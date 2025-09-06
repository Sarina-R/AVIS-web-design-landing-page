import React from 'react'
import StepByStepForm from '../step-by-step-form'

const OrderFromSection = () => {
  return (
    <section id='services' className='py-24 bg-white border-t'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>سفارش پروژه</h2>
          <p className='text-xl text-black/60 max-w-80 mx-auto'>
            با تکمیل فرم زیر، قیمت تقریبی پروژه‌تان را دریافت کنید و سفارش خود
            را ثبت نمایید
          </p>
        </div>

        <StepByStepForm />
      </div>
    </section>
  )
}

export default OrderFromSection
