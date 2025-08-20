import WindowBackButton from '@/components/globals/WindowBackButton'
import React from 'react'
import BusRoute from '../../_components/BusRoute'

const PlanJourneyDetailsPage = () => {
  return (
    <div className='lg:pl-7 space-y-10 flex not-lg:flex-wrap gap-5 not-lg:px-7'>
        <div className='py-12 lg:basis-2/5'>
            <WindowBackButton />
            <BusRoute />
        </div>
        <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent("owerri")}&output=embed`}
            width="100%"
            height="100%"
            // style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen
            loading="lazy"
            className='lg:basis-3/5 min-h-screen self-stretch'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
  )
}

export default PlanJourneyDetailsPage