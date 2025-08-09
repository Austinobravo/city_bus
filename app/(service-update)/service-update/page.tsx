import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
import { ChevronDown, MapPin } from 'lucide-react'
import  ServicesForm  from './_components/ServicesForm'

const ServiceUpdatePage = () => {
  return (
    <section className='px-7 py-14 space-y-10'>
        <Image src={`/service.jpg`} width={500} height={200} alt='Service Update' className='rounded-2xl w-full object-cover max-h-[577px]' />
        <div className='py-4 space-y-2'>
            <h2 className='text-3xl font-medium text-gray-700'>Service Updates</h2>
            <h3 className='text-xl'>Stay informed about any changes to your bus schedule, ticket prices, or service routes. We’ll also notify you about planned roadworks or disruptions that may affect your trip.<br/> Save your favourite stops or routes to get quick access, and get live updates directly from City Bus.</h3>
        </div>
        <div className='bg-gray-50/50 border border-gray-200 p-4'>
            <div className='flex justify-between items-center'>
                <Tabs defaultValue="all" className="w-[400px]">
                <TabsList className='bg-transparent'>
                    <TabsTrigger value="all" className='text-xl data-[state=active]:bg-blue-800 group text-gray-500 data-[state=active]:text-white rounded-t-2xl rounded-b-none py-6 px-4'>All Updates <Badge className='group-data-[state=active]:bg-blue-500 bg-blue-100 text-blue-300 group-data-[state=active]:text-white rounded-full'>2</Badge></TabsTrigger>
                    <TabsTrigger value="favorite" className='text-xl data-[state=active]:bg-blue-800 group text-gray-500 data-[state=active]:text-white rounded-t-2xl rounded-b-none py-6 px-4'>Favorites  <Badge className='group-data-[state=active]:bg-blue-500 bg-blue-100 text-blue-300 group-data-[state=active]:text-white rounded-full'>2</Badge></TabsTrigger>
                </TabsList>
                <TabsContent value="all">Make changes to your account here.</TabsContent>
                <TabsContent value="favorite">Change your password here.</TabsContent>
                </Tabs>
                <DropdownMenu>
                <DropdownMenuTrigger className='group flex items-center gap-2 text-xl text-blue-800'><MapPin className='size-6'/> All locations <ChevronDown className='group-data-[state=open]:rotate-180 size-6'/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <h2 className='text-xl font-medium'>Search Updates</h2>
            <div>
                <ServicesForm />
            </div>
        </div>
    </section>
  )
}

export default ServiceUpdatePage