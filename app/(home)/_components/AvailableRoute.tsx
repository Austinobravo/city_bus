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
import { ArrowRight, ChevronLeft, ChevronRight, Clock5, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { formatNaira } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const data = [
  {
    from: "Douglas Road",
    to: "Control Post",
    totalSeats: "8",
    totalCost: "700",
    url: ""
  },
  {
    from: "Wetheral Road",
    to: "Control Post",
    totalSeats: "2",
    totalCost: "200",
    url: ""
  },
  {
    from: "Ikenegbu",
    to: "Control Post",
    totalSeats: "8",
    totalCost: "1000",
    url: ""
  },
  {
    from: "Douglas Road",
    to: "World Bank Jun..",
    totalSeats: "8",
    totalCost: "700",
    url: ""
  },
]
const AvailableRoute = () => {
  return (
    <section className='container px-7 mx-auto'>
        <div className='flex items-end justify-between py-5 not-sm:flex-wrap gap-5'>
            <div>
                <h2 className='font-medium lg:text-3xl text-xl text-gray-700'>Available Routes</h2>
                <p className='text-gray-500 text-sm'>Choose from our currently operating bus routes</p>
            </div>
            <div className='text-lg flex items-center gap-1'>
                <h2 className='underline underline-offset-4'>View all</h2>
                <div className='hover:bg-gray-200 bg-gray-100 rounded-full p-2 cursor-pointer'>
                  <ChevronLeft />
                </div>
                <div className='hover:bg-gray-200 bg-gray-100 rounded-full p-2 ml-3 cursor-pointer'>
                  <ChevronRight />
                </div>
            </div>
        </div>
        <div className='overflow-x-hidden'>
          <div className='overflow-x-scroll flex gap-10 no-scrollbar'>
          {data.map((item, index) => (
          <Card key={index} className='bg-gray-50 rounded-2xl shrink-0 min-w-sm'>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <div className='flex justify-between gap-3'>
                <div className='flex gap-2 font-medium'>
                  <h2>{item.to}</h2>
                  <ArrowRight />
                  <h2>{item.from}</h2>
                </div>
                <Badge className='bg-orange-50 text-orange-600 rounded-full'>
                  Limited seats
                </Badge>
              </div>
              <div className='flex gap-2'>
                <div className='flex gap-1 items-center'>
                  <Clock5 className='size-5'/>
                  <span className='text-gray-500 text-sm'>1h 45m</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <Users className='size-5' />
                  <span className='text-gray-500 text-sm'>{item.totalSeats} seats left</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className=''>
              <div className='flex justify-between w-full'>
                <div>
                  <h3 className='text-xl font-medium'>{formatNaira(item.totalCost)}</h3>
                  <h4 className='text-xs text-gray-600'>per passenger</h4>
                </div>
                <Link href={item.url} className=''>
                  <Button className='bg-citybus-primary rounded-full cursor-pointer'>Book Now</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>

          ))}

          </div>

        </div>
    </section>
  )
}

export default AvailableRoute