import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BusFront, Info, MapPin, User } from 'lucide-react'
import { HiOutlineArrowLongRight, HiOutlineArrowLongDown } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaDotCircle } from "react-icons/fa";
import TimetableCopyForm from '../_components/TimetableCopyForm'

const TimetableDetail = () => {
  return (
    <div className='px-7 py-14 space-y-4'>
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/" className='text-citybus-primary'>City Bus transit</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="">Timetable</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        <div>
            <h3 className='text-xl font-semibold text-gray-700'>Your Timetable, Tailored for You.</h3>
        </div>

        <div className='overflow-x-hidden'>
            <div className="flex items-center justify-between bg-gray-50 gap-4 border border-solid rounded-lg shadow-lg px-4 overflow-x-auto py-3">
                <div className='font-medium space-y-2 basis-1/4'>
                    <h3 className='text-gray-700 text-xl'>Douglas Road</h3>
                    <p>Leaving in 10mins</p>
                </div>
                <div className='flex gap-3 items-center basis-1/4'>
                    <hr className='border border-black w-16 border-solid'/>
                    <div className='flex flex-col items-center gap-1'>
                        <BusFront />
                        <span className='text-xs font-medium text-gray-500'>Journey time</span>
                        <time className='text-lg text-gray-700 font-medium'>2hrs 30mins</time>
                    </div>
                    <HiOutlineArrowLongRight className='' size={50}/>
                    
                </div>
                <div className='font-medium space-y-2 basis-1/4'>
                    <h3 className='text-gray-700 text-xl'>Control Post</h3>
                    <p>Leaving in 10mins</p>
                </div>
                <div className='basis-1/4 flex items-center gap-2'>
                    <User size={17}/>
                    <span className='text-xl font-medium text-gray-700'>1 passenger</span>
                    <Button className='bg-citybus-primary px-10'>Edit</Button>
                </div>
            </div>
        </div>
        <Accordion type="single" defaultValue='item-1' collapsible className='border border-solid rounded-lg my-10 bg-gray-50'>
        <AccordionItem value="item-1">
            <AccordionTrigger className='p-4 hover:no-underline flex not-sm:flex-wrap justify-between border w-full items-center'>
                <div className='flex gap-2 items-center'>
                    <BusFront className='size-14'/>
                    <div>
                        <h3 className='font-medium sm:text-3xl text-xl text-gray-700'>Bus 7A</h3>
                        <div className='flex gap-2 items-center'>
                            <h3 className='font-medium sm:text-xl text-sm text-citybus-primary'>Douglas Junction</h3>
                            <HiOutlineArrowLongRight className='' size={50}/>
                            <h3 className='font-medium sm:text-xl text-sm text-citybus-primary'>Wethadral Junction</h3>

                        </div>
                    </div>
                </div>
                <span>Approx. journey time: 2hrs 30mins</span>
            </AccordionTrigger>
            <AccordionContent>
            <div className='bg-[#D2E5F9] text-2xl font-semibold text-citybus-primary flex justify-evenly gap-2 p-4'>
                <h2>Journey</h2>
                <h2>Time</h2>
            </div>
            <div className='divide-y divide-solid max-w-5/6 ml-auto'>
                <div className='flex py-4'>
                    <div className='flex gap-2 items-center w-1/2 justify-center'>
                        <FaDotCircle fill='#22c55e' className='size-5'/>
                        <div>
                            <h3 className='font-medium'>Departure</h3>
                            <h3 className='text-sm'>Douglas Road</h3>
                        </div>
                    </div>
                    <div className='border-l border-solid text-center w-1/2'>
                        <time className='text-gray-700 text-2xl text-center'>9:40</time>
                    </div>
                </div>
                <div className='w-full py-2'>
                    <HiOutlineArrowLongDown className='size-6 text-citybus-primary'/>
                </div>
                <div className='flex py-4'>
                    <div className='flex gap-2 items-center w-1/2 justify-center'>
                        <MapPin className='size-5 text-citybus-primary'/>
                        <div>
                            <h3 className='font-medium'>Arrival</h3>
                            <h3 className='text-sm'>Imsu Gate</h3>
                        </div>
                    </div>
                    <div className='border-l border-solid text-center w-1/2'>
                        <time className='text-gray-700 text-2xl text-center'>12:40</time>
                    </div>
                </div>
            </div>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <div className='grid lg:grid-cols-2 gap-4'>
            <TimetableCopyForm />
            <div className='bg-blue-50 flex p-4 gap-2 rounded-lg items-center'>
                <Info />
                <div className='text-gray-700'>
                    <h3 className='sm:text-2xl text-lg'>Enter a valid email to receive timetable.</h3>
                    <h4 className='sm:text-xl text-sm text-citybus-primary'>Please note: schedules are no longer valid after departure.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimetableDetail