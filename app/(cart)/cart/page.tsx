import { formatToNaira } from '@/lib/utils'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Clock5, CreditCard, Info, MapPin, Minus, Plus, ShoppingCart, X } from 'lucide-react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoTicketOutline } from 'react-icons/io5';

const tickets = [
    {
        title: "Single",
        description: "One-way journey ticket",
        validity: "Single journey",
        color: {
            from: "#400984",
            via: "#6C22C9",
            to: "#CAABF1"
        },

    },
    {
        title: "Single",
        description: "One-way journey ticket",
        validity: "Single journey",
        color: {
            from: "#400984",
            via: "#6C22C9",
            to: "#CAABF1"
        },

    },
    {
        title: "Daily",
        description: "Unlimited travel for one day",
        validity: "24 hours from first use",
         color: {
            from: "#197C10",
            via: "#39C013",
            to: "#A3F979"
        },

    },
    {
        title: "Daily",
        description: "Unlimited travel for one day",
        validity: "24 hours from first use",
         color: {
            from: "#197C10",
            via: "#39C013",
            to: "#A3F979"
        },

    },
    {
        title: "Weekly",
        description: "Unlimited travel for seven days",
        validity: "7 days from first use",
         color: {
            from: "#036583",
            via: "#0686AD",
            to: "#87DEF9"
        },

    },
    {
        title: "Weekly",
        description: "Unlimited travel for seven days",
        validity: "7 days from first use",
         color: {
            from: "#036583",
            via: "#0686AD",
            to: "#87DEF9"
        },

    },
]
const CartPage = () => {
  return (
    <section className='px-7 pb-14 space-y-10'>
        <div className='flex justify-between items-center py-10'>
            <h4 className='text-gray-700 lg:text-5xl text-3xl font-medium'>Cart</h4>
            <div className='text-gray-700 space-y-4'>
                <h3 className='lg:text-xl text-base font-medium text-right'>Total fare</h3>
                <h4 className='lg:text-4xl text-2xl font-semibold'>{formatToNaira(700)}</h4>
            </div>
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
                                        <div className='text-gray-600 lg:text-xl text-base font-medium flex flex-wrap items-center gap-2'>
                                            <MapPin className='size-6'/>
                                            Relief Market
                                            <HiOutlineArrowLongRight />
                                            Ahiara Junction
                                            <Clock5 />
                                            1h 45m
                                        </div>
                                        <div className='flex gap-2 text-gray-600 items-center lg:text-xl text-base font-medium'>
                                            <Info />
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
                                {/* <Separator orientation='vertical' /> */}
                                <div className='lg:w-1/3 w-full'>
                                    <div className='flex gap-2 items-center font-medium text-gray-600 w-fit ml-auto'>
                                        <span>Remove ticket from cart</span>
                                        <X />
                                    </div>
                                    <h3 className='text-gray-700 text-3xl font-medium text-right py-7'>{formatToNaira(1200)}</h3>
                                    <div className="grid grid-cols-3 gap-2 items-center border border-solid rounded-lg bg-white">
                                    <button
                                        type="button"
                                        // onClick={() => field.onChange(Math.max(1, field.value - 1))}
                                        className="cursor-pointer px-2 flex justify-center items-center"
                                    >
                                        <Minus className="" />
                                    </button>
                                    <span className="text-lg border-x border-solid min-h-14 flex justify-center items-center">1</span>
                                    <button
                                        type="button"
                                        // onClick={() => field.onChange(field.value + 1)}
                                        className="cursor-pointer rounded-sm px-2 flex justify-center items-center"
                                    >
                                        <Plus />
                                    </button>
                                    </div>

                                </div>
                            </CardContent>
                            <CardFooter>
                                
                            </CardFooter>
                            </Card>

                        ))}

                    </div>
                    <div className='flex items-center justify-between not-lg:flex-wrap border gap-4 rounded-lg border-solid bg-gray-50/50 p-4'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-medium text-gray-700'>Total fare: <span className='text-3xl'>{formatToNaira(1200)}</span></h3>
                            <div className='text-gray-500 lg:text-lg text-sm flex-wrap font-medium flex items-center gap-2'>
                                <CreditCard />
                                Secure Payment
                                <IoTicketOutline />
                                Instant Ticket
                                <Check />
                                Satisfaction Guaranteed
                            </div>

                        </div>
                          <Dialog>
                            <DialogTrigger className='bg-citybus-primary cursor-pointer w-full text-sm font-medium text-white min-h-14 rounded-lg sm:w-60'>Checkout</DialogTrigger>
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
    </section>
  )
}

export default CartPage