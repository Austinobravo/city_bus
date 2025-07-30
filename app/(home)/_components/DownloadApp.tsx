import Image from 'next/image'
import React from 'react'

const DownloadApp = () => {
  return (
    <section className='container mx-auto my-10 px-7 flex items-center'>
        <div className='space-y-5 lg:w-1/2'>
            <h3 className='lg:text-5xl text-3xl font-semibold'>Download our app</h3>
            <h4 className='lg:text-2xl text-lg font-medium'>Your City, Your Ride — Always with You</h4>
            <p className='lg:text-lg text-sm text-gray-500'>Plan your trips, buy tickets, and track your bus in real-time — all from your phone. Get the CBT app and move smarter across Owerri.</p>
            <div className='flex gap-3 items-center'>
                <Image src={`/ios.png`} width={500} height={200} alt='IOS image' priority  className='h-16 w-46 object-cover hover:scale-105 aspect-auto transition-all duration-500'/>
                <Image src={`/app.png`} width={500} height={200} alt='Google Play image' className='h-16 w-46 object-cover hover:scale-105 aspect-auto transition-all duration-500'/>
            </div>
        </div>
        <div className='lg:w-1/2'>
            <Image src={`/DownloadAppbanner.png`} width={500} height={200} alt='' />
        </div>
    </section>
  )
}

export default DownloadApp