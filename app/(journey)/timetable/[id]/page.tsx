import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BusFront, User } from 'lucide-react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
            <BreadcrumbLink href="">Timetables</BreadcrumbLink>
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
        <Accordion type="single" collapsible className='border border-solid rounded-lg'>
        <AccordionItem value="item-1">
            <AccordionTrigger className='p-4 hover:no-underline flex justify-between border w-full items-center'>
                <div className='flex gap-2 items-center'>
                    <BusFront className='size-14'/>
                    <div>
                        <h3 className='font-medium text-3xl text-gray-700'>Bus 7A</h3>
                        <div className='flex gap-2 items-center'>
                            <h3 className='font-medium text-xl text-citybus-primary'>Douglas Junction</h3>
                            <HiOutlineArrowLongRight className='' size={50}/>
                            <h3 className='font-medium text-xl text-citybus-primary'>Wethadral Junction</h3>

                        </div>
                    </div>
                </div>
                <span>Approx. journey time: 2hrs 30mins</span>
            </AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </div>
  )
}

export default TimetableDetail