import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

const AccessibilityPage = () => {
  return (
    <section className='px-7 py-14 space-y-20'>
                <div className='text-center space-y-2'>
                    <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Bus Accessibility</h2>
                    <h3 className='text-gray-600 lg:text-lg text-sm'>We’re committed to making every journey comfortable and accessible for all.</h3>
                </div>
                
                <div>
                    <Tabs defaultValue="assistance" className="flex lg:!flex-row flex-col gap-14">
                    <TabsList className='flex-col !h-full bg-transparent gap-3 w-full lg:w-2/6'>
                        <h4 className='bg-citybus-primary py-4 px-4 rounded-lg text-white w-full'>How can we help you today?</h4>
                        <TabsTrigger value="assistance" className='cursor-pointer text-gray-500 w-full !shadow-none font-medium text-lg !justify-start px-4'>Assistance Animals</TabsTrigger>
                        <TabsTrigger value="mobility" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Mobility Scooters</TabsTrigger>
                        <TabsTrigger value="wheelchair" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Wheelchair Access</TabsTrigger>
                        <TabsTrigger value="buggies" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Buggies or Strollers</TabsTrigger>
                        <TabsTrigger value="bikes" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Taking Folding Bikes</TabsTrigger>
                        <TabsTrigger value="buses" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Low-Floor Buses</TabsTrigger>
                        <TabsTrigger value="traveling" className='cursor-pointer text-gray-500 w-full data-[state=active]:text-citybus-primary !shadow-none font-medium text-lg !justify-start px-4'>Extra Help While Traveling</TabsTrigger>
                    </TabsList>
                    <div className='w-full lg:w-4/6 bg-gray-50 rounded-lg p-4' >
                      <TabsContent value="assistance" className='text-gray-500 space-y-4'>
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
                <div className='ml-auto lg:w-4/6 lg:pl-10'>
                <div className='flex justify-between not-sm:flex-wrap gap-4 items-center bg-gray-50 p-4 shadow rounded-lg'>
                  <div className='space-y-2'>
                          <h2 className='text-gray-900 font-medium text-xl'>Still have questions?</h2>
                          <h3 className='font-medium text-gray-500'>Please connect with our support team, we're happy to help!</h3>
                      </div>
                      <Button variant={'outline'} className='min-h-14'>Contact Support</Button>
                  </div>
                  
                </div>
    </section>
  )
}

export default AccessibilityPage