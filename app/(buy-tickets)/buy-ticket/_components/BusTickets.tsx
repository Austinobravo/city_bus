import { ChevronRight, CreditCard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BusTicketForm from './BusTicketsForm'

const BusTickets = () => {
  return (
    <div>
        <div>
            <h2>Bus Tickets & Prices</h2>
            <h3>Easily find the best ticket for your trips — from quick rides to daily commutes. Choose single, daily, weekly, or monthly tickets at affordable rates. Students and job seekers get special discounts to make moving around Owerri even easier.</h3>
        </div>
        <div>
            <div>
                <h3>Search for Tickets by Bus Stop</h3>
                <h4>Quickly find tickets based on where you're boarding and where you're going.</h4>
                <BusTicketForm />
            </div>
            <div>
                <div className='bg-blue-50'>
                    <h3>All City Bus Tickets for Your Route</h3>
                    <h4>Browse available tickets based on your location and travel needs across Owerri.</h4>
                     <Link href={`item.url`} className='text-blue-700 flex gap-3 items-center font-medium'>
                        <span>View all Tickets</span>
                        <ChevronRight />

                    </Link>
                </div>
                <div className='bg-[#F6FEF9]'>
                    <h3>Recent Purchases</h3>
                    <h4>Quickly view and rebook tickets you've bought on City Bus.</h4>
                    <div>
                        <CreditCard />
                        <p>You have not purchased any tickets</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusTickets