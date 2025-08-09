import { Button } from '@/components/ui/button'
import { formatToNaira } from '@/lib/utils'
import { BusFront, Calendar, Check, ChevronDown, CreditCard, FileText, Info, MapPin, MessageSquareMore, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoTicketOutline } from 'react-icons/io5'
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
import { Badge } from '@/components/ui/badge'
import { IoMdClock } from "react-icons/io";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";

const tickets = [
    {
        title: "Single",
        description: "One-way journey ticket",
        validity: "1 single journey on any City bus",
        color: {
            from: "#400984",
            via: "#6C22C9",
            to: "#CAABF1"
        },

    },
    {
        title: "Daily",
        description: "Unlimited travel for one day",
        validity: "All CBT routes included",
         color: {
            from: "#197C10",
            via: "#39C013",
            to: "#A3F979"
        },

    },


]
const EmptyCartPage = () => {
  return (
    <section className='px-7 pb-14 space-y-10'>
            <div className='flex justify-between items-center py-10'>
                <h4 className='text-gray-700 lg:text-5xl text-3xl font-medium'>Cart</h4>
                <div className='text-gray-700 space-y-4'>
                    <h3 className='lg:text-xl text-base font-medium text-right'>Total fare</h3>
                    <h4 className='lg:text-4xl text-2xl font-semibold'>{formatToNaira(0)}</h4>
                </div>
            </div>
            <div className='bg-gray-50/50 lg:w-4/5 w-full py-10 rounded-lg flex flex-col justify-center items-center mx-auto'>
            <Image src={`/empty.gif`} width={200} height={200} alt='Empty cart' className='size-28'/>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h3 className='lg:text-4xl text-2xl'>Ready to travel around Owerri?</h3>
                <h4 className='text-gray-500 font-medium lg:text-xl text-sm max-w-lg text-center'>Choose from our convenient ticket options and start your journey with City Bus Transit</h4>
                <div className='space-x-6'>
                    <Link href={`/see-all-tickets`}>
                        <Button className='bg-citybus-primary text-white cursor-pointer min-h-14 lg:w-60'>Buy Tickets Now</Button>
                    </Link>
                    <Link href={``}>
                        <Button variant={"outline"} className='text-citybus-primary border border-solid border-citybus-primary cursor-pointer min-h-14 lg:w-60'>View Routes & Stops</Button>
                    </Link>
                </div>
            </div>

            </div>
            <div className='flex items-center justify-between not-lg:flex-wrap border gap-4 rounded-lg border-solid bg-gray-50/50 p-4'>
                <div className='space-y-4'>
                    <h3 className='text-xl font-medium text-gray-700'>Total fare: <span className='text-3xl'>{formatToNaira(0)}</span></h3>
                    <div className='text-gray-500 lg:text-lg text-sm flex-wrap font-medium flex items-center gap-2'>
                        <CreditCard />
                        Secure Payment
                        <IoTicketOutline />
                        Instant Ticket
                        <Check />
                        Satisfaction Guaranteed
                    </div>

                </div>
                    <Button disabled className='disabled:cursor-not-allowed bg-gray-300 w-full text-sm font-medium min-h-14 rounded-lg sm:w-60' variant={`secondary`}>Checkout</Button>

            </div>
            <div>
                <div className='space-y-4 py-7'>
                    <h2 className='text-3xl text-gray-700 font-medium'>Popular Ticket Options</h2>
                    <h3 className='text-gray-500 font-medium text-xl'>Get started with these commonly chosen tickets</h3>
                </div>
            <div className='space-y-4'>
                        {tickets.map((child, index) => (
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

                                    <div className='space-y-3'>
                                        <div className='text-3xl font-medium text-gray-800'>
                                            <span>{child.title} </span>
                                            <span>Ticket</span>
                                        </div>
                                        <p className='text-xl text-gray-500 font-medium'>{child.description}</p>
                                        {/* <div className='text-gray-600 lg:text-xl text-base font-medium flex flex-wrap items-center gap-2'>
                                            <MapPin className='size-6'/>
                                            Relief Market
                                            <HiOutlineArrowLongRight />
                                            Ahiara Junction
                                            <Clock5 />
                                            1h 45m
                                        </div> */}
                                        <div className='flex gap-2 text-gray-600 items-center lg:text-xl text-base font-medium'>
                                            <Calendar />
                                            Valid for: {child.validity}
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
                                        {/* <Dialog>
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
                                            </Dialog> */}
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
            <div>
                <div className='space-y-4 py-7'>
                    <h2 className='text-3xl text-gray-700 font-medium'>Popular Routes</h2>
                    <h3 className='text-gray-500 font-medium text-xl'>Frequently traveled destinations in Owerri</h3>
                </div>
                <div className='p-4 rounded-2xl border border-solid space-y-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <BusFront  className='size-7'/>
                            <h4 className='lg:text-3xl text-xl font-medium'>Bus 17</h4>
                        </div>
                        <Badge className='bg-violet-700 rounded-full px-6 text-white'>Popular</Badge>
                    </div>
                    <Separator />
                    <div className='flex justify-between gap-4 text-neutral-800'>
                        <div className='flex items-center gap-1'>
                            <MapPin className='size-6'/>
                            <h4 className='lg:text-2xl text-lg font-medium'>Shoprite Center</h4>
                        </div>
                        <HiOutlineArrowLongRight size={40}/>
                        <h4 className='lg:text-2xl text-lg '>Control Post</h4>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-neutral-800 flex items-center font-medium  text-xl gap-1'>
                            <IoMdClock />
                            <h4 className='text-neutral-800 lg:text-xl text-sm'>12:30AM</h4>
                        </div>
                        <h4 className='lg:text-4xl text-2xl font-medium text-neutral-950'>{formatToNaira(700)}</h4>
                    </div>
                </div>
            </div>
            <div className='bg-blue-50/50 rounded-2xl border border-blue-200 p-4'>
            <div className='flex gap-4'>
                
                <Info className='bg-blue-100 text-blue-700 rounded-full p-2 size-10'/>
                <div className='space-y-3 flex-1'>
                    <h2 className='lg:text-2xl text-lg font-medium'>Need help choosing?</h2>
                    <h3 className='text-gray-500 lg:text-lg text-sm'>Not sure which ticket is right for you? We're here to help!</h3>
                    <div className='flex gap-x-2 gap-y-4 not-lg:flex-col lg:items-center'>
                        <div className='flex gap-1 items-center'>
                            <MessageSquareMore />
                            <span className='text-blue-800'>Chat with Support</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <MdOutlinePhone />
                            <span className='text-blue-800'>Call us: +234 803 123 4567</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FileText />
                            <span className='text-blue-800'>View ticket timetable</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>
</section>
  )
}

export default EmptyCartPage