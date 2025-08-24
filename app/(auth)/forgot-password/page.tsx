import React from 'react'
import ForgotPasswordForm from './_components/ForgotPasswordForm'

const ForgotPasswordPage = () => {
  return (
    <div className='flex flex-col justify-center items-center px-7 py-14 space-y-10'>
        <h2 className='text-gray-700 text-3xl font-semibold'>Reset your password</h2>
        <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPasswordPage