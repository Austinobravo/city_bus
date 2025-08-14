import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BriefcaseConveyorBelt, ChevronRight, House, Info } from 'lucide-react'

const FavoritePage = () => {
  return (
    <section className='px-7 py-14 space-y-20'>
         <div>
                    <Tabs defaultValue="location" className="flex lg:!flex-row flex-col gap-14">
                    <TabsList className='flex-col !h-full bg-transparent gap-3 w-full lg:w-2/6'>
                        <h4 className='text-4xl text-gray-700 font-medium text-left '>Favorites</h4>
                        <TabsTrigger value="location" className='cursor-pointer text-gray-500 w-full !shadow-none font-medium text-xl data-[state=active]:text-white bg-gray-50 !justify-start p-4 data-[state=active]:bg-citybus-primary'>Saved Locations</TabsTrigger>
                        <TabsTrigger value="journey" className='cursor-pointer text-gray-500 w-full data-[state=active]:bg-citybus-primary data-[state=active]:text-white !shadow-none font-medium text-xl bg-gray-50 !justify-start p-4'>Saved Journey</TabsTrigger>
                        <TabsTrigger value="ticket" className='cursor-pointer text-gray-500 w-full data-[state=active]:bg-citybus-primary data-[state=active]:text-white !shadow-none font-medium text-xl bg-gray-50 !justify-start p-4'>Saved Tickets</TabsTrigger>
                       
                    </TabsList>
                    <div className='w-full lg:w-4/6 ' >
                      <TabsContent value="location" className='text-gray-500 space-y-4'>
                        <h3 className='text-gray-700 font-semibold text-2xl '>My Favorites</h3>
                        <p>
                          Start by saving your favorite routes, bus stops, or schedules to easily manage your favourites and get the latest service updates from City Bus.
                          </p>
                          <p>You can also manage your favourites on the <Link href={``} className='text-citybus-primary font-medium'>City Bus Transit App.</Link> </p>
                            <div className='bg-blue-50/50 rounded-2xl border border-blue-200 p-4'>
                            <div className='flex gap-4'>
                                
                                <Info className='bg-blue-100 text-blue-700 rounded-full p-2 size-10'/>
                                <div className='space-y-3 flex-1'>
                                    <h2 className='lg:text-2xl text-lg font-medium'>Please note</h2>
                                    <h3 className='text-gray-500 lg:text-lg text-sm'>Email alerts for service updates can only be set for buses and bus stops</h3>
                                </div>
                            </div>
                
                            </div>
                            <div className='flex text-gray-600 gap-4 items-center'>
                                <h4>Service updates will be sent to:</h4>
                                <h4>yourmail@gmail.com</h4>
                                <Button className='bg-transparent hover:bg-gray-50 cursor-pointer text-citybus-primary font-medium shadow-none flex items-center'>Change email <ChevronRight /></Button>
                            </div>
                            <div className='border-y border-solid py-7 flex w-full gap-4'>
                                <Button className='text-gray-700 lg:w-1/2 text-xl w-full font-medium flex gap-2 items-center justify-between px-4 py-6' variant={"secondary"}><span className='gap-2 items-center flex'><House /> Save your home</span> <ChevronRight /></Button>
                                <Button className='text-gray-700 lg:w-1/2 text-xl w-full font-medium flex gap-2 items-center justify-between px-4 py-6' variant={"secondary"}><span className='gap-2 items-center flex'><BriefcaseConveyorBelt /> Save your work</span> <ChevronRight /></Button>
                            </div>
                          
                      </TabsContent>
                      <TabsContent value="mobility" className='text-gray-500 space-y-4'>
                        <h3 className='text-gray-800 font-semibold text-lg '>Can I bring my assistance animal on the bus?</h3>
                        <p>
                          We’re committed to making travel easy and accessible for everyone — including those who rely on assistance animals. 
                          </p>
                          <p>While most assistance animals are dogs, we understand that support can come from other recognised animals as well. So when we mention dogs below, the same applies to all officially recognised assistance animals.</p>
                          <p>All recognised assistance animals can travel free of charge on all our buses. This includes: </p>
                          <ul className='list-inside list-disc'>
                            <li>Guide dogs for people who are blind or visually impaired (including guide dogs in training with registered puppy walkers carrying ID)</li>
                            <li>Hearing dogs for people who are deaf or hard of hearing</li>
                            <li> Support dogs that assist people with physical disabilities</li>
                            <li>Canine Partners that help individuals maintain their independence</li>
                          </ul>  
                          <h4>If you're partially sighted or need help identifying your stop, please don’t hesitate to let your driver know — we're here to help.</h4>
                      </TabsContent>

                    </div>
                    </Tabs>
                </div>
    </section>
  )
}

export default FavoritePage