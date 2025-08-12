import React from 'react'
import { ContactUsForm } from './_components/ContactUsForm'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { MapPin, MessageSquareMore, Phone } from 'lucide-react'

const data = [
  {
    title: "Chat with us",
    description: "Speak to our friendly team via live chat.",
    children:[
      {
        icon: FaXTwitter,
        title: "Message us on X",
        href: ""

      },
      {
        icon: MessageSquareMore,
        title: "Start a live chat",
        href: ""

      },
    ]

  },
  {
    title: "Call us",
    description: "Call our team Mon-Fri from 8am to 5pm.",
    children:[
      {
        icon: Phone,
        title: "+1 (555) 000-0000",
        href: ""

      },
    ]

  },
  {
    title: "Visit us",
    description: "Chat to us in person at our Office.",
    children:[
      {
        icon: MapPin,
        title: "100 Smith Street. Collinqwood VIC 3066",
        href: ""

      },
    ]

  },

]
const ContactUsPage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
            <div className='text-center space-y-2'>
                <h2 className='text-gray-700 font-medium lg:text-4xl text-2xl'>Contact us</h2>
                <h3 className='text-gray-600 lg:text-lg text-sm'>Can't find what you're looking for in our FAQs? We're here to help.</h3>
            </div>
            <div className='flex lg:flex-row flex-col gap-x-14 gap-y-10'>
                <div className='lg:w-3/4'>
                    <ContactUsForm />
                </div>
                <div className='lg:w-1/4 space-y-3'>
                {data.map((item) => (
                  <div key={item.title} className='text-gray-500'>
                    <h3 className=' font-medium text-xl'>{item.title}</h3>
                    <h4>{item.description}</h4>
                    <div className='py-3 space-y-2'>
                    {item.children.map((child) => (
                    <Link key={child.title} href={`${child.href}`} className='text-sm flex gap-1 items-center'>
                      <child.icon className='size-3.5'/>
                      <span className='underline underline-offset-4'>{child.title}</span>

                    </Link>

                    ))}
                      
                    </div>
                  </div>

                ))}
                </div>
            </div>
    </section>
  )
}

export default ContactUsPage