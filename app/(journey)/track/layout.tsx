import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

const TrackJourneyLayout = ({children}:Props) => {
  return (
    <div className='lg:pl-7 space-y-10 flex not-lg:flex-wrap gap-5 not-lg:px-7'>
        <main className='py-12 lg:basis-2/5'>{children}</main>
        <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent("owerri")}&output=embed`}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className='lg:basis-3/5 min-h-screen self-stretch'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
  )
}

export default TrackJourneyLayout