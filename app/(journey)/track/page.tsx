import Image from 'next/image'
import React from 'react'

const TrackJourneyPage = () => {
  return (
    <section className='flex not-lg:flex-wrap gap-5 px-7 py-10 container mx-auto'>
        <div className='lg:w-1/2'>
            <h1 className='lg:text-4xl text-2xl font-semibold text-gray-700'>Wherever you’re headed in Owerri, City Bus will take you there.</h1>
            {/* <HomeHeroForm /> */}
        </div>
        <div className='w-full lg:w-1/2'>
            <Image src={`/homehero.png`} width={200} height={500} alt='Home hero' className='w-full' />
        </div>
    </section>
  )
}

export default TrackJourneyPage