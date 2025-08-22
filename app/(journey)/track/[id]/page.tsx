import WindowBackButton from '@/components/globals/WindowBackButton'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BusFront } from 'lucide-react'
import { GrLocationPin } from "react-icons/gr";
import { cn } from '@/lib/utils'

const stops= [
  { name: "Douglas Road Bus Stop", time: "07:30am", status: "On time", isFirst: true },
  { name: "Emmanuel College Bus Stop", time: "08:30am", status: "On time" },
  { name: "Nekede Junction", time: "09:00am", status: "On time" },
  { name: "IMSUTH Junction", time: "09:30am", status: "Exp. 09:35am" },
  { name: "Relief Market Bus Stop", time: "09:45am", status: "Exp. 09:48am" },
  { name: "Ikenegbu Layout Bus Stop", time: "09:50am", status: "On time" },
  { name: "Wetheral Road", time: "09:55am", status: "Exp. 09:56am", isLast: true },
];

const TrackDetailsPage = () => {
  return (
    <div className='space-y-3'>
        <WindowBackButton />
        <h3 className='font-semibold text-xl text-gray-700'>Douglas road</h3>
        <Tabs defaultValue="departure" className="w-full">
            <TabsList className="border-b border-citybus-primary rounded-none bg-transparent py-0 w-full">
            <TabsTrigger value="departure" className="data-[state=active]:bg-blue-900 rounded-b-none data-[state=active]:text-white rounded-t-2xl p-4 text-lg font-semibold !border border-solid border-citybus-primary !border-b-0 cursor-pointer">Departure</TabsTrigger>
            <TabsTrigger value="arrival" className="data-[state=active]:bg-blue-900 rounded-b-none data-[state=active]:text-white rounded-t-2xl p-4 text-lg font-semibold !border border-solid border-citybus-primary !border-b-0 cursor-pointer">Arrival</TabsTrigger>
            </TabsList>

            <TabsContent value="departure" className="space-y-4 py-4">
                <Accordion type="single" defaultValue='item-1' collapsible className='border border-solid rounded-lg my-10 bg-gray-50'>
        <AccordionItem value="item-1">
            <AccordionTrigger className='p-4 hover:no-underline flex not-sm:flex-wrap justify-between border w-full items-center'>
                <div className='spacce-y-2'>
                    <h3 className='font-semibold text-gray-700 sm:text-3xl text-xl'>Bus 7A <span className='lg:text-2xl text-base'>9:40</span></h3>
                    <h4 className='font-medium lg:text-xl text-sm text-citybus-primary'>Douglas Bus Stop</h4>
                    <h5 className='lg:text-base text-xs'>Direction MCC Road Bus Stop</h5>
                    
                </div>
                <span className='text-gray-500 font-semibold lg:text-xl text-sm'>Track</span>
            </AccordionTrigger>
            <AccordionContent className='p-4'>
                <div className='flex gap-2 items-center'>
                    <div className='text-blue-500 bg-gray-200 rounded-lg size-7 justify-center flex items-center'><GrLocationPin className='size-5' /></div>
                    <h3 className='text-lg max-w-60'>Bus 7A Douglas Junction - Wetheral Juction</h3>
                </div>
                <div className='flex gap-2 py-7'>
                    <div className='relative flex flex-col items-center'>
                        <div className='w-[2px] top-0 bottom-0 absolute bg-gray-600'></div>
                        {stops.map((_, index) => (
                            <div key={index} className={cn('size-4 rotate-45 border  mb-8 z-10', index < stops.length / 2 ? 'bg-gray-200 border-gray-300' : 'border-blue-500 bg-white')}></div>
                        ))}
                    </div>
                    <div className='space-y-7 flex-1'>
                        {stops.map((stop, index) => (
                            <div className={cn('flex justify-between w-full', index < stops.length / 2 && 'text-gray-400')} key={index}>
                                <h3>{stop.name}</h3>
                                <h4>{stop.time}</h4>
                            </div>
                        ))}
                    </div>
                </div>

            </AccordionContent>
        </AccordionItem>
        </Accordion>
            </TabsContent>

            <TabsContent value="arrival">

            </TabsContent>
        </Tabs>

    </div>
  )
}

export default TrackDetailsPage