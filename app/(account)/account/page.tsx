import { Button } from '@/components/ui/button'
import React from 'react'


const AccountPage = () => {
  return (
    <section className='bg-gray-50 p-4 rounded-2xl pb-40'>
      <h3 className='text-center text-2xl font-semibold text-gray-700 py-10'>Welcome to your account</h3>
      <div className='border border-solid flex not-lg:flex-wrap gap-2'>
        <div className='p-4 pb-7 lg:basis-1/2'>
          <h3 className='text-gray-700 font-semibold'>Explore the city of Owerri with CBT</h3>
          <h4 className='text-gray-700 text-sm'>Choose the next trip destination</h4>
          <Button className='min-h-14 cursor-pointer bg-citybus-primary text-white mt-10 w-full'>Explore</Button>
        </div>
        <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent("owerri")}&output=embed`}
            width="100%"
            height="100%"
            // style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen
            loading="lazy"
            className='lg:basis-1/2 min-h-80'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
        
    </section>
  )
}

export default AccountPage