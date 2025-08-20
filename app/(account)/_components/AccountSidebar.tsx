"use client"
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'


const AccountSidebar = () => {
    const pathname = usePathname()
    const pages = [
    {
        title: "My Account",
        url: "account",
        isActive: pathname.startsWith('/account')
    },
    {
        title: "My Trip",
        url: "trip"
    },
    {
        title: "My Profile",
        url: "profile",
        isActive: pathname.startsWith('/profile')
    },
    {
        title: "Help / FAQ",
        url: "faqs"
    },
]
  return (
    <aside className='bg-gray-50 lg:w-1/4 w-full rounded-2xl py-4 text-lg'>
            {pages.map((page) => (
                <Link key={page.url} href={page.url} className={cn(page?.isActive && "!text-citybus-primary font-semibold", `flex justify-between py-2 hover:bg-gray-100 cursor-pointer px-4 text-gray-500`)}>
                    {page.title}
                    <ChevronRight />
                </Link>
            ))}
            <button className={cn(`w-full flex justify-between py-2 hover:bg-gray-100 cursor-pointer px-4 text-gray-500`)}>Sign Out <ChevronRight /></button>
        </aside>
  )
}

export default AccountSidebar