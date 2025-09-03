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
import { Card } from '../ui/card'

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 bg-black/5'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>تماس با ما</h2>
          <p className='text-xl text-black/60 max-w-2xl mx-auto'>
            آماده پاسخگویی به سوالات شما و شروع پروژه‌تان هستیم
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Info */}
          <div className='space-y-10'>
            <div>
              <h3 className='text-2xl font-bold mb-8'>اطلاعات تماس</h3>
              <div className='space-y-8'>
                <div className='flex items-center gap-6'>
                  <div className='w-16 h-16 bg-black/10 flex items-center justify-center'>
                    <Phone className='w-8 h-8 text-black' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg'>تلفن تماس</h4>
                    <p className='text-black/60'>۰۲۱-۱۲۳۴۵۶۷۸</p>
                  </div>
                </div>

                <div className='flex items-center gap-6'>
                  <div className='w-16 h-16 bg-black/10 flex items-center justify-center'>
                    <Mail className='w-8 h-8 text-black' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg'>ایمیل</h4>
                    <p className='text-black/60'>info@avis.ir</p>
                  </div>
                </div>

                <div className='flex items-center gap-6'>
                  <div className='w-16 h-16 bg-black/10 flex items-center justify-center'>
                    <MapPin className='w-8 h-8 text-black' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg'>آدرس</h4>
                    <p className='text-black/60'>
                      تهران، خیابان ولیعصر، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className='font-bold text-lg mb-6'>شبکه‌های اجتماعی</h4>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-12 h-12 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Instagram className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='w-12 h-12 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Twitter className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='w-12 h-12 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='w-12 h-12 bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors'
                >
                  <Github className='w-6 h-6' />
                </a>
              </div>
            </div>

            <Card className='p-8 border-0 bg-white'>
              <h4 className='font-bold text-lg mb-4'>ساعات کاری</h4>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span>شنبه تا چهارشنبه:</span>
                  <span className='text-black/60'>۹:۰۰ - ۱۸:۰۰</span>
                </div>
                <div className='flex justify-between'>
                  <span>پنج‌شنبه:</span>
                  <span className='text-black/60'>۹:۰۰ - ۱۳:۰۰</span>
                </div>
                <div className='flex justify-between'>
                  <span>جمعه:</span>
                  <span className='text-black/60'>تعطیل</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className='p-10 border-0 bg-white'>
            <h3 className='text-2xl font-bold mb-8'>پیام بفرستید</h3>
            <div className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='firstName' className='text-base font-medium'>
                    نام
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='نام شما'
                    className='mt-2 border-black/20 focus:ring-black focus:border-black'
                  />
                </div>
                <div>
                  <Label htmlFor='lastName' className='text-base font-medium'>
                    نام خانوادگی
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='نام خانوادگی شما'
                    className='mt-2 border-black/20 focus:ring-black focus:border-black'
                  />
                </div>
              </div>

              <div>
                <Label htmlFor='email' className='text-base font-medium'>
                  ایمیل
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='example@email.com'
                  className='mt-2 border-black/20 focus:ring-black focus:border-black'
                />
              </div>

              <div>
                <Label htmlFor='phone' className='text-base font-medium'>
                  شماره تماس
                </Label>
                <Input
                  id='phone'
                  placeholder='۰۹۱۲۳۴۵۶۷۸۹'
                  className='mt-2 border-black/20 focus:ring-black focus:border-black'
                />
              </div>

              <div>
                <Label htmlFor='subject' className='text-base font-medium'>
                  موضوع
                </Label>
                <Input
                  id='subject'
                  placeholder='موضوع پیام شما'
                  className='mt-2 border-black/20 focus:ring-black focus:border-black'
                />
              </div>

              <div>
                <Label htmlFor='message' className='text-base font-medium'>
                  پیام
                </Label>
                <Textarea
                  id='message'
                  placeholder='پیام خود را اینجا بنویسید...'
                  className='min-h-32 mt-2 border-black/20 focus:ring-black focus:border-black'
                />
              </div>

              <Button className='w-full bg-black text-white hover:bg-black/90'>
                ارسال پیام
                <Send className='w-4 h-4 ml-2' />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
