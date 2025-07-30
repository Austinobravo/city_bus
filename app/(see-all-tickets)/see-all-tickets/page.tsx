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
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

const data = [
    {
        title: "Popular tickets",
        children: [
            {
                name: "Daily Ticket",
                description: "Unlimited Travel, One Flat Fare",
                paragraph1: "Whether you're heading to work, school, or running errands around town, our Daily Ticket gives you unlimited bus rides for 24 hours from the moment you activate it. It’s perfect if you plan to make multiple trips in a single day without paying each time.",
                paragraph2: "Use it across any City Bus route within Owerri, and enjoy the flexibility of hopping on and off throughout the day — no limits, no extra cost.",
                color: "#197C10"
            },
            {
                name: "Single Ticket",
                description: "Two Rides. One Simple Ticket.",
                paragraph1: "Just need to get from point A to B and back again? The Single Ticket gives you up to two trips within 24 hours from activation — ideal for straightforward commutes, quick errands, or short visits.",
                paragraph2: "Use it on any City Bus route within Owerri, and enjoy a smooth ride without the hassle of paying twice. Simple, flexible, and built for your daily needs.",
                color: "#400984"
            },
    
        ]

    },
    {
        title: "All other ticket",
        children: [
            {
                name: "Weekly Ticket",
                description: "Unlimited Rides, All Week Long",
                paragraph1: "Travel as much as you want for 7 consecutive days with the Weekly Ticket. Whether you're commuting daily, running errands, or just moving around Owerri, this pass gives you unlimited access to all City Bus routes for one flat price.",
                paragraph2: "No need to buy a ticket every day — just activate once and ride freely all week. It’s convenient, affordable, and perfect for regular riders.",
                color: "#036583"
            },
            {
                name: "Monthly Ticket",
                description: "Two Rides. One Simple Ticket.",
                paragraph1: "Just need to get from point A to B and back again? The Single Ticket gives you up to two trips within 24 hours from activation — ideal for straightforward commutes, quick errands, or short visits.",
                paragraph2: "Use it on any City Bus route within Owerri, and enjoy a smooth ride without the hassle of paying twice. Simple, flexible, and built for your daily needs.",
                color: "#400984"
            },
            {
                name: "Student Ticket",
                description: "Affordable Travel Made for Students",
                paragraph1: "Whether you're heading to lectures, tutorials, or back home after a long day, the Student Ticket gives you unlimited travel across all City Bus routes in Owerri, at a discounted price — just for students.Choose from daily, weekly, or monthly student bundles to suit your schedule. It's flexible, budget-friendly, and designed to keep your commute simple so you can focus on what matters most.",
                color: "#1D2939"
            },
    
        ]

    },

]
const SeeAllTicketsPage = () => {
  return (
    <section className='px-7 py-14 container mx-auto'>
        <Image src={`/seealltickets.jpg`} width={500} height={200} alt='' className='w-full rounded-2xl object-cover max-h-[577px]'/>
        <div  className='pb-3 pt-10 space-y-3'>
            <h3 className='text-gray-700 lg:text-4xl text-2xl font-medium'>All Bus Ticket</h3>
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/" className='text-citybus-primary font-medium'>City Bus Transport</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/buy-ticket" className='text-citybus-primary font-medium'>Buy Tickets</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className='text-gray-600'>All Tickets</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div className=''>
            {data.map((item, index) =>(
                <div key={index} className=''>
                    <h3 className='font-medium lg:text-3xl text-xl text-gray-500 py-8'>{item.title}</h3>
                    <div className='space-y-7'>
                    {item.children.map((child) => (
                    <Card key={child.name} className='py-0'>
                    <CardHeader>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction></CardAction>
                    </CardHeader>
                    <CardContent className='py-0'>
                        <div className='flex gap-4 not-sm:flex-wrap'>
                            <div style={{"backgroundColor": child.color}} className='sm:w-2/6 w-full rounded-2xl text-center min-h-30 text-white flex justify-center items-center'>
                                <h2 className='font-semibold lg:text-5xl text-3xl space-y-2'>
                                {child.name.split(" ")[0]}<br/>
                                <span className='font-normal'>{child.name.split(" ")[1]}</span>
                                </h2>
                            </div>
                            <Link href={``} className='sm:w-3/6 w-full'>
                            <div className='space-y-3 '>
                                <h3 className='lg:text-3xl text-xl font-medium text-gray-800'>{child.name}</h3>
                                <h4 className='lg:text-2xl font-semibold text-gray-700'>{child.description}</h4>
                                <div className='lg:text-lg text-sm text-gray-500 font-medium space-y-3'>
                                    <p>{child.paragraph1}</p>
                                    <p>{child.paragraph2}</p>
                                </div>
                            </div>
                            </Link>
                            <div className='sm:w-1/6 w-full flex sm:flex-col  justify-between sm:items-end'>
                                <Badge className='bg-citybus-primary text-white rounded-full sm:min-h-9  px-3'>
                                    <Star />
                                    <span>Save Ticket</span>
                                </Badge>
                                <ArrowRight className='sm:size-16 size-10' color='#667085'/>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        
                    </CardFooter>
                    </Card>

                    ))}

                    </div>

                </div>

            ))}

        </div>
    </section>
  )
}

export default SeeAllTicketsPage