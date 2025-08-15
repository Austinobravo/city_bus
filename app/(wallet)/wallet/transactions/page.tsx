import WindowBackButton from '@/components/globals/WindowBackButton'
import { CreditCard } from 'lucide-react'
import React from 'react'

const WalletTransactionPage = () => {
  return (
    <section className='px-7 py-14 pb-20 space-y-20'>
        <div className='bg-gradient-to-br  from-white via-[#F1F2F5] shadow border border-solid gap-5 border-gray-200 p-7 pb-20 rounded-2xl w-full flex flex-col to-[#E2E7F1]'>
            <WindowBackButton />
            <span className='font-semibold sm:text-2xl text-lg text-gray-700'>CBT Cash</span>
            <span className='text-gray-900 sm:text-6xl text-4xl font-semibold'>NGN 0.00</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 pb-40'>
            <div className='bg-blue-100 rounded-full p-4 border border-solid border-blue-300'><CreditCard /></div>
            <span className='sm:text-4xl text-2xl font-semibold'>No transactions yet</span>
        </div>
    </section>
  )
}

export default WalletTransactionPage