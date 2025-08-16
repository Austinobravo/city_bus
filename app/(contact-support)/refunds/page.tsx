import React from 'react'
import RefundForm from './_components/RefundForm'

const RefundsPage = () => {
  return (
   <section className='px-7 py-14 space-y-20'>
      <div className='text-center space-y-2'>
          <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Incident</h2>
          <h3 className='text-gray-600 lg:text-lg text-sm max-w-5xl mx-auto'>If you were involved in or witnessed an incident on one of our buses, please use the form below to report it. The more details you can provide about what happened and where, the better we can investigate and respond appropriately.</h3>
      </div>
      <RefundForm />
  </section>
  )
}

export default RefundsPage