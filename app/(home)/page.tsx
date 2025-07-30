import React from 'react'
import HomeHero from './_components/HomeHero'
import AvailableRoute from './_components/AvailableRoute'
import ExploreTickets from './_components/ExploreTickets'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <AvailableRoute />
        <ExploreTickets />
    </div>
  )
}

export default HomePage