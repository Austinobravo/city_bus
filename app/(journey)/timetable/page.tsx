import Image from 'next/image'
import React from 'react'
import TimetableForm from './_components/TimetableForm'

const JourneyTimetable = () => {
  return (
    <section className='flex not-lg:flex-wrap gap-5 px-7 py-10 container mx-auto'>
            <div className='lg:w-1/2 space-y-3'>
                <h1 className='lg:text-4xl text-2xl font-semibold text-gray-700'>Your Journey Timetable</h1>
                <TimetableForm />
            </div>
            <div className='w-full lg:w-1/2 space-y-4'>
                <Image src={`/timetable.png`} width={500} height={500} alt='Timetable hero' className='w-full rounded-2xl' />
                <h3 className='text-gray-700 font-semibold text-xl'>Catch Your Bus Without the Stress — Real-Time Tracking and Smarter Planning.</h3>
                <h4 className='text-sm text-gray-700'>Take the stress out of catching the bus with real-time tracking, easy journey planning, and quieter travel times. No more guessing when your bus will arrive or worrying about missing your stop. With accurate, live updates, you can see exactly where your bus is and plan your trip accordingly.</h4>
            </div>
        </section>
  )
}

export default JourneyTimetable
