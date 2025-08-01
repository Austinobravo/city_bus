import { ChevronRight, CreditCard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BusTicketForm from './BusTicketsForm'

const BusTickets = () => {
  return (
    <div className=''>
        <div className='py-10 space-y-3'>
            <h2 className='text-gray-700 font-semibold lg:text-3xl text-xl'>Bus Tickets & Prices</h2>
            <h3 className='text-gray-500 lg:text-lg text-sm '>Easily find the best ticket for your trips — from quick rides to daily commutes. Choose single, daily, weekly, or monthly tickets at affordable rates. Students and job seekers get special discounts to make moving around Owerri even easier.</h3>
        </div>
        <div className='flex not-lg:flex-wrap gap-10'>
            <div>
                <h3 className='text-gray-700 text-2xl font-medium'>Search for Tickets by Bus Stop</h3>
                <h4 className='text-gray-500 text-lg font-medium'>Quickly find tickets based on where you're boarding and where you're going.</h4>
                <BusTicketForm />
            </div>
            <div className='flex flex-col justify-between gap-4'>
                <div className='bg-blue-50 p-4 rounded-2xl space-y-2'>
                    <h3 className='text-gray-700 text-lg lg:text-2xl font-medium'>All City Bus Tickets for Your Route</h3>
                    <h4 className='text-gray-500 text-sm lg:text-lg font-medium'>Browse available tickets based on your location and travel needs across Owerri.</h4>
                     <Link href={`item.url`} className='text-blue-700 flex gap-3 pt-5 items-center font-medium'>
                        <span>View all Tickets</span>
                        <ChevronRight />

                    </Link>
                </div>
                <div className='bg-[#F6FEF9] p-4 rounded-2xl space-y-2'>
                    <h3 className='text-gray-700 text-lg lg:text-2xl font-medium'>Recent Purchases</h3>
                    <h4 className='text-gray-500 text-sm lg:text-lg font-medium'>Quickly view and rebook tickets you've bought on City Bus.</h4>
                    <div className='flex flex-col items-center justify-center text-gray-500 py-5 gap-4'>
                        <CreditCard />
                        <p className='text-sm text-center'>You have not purchased any tickets</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusTickets