"use client"
import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    name: "Student",
    url: "",
    description: "Save more on school commutes across Owerri.",
    color: "#6941C6"
  },
  {
    name: "Day",
    url: "",
    description: "Travel as much as you like for one full day.",
    color: "#1D2939"
  },
  {
    name: "Monthly",
    url: "",
    description: "Unlimited rides, lower cost.",
    color: "#CB027B"
  },
]

const sliderImages = [
  "/buyaticket.jpg",
  "/buyaticket.jpg",
  "/buyaticket.jpg"
]

const BuyATicketHero = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center overflow-hidden'>
      {/* Image Slider */}
      <div className='w-full lg:w-1/2'>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className='w-full max-w-full overflow-hidden rounded-2xl'
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3]'>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover rounded-2xl'
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Ticket Options */}
      <div className='w-full lg:w-1/2 space-y-4'>
        <h3 className='text-2xl font-semibold text-gray-700'>
          Explore Ticket Options
        </h3>
        <h4 className='text-lg text-gray-700 font-medium'>
          Whether you're riding once or every day, find the best ticket for your journey.
        </h4>

        <div>
          {data.map((item, index) => (
            <Link key={index} href={item.url}>
              <Card style={{ backgroundColor: item.color }} className='rounded-2xl max-h-32 py-3 my-5'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex justify-between gap-3 items-center text-white'>
                    <div className='space-y-4'>
                      <h3 className='text-xl font-semibold'>
                        {item.name} <span className='text-lg font-medium'>Tickets</span>
                      </h3>
                      <p className='text-sm font-medium'>{item.description}</p>
                    </div>
                    <ArrowRight className='size-6' />
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </Link>
          ))}

          <Link href='/see-all-tickets' className='flex gap-3 justify-center py-5 items-center text-primary'>
            <h2>Explore All Tickets</h2>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BuyATicketHero
