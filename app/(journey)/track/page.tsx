import Image from 'next/image'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import TrackAJourneyForm from './_components/TrackJourney'
import TrackBusNumber from './_components/TrackBusNumber'

const TrackJourneyPage = () => {
  return (
    <section>
       <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/" className='text-citybus-primary'>City Bus transit</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="">Timetable</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="">Track your Trip</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        <div className='py-10'>
          <TrackAJourneyForm />
           <div className='flex items-center gap-3'>
                <hr className='flex-grow min-h-0 border border-solid '/>
                <span className='whitespace-nowrap'>or</span>
                <hr className='flex-grow min-h-0 border border-solid '/>
            </div>
          <TrackBusNumber />
        </div>

    </section>
  )
}

export default TrackJourneyPage