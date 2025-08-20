import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const footerLinks = [
  {
    title: "Company",
    children: [
      {
        link: "",
        title: "About Us"
      },
      {
        link: "",
        title: "Careers"
      },
      {
        link: "",
        title: "News & Press"
      },
      {
        link: "",
        title: "Service Updates"
      },
      {
        link: "",
        title: "Contact"
      },
    ]
  },
  {
    title: "Tickets",
    children: [
      {
        link: "",
        title: "Day Passes"
      },
      {
        link: "",
        title: "Student Tickets"
      },
      {
        link: "",
        title: "Monthly Bundles"
      },
      {
        link: "",
        title: "TIcket Help Center"
      },
    ]
  },
  {
    title: "Rider Info",
    children: [
      {
        link: "",
        title: "How It Works"
      },
      {
        link: "",
        title: "Routes & Stops"
      },
      {
        link: "",
        title: "Accessibility"
      },
      {
        link: "",
        title: "Rider Policies"
      },
      {
        link: "",
        title: "Safety & Security"
      },
    ]
  },
  {
    title: "Travel",
    children: [
      {
        link: "",
        title: "Reserve"
      },
      {
        link: "",
        title: "Airports"
      },
      {
        link: "",
        title: "Cities"
      },
    ]
  },
]

const copyrightLinks = [
  {
    title: "Terms",
    link: ""
  },
  {
    title: "Sitemap",
    link: ""
  },
  {
    title: "Privacy",
    link: ""
  },
  {
    title: "ESIGN Consent",
    link: ""
  },
]
const Footer = () => {
  return (
    <footer className='px-7 container mx-auto mt-5'>
        <div className=''>
            <Link href="/">
            <figure className="flex gap-2 text-[#194185]">
                <Image src={`/logo.png`} alt="logo" width={200} height={200} priority className="size-6" />
                <figcaption className="font-plus-jakarta-sans font-semibold text-2xl whitespace-nowrap">City Bus Transit</figcaption>
            </figure>
            </Link>
            <h3 className='text-gray-600 font-medium text-xl mt-3'>Visit Help Center</h3>
        </div>
        <div className={`grid lg:grid-cols-4 sm:grid-cols-2 border-b border-solid  gap-y-8  py-10`}>
        {footerLinks.map((footerLink, index) =>(
            <ul key={index} className=''>
            <span className='font-bold'>{footerLink.title}</span>
            {footerLink.children.map((footerChild) => (
                <li key={footerChild.title} className='text-sm pt-5 hover:translate-x-1 transition-all duration-500 hover:font-semibold'>
                <Link href={footerChild.link}>{footerChild.title}</Link>
                </li>

            ))}
            </ul>
        ))}
        </div>
        <div className='flex items-center justify-between not-sm:flex-wrap py-4'>
         <div className={`flex sm:flex-nowrap flex-wrap gap-5 sm:gap-10 text-sm`}>
          <span>
            &copy; {new Date().getFullYear()} City Bus Transport. All rights reserved.
          </span>
          <ul className='list-disc flex gap-10'>
            {copyrightLinks.map((copyrightData) => (
              <li key={copyrightData.title} className='hover:font-semibold transition-all duration-300'>
                <Link href={copyrightData.link}>{copyrightData.title}</Link>
              </li>
            ))}
          </ul>

        </div>
        <div className='flex gap-3 '>
            <Link href={``} className='hover:bg-gray-200  rounded-full transition-all duration-500 size-9 flex justify-center items-center'>
                <FaInstagram  size={20} color='#194185'/>
            </Link>
            <Link href={``} className='hover:bg-gray-200 rounded-full  transition-all duration-500 size-9 flex justify-center items-center'>
                <FaXTwitter  size={20} color='#194185'/>
            </Link>
            <Link href={``} className='hover:bg-gray-200 rounded-full  transition-all duration-500 size-9 flex justify-center items-center'>
                <FaFacebookF size={20} color='#194185'/>
            </Link>
            <Link href={``} className='hover:bg-recruit-pro-gray-color-50 rounded-lg transition-all duration-500 size-8 flex justify-center items-center'>
                <FaLinkedinIn  size={20} color='#194185'/>
            </Link>
        </div>

        </div>
    </footer>
  )
}

export default Footer