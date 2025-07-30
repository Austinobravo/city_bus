import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, BriefcaseBusiness, BusFront, ChevronRight, House, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PiMapPinArea, PiMapPinSimpleBold } from "react-icons/pi";


const data = [
    {
        name: "Student",
        url : "",
        description: "Save more on school commutes across Owerri.",
        color: "#6941C6"
    },
    {
        name: "Day",
        url : "",
        description: "Travel as much as you like for one full day.",
        color: "#1D2939"
    },
    {
        name: "Monthly",
        url : "",
        description: "Unlimited rides, lower cost.",
        color: "#CB027B"
    },
]

const favoritePlaces = [
    {
        icon: PiMapPinArea,
        heading: "Your Favorite places",
        children: [
            {
                icon: House,
                heading: "Add Your Home Stop",
                description: "So we can help you plan faster rides",
            },
            {
                icon: BriefcaseBusiness,
                heading: "Add Your Work Stop",
                description: "Get morning bus alerts",
            },
            {
                icon: PiMapPinSimpleBold,
                heading: "Find Bus Stop",
            },
        ],
        description: "See all favorites",
        url: ""
    },

]
const favoriteServices = [

    {
        icon: BusFront,
        heading: "Service updates",
        children: [
            {
                heading: "“Weekend service disruption",
                description: "07 May 2025",
            },
            {
                heading: "“Route 5 temporarily suspended due to maintenance.”",
            },
            {
                heading: "St Helens Bus Station Closure from Sunday 18th May 2025",
            },
        ],
        description: "See all service update",
        url: ""
    },
]
const ExploreTickets = () => {
  return (
    <section className='container mx-auto mt-10 px-7'>
        <div className='py-7'>
            <h2 className='font-medium lg:text-2xl text-xl text-gray-700'>Explore Ticket Options</h2>
            <p className='text-gray-500 text-sm'>Whether you're riding once or every day, find the best ticket for your journey.</p>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
            {data.map((item, index) => (
                <Link key={index} href={item.url}>
                      <Card  style={{"backgroundColor": item.color}} className={` rounded-2xl shrink-0 min-w-3xs max-h-32 py-3 flex flex-col justify-center items-center`}>
                        <CardHeader>
                          <CardTitle></CardTitle>
                          <CardDescription></CardDescription>
                          <CardAction></CardAction>
                        </CardHeader>
                        <CardContent>
                          <div className='flex justify-between gap-3 items-center text-white'>
                           <div className='space-y-4'>
                                <h3 className='text-xl font-semibold'>{item.name}<span className='text-lg font-medium'>Tickets</span></h3>
                                <p className='text-sm font-medium'>{item.description}</p>
                           </div>
                           <ArrowRight className='size-6'/>
                          </div>
                        </CardContent>
                        <CardFooter className=''>
                        </CardFooter>
                      </Card>
                </Link>
            
                      ))}
                      <Link href={``} className='flex gap-3 justify-center  items-center'>
                        <h2>Explore All Tickets</h2>
                        <ArrowRight />
                      </Link>
        </div>
        <div className='py-9 flex gap-3'>
            <div className='lg:w-3/5 flex gap-6'>
                <div className='divide-y divide-solid'>
                {favoritePlaces.map((item, index) =>(
                    <div key={index}>
                        <div className='text-xl font-medium text-gray-800 flex gap-2 items-center py-2'>
                            {item.icon && <item.icon />}
                            <span>{item.heading}</span>
                        </div>
                        <div className='divide-y divide-solid'>
                            {item.children.map((child, idx) => (
                                <div key={idx} className='flex items-center py-5 gap-3 justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <div className='border border-solid rounded-lg hover:bg-gray-100 p-2'>
                                            {child.icon && <child.icon className='size-6 text-blue-900'/>}
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 text-xl font-medium'>{child.heading}</h3>
                                            <h4 className='text-gray-500 font-medium'>{child.description}</h4>
                                        </div>
                                    </div>
                                    <ChevronRight className='size-6'/>
                                </div>
                            ))}

                        </div>
                        <Link href={item.url} className='text-blue-700 flex gap-5 items-center font-medium'>
                            <span>{item.description}</span>
                            <ChevronRight />

                        </Link>

                        <div>

                        </div>


                    </div>
                ))}

                </div>
                <div className='divide-y divide-solid'>
                    {favoriteServices.map((item, index) =>(
                        <div key={index}>
                            <div className='text-xl font-medium text-gray-800 flex gap-2 items-center py-2'>
                                {item.icon && <item.icon />}
                                <span>{item.heading}</span>
                            </div>
                            <div className='divide-y divide-solid'>
                                {item.children.map((child, idx) => (
                                    <div key={idx} className='flex items-center py-5 font-medium'>
                                        <div>
                                            <h3 className=''>{child.heading}</h3>
                                            <h4 className='italic text-gray-500'>{child.description}</h4>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <Link href={item.url} className='text-blue-700 flex gap-3 items-center font-medium'>
                                <span>{item.description}</span>
                                <ChevronRight />

                            </Link>

                            <div>

                            </div>


                        </div>
                    ))}

                </div>

            </div>
            <div className='lg:w-2/5'>
                <Image src={`/TicketBanner.png`} width={500} height={200} alt='' />
            </div>

        </div>
    </section>
  )
}

export default ExploreTickets