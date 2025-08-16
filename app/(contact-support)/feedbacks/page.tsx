import React from 'react'
import FeedbackForm from './_components/FeedbackForm'

const FeedbacksPage = () => {
  return (
    <section className='px-7 py-14 space-y-20'>
      <div className='text-center space-y-2'>
          <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Feedback</h2>
          <h3 className='text-gray-600 lg:text-lg text-sm max-w-5xl mx-auto'>We’d love to hear from you. Whether it’s a compliment, suggestion, or concern, please fill out the form below. The more details you provide, the better we can understand your experience and improve our service.</h3>
      </div>
      <FeedbackForm />
  </section>
  )
}

export default FeedbacksPage