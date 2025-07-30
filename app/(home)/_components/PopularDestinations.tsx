import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatNaira } from '@/lib/utils'
import { Star } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'


const data = [
    {
        image: "/bg1.jpg",
        heading: "Control Post",
        totalCost: "2000",
        rating: "4.0"
    },
    {
        image: "/bg2.jpg",
        heading: "IMSU Juction",
        totalCost: "1000",
        rating: "2.0"
    },
    {
        image: "/bg3.jpg",
        heading: "Control Post",
        totalCost: "2000",
        rating: "4.0"
    },
    {
        image: "/bg4.jpg",
        heading: "Warehouse Roundabout",
        totalCost: "2000",
        rating: "4.0"
    },
    {
        image: "/bg2.jpg",
        heading: "Wethedral Road",
        totalCost: "2000",
        rating: "4.0"
    },
]
const PopularDestinations = () => {
  return (
    <section className='container mx-auto mt-10 px-7 border-y border-solid lg:py-20'>
         <div className='py-7'>
            <h2 className='font-medium lg:text-3xl text-xl text-gray-700'>Popular Destinations</h2>
            <p className='text-gray-500 text-sm'>Choose from our currently operating bus routes</p>
        </div>
        <div>
            <Tabs defaultValue="all" className="">
            <TabsList className='gap-2 bg-transparent my-5'>
                <TabsTrigger value="all" className='rounded-2xl data-[state=inactive]:bg-muted py-4 px-6 data-[state=active]:bg-citybus-primary data-[state=active]:text-white'>All</TabsTrigger>
                <TabsTrigger value="places" className='rounded-2xl data-[state=inactive]:bg-muted py-4 px-6 data-[state=active]:bg-citybus-primary data-[state=active]:text-white'>Places</TabsTrigger>
                <TabsTrigger value="connections" className='rounded-2xl data-[state=inactive]:bg-muted py-4 px-6 data-[state=active]:bg-citybus-primary data-[state=active]:text-white'>Connections</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
                {data.map((item, index) => (
                <Card key={index} className='py-0'>
                    <CardHeader className={`h-40 bg-cover bg-center rounded-t-2xl`} style={{"backgroundImage": `url(${item.image})`}}>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction></CardAction>
                    </CardHeader>
                    <Link href={``}>
                    <CardContent className='space-y-4'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-gray-700 font-semibold'>{item.heading}</h3>
                                <span className='text-gray-400 text-sm'>Location</span>
                            </div>
                            <p className='font-semibold'>{formatNaira(item.totalCost)}</p>

                        </div>
                    <Separator />
                    </CardContent>
                    <CardFooter className='flex w-full items-center justify-between py-4'>
                        <span className='font-medium text-xs text-gray-400'>24/7 Services</span>
                        <h3 className='font-medium flex gap-1 items-center'>
                            <Star fill='#175CD3' color='#175CD3' className='size-3.5'/>
                            {item.rating}
                        </h3>
                    </CardFooter>
                    </Link>
                    </Card>

                ))}
            </TabsContent>
            <TabsContent value="places" className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
                 {data.slice(0,3).map((item, index) => (
                <Card key={index} className='py-0'>
                    <CardHeader className={`h-40 bg-cover bg-center rounded-t-2xl`} style={{"backgroundImage": `url(${item.image})`}}>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction></CardAction>
                    </CardHeader>
                    <Link href={``}>
                    <CardContent className='space-y-4'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-gray-700 font-semibold'>{item.heading}</h3>
                                <span className='text-gray-400 text-sm'>Location</span>
                            </div>
                            <p className='font-semibold'>{formatNaira(item.totalCost)}</p>

                        </div>
                    <Separator />
                    </CardContent>
                    <CardFooter className='flex w-full items-center justify-between py-4'>
                        <span className='font-medium text-xs text-gray-400'>24/7 Services</span>
                        <h3 className='font-medium flex gap-1 items-center'>
                            <Star fill='#175CD3' color='#175CD3' className='size-3.5'/>
                            {item.rating}
                        </h3>
                    </CardFooter>
                    </Link>
                    </Card>

                ))}
            </TabsContent>
            <TabsContent value="connections" className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>  
                {data.slice(2,4).map((item, index) => (
                <Card key={index} className='py-0'>
                    <CardHeader className={`h-40 bg-cover bg-center rounded-t-2xl`} style={{"backgroundImage": `url(${item.image})`}}>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction></CardAction>
                    </CardHeader>
                    <Link href={``}>
                    <CardContent className='space-y-4'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-gray-700 font-semibold'>{item.heading}</h3>
                                <span className='text-gray-400 text-sm'>Location</span>
                            </div>
                            <p className='font-semibold'>{formatNaira(item.totalCost)}</p>

                        </div>
                    <Separator />
                    </CardContent>
                    <CardFooter className='flex w-full items-center justify-between py-4'>
                        <span className='font-medium text-xs text-gray-400'>24/7 Services</span>
                        <h3 className='font-medium flex gap-1 items-center'>
                            <Star fill='#175CD3' color='#175CD3' className='size-3.5'/>
                            {item.rating}
                        </h3>
                    </CardFooter>
                    </Link>
                    </Card>

                ))}
                </TabsContent>
            </Tabs>
        </div>
    </section>
  )
}

export default PopularDestinations