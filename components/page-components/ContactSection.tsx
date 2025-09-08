import React from 'react'
import { Button } from '../ui/button'
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const ContactSection = () => {
  return (
    <section id='contact' className='border-y '>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center py-16 border-b'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-black mb-4'>
            تماس با ما
          </h2>
          <p className='text-lg text-neutral-600 max-w-80 mx-auto'>
            آماده پاسخگویی به سوالات شما و شروع پروژه‌تان هستیم
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3'>
          {/* Contact Info */}
          <div className='space-y-8 bg-white lg:bg-transparent z-50 lg:z-0'>
            <div className='border-b p-4'>
              <h3 className='text-xl font-semibold text-black mb-6'>
                اطلاعات تماس
              </h3>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center'>
                    <Phone className='w-6 h-6 text-black' aria-hidden='true' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base text-black'>
                      تلفن تماس
                    </h4>
                    <p className='text-neutral-600'>۰۲۱-۱۲۳۴۵۶۷۸</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center'>
                    <Mail className='w-6 h-6 text-black' aria-hidden='true' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base text-black'>
                      ایمیل
                    </h4>
                    <p className='text-neutral-600'>info@avis.ir</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center'>
                    <MapPin className='w-6 h-6 text-black' aria-hidden='true' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base text-black'>آدرس</h4>
                    <p className='text-neutral-600'>
                      تهران، خیابان ولیعصر، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='px-4'>
              <h4 className='font-semibold text-base text-black mb-4'>
                شبکه‌های اجتماعی
              </h4>
              <div className='flex gap-3'>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200'
                  aria-label='اینستاگرام'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200'
                  aria-label='توییتر'
                >
                  <Twitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200'
                  aria-label='لینکدین'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200'
                  aria-label='گیتهاب'
                >
                  <Github className='w-5 h-5' />
                </a>
              </div>
            </div>

            <div className='p-6 border-y'>
              <h4 className='font-semibold text-base text-black mb-4'>
                ساعات کاری
              </h4>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-black'>شنبه تا چهارشنبه:</span>
                  <span className='text-neutral-600'>۹:۰۰ - ۱۸:۰۰</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-black'>پنج‌شنبه:</span>
                  <span className='text-neutral-600'>۹:۰۰ - ۱۳:۰۰</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-black'>جمعه:</span>
                  <span className='text-neutral-600'>تعطیل</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='p-8 col-span-2 bg-white z-10 sm:max-w-5xl sm:mx-auto'>
            <h3 className='text-xl font-semibold text-black mb-6'>
              پیام بفرستید
            </h3>
            <form className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <Label
                    htmlFor='firstName'
                    className='text-sm font-medium text-black'
                  >
                    نام
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='نام شما'
                    className='mt-1 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                    aria-required='true'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='lastName'
                    className='text-sm font-medium text-black'
                  >
                    نام خانوادگی
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='نام خانوادگی شما'
                    className='mt-1 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                    aria-required='true'
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor='email'
                  className='text-sm font-medium text-black'
                >
                  ایمیل
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='example@email.com'
                  className='mt-1 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                  aria-required='true'
                />
              </div>

              <div>
                <Label
                  htmlFor='phone'
                  className='text-sm font-medium text-black'
                >
                  شماره تماس
                </Label>
                <Input
                  id='phone'
                  placeholder='۰۹۱۲۳۴۵۶۷۸۹'
                  className='mt-1 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                />
              </div>

              <div>
                <Label
                  htmlFor='subject'
                  className='text-sm font-medium text-black'
                >
                  موضوع
                </Label>
                <Input
                  id='subject'
                  placeholder='موضوع پیام شما'
                  className='mt-1 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                  aria-required='true'
                />
              </div>

              <div>
                <Label
                  htmlFor='message'
                  className='text-sm font-medium text-black'
                >
                  پیام
                </Label>
                <Textarea
                  id='message'
                  placeholder='پیام خود را اینجا بنویسید...'
                  className='mt-1 min-h-28 border-neutral-300 focus:ring-2 focus:ring-black focus:border-black rounded-md'
                  aria-required='true'
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-black text-white hover:bg-neutral-900 focus:ring-2 focus:ring-black rounded-md py-2 flex items-center justify-center gap-2'
                aria-label='ارسال پیام'
              >
                ارسال پیام
                <Send className='w-4 h-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
