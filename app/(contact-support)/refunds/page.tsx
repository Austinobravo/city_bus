import React from 'react'
import RefundForm from './_components/RefundForm'

const RefundsPage = () => {
  return (
   <section className='px-7 py-14 space-y-20'>
      <div className='text-center space-y-2'>
          <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Refund</h2>
          <h3 className='text-gray-600 lg:text-lg text-sm max-w-5xl mx-auto'>If you didn’t travel or had an issue with your ticket, you may be eligible for a refund. Please complete the form below with as much detail as possible so we can review your request quickly and fairly.</h3>
      </div>
      <RefundForm />
  </section>
  )
}

export default RefundsPage