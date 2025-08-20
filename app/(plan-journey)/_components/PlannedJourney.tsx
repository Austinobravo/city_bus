import { ArrowRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator'
import { formatToNaira } from '@/lib/utils'
import Link from 'next/link'

type Props = {
    isLoading: boolean
    plannedJourney: any[] | undefined
}
const PlannedJourney = ({isLoading, plannedJourney}:Props) => {

    const journey = [
        {
            from: {
                destination: "Douglas Road",
                time: "09:40",
                description: "Departure Time"
            },
            to: {
                destination: "Wethadral Road",
                time: "12:40",
                description: "Arrival Time"
            },
            amount: 700
        }
    ]

    if(!isLoading && plannedJourney === undefined){
        return <div></div>
    }


  if (plannedJourney && plannedJourney.length > 0) {
    return (
      <section className="py-5 space-y-4">
        <h3 className="text-gray-700 font-semibold text-2xl">Sorted by:</h3>
        <Tabs defaultValue="departure" className="w-full">
          <TabsList className="border-b border-citybus-primary rounded-none bg-transparent py-0 w-full">
            <TabsTrigger value="departure" className="data-[state=active]:bg-blue-900 rounded-b-none data-[state=active]:text-white rounded-t-2xl p-4 text-lg font-semibold !border border-solid border-citybus-primary !border-b-0 cursor-pointer">Departure</TabsTrigger>
            <TabsTrigger value="price" className="data-[state=active]:bg-blue-900 rounded-b-none data-[state=active]:text-white rounded-t-2xl p-4 text-lg font-semibold !border border-solid border-citybus-primary !border-b-0 cursor-pointer">Price</TabsTrigger>
            <TabsTrigger value="duration" className="data-[state=active]:bg-blue-900 rounded-b-none data-[state=active]:text-white rounded-t-2xl p-4 text-lg font-semibold !border border-solid border-citybus-primary !border-b-0 cursor-pointer">Duration</TabsTrigger>
          </TabsList>

          <TabsContent value="departure" className="space-y-4 py-4">
            {journey.map((journey, index) => (
              <Link key={index} href={``} className="bg-gray-50 rounded-2xl hover:bg-gray-100 p-4 flex gap-3 items-center justify-between">
                <div>
                  <h3 className="font-semibold text-citybus-primary">{journey.from.destination}</h3>
                  <h4 className="text-2xl font-semibold">{journey.from.time}</h4>
                  <h5 className="text-neutral-700">{journey.from.description}</h5>
                </div>
                <hr className="!w-5 border border-black border-solid" />
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-gray-500 text-xs">Journey time</h3>
                    <time className="font-semibold text-gray-700 text-sm">2hrs 30mins</time>
                  </div>
                  <data value={journey.amount} className="font-semibold text-xl text-citybus-primary ">
                    {formatToNaira(journey.amount)}
                  </data>
                </div>
                <ArrowRight />
                <div>
                  <h3 className="font-semibold text-citybus-primary">{journey.to.destination}</h3>
                  <h4 className="text-2xl font-semibold">{journey.to.time}</h4>
                  <h5 className="text-neutral-700">{journey.to.description}</h5>
                </div>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="price">Change your price here.</TabsContent>
          <TabsContent value="duration">Change your duration here.</TabsContent>
        </Tabs>
      </section>
    )
  }else{
    if(isLoading ){
        return(
        <div className='size-fit mx-auto my-10'>
            <div className='journey-planner-loader'/>
        </div>
        )
    }else{
        // --- Item not found ---
        return (
          <section className="py-10 text-center space-y-4">
            <Image src="/rafiki.png" width={500} height={200} alt="Empty" priority />
            <h3 className="text-xl text-citybus-primary">
              <span className="font-semibold text-3xl">Oops!</span> That location is out of our reach for now.
            </h3>
          </section>
        )

    }

  }

}
export default PlannedJourney