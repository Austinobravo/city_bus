import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Briefcase, CircleCheck, Gift, Star, Users, Zap } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { IoMdClock } from 'react-icons/io'
import { formatToNaira } from '@/lib/utils'
import { Button } from '@/components/ui/button'


const data = [
    {
        icon: Users,
        title: "Student Flex Pass",
        description: "Unlimited rides for university students across all Owerri routes",
        requirement: "Valid Student ID card",
        color: "#175CD3",
        bgColor: "#EFF8FF"
    },
    {
        icon: Gift,
        title: "Market Day Special",
        description: "Return trips to Eke Onunwa, Relief Market & Alaba Market",
        requirement: "Verify your phone number",
        color: "#C11574",
        bgColor: "#FDF2FA"
    },
    {
        icon: Zap,
        title: "Weekend Explorer",
        description: "Unlimited weekend travel to cultural sites and recreation centers",
        requirement: "Valid only on Saturday & Sunday",
         color: "#C11574",
        bgColor: "#FDF2FA"
    },
    {
        icon: Briefcase,
        title: "Corporate Package",
        description: "Unlimited rides for university students across all Owerri routes",
        requirement: "Complete 3 paid rides in current week",
        color: "#C4320A",
        bgColor: "#FFF6ED"
    },
]
const PromosAndOffersPage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
        <div className='relative rounded-2xl w-full object-cover -z-10 min-h-[577px]' style={{"backgroundImage": "url(/promos.png)"}}>
            {/* <Image src={`/promos.png`} width={500} height={200} alt='Promos' className='' /> */}
            <p className='lg:text-3xl text-xl text-white font-medium absolute lg:left-10 lg:bottom-10 left-5 bottom-5'>Promos & Offer</p>
        </div>
            <div className='py-4 space-y-2'>
                <h2 className='text-3xl font-medium text-gray-700'>Promos & Offers</h2>
                <h3 className='text-xl'>Discover amazing deals and save money on your daily commute around Owerri. From student discounts to festival specials, we've got something for everyone.</h3>
            </div>
            <Tabs defaultValue="offers" className="overflow-x-hidden">
                <div className='overflow-x-scroll no-scrollbar'>
                <TabsList className='bg-transparent py-7'>
                    <TabsTrigger value="offers" className='lg:text-xl text-sm data-[state=active]:bg-citybus-primary group text-gray-600 data-[state=active]:text-white rounded-lg py-6 px-4'>Featured Offers </TabsTrigger>
                    <TabsTrigger value="specials" className='lg:text-xl text-sm data-[state=active]:bg-citybus-primary group text-gray-600 data-[state=active]:text-white rounded-lg py-6 px-4'>Routes Specials  </TabsTrigger>
                    <TabsTrigger value="programs" className='lg:text-xl text-sm data-[state=active]:bg-citybus-primary group text-gray-600 data-[state=active]:text-white rounded-lg py-6 px-4'>Community Programs  </TabsTrigger>
                </TabsList>

                </div>
                <TabsContent value="all"></TabsContent>
                <TabsContent value="favorite"></TabsContent>
                </Tabs>
            <div className='py-4 space-y-2'>
                <h2 className='text-3xl font-medium text-gray-700'>Featured Offers</h2>
                <h3 className='text-xl'>Limited-time deals and popular packages designed for frequent travelers in Owerri</h3>
            </div>
            <div className='space-y-3'>
                {data.map((item, index) => (
                       <div key={index} className='p-4 space-y-3 border border-solid bg-gray-50/50 rounded-lg'>
                                        <div className='p-4 flex justify-between flex-wrap gap-2'>
                                            <div className='flex gap-4'>
                                                <div className='border px-4 flex justify-center items-center rounded-lg ' style={{"backgroundColor": item.bgColor, "color": item.color, "border": `1px solid ${item.color}`}}>
                                                    {/* <Info className='text-amber-600'/> */}
                                                    <item.icon />
                                                </div>
                                                <div className='space-y-2'>
                                                    <h3 className='lg:text-2xl text-lg text-gray-700'>{item.title}</h3>
                                                    <div className='font-medium text-gray-500 lg:text-lg text-sm flex gap-2 items-center'>
                                                        <IoMdClock className='size-3'/>
                                                        <span>Until August 15, 2025</span>
                                                        <Badge style={{"backgroundColor": item.bgColor, "color": item.color, "border": `1px solid ${item.color}`}} className='rounded-2xl'>50% Off</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 items-center'>
                                                <Badge className='bg-violet-100 text-violet-700 rounded-full min-h-8 px-5'>Popular</Badge>
                                                <Badge className='bg-citybus-primary text-white rounded-full min-h-8 px-5'><Star /> Save</Badge>
                                            </div>
                                        </div>
                                        <Separator />
                                        <span className='text-neutral-800 text-xl font-medium'>{item.description}</span>
                                        <div className='flex justify-between not-sm:flex-wrap gap-2 mt-5'>
                                            <div className='mt-auto'>
                                                <h3 className='line-through text-gray-500 font-medium lg:text-base text-sm'>{formatToNaira(700)}</h3>
                                                <h3 className='text-gray-700 text-2xl'>{formatToNaira(700)}</h3>
                                                <h3 className='lg:text-base text-sm text-green-500'>save {formatToNaira(700)}</h3>
                                            </div>
                                            <div className='space-y-3'>
                                                <div className='text-citybus-primary flex items-center gap-2 w-fit sm:ml-auto text-xl font-medium'>
                                                    <CircleCheck />
                                                    <h4>What You Need:</h4>
                                                </div>
                                                <ul className='list-inside list-disc sm:text-right font-medium text-gray-500 pb-2'>
                                                    <li>{item.requirement}</li>
                                                </ul>
                                                <div className='flex gap-3 flex-wrap'>
                                                    <div className='space-y-4'>
                                                        <h5 className='sm:text-right text-gray-500 text-sm'>VALID LOCATIONS</h5>
                                                        <div>
                                                            <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Route 1</span>
                                                            <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Route 5</span>
                                                            <span className="bg-blue-50 rounded-lg font-medium text-blue-700 px-4 py-2">Route 8</span>
                                                        </div>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <h5 className='sm:text-right text-gray-500'>Valid for</h5>
                                                        <h6 className='lg:text-2xl text-lg text-gray-700 font-medium'>1 month</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 items-center w-full not-sm:flex-wrap'>
                                            <Button className='w-full sm:w-1/2 cursor-pointer bg-citybus-primary text-white min-h-14'>Claim offer <ArrowRight /></Button>
                                            <Button className='w-full sm:w-1/2 cursor-pointer not-first-of-type:text-citybus-primary border border-citybus-primary min-h-14' variant={"outline"}>Share </Button>
                                        </div>

                                    </div>
                ))}
            </div>
    </section>
  )
}

export default PromosAndOffersPage