import { Button } from '@/components/ui/button';
import { ArrowRight, BusFront, Calendar, ChevronDown, ShoppingCart, User } from 'lucide-react';
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';
import { formatToNaira } from '@/lib/utils';

const tickets = [
    {
        title: "Single and Return Tickets",
        children: [
            {
                title: "Single",
                color: {
                    from: "#400984",
                    via: "#6C22C9",
                    to: "#CAABF1"
                },

            },
            {
                title: "Single",
                color: {
                    from: "#400984",
                    via: "#6C22C9",
                    to: "#CAABF1"
                },

            },
        ]
    },
    {
        title: "Day Tickets",
        children: [
            {
                title: "Daily",
                 color: {
                    from: "#197C10",
                    via: "#39C013",
                    to: "#A3F979"
                },

            },
            {
                title: "Daily",
                 color: {
                    from: "#197C10",
                    via: "#39C013",
                    to: "#A3F979"
                },

            },
        ]
    },
    {
        title: "Weekly Tickets",
        children: [
            {
                title: "Weekly",
                 color: {
                    from: "#036583",
                    via: "#0686AD",
                    to: "#87DEF9"
                },

            },
            {
                title: "Weekly",
                 color: {
                    from: "#036583",
                    via: "#0686AD",
                    to: "#87DEF9"
                },

            },
        ]
    },
]

const TicketResultPage = () => {
  return (
    <section className='px-7 py-14'>
        <div>
            <h3 className='lg:text-4xl text-2xl py-4 font-medium'>Ticket Results</h3>
            <div className='overflow-x-hidden'>
                <div className="flex items-center justify-between bg-gray-50 gap-4 border border-solid rounded-lg shadow-lg px-4 overflow-x-auto py-3">
                    <div className='font-medium space-y-2 basis-1/4'>
                        <h3 className='text-gray-700 text-xl'>Douglas Road</h3>
                        <p>Leaving in 10mins</p>
                    </div>
                    <div className='flex gap-3 items-center basis-1/4'>
                        <hr className='border border-black w-16 border-solid'/>
                        <div className='flex flex-col items-center gap-1'>
                            <BusFront />
                            <span className='text-xs font-medium text-gray-500'>Journey time</span>
                            <time className='text-lg text-gray-700 font-medium'>2hrs 30mins</time>
                        </div>
                        <HiOutlineArrowLongRight className='' size={50}/>
                        
                    </div>
                    <div className='font-medium space-y-2 basis-1/4'>
                        <h3 className='text-gray-700 text-xl'>Control Post</h3>
                        <p>Leaving in 10mins</p>
                    </div>
                    <div className='basis-1/4 flex items-center gap-2'>
                        <User size={17}/>
                        <span className='text-xl font-medium text-gray-700'>1 passenger</span>
                        <Button className='bg-citybus-primary px-10'>Edit</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-10'>
            <h3 className='py-4 font-medium lg:text-2xl text-lg text-gray-700'>Suggested Routes</h3>
            <div>
                <div className="flex items-center justify-between bg-gray-50/50 gap-4 border border-solid rounded-lg shadow-lg px-4 overflow-x-auto py-3">
                    <div className='flex gap-2 items-center'>
                        <BusFront className='text-gray-600 size-14'/>
                        <div className='text-gray-700'>
                            <h4 className='lg:text-3xl text-xl font-medium'>Bus 7A</h4>
                            <span className='flex lg:text-xl text-sm items-center gap-2'>Douglas Bus Stop 
                                <HiOutlineArrowLongRight size={50} />
                                Control Junction
                                -Departs: 3:40 PM | Arrives: 4:20 PM</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500 font-medium lg:text-base text-sm'>
                        <span>See more suggestions</span>
                        <ChevronDown />
                    </div>

                </div>

            </div>
        </div>
        <div>
            {tickets.map((ticket) =>(
                <div key={ticket.title}>
                    <div className='flex items-center text-gray-700 text-2xl font-medium pb-4 pt-8 gap-1'>
                        <IoTicketOutline />
                        <span>{ticket.title}</span>
                    </div>
                    <div className='space-y-4'>
                        {ticket.children.map((child, index) => (
                            <Card key={`${child.title}-${index}`} className='py-0 bg-gray-50/50'>
                            <CardHeader>
                                <CardTitle></CardTitle>
                                <CardDescription></CardDescription>
                                <CardAction></CardAction>
                            </CardHeader>
                            <CardContent className='flex not-lg:flex-wrap gap-4 space-x-10 items-center py-0'>
                                <div className='flex lg:w-2/3 w-full not-lg:flex-wrap gap-4 lg:items-center'>
                                    <div className='rounded-2xl text-center min-h-60 min-w-60 px-5 text-white flex flex-col justify-center items-center text-5xl py-6 ' style={{"backgroundImage": `linear-gradient(to top right, ${child.color.from}, ${child.color.via}, ${child.color.to})`, }} >
                                    <span className='font-semibold'>{child.title}</span>
                                    <span>Ticket</span>
                                    </div>

                                    <div className='space-y-2'>
                                        <div className='text-3xl font-medium text-gray-800'>
                                            <span>{child.title} </span>
                                            <span>Ticket</span>
                                        </div>
                                        <p className='text-xl text-gray-500 font-medium'>Unlimited Travel, One Flat Fare</p>
                                        <div className='text-gray-600 lg:text-xl text-base font-medium flex gap-2'>
                                            <Calendar className='size-6'/>
                                            1 single journey on any city bus
                                        </div>
                                        <Dialog>
                                        <DialogTrigger className='text-blue-700 cursor-pointer text-sm font-medium text-left lg:text-center'>View terms and conditions for ticket</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                        </Dialog>
                                        
                                    </div>

                                </div>
                                <Separator orientation='vertical' />
                                <div className='lg:w-1/3 w-full'>
                                    <h3 className='text-gray-700 font-semibold lg:text-3xl text-xl'>Paper Ticket - on bus</h3>
                                    <h4 className='text-gray-600 font-medium'>Available to buy on the bus</h4>
                                    <div className='mt-5 space-y-3 flex flex-col'>
                                        <span className='text-sm font-medium mt-6'>Price</span>
                                        <p className='text-3xl font-medium text-gray-900'>{formatToNaira(700)}</p>
                                        <Button className='text-citybus-primary min-h-13 cursor-pointer border-citybus-primary text-lg' variant={"outline"}><ShoppingCart /> Add to cart</Button>
                                        <Dialog>
                                            <DialogTrigger className='min-h-13 bg-citybus-primary rounded-lg text-lg cursor-pointer text-white'>Buy now</DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                            </Dialog>
                                        <Button className='text-citybus-primary text-lg min-h-13 cursor-pointer' variant={"outline"}>More details <ChevronDown /></Button>

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

export default TicketResultPage