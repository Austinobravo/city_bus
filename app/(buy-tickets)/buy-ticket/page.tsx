import React from 'react'
import BuyATicketHero from './_components/BuyATicketHero'
import BusTickets from './_components/BusTickets'

const BuyATicketPage = () => {
  return (
    <section className='px-14 py-14 container mx-auto'>
      <BuyATicketHero />
      <BusTickets />
    </section>
  )
}

export default BuyATicketPage