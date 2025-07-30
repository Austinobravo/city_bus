import React from 'react'
import HomeHero from './_components/HomeHero'
import AvailableRoute from './_components/AvailableRoute'
import ExploreTickets from './_components/ExploreTickets'
import DownloadApp from './_components/DownloadApp'
import PopularDestinations from './_components/PopularDestinations'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <AvailableRoute />
        <ExploreTickets />
        <PopularDestinations />
        <DownloadApp />
    </div>
  )
}

export default HomePage