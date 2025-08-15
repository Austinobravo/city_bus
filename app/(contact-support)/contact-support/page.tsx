import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        title: "Lost Properties",
        description: "Left something behind? We’ll help you get it back.",
        color: {
            from: "#6941C6",
            to: "#7F56D9"
        },
        url: "lost-properties"

    },
    {
        title: "Incident Reporting",
        description: "Something went wrong during your journey? Let us know so we can make it right and keep everyone safe.",
        color: {
            from: "#0D6E05",
            via: "#02B50E",
            to: "#06F806"
        },
        url: "incident"

    },
    {
        title: "Refunds",
        description: "Change of plans? Here's how to request your money back.",
        color: {
            from: "#CB027B",
            to: "#E50095"
        },
        url: "refunds"

    },
    {
        title: "Feedbacks",
        description: "Your voice matters, tell us what we’re doing right or how we can improve.",
        color: {
            from: "#0680A4",
            to: "#0680A4"
        },
        url: "feedbacks"

    },

]
const ContactSupportPage = () => {
  return (
    <section className='px-7 py-14 pb-20 space-y-20'>
        <div className='grid lg:grid-cols-2 gap-10'>
            <div className='text-gray-700 space-y-4'>
                <Image src={`/contact-support.png`} width={500} height={500} alt='Contact Support' className='w-full min-h-[579px]  object-cover rounded-2xl'/>
                <h3 className='font-semibold text-2xl'>Need help</h3>
                <p className='text-lg'>If the FAQs didn’t cover it, don’t worry. You can contact our team directly and we’ll do our best to assist you quickly and clearly.</p>
            </div>
            <div className='space-y-4'>
                <h3 className='font-semibold text-2xl text-gray-700'>Get In Touch</h3>
                <p className='text-lg text-gray-700'>Have a question or need help? We’re here to support you every step of the way.</p>
                <div className='flex flex-col gap-6'>
                    {data.map((item) => (
                        <Link href={`${item.url}`} key={item.title} className='hover:scale-105 transition-all duration-500 ease-in-out'>
                        <div className='flex justify-between items-center rounded-2xl px-4 py-8 text-white' style={{"backgroundImage": `linear-gradient(to top right, ${item.color.from}, ${item.color.to})`}}>
                            <div className='space-y-3'>
                                <h3 className='font-semibold text-xl'>{item.title}</h3>
                                <h4 className='text-sm font-medium'>{item.description}</h4>
                            </div>
                            <ArrowRight />


                        </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSupportPage