import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
import { Bell, ChevronDown, Info, MapPin, Star } from 'lucide-react'
import  ServicesForm  from './_components/ServicesForm'
import { Switch } from '@/components/ui/switch'
import { IoMdClock } from 'react-icons/io'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TbInfoTriangle } from "react-icons/tb";

const ServiceUpdatePage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
        <Image src={`/service.jpg`} width={500} height={200} alt='Service Update' className='rounded-2xl w-full object-cover max-h-[577px]' />
        <div className='py-4 space-y-2'>
            <h2 className='text-3xl font-medium text-gray-700'>Service Updates</h2>
            <h3 className='text-xl'>Stay informed about any changes to your bus schedule, ticket prices, or service routes. We’ll also notify you about planned roadworks or disruptions that may affect your trip.<br/> Save your favourite stops or routes to get quick access, and get live updates directly from City Bus.</h3>
        </div>
        <div className='bg-gray-50/50 border border-gray-200 rounded-lg p-5 space-y-3 overflow-hidden'>
            <div className='flex justify-between gap-2 items-center overflow-x-auto'>
                <Tabs defaultValue="all" className="w-[400px]">
                <TabsList className='bg-transparent'>
                    <TabsTrigger value="all" className='lg:text-xl text-sm data-[state=active]:bg-blue-800 group text-gray-500 data-[state=active]:text-white rounded-t-2xl rounded-b-none py-6 px-4'>All Updates <Badge className='group-data-[state=active]:bg-blue-500 bg-blue-100 text-blue-300 group-data-[state=active]:text-white rounded-full'>2</Badge></TabsTrigger>
                    <TabsTrigger value="favorite" className='lg:text-xl text-sm data-[state=active]:bg-blue-800 group text-gray-500 data-[state=active]:text-white rounded-t-2xl rounded-b-none py-6 px-4'>Favorites  <Badge className='group-data-[state=active]:bg-blue-500 bg-blue-100 text-blue-300 group-data-[state=active]:text-white rounded-full'>2</Badge></TabsTrigger>
                </TabsList>
                <TabsContent value="all"></TabsContent>
                <TabsContent value="favorite"></TabsContent>
                </Tabs>
                <DropdownMenu>
                <DropdownMenuTrigger className='group flex items-center gap-2 lg:text-xl text-sm text-blue-800'><MapPin className='size-6'/> All locations <ChevronDown className='group-data-[state=open]:rotate-180 size-6'/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <h2 className='text-xl font-medium'>Search Updates</h2>
            <div>
                <ServicesForm />
            </div>
        </div>
        <div className='bg-blue-50/50 rounded-2xl flex flex-wrap gap-2 justify-between items-center p-4'>
            <div className='flex items-center gap-2'>
                <div className='w-1/10'>
                    <Bell className='text-blue-800 size-6'/>
                </div>
                <div className='space-y-3 w-9/10'>
                    <h3 className='text-blue-900 text-xl font-medium'>Stay Updated</h3>
                    <h4 className='font-medium text-blue-700'>Get notifications about updates for your favourite routes</h4>
                </div>

            </div>
            <Switch className='cursor-pointer'/>


        </div>
        <div className='space-y-3'>
            <h2 className='text-3xl font-medium text-gray-700'>All Service Updates</h2>
            <h3 className='text-xl'>5 updates found</h3>
            <div className='py-4 divide divide-y-2 border border-solid rounded-lg'>
                <div className='p-4 space-y-3'>
                    <div className='p-4 flex justify-between flex-wrap gap-2'>
                        <div className='flex gap-4'>
                            <div className='border border-amber-200 px-4 flex justify-center items-center rounded-lg bg-amber-50'>
                                <Info className='text-amber-600'/>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='lg:text-2xl text-lg text-gray-700'>Wethedral Road Construction Work</h3>
                                <div className='font-medium text-gray-500 lg:text-lg text-sm flex gap-2 items-center'>
                                    <MapPin className='size-3'/>
                                    <span>Relief Market</span>
                                    <IoMdClock className='size-3'/>
                                    <span>Ongoing</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Star />
                            <Badge className='bg-amber-100 border-amber-200 text-amber-700 rounded-full'>Low Priority</Badge>
                        </div>
                    </div>
                    <Separator />
                    <span className='text-neutral-800 text-xl font-medium'>Road repairs ongoing from Assumpta Cathedral to World Bank junction. Expect 15-20 minute delays.</span>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionContent className="bg-gray-200 border p-4 rounded-2xl space-y-3">
                            <h2 className='text-gray-500 text-lg'>Additional Information</h2>
                            <h3 className='text-gray-500 text-sm'>This update affects multiple.</h3>
                            <div className='text-gray-500 gap-2 flex flex-col'>
                                <span className="font-medium text-gray-600">Expected Duration: <span>5 days remaining</span></span>
                                <span className="font-medium text-gray-600">Alternative Routes: <span>Contact Customer Service</span></span>
                            </div>
                        
                        </AccordionContent>
                        <AccordionTrigger className='group flex flex-wrap gap-4 hover:no-underline'>
                            <div className="flex gap-x-2 gap-y-4 items-center flex-wrap">
                                <h3 className="text-sm font-medium text-gray-700">Affected Routes: </h3>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Today</span>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Tomorrow</span>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">This Week</span>
                            </div>
                            <span className='group-data-[state=open]:hidden ml-auto w-fit text-sm cursor-pointer'>Read More</span> <span className='group-data-[state=open]:block hidden ml-auto w-fit'>Show Less</span></AccordionTrigger>
                    </AccordionItem>
                    </Accordion>

                </div>
                <div className='p-4 space-y-3'>
                    <div className='p-4 flex justify-between flex-wrap gap-2'>
                        <div className='flex gap-4'>
                            <div className='border border-red-200 px-4 flex justify-center items-center rounded-lg bg-red-50'>
                                {/* <Info className='text-amber-600'/> */}
                                <TbInfoTriangle className='text-red-600 size-6' />
                            </div>
                            <div className='space-y-2'>
                                <h3 className='lg:text-2xl text-lg text-gray-700'>Wethedral Road Construction Work</h3>
                                <div className='font-medium text-gray-500 lg:text-lg text-sm flex gap-2 items-center'>
                                    <MapPin className='size-3'/>
                                    <span>Relief Market</span>
                                    <IoMdClock className='size-3'/>
                                    <span>Ongoing</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Star />
                            <Badge className='bg-red-100 border-red-200 text-red-700 rounded-full'>High Priority</Badge>
                        </div>
                    </div>
                    <Separator />
                    <span className='text-neutral-800 text-xl font-medium'>Road repairs ongoing from Assumpta Cathedral to World Bank junction. Expect 15-20 minute delays.</span>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionContent className="bg-gray-200 border p-4 rounded-2xl space-y-3">
                            <h2 className='text-gray-500 text-lg'>Additional Information</h2>
                            <h3 className='text-gray-500 text-sm'>This update affects multiple.</h3>
                            <div className='text-gray-500 gap-2 flex flex-col'>
                                <span className="font-medium text-gray-600">Expected Duration: <span>5 days remaining</span></span>
                                <span className="font-medium text-gray-600">Alternative Routes: <span>Contact Customer Service</span></span>
                            </div>
                        
                        </AccordionContent>
                        <AccordionTrigger className='group flex flex-wrap gap-4 hover:no-underline'>
                            <div className="flex gap-x-2 gap-y-4 items-center flex-wrap">
                                <h3 className="text-sm font-medium text-gray-700">Affected Routes: </h3>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Today</span>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Tomorrow</span>
                                <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">This Week</span>
                            </div>
                            <span className='group-data-[state=open]:hidden ml-auto w-fit text-sm cursor-pointer'>Read More</span> <span className='group-data-[state=open]:block hidden ml-auto w-fit'>Show Less</span></AccordionTrigger>
                    </AccordionItem>
                    </Accordion>

                </div>

            </div>

        </div>
    </section>
  )
}

export default ServiceUpdatePage