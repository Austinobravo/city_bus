import React from 'react'
import { FaqForm } from './_components/FaqForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionAndAnswers = [
    {
        question: "What do I do if I've lost something on a bus?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
    {
        question: "How do I work out which bus I need?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
    {
        question: "How do I cancel or change a bus ticket bought online?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
    {
        question: "What is the limit for contactless payment?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
    {
        question: "How do I know if my bus is delayed?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
    {
        question: "What types of payment methods do you support?",
        answer: "Finding the bus you need has never been easier with our 'Plan your journey' tool. You'll find this on the homepage or by selecting 'Plan your Journey' at the top of this page. Or if you're on the app you can tap 'plan your journey' on the menu screen."
    },
]
const FaqPage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
        <div className='sm:w-3/4 ml-auto space-y-2'>
            <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Frequently Asked Questions</h2>
            <h3 className='text-gray-600 lg:text-lg text-sm'>We compiled a list of answers to address your most pressing questions regarding our Services.</h3>
            <FaqForm />
        </div>
        <div className='flex gap-20 not-sm:flex-wrap '>
            <div className='mt-20'>
            <Tabs defaultValue="popular" className="lg:w-1/4 w-full">
            <TabsList className='bg-transparent flex-col gap-3 text-lg font-medium'>
                <TabsTrigger value="popular" className='data-[state=active]:text-gray-800 data-[state=active]:bg-gray-100 rounded-sm p-4 text-gray-500 w-full cursor-pointer'>Most popular question</TabsTrigger>
                <TabsTrigger value="payment" className='data-[state=active]:text-gray-800 data-[state=active]:bg-gray-100 rounded-sm p-4 text-gray-500 w-full cursor-pointer'>About payments</TabsTrigger>
                <TabsTrigger value="refund" className='data-[state=active]:text-gray-800 data-[state=active]:bg-gray-100 rounded-sm p-4 text-gray-500 w-full cursor-pointer'>Refunds and Cancellations</TabsTrigger>
                <TabsTrigger value="ticket" className='data-[state=active]:text-gray-800 data-[state=active]:bg-gray-100 rounded-sm p-4 text-gray-500 w-full cursor-pointer'>Tickets</TabsTrigger>
            </TabsList>
            <TabsContent value="popular" className='border'>
                
            </TabsContent>
            <TabsContent value="pament">Change your password here.</TabsContent>
            <TabsContent value="pament">Change your password here.</TabsContent>
            <TabsContent value="pament">Change your password here.</TabsContent>
            </Tabs>

            </div>


        <div className='lg:w-3/4 w-full '>
                <Accordion type="single" collapsible className=''>
            {questionAndAnswers.map((item) => (
                <AccordionItem key={item.question} value={item.question} className='data-[state=open]:bg-gray-50 py-4 px-2'>
                    <AccordionTrigger className='!no-underline cursor-pointer font-medium text-gray-800 text-lg'>{item.question}</AccordionTrigger>
                    <AccordionContent className='text-gray-700'>
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
                </Accordion>
        </div>
        </div>
        
    </section>
  )
}

export default FaqPage