import React from 'react'
import LostPropertyForm from './_components/LostPropertyForm'

const LostPropertyPage = () => {
  return (
    <section className='px-7 py-14 space-y-20'>
        <div className='text-center space-y-2'>
            <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Lost Properties</h2>
            <h3 className='text-gray-600 lg:text-lg text-sm max-w-5xl mx-auto'>If you’ve left something on one of our buses, the best way to get it back is to complete our form below. Please give as much detail as you can about the bus trip and the item to help us track it down for you. </h3>
        </div>
        <LostPropertyForm />
    </section>
  )
}

export default LostPropertyPage