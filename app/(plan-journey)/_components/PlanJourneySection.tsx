"use client"
import React from 'react'
import PlanJourneyForm from './PlanJourneyForm'
import PlannedJourney from './PlannedJourney'

const PlanJourneySection = () => {
    const [plannedJourney, setPlannedJourney] = React.useState<Array<any>>()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    
  return (
    <div className='lg:pl-7 space-y-10 flex not-lg:flex-wrap gap-5'>
        <div className='py-12 lg:basis-2/5'>
            <PlanJourneyForm setPlannedJourney={setPlannedJourney} setIsLoading={setIsLoading}/>
            <PlannedJourney isLoading={isLoading} plannedJourney={plannedJourney}/>
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

export default PlanJourneySection