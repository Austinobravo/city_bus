import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import AccountSidebar from './_components/AccountSidebar'

type Props = PropsWithChildren<{}>
const AccountLayout = ({children}:Props) => {
    const pages = [
    {
        title: "My Account",
        url: "account"
    },
    {
        title: "My Trip",
        url: "trip"
    },
    {
        title: "My Profile",
        url: "profile"
    },
    {
        title: "Help / FAQ",
        url: "faqs"
    },
]
  return (
    <section className='px-7 py-14 space-y-10 flex not-lg:flex-wrap gap-5'>
        <AccountSidebar />
        <main className='lg:w-3/4'>{children}</main>
    </section>
  )
}

export default AccountLayout