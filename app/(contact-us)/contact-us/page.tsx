import React from 'react'
import { ContactUsForm } from './_components/ContactUsForm'

const ContactUsPage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
            <div className='text-center space-y-2'>
                <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Contact us</h2>
                <h3 className='text-gray-600 lg:text-lg text-sm'>Can't find what you're looking for in our FAQs? We're here to help.</h3>
            </div>
            <div className='flex gap-3'>
                <div className='lg:w-3/4'>
                    <ContactUsForm />
                </div>
                <div className='lg:w-1/4'></div>
            </div>
    </section>
  )
}

export default ContactUsPage