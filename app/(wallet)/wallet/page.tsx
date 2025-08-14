import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { MdOutlineLocalAtm } from "react-icons/md";

const WalletPage = () => {
  return (
    <section className='px-7 py-14 pb-20 space-y-20'>
        <Link href={``} className='bg-gradient-to-br  from-white via-[#F1F2F5] shadow border border-solid gap-5 border-gray-200 p-7 pb-20 rounded-2xl w-full flex flex-col to-[#E2E7F1]'>
            <span className='font-semibold sm:text-2xl text-lg text-gray-700'>CBT Cash</span>
            <span className='text-gray-900 sm:text-6xl text-4xl font-semibold'>NGN 0.00</span>
        </Link>
        <h3 className='font-medium lg:text-5xl text-3xl text-gray-700'>Payment Methods</h3>
        <div className='bg-gray-100 border border-solid border-gray-200 rounded-2xl p-4 lg:max-w-90 w-full space-y-10'>
            <div className='flex gap-2'>
                Cash <Badge className='bg-violet-700 text-white rounded-full'>Preferred</Badge>
            </div>
            <MdOutlineLocalAtm className='size-28'/>
            

        </div>
        <div className='space-y-10'>
        <Button variant={'outline'} className='shadow-none bg-transparent border-0 sm:text-3xl text-xl font-medium hover:bg-transparent text-gray-700 cursor-pointer'><Plus /> Add Payment Method</Button>
        <div className='border-y border-solid py-10 space-y-10'>
            <h3 className='font-medium lg:text-5xl text-3xl text-gray-700'>Vouchers</h3>
            <Button variant={'outline'} className='shadow-none bg-transparent border-0 sm:text-3xl text-xl font-medium hover:bg-transparent text-gray-700 cursor-pointer'><Plus /> Add Voucher</Button>
        </div>

        </div>
        
    </section>
  )
}

export default WalletPage